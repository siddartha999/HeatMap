import React from 'react';
import Grid from './Grid';
import { daysInMonth, monthNames } from '../utils/Utils';

/**
 * Component to render a full month's grid
 */
const MonthGrid = ({year, month, color}) => {
    const yearAndMonth = `${year}-${month >= 10 ? month : '0' + month}`;
    const days = daysInMonth(month, year);
    console.log(yearAndMonth, days);

    //Constructs the Grid array for the given days in a month
    const constructGridArray = () => {
        const grid = [];
        for(let idx = 1; idx <= days; idx++) {
            grid.push(
                <div className='p-[0.75px] inline-block'>
                    <Grid color={color} />
                </div>
            );
        }
        return grid;
    };
    
    return (
        <div id={`MonthGrid-${yearAndMonth}`} key={yearAndMonth} className='w-[87.5px]'>
            <div className={`grid grid-rows-7 grid-cols-5 grid-flow-col`}>
                {
                    constructGridArray()            
                }
            </div>
            {
                <div id='Month-name' className='text-center font-sm'>
                    {monthNames[month - 1]}
                </div>
            }
        </div>
    );
};

export default MonthGrid;