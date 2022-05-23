export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <section className="flex flex-col mx-auto text-center text-gray-900 max-w-prose">
      {title && (
        <h2 className="mb-6 ds-title-3">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-700 ds-subtitle">
          {subtitle}
        </p>
      )}
    </section>
  )
}
