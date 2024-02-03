import React, { useState } from 'react';
import YearGrid from './YearGrid';
import YearsList from './YearsList';

const HeatMap = () => {
    const currentYear = new Date().getFullYear();
    const [chosenYear, setChosenYear] = useState(new Date().getFullYear());

    return (
        <div id='HeatMap'>
            <div id='HeatMap-controls' className='mb-2'>
                <span id='YearsList' className='text-right'>
                    <YearsList chosenYear={chosenYear} setChosenYear={setChosenYear}/>
                </span>
            </div>
            <YearGrid year={chosenYear} />
        </div>
    );
};

export default HeatMap;