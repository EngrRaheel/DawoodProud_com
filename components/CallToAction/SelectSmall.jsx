// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { color } from '@mui/system';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 12;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };

// const names = [
//     'Brand New Youtube Channel',
//     '$1 - $10,000',
//     '$10,000 - $25,000',
//     '$25,000 - $50,000',

// ];

// export default function MultipleSelect({ setFormData, value }) {

//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setFormData({ ...FormData, ['services']: value })
//     }

//     console.log(value);

//     return (
//         <div>
//             <FormControl sx={{ m: 1, width: 370 }}>
//                 <InputLabel id="demo-multiple-name-label" className='text-sm'>value</InputLabel>
//                 <Select
//                     labelId="demo-multiple-name-label"
//                     id="demo-multiple-name"
//                     multiple
//                     value={value}
//                     onChange={handleChange}
//                     input={<OutlinedInput label="Name" />}
//                     MenuProps={MenuProps}
//                     sx={{ color: 'black', fontWeight: 'bold', boxShadow: '1' }}
//                 >
//                     {names.map((name) => (
//                         <MenuItem
//                             key={name}
//                             value={name}

//                             sx={{ boxShadow: '0' }}
//                         >
//                             {name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const valueOptions = [
    'Brand New Youtube Channel',
    '$1 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',

];

export default function SelectSmall({ setFormData, value, formData }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, ["value"]: value })
        console.log(value);
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
            <InputLabel id="demo-select-small-label">Value</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label="Value"
                onChange={handleChange}
            >
                {valueOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}