import { team_data_type } from "@/types";

// interface TeamMember {
//     name: string;
//     DOB: string;
//     BT_ID: string;
//     position: string;
//     type: string;
//     linkedinUrl: string;
//     facebookUrl: string;
//     instragramUrl: string;
//     photoUrl: string;
//     currentYear: string;
//     description: string;
//     skill: string;
//     cgpa: string;
//     hobby: string;
//     _id: string;
// }

const teamMembers: team_data_type[] = [
    // ... (your array of team members here)
];

export function sortAndSplitByPosition(members: team_data_type[]): { [key: string]: team_data_type[] } {
    // Sorting the members by their type attribute
    members.sort((a, b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));

    // Splitting the array into subarrays based on position
    const sortedAndSplit: { [key: string]: team_data_type[] } = {};
    members.forEach(member => {
        if (!sortedAndSplit[member.position]) {
            sortedAndSplit[member.position] = [];
        }
        sortedAndSplit[member.position].push(member);
    });

    return sortedAndSplit;
}


export const teamsSortByCommittee=(teamsData:team_data_type[] , committeeID :string)=>{

   return teamsData.filter(item=>item.type ===committeeID)
}
// Call the function and get the sorted and split arrays
// const sortedAndSplitMembers = sortAndSplitByPosition(teamMembers);

// // Access the subarrays based on positions
// const headMembers = sortedAndSplitMembers["Head"] || [];
// const coHeadMembers = sortedAndSplitMembers["Co-Head"] || [];
// const memberMembers = sortedAndSplitMembers["Member"] || [];

// Use headMembers, coHeadMembers, memberMembers as needed...
