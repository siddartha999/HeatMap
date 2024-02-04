import React from 'react';
import { getGridBgColor } from '../utils/Utils';

/**
 * Individual Grid (pixel) component of the HeatMap
 */
const Grid = ({color, quarter}) => {
    return (
        <div className={`w-[1rem] h-[1rem] border-[0.25px] ${getGridBgColor(color, quarter)} cursor-pointer`}>
        </div>
    );
};

export default Grid;