import React, { useState } from 'react';
import YearGrid from './YearGrid';
import YearsList from './YearsList';
import ColorsList from './ColorsList';
import { blueTheme } from '../utils/Utils';

const HeatMap = () => {
    const currentYear = new Date().getFullYear();
    const [chosenYear, setChosenYear] = useState(currentYear);
    const [chosenColor, setChosenColor] = useState(blueTheme);

    return (
        <div id='HeatMap'>
            <div id='HeatMap-controls' className='mb-2 flex justify-around'>
                <div id='ColorsList' className='inline-block w-[7rem]'>
                    <ColorsList chosenColor={chosenColor} setChosenColor={setChosenColor}/>
                </div>
                <div id='YearsList' className='inline-block w-[7rem]'>
                    <YearsList chosenYear={chosenYear} setChosenYear={setChosenYear}/>
                </div>
            </div>
            <YearGrid year={chosenYear} color={chosenColor} />
        </div>
    );
};

export default HeatMap;