export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <section className="flex flex-col text-center text-gray-900">
      {title && (
        <h2 className="mb-6 ds-title-3">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mb-6">
          {subtitle}
        </p>
      )}
    </section>
  )
}
