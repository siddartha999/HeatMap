import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

/**
 * Component to display a dropdown of Current + last X years
 */
const YearsList = ({chosenYear, setChosenYear}) => {
    const currentYear = new Date().getFullYear();

    //Handler to react to the change in the selection of a year
    const handleYearChange = (event) => {
        setChosenYear(event.target.value);
    };

    //Populates a list of a previous X years
    const populateListOfPreviousYears = () => {
        const previousYears = [];
        let count = 10;
        for(let index = 1; index < count; index++) {
            previousYears.push(currentYear - index);
        }
        return previousYears;
    };

    return (
        <div id='YearsList'>
            <Select  labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={chosenYear} onChange={handleYearChange}>
                <MenuItem value={currentYear}>Current</MenuItem>
                {
                    populateListOfPreviousYears().map((year) => <MenuItem value={year}>{year}</MenuItem>)
                }
            </Select>
        </div>
    );
};

export default YearsList;