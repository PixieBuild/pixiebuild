import { ContactForm } from "@/app/_components/contact-form";
import { Section } from "@/app/_components/section";

const email = "hello@pixiebuild.com";

const expectations = [
  "A reply within one working day, from the person who would run the project.",
  "A 30-minute call — no deck, no pitch, just what you need and what it takes.",
  "A fixed price and a launch date in writing before you commit to anything.",
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Start a project"
      title="Tell us what you are building."
      description="Send the shape of it — what it is, who it is for, and when it needs to be live. If we are not the right studio for the job, we will say so and point you somewhere better."
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="reveal md:col-span-5">
          <a
            href={`mailto:${email}`}
            className="ease-interface text-title underline-offset-8 transition-opacity duration-150 hover:opacity-70 hover:underline"
          >
            {email}
          </a>

          <ol className="mt-10 flex flex-col gap-6">
            {expectations.map((expectation, index) => (
              <li key={expectation} className="flex gap-4">
                <span className="text-muted-foreground text-label tabular-nums">
                  0{index + 1}
                </span>
                <span className="text-muted-foreground max-w-prose text-pretty">
                  {expectation}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal md:col-span-7">
          <ContactForm email={email} />
        </div>
      </div>
    </Section>
  );
}
