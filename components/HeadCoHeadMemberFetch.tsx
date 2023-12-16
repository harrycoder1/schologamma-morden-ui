import { team_data_type } from "@/types"
import { ProfileCard } from "."

 const HeadCoHeadMemberFetch =({sortedTeams}:{sortedTeams:{ [key: string]: team_data_type[] }})=>{
    return <>
    <div className="team_item_position_vise_cont ">
      
      <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">Heads:</div>
    
      {/* User Profile Card here : */}
      <div className="flex flex-wrap justify-center items-center">
      {sortedTeams["Head"]?.map(item  =>(
    <ProfileCard item ={item}/> 
    
    ))}
      </div>
    </div>
    
    {/* for co-head */}
    <div className="team_item_position_vise_cont ">
      
      <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">Co-Heads:</div>
    
      {/* User Profile Card here : */}
      <div className="flex flex-wrap justify-center items-center">
      {sortedTeams["Co-Head"]?.map(item  =>(
    <ProfileCard item ={item}/> 
    
    ))}
      </div>
    </div>
    
    {/* for member */}
    <div className="team_item_position_vise_cont ">
      
      <div className="team_title_pos  font-bold lg:text-[40px] text-[28px]  text-white shadow-md text-center">Members:</div>
    
      {/* User Profile Card here : */}
      <div className="flex flex-wrap justify-center items-center">
      {sortedTeams["Member"]?.map(item  =>(
    <ProfileCard item ={item}/> 
    
    ))}
      </div>
    </div>
    </>
    }
    export default HeadCoHeadMemberFetch