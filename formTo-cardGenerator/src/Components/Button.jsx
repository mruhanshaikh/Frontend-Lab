const Button = ({text}) => {
  return (
   <button className=" flex justify-center items-center text-bold text-2xl uppercase px-[1rem] py-[0.5rem] bg-white text-black rounded-lg transition duration-300 ease-in active:scale-95 flex justify-between">{text}<span></span></button>
  )
}
export default Button
