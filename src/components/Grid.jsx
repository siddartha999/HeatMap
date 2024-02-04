import React from 'react';
import { getGridBgColor } from '../utils/Utils';

/**
 * Individual Grid (pixel) component of the HeatMap
 */
const Grid = ({color, quarter, year, monthName, day, count=0}) => {
    return (
        <div className={`w-[1rem] h-[1rem] border-[0.25px] ${getGridBgColor(color, quarter)} cursor-pointer`} 
            title={`${day} ${monthName} ${year}: ${count}`}>
        </div>
    );
};

export default Grid;