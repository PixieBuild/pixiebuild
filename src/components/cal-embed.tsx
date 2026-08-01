"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type CalEmbedProps = {
  calLink: string;
  namespace: string;
};

/**
 * Cal applies these inside its own document, where our tokens do not resolve,
 * so it takes values. They mirror --primary and --background from globals.css
 * and have to be changed alongside them.
 */
const skin = {
  light: {
    "cal-brand": "#0077b6",
    "cal-bg": "#ffffff",
    "cal-bg-muted": "#ffffff",
    "cal-bg-subtle": "#ffffff",
  },
  dark: {
    "cal-brand": "#0077b6",
    "cal-bg": "#090b0c",
    "cal-bg-muted": "#090b0c",
    "cal-bg-subtle": "#090b0c",
  },
};

export function CalEmbed({ calLink, namespace }: CalEmbedProps) {
  const [ready, setReady] = useState(false);
  const [dressed, setDressed] = useState(false);
  const { resolvedTheme } = useTheme();

  /* Nothing renders until this has run: Cal reads its colours once, as the
     embed comes up, so a config applied afterwards is ignored. */
  useEffect(() => {
    if (!resolvedTheme) return;
    let live = true;

    (async () => {
      const cal = await getCalApi({ namespace });

      cal("ui", {
        cssVarsPerTheme: skin,
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: resolvedTheme === "dark" ? "dark" : "light",
      });

      cal("on", { action: "linkReady", callback: () => setReady(true) });
      cal("on", { action: "linkFailed", callback: () => setReady(true) });

      if (live) setDressed(true);
    })();

    return () => {
      live = false;
    };
  }, [namespace, resolvedTheme]);

  return (
    <div className="cal-fill relative size-full overflow-hidden">
      {ready ? null : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="border-border border-t-primary motion-safe:animate-spin size-6 rounded-full border-2" />
        </div>
      )}

      {dressed ? (
        <Cal
          namespace={namespace}
          calLink={calLink}
          className={`ease-interface transition-opacity duration-300 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          config={{
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          }}
        />
      ) : null}
    </div>
  );
}
