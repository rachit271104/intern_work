export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
