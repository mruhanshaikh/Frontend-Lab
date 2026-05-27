const Input = (props) => {
  return (
    <div className="border border-solid border-white px-2 py-1 rounded-lg">
      <input required className="focus:outline-none w-[100%]" onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default Input
