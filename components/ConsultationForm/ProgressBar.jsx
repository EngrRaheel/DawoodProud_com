import React from "react";

function ProgressBar({ progress }) {
    const progressBarStyles = {
        width: `${progress}%`,
    };

    return (
        <div className="h-4 bg-[gray]/50 rounded-md w-full ">
            <div className="h-full bg-[#247ddd] rounded-md "
                style={progressBarStyles}>
            </div>
        </div>
    );
}

export default ProgressBar;
