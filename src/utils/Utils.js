export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const daysInMonth = (month, year) => { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}