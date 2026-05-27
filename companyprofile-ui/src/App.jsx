import Card from "./Components/Card"
import { RiAmazonFill } from "@remixicon/react";
import { RiGoogleFill } from "@remixicon/react";
import { RiDribbbleFill } from "@remixicon/react";
import { RiFigmaFill } from "@remixicon/react";
import { RiAppleFill } from "@remixicon/react";
import { RiMicrosoftFill } from "@remixicon/react";
const App = () => {
  const jobs = [
  {
    logo:<RiAmazonFill size={36} />,
    company: "Amazon",
    postedDaysAgo: 5,
    isBookmarked: false,
    position: "AWS Practitioner",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    logo:<RiGoogleFill size={36} />,
    company: "Google",
    postedDaysAgo: 30,
    isBookmarked: true,
    position: "Software Engineer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150–220k",
    location: "Kochi, India"
  },
  {
    logo:<RiDribbbleFill size={36} />,
    company: "Dribbble",
    postedDaysAgo: 18,
    isBookmarked: false,
    position: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India"
  },
  {
    logo:<RiFigmaFill size={36}/>,
    company: "Figma",
    postedDaysAgo: 15,
    isBookmarked: true,
    position: "Full Stack Developer",
    tags: ["Full-Time", "In office"],
    salary: "$200–250k",
    location: "Bangalore, India"
  },
  {
    logo:<RiMicrosoftFill size={36}/>,
    company: "Microsoft",
    postedDaysAgo: 3,
    isBookmarked: false,
    position: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India"
  },
  {
    logo:<RiAppleFill size={36}/>,
    company: "Apple",
    postedDaysAgo: 25,
    isBookmarked: true,
    position: "Product Manager",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85–120k",
    location: "Kerala, India"
  }
];
  return (
    <div className="flex flex-wrap justify-center gap-[1rem] p-[1rem]">
      {jobs.map(e=>{
        return <Card logo={e.logo} bookmark={e.isBookmarked} company={e.company} position={e.position} salary={e.salary} location={e.location} postedDaysAgo={e.postedDaysAgo} tag0={e.tags[0]} tag1={e.tags[1]}/>
      })}
    </div>
  )
}
export default App