export default function Button({
  type,
  children,
}) {
  if (type === 'primary') {
    return (
      <div className="rounded-md shadow w-max">
        <a href="#" className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          {children}
        </a>
      </div>
    )
  }
  return (
    <div className="w-max">
      <a href="#" className="flex items-center justify-center px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
        {children}
      </a>
    </div>
  )
}
