import { timer_reamaning_type } from "@/types";

export function getTimeRemainingToStart(startDateTime: Date):timer_reamaning_type[] {
    const currentDate: Date = new Date();
    const timeDifferenceMillis: number = startDateTime.getTime() - currentDate.getTime();

    // if (timeDifferenceMillis <= 0) {
    //     return 'Event has already started';
    // }

    const seconds: number = Math.floor(timeDifferenceMillis / 1000) % 60;
    const minutes: number = Math.floor(timeDifferenceMillis / (1000 * 60)) % 60;
    const hours: number = Math.floor(timeDifferenceMillis / (1000 * 60 * 60)) % 24;
    const days: number = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24)) ;
    // const weeks: number = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24 * 7));
    return [
        // {name:"weeks" ,value:weeks},
       {name:"days" , value:days},
       {name:"hours" , value:hours},
       {name:"minutes" , value:minutes},
       {name:"seconds" , value:seconds},
    ]
}


export function formatDateTime(inputDate: string): string {
    const date = new Date(inputDate);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
  
    const formattedDate: string = date.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
  
  