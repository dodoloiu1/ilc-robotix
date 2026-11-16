import Reveal from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <span className="chip !border-accent/30 !bg-accent/10 !text-accent-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
