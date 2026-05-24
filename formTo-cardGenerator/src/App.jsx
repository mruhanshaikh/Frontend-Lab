import Input from "./Components/Input"
import Label from "./Components/Label"
import TextArea from "./Components/TextArea"
import Button from "./Components/Button"
import {RiAddLargeFill} from "@remixicon/react"
import Card from "./Components/Card"
import { useState } from "react"
const App = () => {
  const items=JSON.parse(localStorage.getItem('item'))||[];
  const [cards, setcard] = useState(items);//[];
  const initialForm = {
  profileUrl: "",
  profileName: "",
  profileStat: "",
  profileBio: "",
  profileViews:"",
  profileLikes:""
}
 const [form, setform] = useState(initialForm)
    function formSubmit(e){
    e.preventDefault();
    setform(initialForm);
    const formValidate = Object.fromEntries(
    Object.entries(form).map(([key,value])=>[key,value.trim()]))
    if(Object.values(formValidate).some(v=>v==="")){
      alert("Please Provide Correct Values !!")
      return  
    } 
    const items=[...cards,formValidate];  
    setcard(items);
    localStorage.setItem('item',JSON.stringify(items));
    }
    function handlChange(e){
    const {name,value} =e.target
    // setform({
    //   ...form,
    //   [name]:value,
    // })
    setform(prev=>({
      ...prev,
      [name]:value,
    }))
    }
    function deleteCard(index){
  const updated = cards.filter((_, i) => i !== index);
  setcard(updated);
  localStorage.setItem('item', JSON.stringify(updated));
}
  return (
    <div className="flex flex-col  gap-[1rem] p-[1rem]">
      <form onSubmit={formSubmit} className="flex  w-full justify-stretch">
        <fieldset className=" border p-[1rem] border-white flex flex-col gap-[1rem] w-full">
        <legend className="font-bold">Fill Out Your Card Form</legend>
        <Input name="profileUrl"onChange={handlChange} value={form.profileUrl} type="url" placeholder="Enter Profile Image URL"/>
        <Input name="profileName" onChange={handlChange} value={form.profileName} type="text" placeholder="Enter Your Name"/>
        <div className="flex gap-[0.5rem] px-[1rem] py-[0.5rem]">
        <div className="flex gap-[0.5rem]"><Input onChange={handlChange} checked={form.profileStat==="Verified"} type="radio" name="profileStat" value="Verified" id="radio1"/><Label htmlFor="radio1">verified</Label></div>
        <div className="flex gap-[0.5rem]"><Input onChange={handlChange} checked={form.profileStat==="notVerified"} type="radio" name="profileStat" value="notVerified" id="radio2"/><Label htmlFor="radio2">Not-Verified</Label></div>
        </div>
         <TextArea name="profileBio" value={form.profileBio} onChange={handlChange} placeholder="Enter Your Bio"/>
         <Input  name="profileViews"onChange={handlChange} value={form.profileViews} type="number"  placeholder="Enter profile Views"/>
         <Input name="profileLikes" onChange={handlChange} value={form.profileLikes} type="number"  placeholder="Enter profile Likes"/> 
         <Button text="Submit"/>
         </fieldset>
      </form>
      <div className="flex flex-wrap justify-center gap-[1rem]">
        {cards.map((e,i)=>{
        return <Card key={i} id={i} data={e} onDelete={() => deleteCard(i)}/>
        })}
      </div>
    </div>
  )
}

export default App
