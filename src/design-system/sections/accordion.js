import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from '../../helpers/classNames'
import { StructuredText } from "react-datocms";

export default function Accordion({
  items
}) {
  return (
    <section className="flex flex-col gap-4 mx-auto max-w-prose">
      {items.map((item, index) => (
        <Disclosure key={index} as="div" className="w-full">
          {({ open }) => (
            <>
              <Disclosure.Button className={classNames(
                open && 'bg-indigo-50 rounded-b-none',
                "flex items-center p-4 text-left text-grey-900 ds-title-4 rounded-xl hover:bg-indigo-50 transition w-full"
              )}>
                {item.title} <ChevronDownIcon className={classNames(open && "rotate-180", "transition transform w-6 h-6 ml-1")}/>
              </Disclosure.Button>

              <Transition
              enter="transform transition-all duration-300 ease-in"
              enterFrom="transform max-h-0 opacity-0"
              enterTo="transform max-h-screen opacity-100"
              leave="transform transition-all duration-200 ease-out"
              leaveFrom="transform max-h-screen opacity-100"
              leaveTo="transform max-h-0 opacity-0"
            >
              <Disclosure.Panel className={classNames(
                open && 'bg-indigo-50',
                "px-4 pb-4 text-gray-600 rounded-b-xl flex flex-col gap-2 text-lg"
              )}>
                <StructuredText
                  data={item.description}
                />
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </section>
  )
}
