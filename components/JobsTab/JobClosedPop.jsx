import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai"

export default function SimplePopper() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick}
                className="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-5 py-2 md:py-2  md:m-2  focus:outline-none focus:shadow-outline shadow-lg">
                Job Closed
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
                <Box className="p-2 sm:p-6 bg-[#00438b] text-white rounded-lg w-[200px] sm:w-[250px] h-[50px] sm:h-[80px] ">
                    <AiOutlineClose className='absolute top-1 right-1 font-bold' onClick={handleClick} />
                    <p>This Job has been closed!</p>
                </Box>
            </Popper>
        </div>
    );
}

// function JobClosedBtn() {
//     const [showPopup, setShowPopup] = useState(false);

//     const handleClick = () => {
//         setShowPopup(true);
//         console.log('Button clicked!');
//     };

//     const handlePopupClose = () => {
//         setShowPopup(false);
//     };

//     return (
//         <div>
//             <button onClick={handleClick} type="button"
//                 class="border border-indigo-500 bg-[black] text-white rounded-md px-6 py-3 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Job Closed</button>
//             {showPopup && (
//                 <div className="border-3 border-blue w-[100px] h-[200px] relative z-40">
//                     <h2>This is a pop-up!</h2>
//                     <p>Click outside the pop-up or the close button to dismiss.</p>
//                     <button onClick={handlePopupClose}><FaWindowClose /></button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default JobClosedBtn;
