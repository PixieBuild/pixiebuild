"use client";

import { useEffect, useState } from "react";

export function useLoop(count: number, ms: number, run = true, lead = ms) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!run || count < 2) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      setStep((at) => (at + 1) % count);
      timer = setTimeout(tick, ms);
    };

    timer = setTimeout(tick, lead);
    return () => clearTimeout(timer);
  }, [count, lead, ms, run]);

  return step;
}
