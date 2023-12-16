export type navigate_item_type  ={
name : string ,
path :string
}

export type about_card_type = {
    title:string ;
    message:string ;
}
export type work_card_type = {
    title:string ;
    message:string ;
}

// for backend api fetch

export type slider_type = {
    _id:string ,
imageLink:string,
url:string ,
name:string ,
description:string

}

export interface event_data_type {
    
_id :string ;
name:string ,
type:string,

organizer:string

sdate:string ,
// "2023-09-30T18:27"
edate:string ,

venue ?:string ,
medium ?:string ,
updatedAt ?:string ,
createdAt ?:string ,

poster :string ,
description :string ,
registrationFormLink ?: string,
eventsocialLinks?:string ,
joinLink:string ,
    quizeQuestion ?: {
        queMsg: string;
        answers: {
          value: string;
          correct: boolean;
        }[];
      }[];
    other?:{
        label: string;
        value: string;
        _id:string ;
      }[],
__v?:number|undefined,
} ;


export type committee_data_type = {
    
_id:string ,
name:string ,
email:string ,
description:string ,
password?:string ,
username?:string ,
photo:string ,
}

export type team_data_type = {
    
name: string ,
DOB: string ,
BT_ID: string ,
position: string ,
type: string ,
linkedinUrl: string ,
facebookUrl: string ,
instragramUrl: string ,
photoUrl: string ,
currentYear: string ,
description: string ,
skill: string ,
cgpa: string ,
hobby: string ,
_id: string ,
} 

export type data_teams_object_type ={
    id:string ,
    year:number ,
    data:team_data_type[]
}

export type timer_reamaning_type = {
    name:string ,
    value:number
}

export interface TimeDifference {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    weeks: number;
    months: number;
    years: number;
  }