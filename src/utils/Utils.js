export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const daysInMonth = (month, year) => { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}


export const blueTheme = "Blue";
export const greenTheme = "Green";
export const redTheme = "Red";

const blueThemeBg = ['', 'bg-blue-200', 'bg-blue-400', 'bg-blue-600', 'bg-blue-800'];
const greenThemeBg = ['', 'bg-green-200', 'bg-green-400', 'bg-green-600', 'bg-green-800'];
const redThemeBg = ['', 'bg-red-200', 'bg-red-400', 'bg-red-600', 'bg-red-800'];

export const getGridBgColor = (theme, quartile = 0) => {
    switch(theme) {
        case blueTheme: return blueThemeBg[quartile];
        case greenTheme: return greenThemeBg[quartile];
        case redTheme: return redThemeBg[quartile];
        default: return '';
    }
};