import React from 'react';
import MonthGrid from './MonthGrid';

/**
 * Component to render a a whole Year's Grid
 */
const YearGrid = ({year, color}) => {
    //Populates the monthly grid in a year
    const populateMonthlyGrid = () => {
        const grid = [];
        for(let idx = 1; idx <= 12; idx++) {
            grid.push(
                <MonthGrid year={year} month={idx} color={color} />
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