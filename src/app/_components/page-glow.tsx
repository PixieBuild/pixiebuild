"use client";

import { useEffect, useRef } from "react";

const scale = 1;

const gap = 1000 / 30;

const vertex = `
attribute vec2 aSeat;
void main() { gl_Position = vec4(aSeat, 0.0, 1.0); }
`;

/* Position needs highp: the hash multiplies coordinates into the thousands,
   and at mediump the field bands into visible steps. */
const fragment = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uSize;
uniform float uTime;
uniform vec3 uInk;
uniform vec2 uPointer;
uniform float uReach;
uniform float uLift;
uniform float uSoft;

float hash(vec2 p) {
  p = fract(p * vec2(233.34, 851.73));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uSize;

  /* Tracked back and forth rather than wrapped, so the band never jumps at the
     end of a run. */
  float axis = uv.x * 0.82 + uv.y * 0.58;
  float sweep = abs(fract(uTime * 0.018) * 2.0 - 1.0);
  float spread = mix(2.3, 1.35, uSoft);
  float band = exp(-pow((axis - (sweep * 1.7 - 0.35)) * spread, 2.0));

  float hand = exp(-length(uv - uPointer) * 1.7) * 0.55 * uReach;
  float grain = (hash(gl_FragCoord.xy + floor(uTime * 6.0) * 7.3) - 0.5) * 0.11;

  float a = clamp(
    (band * 0.85 + hand + grain) * mix(1.0, 0.55, uSoft) * uLift, 0.0, 1.0);

  /* Premultiplied: the canvas is blended against the page, not covering it. */
  gl_FragColor = vec4(uInk * a, a);
}
`;

const compile = (gl: WebGLRenderingContext, kind: number, source: string) => {
  const shader = gl.createShader(kind);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
};

export function PageGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const head = compile(gl, gl.VERTEX_SHADER, vertex);
    const body = compile(gl, gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    if (!head || !body || !program) return;

    gl.attachShader(program, head);
    gl.attachShader(program, body);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const seat = gl.getAttribLocation(program, "aSeat");
    gl.enableVertexAttribArray(seat);
    gl.vertexAttribPointer(seat, 2, gl.FLOAT, false, 0, 0);

    const at = (name: string) => gl.getUniformLocation(program, name);
    const uSize = at("uSize");
    const uTime = at("uTime");
    const uInk = at("uInk");
    const uPointer = at("uPointer");
    const uReach = at("uReach");
    const uLift = at("uLift");
    const uSoft = at("uSoft");

    const probe = document.createElement("canvas");
    probe.width = 1;
    probe.height = 1;
    const swatch = probe.getContext("2d", { willReadFrequently: true });

    const readColour = (value: string): [number, number, number] | null => {
      if (!swatch) return null;
      swatch.fillStyle = "#010203";
      swatch.fillStyle = value.trim();
      if (swatch.fillStyle === "#010203") return null;
      swatch.fillRect(0, 0, 1, 1);
      const [r, g, b] = swatch.getImageData(0, 0, 1, 1).data;
      return [r / 255, g / 255, b / 255];
    };

    const dress = () => {
      const style = getComputedStyle(document.documentElement);
      const base = readColour(style.getPropertyValue("--background"));
      const ink = readColour(style.getPropertyValue("--foreground"));
      const brand = readColour(style.getPropertyValue("--primary"));
      if (!base || !ink || !brand) return false;

      gl.uniform3f(
        uInk,
        ink[0] * 0.7 + brand[0] * 0.3,
        ink[1] * 0.7 + brand[1] * 0.3,
        ink[2] * 0.7 + brand[2] * 0.3,
      );
      gl.uniform1f(uLift, base[0] > 0.5 ? 0.19 : 0.16);
      return true;
    };

    let deep = 1;
    let across = 1;

    /* Sizing the buffer wipes it, so it is only resized when the size it would
       take actually changed, and whoever resizes it repaints in the same turn. */
    const measure = () => {
      const box = canvas.getBoundingClientRect();
      deep = Math.max(1, box.height);
      across = Math.max(1, box.width);
      const wide = Math.max(1, Math.round(across * scale));
      const high = Math.max(1, Math.round(deep * scale));
      if (wide === canvas.width && high === canvas.height) return false;
      canvas.width = wide;
      canvas.height = high;
      gl.viewport(0, 0, wide, high);
      gl.uniform2f(uSize, wide, high);
      return true;
    };

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    let run = 0;
    let last = 0;
    let clock = 0;
    let handX = 0.5;
    let handY = 0.5;
    let atX = 0.5;
    let atY = 0.5;
    let reach = 0;
    let glow = 0;
    let want = 0;
    let soft = 0;

    const paint = () => {
      gl.uniform1f(uTime, clock);
      gl.uniform2f(uPointer, atX, atY);
      gl.uniform1f(uReach, glow);
      gl.uniform1f(uSoft, soft);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const scrolled = () => {
      want = Math.min(1, window.scrollY / (window.innerHeight * 1.2));
      if (still.matches) {
        soft = want;
        paint();
      }
    };

    const draw = (now: number) => {
      if (!last) last = now;
      const since = now - last;
      if (since < gap) {
        run = requestAnimationFrame(draw);
        return;
      }
      last = now;
      clock += Math.min(since, 100) / 1000;
      atX += (handX - atX) * 0.06;
      atY += (handY - atY) * 0.06;
      glow += (reach - glow) * 0.05;
      soft += (want - soft) * 0.07;
      paint();
      run = requestAnimationFrame(draw);
    };

    const wake = () => {
      if (run || document.hidden || still.matches) return;
      last = 0;
      run = requestAnimationFrame(draw);
    };

    const aim = (x: number, y: number) => {
      const box = canvas.getBoundingClientRect();
      handX = (x - box.left) / across;
      handY = 1 - (y - box.top) / deep;
      reach = 1;
    };

    const point = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      aim(event.clientX, event.clientY);
    };
    const touch = (event: TouchEvent) => {
      const finger = event.touches[0];
      if (finger) aim(finger.clientX, finger.clientY);
    };

    const leave = () => {
      reach = 0;
    };

    const show = () => {
      cancelAnimationFrame(run);
      run = 0;
      if (document.hidden || still.matches) return;
      wake();
    };

    const watch = new ResizeObserver(() => {
      if (measure()) paint();
    });

    const theme = new MutationObserver(() => {
      dress();
      if (still.matches) paint();
    });

    if (!dress()) return;
    measure();
    scrolled();
    soft = want;
    paint();
    wake();

    theme.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    watch.observe(canvas);
    window.addEventListener("pointermove", point, { passive: true });
    window.addEventListener("touchstart", touch, { passive: true });
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("scroll", scrolled, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", show);
    still.addEventListener("change", show);

    return () => {
      cancelAnimationFrame(run);
      theme.disconnect();
      watch.disconnect();
      window.removeEventListener("pointermove", point);
      window.removeEventListener("touchstart", touch);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("scroll", scrolled);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", show);
      still.removeEventListener("change", show);
      gl.deleteBuffer(quad);
      gl.deleteProgram(program);
      gl.deleteShader(head);
      gl.deleteShader(body);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh w-full"
    />
  );
}
