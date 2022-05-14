import { renderMarkRule, StructuredText, Image } from "react-datocms";

export default function Hero({
  title,
  subtitle,
  buttons,
  illustration,
}) {
  return (
    <section className="flex flex-col gap-8 md:gap-10 md:flex-row">
      <div className="text-gray-900 md:w-1/2 xl:w-8/12">
        <h1 className="mb-6 ds-title-1">
          <StructuredText
            data={title}
            customMarkRules={[
              // convert "mark" marks into <span> tags
              renderMarkRule('highlight', ({ mark, children, key }) => {
                return <span key={key} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">{children}</span>;
              }),
            ]}
          />
        </h1>
        <p className="mb-6 text-gray-700">
          {subtitle}
        </p>
        {buttons && (
          <div className="flex">
            {buttons}
          </div>
        )}
      </div>
      <div className="flex items-center md:w-1/2 xl:w-5/12">
        <Image data={illustration.responsiveImage} />
      </div>
    </section>
  )
}
