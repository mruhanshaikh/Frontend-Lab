import { useState } from "react";
import But from "./Button";
import Input from "./Input";
import Names from "./Names";
const Form = () => {
    const [form, setform] = useState("");
    const [names, setnames] = useState([]);
    function formsubmit(e) {
        e.preventDefault();
        setform("");
        let cleaned = form.trim();
        if(cleaned === "")return;
        setnames([...names, cleaned]);
    }
    return (
        <form
            className="flex border border-solid border-white p-[1rem] flex-col gap-[1rem]"
            onSubmit={(e) => formsubmit(e)}
        >
            <div className="flex gap-[1rem] ">
                <div className="w-[80%]">
                    <Input
                        type="text"
                        placeholder="Enter Your Name"
                        value={form}
                        onChange={(e) => {
                        setform(e.target.value);
                        }}
                    />
                </div>
                <But type="submit" name="submit" />
            </div>
            <div className="border-2 border-solid border-white min-h-[100px] p-[1rem]">
                <Names name={names}/>
            </div>
        </form>
    );
};
export default Form;
