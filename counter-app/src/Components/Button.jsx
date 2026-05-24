const Button = (props) => {
  return (
    <div>
        <button onClick={()=>props.name === "Increment" ?props.x(props.y+1):props.y>0 && props.x(props.y-1)} className="text-2xl border-2 border-solid border-gray-100 px-2 py-1 rounded-lg transition duration-300 ease-in active:scale-125 hover:bg-gray-50 hover:text-gray-600">{props.name}</button>
    </div>
  )
}

export default Button