import { Fragment } from "react"
import Button from "./design-system/components/button"
import Accordion from "./design-system/sections/accordion"
import Hero from "./design-system/sections/hero"
import LogosList from "./design-system/sections/logos-list"
import SectionTitle from "./design-system/sections/section-title"
import Spacer from "./design-system/sections/spacer"
import TextImage from "./design-system/sections/text-image"

const generateButtons = (buttons) => {
  return buttons.map((button) => (
    <Button key={button.id} type={button.buttonType}>
      {button.text}
    </Button>
  ))
}

export default function SectionZone({
  page
}) {
  return (
    <Fragment>
      {page?.hero && (
        <Hero
          title={page.hero[0].title}
          subtitle={page.hero[0].subtitle}
          buttons={generateButtons(page.hero[0].buttons)}
          illustration={page.hero[0].illustration}
        />
      )}
      {page?.sections?.map((section, key) => (
        <Fragment key={key}>
          {section.__typename === "AccordionRecord" && (
            <Accordion
              items={section.items}
            />
          )}
          {section.__typename === "LogosListRecord" && (
            <LogosList
              images={section.images}
            />
          )}
          {section.__typename === "SectionTitleRecord" && (
            <SectionTitle
              title={section.title}
            />
          )}
          {section.__typename === "SpacerRecord" && (
            <Spacer
              size={section.size}
            />
          )}
          {section.__typename === "TextImageRecord" && (
            <TextImage
              title={section.title}
              description={section.description}
              buttons={generateButtons(section.buttons)}
              hasImageLeft={section.hasImageLeft}
              illustration={section.illustration}
            />
          )}
        </Fragment>
      ))}
    </Fragment>
  )
}
