export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-ink/75">{subtitle}</p> : null}
    </div>
  );
}
