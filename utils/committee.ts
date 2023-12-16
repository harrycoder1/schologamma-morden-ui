"use client"
// import DataState from "@/context/data/DataDState"
import DataContext from "@/context/data/DataContext"
import { committee_data_type } from "@/types"
import { useContext } from "react"
// DataState

export const committeeByID = (id:string) =>{
    const dd = useContext(DataContext)
    const committeeList:committee_data_type[]  = dd.committeeP
   return committeeList?.find(item =>(item._id=== id && item)) 
   

}