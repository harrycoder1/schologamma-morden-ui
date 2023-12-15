

import { event_data_type } from "@/types";

interface Event {
    quizeQuestion: any[];
    _id: string;
    name: string;
    type: string;
    organizer: string;
    sdate: string;
    edate: string;
    venue: string;
    poster: string;
    description: string;
    joinLink: string;
    __v: number;
    other: any[];
}

const events: Event[] = [
    // ... (Your array of events goes here)
];

export function sortEventsByUpcoming(events: Event[]): Event[] {
    const currentDate: Date = new Date();

    return events.sort((a: Event, b: Event) => {
        const dateA: Date = new Date(a.sdate);
        const dateB: Date = new Date(b.sdate);

        if (dateA > currentDate && dateB <= currentDate) {
            return -1;
        } else if (dateA <= currentDate && dateB > currentDate) {
            return 1;
        } else {
            return dateA.getTime() - dateB.getTime();
        }
    });
}

// const sortedEvents: Event[] = sortEventsByUpcoming(events);
// console.log(sortedEvents);
