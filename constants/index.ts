import { navigate_item_type ,about_card_type ,work_card_type} from "@/types";

export const nav_item : navigate_item_type[] = [
    {name:"Home" , path:"/"},
    {name:"Events" , path:"/events"},
    {name:"Committee" , path:"/committee"},
    {name:"Teams" , path:"/teams"},
    {name:"About Us" , path:"/about"},
]

export const about_card :about_card_type[] = [
    {title:"Unleashing Potential" , message:"Empowering minds, catalyzing transformation in Computer Science for unparalleled success and growth."},
    {title:"Unleash Creativity" , message:"Empowering students' creativity through workshops, brainstorming, fostering innovation in collaborative projects."},
    {title:"Join the Revolution" , message:"Join our revolution, sculpting a limitless tomorrow where innovation thrives beyond boundaries and norms."},
]

export const work_card:work_card_type[] =[
    {title:"Hackathons: Igniting Innovation" ,message:"Intensive coding marathons ignite innovation, solving real-world challenges collaboratively, showcasing creativity."},
    {title:"Seminars: Insights from Industry Pioneers" ,message:"Engaging seminars led by experts explore tech trends, advancements, and thought-provoking discussions for horizons."},
    {title:"Networking Sessions" ,message:"Connect students, faculty, industry experts—fostering innovation, collaborations in our networking sessions."},
    {title:"Empowering Student Growth:" ,message:"Event participation shapes skills, fosters expertise, and propels students toward leadership in the tech realm."}
    
]