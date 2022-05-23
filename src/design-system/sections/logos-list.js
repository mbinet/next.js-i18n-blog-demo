import { Image } from "react-datocms";

export default function LogosList({
  images
}) {
  return (
    <section className="flex flex-row flex-wrap justify-around gap-12">
      {images.map((image, key) => (
        <Image data={image.responsiveImage} key={key} />
      ))}
    </section>
  )
}
