const Names = (props) => {
  return (
    <div className="flex flex-col ">
      <ol>
        {props.name.map((n, index) => (
          <li key={index} className=" capitalize text-2xl ml-[1rem] list-decimal font-bold">
            {n}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Names
