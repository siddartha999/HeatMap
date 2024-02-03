import React from 'react';
import { getGridBgColor } from '../utils/Utils';

/**
 * Individual Grid (pixel) component of the HeatMap
 */
const Grid = ({color}) => {
    return (
        <div className={`w-[1rem] h-[1rem] ${getGridBgColor(color)} cursor-pointer`}>
        </div>
    );
};

export default Grid;