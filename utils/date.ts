export const getCurrentYear = (): number => {
  const currentDate = new Date();
  const currentYear: number = currentDate.getFullYear();
  return currentYear;
};

export const stringToNumDate = (stringDate: string): number => {
  const datetime = new Date(stringDate);
  const numericalValue: number = datetime.getTime();
  return numericalValue;
};

export const numToStringDate = (numdate: number): string => {
  const datetime = new Date(numdate);
  const datetimeString: string = datetime.toISOString();
  return datetimeString;
};

function pad(number: number): string {
  return number < 10 ? "0" + number : number.toString();
}

export const getDayFromDateTime = (numericalValue: number): {
  dayOfWeek: string;
  year: number;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  ampm: string;
  monthName: string;
} => {
  const datetime = new Date(numericalValue);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day: number = datetime.getDate();
  const monthName: string = months[datetime.getMonth()];
  const month: number = datetime.getMonth() + 1;
  const year: number = datetime.getFullYear();
  let hours: number = datetime.getHours();
  const minutes: number = datetime.getMinutes();
  const dayOfWeek: string = dayNames[datetime.getDay()];
  const ampm: string = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const datetimeString: string =
    dayOfWeek +
    ", " +
    year +
    "-" +
    pad(month) +
    "-" +
    pad(day) +
    " " +
    pad(hours) +
    ":" +
    pad(minutes);

  const dateObj = {
    dayOfWeek,
    year,
    month: pad(month),
    day: pad(day),
    hours: pad(hours),
    minutes: pad(minutes),
    ampm,
    monthName,
  };
  return dateObj;
};

export const dataDifference = (): void => {
  // You can add the implementation for this function in TypeScript
};

export function calculateTimeDifference(
  datetimeString1: string,
  datetimeString2: string
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const date1 = new Date(datetimeString1);
  const date2 = new Date(datetimeString2);

  const timeDifferenceMillis = Math.abs(date1.getTime() - date2.getTime());

  const days = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifferenceMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifferenceMillis % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
