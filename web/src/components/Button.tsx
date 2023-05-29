interface ButtonProps {
  title : string
}
export function Button(props : ButtonProps) {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  )
}