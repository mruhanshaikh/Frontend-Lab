import But from "./Button"
const Counter = (props) => {
  // let count=10;
  // function increment(){
  //   count++;
  //   console.log(count);
  // }
  return (
        <div className="bg-gray-700 text-gray-300 w-[300px] aspect-[1/1.2] rounded-3xl flex flex-col gap-[2rem] justify-center items-center">
        <h1 className="text-4xl">Count :{props.count}</h1>
        <div className="flex gap-[1rem]">
          <But name="Increment" x={props.setCount} y={props.count}/>
          <But name="Decrement" x={props.setCount} y={props.count}/>
        </div>
    </div>
  )
}

export default Counter