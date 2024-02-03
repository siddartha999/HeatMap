import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React from 'react';
import { blueTheme, greenTheme, redTheme } from '../utils/Utils';

// Component to render a dropdown with a list of colors for the Grid background
const ColorsList = ({chosenColor, setChosenColor }) => {
    const themes = [blueTheme, greenTheme, redTheme];

    //Handler to react to the change in the selection of a color
    const handleColorChange = (event, newValue) => {
        setChosenColor(newValue);
    };

    return (
        <div id='ColorsList'>
            <Select variant='outlined' value={chosenColor} onChange={handleColorChange}>
                {
                    themes.map((color) => <Option value={color}>{color}</Option>)
                }
            </Select>
        </div>
    );
};

export default ColorsList;