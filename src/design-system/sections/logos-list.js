import { Image } from "react-datocms";

export default function LogosList({
  images
}) {
  return (
    <section className="flex flex-row flex-wrap gap-12 justify-evenly">
      {images.map((image, key) => (
        image?.responsiveImage &&
          <Image data={image.responsiveImage} key={key} />
      ))}
    </section>
  )
}
