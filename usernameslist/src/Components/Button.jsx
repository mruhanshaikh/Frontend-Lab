const Button = (props) => {
  return (
    <button type={props.type} className=" w-[20%] capitalize px-2 py-1 transition duration-300 ease-in bg-sky-500 active:scale-90 rounded-lg">
        {props.name}
    </button>
  )
}

export default Button
