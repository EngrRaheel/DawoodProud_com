
// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';


// const valueOptions = [
//         'Text',
//     'Video Call',
//     'Phone Call',

// ];

// export default function SelectSmall({ setFormData, value, formData }) {
//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setFormData({ ...formData, ["contactvia"]: value })

//     }



//     return (
//         <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
//             <InputLabel id="demo-select-small-label">Please Select</InputLabel>
//             <Select
//                 labelId="demo-select-small-label"
//                 id="demo-select-small"
//                 value={value}
//                 label="Please Select"
//                 onChange={handleChange}
//                 required
//             >
//                 {valueOptions.map((option) => (
//                     <MenuItem key={option} value={option}>
//                         {option}
//                     </MenuItem>
//                 ))}
//             </Select>
//         </FormControl>
//     );
// }

import { minHeight } from '@mui/system';
import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = [
    'Text',
    'Video Call',
    'Phone Call',

];





const Antselect = ({ setFormData, value, formData }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const handleChange = (selectedValues) => {
        setSelectedItems(selectedValues);
        setFormData({ ...formData, ["contactvia"]: selectedValues });
    };



    return (
        <Select
            mode="single"
            placeholder="Please Select the Option"
            value={selectedItems}
            onChange={handleChange}
            style={{
                minWidth: '200px',
                padding: "8px",
                minHeight: "40px",

            }}
            className="my-selectContactVia"
            // inputHeight={300}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};
export default Antselect;