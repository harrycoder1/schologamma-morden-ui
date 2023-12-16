import { event_data_type } from "@/types";

export function sortEventsByUpcomingDate(events: event_data_type[]): event_data_type[] {
    const currentDate = new Date();
    return events.filter(event => {
        const eventStartDate = new Date(event.sdate);
        return eventStartDate > currentDate;
    });
}

export function searchEvents(events: event_data_type[], searchTerm: string): event_data_type[] {
    const searchRegex = new RegExp(searchTerm, 'i');
    return events.filter(event =>
        searchRegex.test(event.name) ||
        searchRegex.test(event.organizer) ||
        searchRegex.test(event.description)
    );
}



// interface Event {
//     _id: string;
//     // other properties...
//     sdate: string; // assuming 'sdate' is the start date of the event
// }

export function getTodayEvents(events: event_data_type[]): event_data_type[] {
    const currentDate: Date = new Date();
    const todayEvents = events.filter(event => {
        const startDate: Date = new Date(event.sdate);
        const endDate: Date = new Date(event.edate);
        return currentDate >= startDate && currentDate <= endDate;
    });
    return todayEvents;
}

// Example usage:
// const events: Event[] = [
//     // ... (Your array of events goes here)
// ];

// const todayEvents = getTodayEvents(events);
// console.log(todayEvents); // Output: Array of events scheduled for today



export function getEventsByType(events: event_data_type[], eventType: string): event_data_type[] {
   if( eventType ==="" ){return events}
    return events.filter(event => event.type.toLowerCase() === eventType.toLowerCase());
}

// Example usage:
// const events: Event[] = [
//     // ... (Your array of events goes here)
// ];

// const desiredEventType = "your_desired_event_type"; // Replace with the event type you want to filter
// const filteredEvents = getEventsByType(events, desiredEventType);
// console.log(filteredEvents); // Output: Array of events matching the desired event type

// interface Event {
//     _id: string;
//     // Other properties...
//     organizer: string;
// }

export function getEventsByOrganizer(events: event_data_type[], organizerId: string): event_data_type[] {
    return events.filter(event => event.organizer === organizerId);
}

// Example usage:
// const events: Event[] = [
//     // ... (Your array of events goes here)
// ];

// const desiredOrganizerId = "your_desired_organizer_id"; // Replace with the organizer ID you want to filter
// const filteredEvents = getEventsByOrganizer(events, desiredOrganizerId);
// console.log(filteredEvents); // Output: Array of events by the desired organizer

// function getEventsByMedium(events: event_data_type[], eventMedium: string): event_data_type[] {
//     return events.filter(event => event.medium.toLowerCase() === eventMedium.toLowerCase());
// }
export function getEventsByMedium(events: event_data_type[]): event_data_type[] {
    return events.filter(event => event.medium && event.medium.toLowerCase() === "offline event");
}

export function getEventsByMedium2(events: event_data_type[]): event_data_type[] {
    return events.filter(event => event.medium && (event.medium.toLowerCase() === "online event" ||  event.medium.toLowerCase() === "quize competition" ));
}


// ================For get type array of event

// interface Event {
//     type: string;
//     // Other properties...
// }

export function getUniqueEventTypesArray(events: event_data_type[]): string[] {
    const uniqueTypes: Set<string> = new Set();

    events.forEach(event => {
        uniqueTypes.add(event.type);
    });

    return Array.from(uniqueTypes);
}
