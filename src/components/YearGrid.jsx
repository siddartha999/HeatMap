import React from 'react';
import MonthGrid from './MonthGrid';

/**
 * Component to render a a whole Year's Grid
 */
const YearGrid = ({year, color, countForAMonthAndDay, quartileObj}) => {
    //Populates the monthly grid in a year
    const populateMonthlyGrid = () => {
        const grid = [];
        for(let month = 1; month <= 12; month++) {
            grid.push(
                <MonthGrid key={year + "-" + month} year={year} month={month} color={color} countForAMonthAndDay={countForAMonthAndDay} quartileObj={quartileObj} />
            );
        }
        return grid;
    };

    return (
        <div id='YearGrid' className='grid grid-rows-1 grid-cols-12 gap-24'>
            {
                populateMonthlyGrid()
            }
        </div>
    );
};

export default YearGrid;