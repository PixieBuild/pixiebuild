"use client";

import { motion, useReducedMotion } from "motion/react";

const settled = [
  "The one job it does",
  "Who it is for",
  "The date it goes live",
];

const questions = [
  {
    text: "What is the one thing this site has to do?",
    className: "top-9 left-0 w-44 rotate-[-1.5deg]",
    delay: 0.15,
  },
  {
    text: "Who is buying, and what stops them?",
    className: "top-1/2 left-5 w-44 -translate-y-1/2 rotate-[0.75deg]",
    delay: 0.3,
  },
  {
    text: "What has to be live, and when?",
    className: "bottom-8 left-0 w-44 rotate-[-1deg]",
    delay: 0.45,
  },
];

const paths = [
  "M 44 20 C 58 20, 56 44, 63 48",
  "M 48 50 C 55 50, 57 50, 63 50",
  "M 44 80 C 58 80, 56 56, 63 52",
];

export function ArtifactDiscovery() {
  const still = useReducedMotion();
  const seen = { once: true, margin: "0px 0px -20% 0px" } as const;

  return (
    <div className="relative size-full">
      <span className="text-muted-foreground absolute top-3 left-0 font-mono text-[0.625rem]">
        Kickoff call
      </span>

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        {paths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="var(--border)"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            initial={still ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={seen}
            transition={{
              delay: still ? 0 : 0.7 + index * 0.12,
              duration: 0.45,
            }}
          />
        ))}
      </svg>

      {questions.map((question) => (
        <motion.p
          key={question.text}
          initial={still ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={seen}
          transition={{ delay: still ? 0 : question.delay, duration: 0.35 }}
          className={`bg-card shadow-panel absolute rounded-lg border px-3.5 py-2.5 text-sm leading-snug ${question.className}`}
        >
          {question.text}
        </motion.p>
      ))}

      <motion.div
        initial={still ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={seen}
        transition={{ delay: still ? 0 : 1.2, duration: 0.4 }}
        className="bg-foreground text-background shadow-elev-2 absolute top-1/2 right-0 w-44 -translate-y-1/2 rotate-[-0.5deg] rounded-lg px-3.5 py-3"
      >
        <span className="font-mono text-[0.625rem] opacity-60">Agreed</span>

        <ul className="mt-2 flex flex-col gap-1">
          {settled.map((point, index) => (
            <motion.li
              key={point}
              initial={still ? false : { opacity: 0, x: -4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={seen}
              transition={{
                delay: still ? 0 : 1.45 + index * 0.18,
                duration: 0.3,
              }}
              className="text-sm leading-snug font-medium"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
