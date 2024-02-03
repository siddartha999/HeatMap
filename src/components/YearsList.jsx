import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React from 'react';

/**
 * Component to display a dropdown of Current + last X years
 */
const YearsList = ({chosenYear, setChosenYear}) => {
    const currentYear = new Date().getFullYear();

    //Handler to react to the change in the selection of a year
    const handleYearChange = (event, newValue) => {
        setChosenYear(newValue);
    };

    //Populates a list of a previous X years
    const populateListOfPreviousYears = () => {
        const previousYears = [];
        let count = 10;
        for(let index = 0; index < count; index++) {
            previousYears.push(currentYear - index);
        }
        return previousYears;
    };

    return (
        <div id='YearsList'>
            <Select variant='outlined' value={chosenYear} onChange={handleYearChange}>
                {
                    populateListOfPreviousYears().map((year) => <Option value={year}>{year}</Option>)
                }
            </Select>
        </div>
    );
};

export default YearsList;