import { StructuredText, Image } from "react-datocms";
import classNames from "../../helpers/classNames";

export default function Hero({
  title,
  description,
  buttons,
  illustration,
  hasImageLeft,
}) {
  return (
    <section className={classNames(
      hasImageLeft && 'md:flex-row-reverse',
      'flex flex-col gap-8 md:gap-16 md:flex-row'
    )}>
      <div className="flex flex-col justify-center text-grey-900 md:w-1/2">
        {title && (
          <h1 className="mb-6 ds-title-2">
            {title}
          </h1>
        )}
        {description && (
          <StructuredText
            data={description}
            renderBlock={({ record }) => {
              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
            }}
          />
        )}
        {buttons && (
          <div className="flex mt-6">
            {buttons}
          </div>
        )}
      </div>
      <div className="flex items-center md:w-1/2">
        {illustration?.responsiveImage &&
          <Image data={illustration?.responsiveImage} />
        }
      </div>
    </section>
  )
}
