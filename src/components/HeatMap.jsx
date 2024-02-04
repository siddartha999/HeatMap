import React, { useEffect, useRef, useState } from 'react';
import YearGrid from './YearGrid';
import YearsList from './YearsList';
import ColorsList from './ColorsList';
import { blueTheme } from '../utils/Utils';

const HeatMap = ({data}) => {
    const currentYear = new Date().getFullYear();
    const [chosenYear, setChosenYear] = useState(currentYear);
    const [chosenColor, setChosenColor] = useState(blueTheme);
    const [countForAMonthAndDay, setCountForAMonthAndDay] = useState(new Map());
    const quartileObj = useRef(({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
    }));

    /**
     * Re-populate the yearly data based on the updates to 'data' and 'chosenYear' variables
     */
    useEffect(() => {
        const temp = [];
        const tempMap = new Map();

        if(data && data.length >= 1) {
            for(const item of data) {
                if(item.year == chosenYear) {
                    temp.push(item);
                    tempMap.set(item.month + "-" + item.day, item.count)
                }
            }
        }

        temp.sort((a, b) => a.count - b.count);
        setCountForAMonthAndDay(tempMap);

        quartileObj.current.fourth = temp[Math.ceil((temp.length) * 3 ) / 4]?.count;
        quartileObj.current.third = temp[Math.ceil((temp.length) * 2 ) / 4]?.count;
        quartileObj.current.second = temp[Math.ceil((temp.length) * 1 ) / 4]?.count;
        quartileObj.current.first = temp[0]?.count;
    }, [data, chosenYear]);

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
            <YearGrid year={chosenYear} color={chosenColor} countForAMonthAndDay={countForAMonthAndDay} quartileObj={quartileObj} />
        </div>
    );
};

export default HeatMap;