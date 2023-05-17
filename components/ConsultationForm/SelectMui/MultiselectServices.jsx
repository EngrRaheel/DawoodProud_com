import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@mui/material';
import { relative } from 'path';
// import { makeStyles } from '@mui/styles';

import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
            width: 200,


        }
    }
};

const names = [
    "YouTube Consultation",
    "YouTube Niche Selection",
    "YouTube Content Creation",
    "YouTube Keywords Research",
    "YouTube SEO",
    "YouTube Automation",
    "YouTube Channel Monetization",
    "YouTube Promotion",
    "YouTube ADs",
    "YouTube Channel Management",
    "Select All"
];



export default function MultipleSelect({ setFormData, value, formData }) {


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ['services']: value })
    }




    return (
        <div>
            {/* <FormControl sx={{ m: 1, width: 300 }} shrink={true}  >
                <InputLabel id="demo-multiple-name-label" className='text-sm'>Services</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name='services'
                    variant="filled"
                    multiple
                    value={value}
                    onChange={handleChange}
                    required
                    input={<OutlinedInput label="Service" />}
                    renderValue={(selected) => (
                        <Typography sx={{
                            display: 'flex',
                            overflowY: 'auto',
                            fontSize: '4px',
                            flexDirection: 'column',
                            maxWidth: '70%',
                            marginX: 'auto',
                            gap: '0.2rem',
                            flexWrap: 'wrap',
                            '@media (min-width: 768px)': {
                                flexDirection: 'row',
                                maxWidth: '100%',
                            },
                        }}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={value}

                                    // onDelete={handleDelete}
                                    deleteIcon={<CancelIcon className=' rounded-full' color='white' />}
                                    sx={{
                                        color: 'white', backgroundColor: '#247ddd',
                                    }}
                                />
                            ))}
                        </Typography>
                    )}
                    MenuProps={MenuProps}
                    sx={{
                        color: 'red',
                        fontWeight: '300',

                    }} >

                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            sx={{
                                backgroundColor: "#fffff", color: "black", font: "18px",
                                '&:hover': {
                                    backgroundColor: 'black', color: "white",
                                },
                            }}

                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}
            <FormControl sx={{ m: 1, maxWidth: 768, minWidth: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Services</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={value}
                   
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Services" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
                            {selected.map((value) => (
                                <Chip value={value} label={value} 
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        // style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}