type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span className="text-xs uppercase tracking-[0.35em] text-white/50">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl uppercase tracking-[0.08em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-white/60">{description}</p>
      ) : null}
    </div>
  );
}
