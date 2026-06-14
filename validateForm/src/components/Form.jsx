import React from 'react'
import { useFieldArray, useForm } from "react-hook-form";
import { schema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';

const Form = ({ getData }) => {
    const { register, handleSubmit, control, watch, formState: { errors }, reset } = useForm({
        resolver:zodResolver(schema),
        defaultValues: {
            name: "john",
            email: "john@gmail.com",
            password: "abcD23@y",
            confirmPassword:"abcD23@y",
            age: "20",
            date: "2001-01-01",
            hobby: "dancing",
            skills:[{skill:""}],
            gender:"male",
            terms:true,
            desc: "This is Sample Data ,Fill Form and Submit for Real data"
        }
    });
    const {fields,append,remove}=useFieldArray({
        control,
        name:"skills"
    })
function onSubmit(data) {
    getData(data)
    reset();
}
const password=watch("password");
return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="Enter Your Name" {...register("name")} />
        {errors.name && <p className='error'>{errors.name?.message}</p>}
        <input type="email" placeholder="Enter Your Email" {...register("email")} />
        {errors.email && <p className='error'>{errors.email?.message}</p>}
        <input type="password" placeholder="Enter Password" {...register("password")} />
        {errors.password && <p className='error'>{errors.password?.message}</p>}
        {password?.length>=8 &&(
         <>
         <input type="password" placeholder="confirm Password" {...register("confirmPassword")} />
         {errors.confirmPassword && <p className='error'>{errors.confirmPassword?.message}</p>}
         </>
        )
        }
        <input type="number" placeholder="Enter Age" {...register("age")} />
        {errors.age && <p className='error'>{errors.age?.message}</p>}
        <input type="date" {...register("date")} />
        {errors.date && <p className='error'>{errors.date?.message}</p>}
        <select {...register("hobby")}>
            <option value="">Select Hobby</option>
            <option value="music">Music</option>
            <option value="dancing">Dancing</option>
            <option value="playing">Playing</option>
        </select>
        {errors.hobby && <p className='error'>{errors.hobby?.message}</p>}
        <div className='skillinput'>
        {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`skills.${index}.skill`)}
            placeholder="Enter Skill"
          />
          {errors.skills?.[index]?.skill && (
            <p className='error'>{errors.skills[index].skill.message}</p>
          )}
          <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
      </div>
         <button type="button" onClick={() => append({ skill: "" })}>+ Add skills</button>
        <label>
            <input type="radio" name="gender" value="male" {...register("gender")} />
            Male
        </label>

        <label>
            <input type="radio" name="gender" value="female" {...register("gender")} />
            Female
        </label>
        {errors.gender && <p className='error'>{errors.gender?.message}</p>}

        <label>
            <input type="checkbox" {...register("terms")} />
            Accept Terms & Conditions
        </label>
        {errors.terms && <p className='error'>{errors.terms?.message}</p>}
        <textarea placeholder="About Yourself" {...register("desc")}></textarea>
        {errors.desc && <p className='error'>{errors.desc?.message}</p>}
        <button type="submit">Submit</button>
    </form>
)
}

export default Form
