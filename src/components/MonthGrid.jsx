import React from 'react';
import Grid from './Grid';
import { daysInMonth, monthNames } from '../utils/Utils';

/**
 * Component to render a full month's grid
 */
const MonthGrid = ({year, month, color, countForAMonthAndDay, quartileObj}) => {
    const formattedMonth = month >= 10 ? month : '0' + month;
    const yearAndMonth = `${year}-${formattedMonth}`;
    const days = daysInMonth(month, year);

    //Generates the quarter for a given day of the year
    const generateQuarter = (count) => {
        if(count >= quartileObj.current.fourth) return 4;
        if(count >= quartileObj.current.third) return 3;
        if(count >= quartileObj.current.second) return 2;
        if(count >= quartileObj.current.first) return 1;
        return 0;
    };

    //Constructs the Grid array for the given days in a month
    const constructGridArray = () => {
        const grid = [];
        for(let day = 1; day <= days; day++) {
            const formattedDay = day >= 10 ? day : '0' + day;
            const count = countForAMonthAndDay.get(formattedMonth + "-" + formattedDay);
            const quarter = generateQuarter(count);

            grid.push(
                <div className='p-[0.75px] inline-block'>
                    <Grid color={color} quarter={quarter} count={count} year={year} monthName={monthNames[month - 1]} day={formattedDay} />
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