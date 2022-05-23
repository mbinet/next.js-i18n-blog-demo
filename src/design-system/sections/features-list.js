import Icon from '../components/icon'

// TODO: documenter que c'est du h3

export default function FeaturesList({
  items
}) {
  return (
    <section className="grid justify-center gap-12 md:grid-cols-3">
      {items && items.map((item, key) => (
        <div key={key} className="flex flex-col items-center max-w-sm text-center">
          <div className="p-2 mb-2 bg-indigo-500 rounded-xl w-min">
            <Icon name={item.icon} className="w-6 h-6 text-white"/>
          </div>
          <h3 className="mb-1 text-gray-900 ds-title-4">{item.title}</h3>
          <div className="text-gray-400">{item.description}</div>
        </div>
      ))}
    </section>
  )
}
