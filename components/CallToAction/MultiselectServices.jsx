import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Youtube Consutation',
    'Youtube SEO',
    'Youtube Manager',
    'Google Ads'

];

export default function MultipleSelect({ setFormData, value, formData }) {

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ['services']: value })
    }

    console.log(value);

    return (
        <div>
            <FormControl sx={{ m: 1, width: 370 }}>
                <InputLabel id="demo-multiple-name-label" className='text-sm'>Services</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name='services'
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    sx={{ color: 'black', fontWeight: 'bold' }}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        // style={getStyles(name, personName, theme, color)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}