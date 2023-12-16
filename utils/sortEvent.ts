

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

// export function sortEventsByUpcoming(events: Event[]): Event[] {
//     const currentDate: Date = new Date();

//     return events.sort((a: Event, b: Event) => {
//         const dateA: Date = new Date(a.sdate);
//         const dateB: Date = new Date(b.sdate);

//         if (dateA > currentDate && dateB <= currentDate) {
//             return -1;
//         } else if (dateA <= currentDate && dateB > currentDate) {
//             return 1;
//         } else {
//             return dateA.getTime() - dateB.getTime();
//         }
//     });
// }

// const sortedEvents: Event[] = sortEventsByUpcoming(events);
// console.log(sortedEvents);

// export function sortEventsByUpcoming(events: Event[]): Event[] {
//     const currentDate: Date = new Date();

//     return events.sort((a: Event, b: Event) => {
//         const dateA: Date = new Date(a.sdate);
//         const dateB: Date = new Date(b.sdate);

//         const isEventAJoined: boolean = dateA <= currentDate;
//         const isEventBJoined: boolean = dateB <= currentDate;

//         if (isEventAJoined && !isEventBJoined) {
//             return -1; // Event A is already joined, so it comes first
//         } else if (!isEventAJoined && isEventBJoined) {
//             return 1; // Event B is already joined, so it comes first
//         } else {
//             // Both events are either joined or not joined, sort by date
//             if (dateA < currentDate && dateB < currentDate) {
//                 return dateB.getTime() - dateA.getTime(); // Sort ended events by descending date
//             } else {
//                 return dateA.getTime() - dateB.getTime(); // Sort upcoming events by ascending date
//             }
//         }
//     });
// }


enum EventStatus {
    Joining = 'joining',
    Upcoming = 'upcoming',
    End = 'end'
}

export function sortEventsByUpcoming(events: Event[]): Event[] {
    const currentDate: Date = new Date();

    return events.sort((a: Event, b: Event) => {
        const statusOrder: Record<string, number> = {
            [EventStatus.Joining]: 1,
            [EventStatus.Upcoming]: 2,
            [EventStatus.End]: 3
        };

        const getStatusOrder = (event: Event): number => {
            const eventDate: Date = new Date(event.sdate);
            if (currentDate < eventDate) {
                return statusOrder[EventStatus.Upcoming];
            } else if (currentDate >= eventDate && currentDate <= new Date(event.edate)) {
                return statusOrder[EventStatus.Joining];
            } else {
                return statusOrder[EventStatus.End];
            }
        };

        const statusA: number = getStatusOrder(a);
        const statusB: number = getStatusOrder(b);

        if (statusA !== statusB) {
            return statusA - statusB;
        } else {
            const dateA: Date = new Date(a.sdate);
            const dateB: Date = new Date(b.sdate);
            return dateA.getTime() - dateB.getTime();
        }
    });
}
