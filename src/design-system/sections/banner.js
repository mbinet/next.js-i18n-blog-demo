import { Image } from "react-datocms";

export default function Banner({
  title,
  buttons,
  illustration,
}) {
  return (
    <>
    <section className="flex flex-col gap-4 p-10 mb-32 bg-indigo-100 md:flex-row rounded-3xl min-h-80">
      <div className="flex flex-col justify-center md:w-1/2 ds-title-2">
        <div className="mb-4">{title}</div>
        {buttons &&
          buttons
        }
      </div>
      <div className="relative flex items-center justify-center md:w-1/2">
        {illustration &&
          <Image data={illustration?.responsiveImage} className="absolute" style={{position: 'absolute'}}/>
        }
      </div>
    </section>
    </>
  )
}
