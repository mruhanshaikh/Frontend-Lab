import {RiUserFill} from "@remixicon/react"
import {RiHeartFill} from "@remixicon/react"
const Card = ({data,id,onDelete}) => {
  return (
      <div className="w-[320px] aspect-[1/1.2] bg-white rounded-lg flex justify-center items-center">
            <div className="w-[310px] relative aspect-[1/1.2] bg-center bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${data.profileUrl})` }}>   
                <div className="px-2 rounded-b-4xl w-full flex flex-col gap-1 absolute bottom-0 bg-linear-to-b from-gray-50 to-tramsparent backdrop-blur-[2px] h-[120px]">
                    <div className="flex items-center gap-0.5 t"><h1 className="capitalize text-red-950 font-bold text-2xl">{data.profileName}</h1><span>{data.profileStat==="Verified"?"✅":"❎"}</span></div>
                    <div className="h-[50px] overflow-scroll [&::-webkit-scrollbar]:hidden">
                        <h2 className=" text-red-900 text-md  ">{data.profileBio}</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-[1rem]">
                            <div className="flex items-center gap-0.5 "><span className="hover:text-red-800 trasition duration-300 ease-in">< RiUserFill size={20} /></span><span>{data.profileViews}</span></div>
                            <div className="flex items-center gap-0.5"><span className="hover:text-red-800" trasition duration-300 ease-in>< RiHeartFill size={20} /></span><span>{data.profileLikes}</span></div>
                        </div>
                        <div><button onClick={onDelete} id={id}className="px-2 py-1 active:scale-75 transition duration-300 ease-in rounded-lg bg-red-600">Delete</button></div>
                    </div>
                </div>          
            </div>
      </div>
  )
}

export default Card
