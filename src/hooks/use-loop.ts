"use client";

import { useEffect, useState } from "react";

export function useLoop(count: number, ms: number, run = true) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!run || count < 2) return;
    const id = setInterval(() => setStep((at) => (at + 1) % count), ms);
    return () => clearInterval(id);
  }, [count, ms, run]);

  return run ? step : count - 1;
}
