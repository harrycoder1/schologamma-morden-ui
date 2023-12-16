import { event_data_type } from "@/types";

export function getTimeAgoFormatted(dateTime: Date): string {
  const currentDate = new Date();
  const timeDifferenceMillis = Math.abs(currentDate.getTime() - dateTime.getTime());

  const oneMinute = 60 * 1000; // Milliseconds in a minute
  const oneHour = oneMinute * 60; // Milliseconds in an hour
  const oneDay = oneHour * 24; // Milliseconds in a day
  const oneWeek = oneDay * 7; // Milliseconds in a week
  const oneMonth = oneDay * 30; // Roughly milliseconds in a month
  const oneYear = oneDay * 365; // Roughly milliseconds in a year

  const seconds = Math.floor(timeDifferenceMillis / 1000);
  const minutes = Math.floor(timeDifferenceMillis / oneMinute);
  const hours = Math.floor(timeDifferenceMillis / oneHour);
  const days = Math.floor(timeDifferenceMillis / oneDay);
  const weeks = Math.floor(timeDifferenceMillis / oneWeek);
  const months = Math.floor(timeDifferenceMillis / oneMonth);
  const years = Math.floor(timeDifferenceMillis / oneYear);

  if (seconds < 60) {
    return seconds + " sec ago";
  } else if (minutes < 60) {
    return minutes + " min ago";
  } else if (hours < 24) {
    return hours + " hour ago";
  } else if (days < 7) {
    return days + " day ago";
  } else if (weeks < 4) {
    return weeks + " week ago";
  } else if (months < 12) {
    return months + " month ago";
  } else {
    return years + " year ago";
  }
}


export function getEventStatus(startDate: Date, endDate: Date): string {
  const currentDate = new Date();

  if (currentDate < startDate) {
    return "Upcoming"; // Event is yet to start
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return "Joining"; // Event is ongoing
  } else {
    return "End"; // Event has ended
  }
}

// Example usage:
// const startDate = new Date("2023-12-01");
// const endDate = new Date("2023-12-15");
// const status = getEventStatus(startDate, endDate);
// console.log(`Event status: ${status}`); // Output: Event status: Upcoming / Joining / End

// // Example usage:
// const dateTime = new Date("2023-12-13T12:00:00"); // Replace with your date-time
// const timeAgoFormatted = getTimeAgoFormatted(dateTime);
// console.log(timeAgoFormatted); // Output: Formatted time ago string


// FOR EVENTS SORT BY COMMOITIES 
export const eventSortByCommittee =(committeeID:string ,eventData:event_data_type[] )=>{

 return eventData.filter(item => item.organizer ===committeeID  && item) 

}