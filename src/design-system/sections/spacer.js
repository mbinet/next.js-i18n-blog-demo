export default function Spacer({
  size
}) {
  let className = "h-16"; // 4rem, 64px
  if (size === "32") {
    className = "h-8" // 2rem, 32px
  }
  if (size === "128") {
    className = "h-32" // 8rem, 128px
  }
  return (
    <div className={className}/>
  )
}
