import React from 'react';
import Grid from './Grid';

/**
 * Component to render a full month's grid
 */
const MonthGrid = () => {
    const daysInMonth = 30;

    //Constructs the Grid array for the given days in a month
    const constructGridArray = () => {
        const grid = [];
        for(let idx = 1; idx <= daysInMonth; idx++) {
            grid.push(
                <div className='p-[0.75px] inline-block'>
                    <Grid />
                </div>
            );
        }
        return grid;
    };
    
    return (
        <div id={`MonthGrid`} className={`grid grid-rows-7 grid-cols-5 grid-flow-col w-[87.5px]`}>
            {
                constructGridArray()            
            }
        </div>
    );
};

export default MonthGrid;