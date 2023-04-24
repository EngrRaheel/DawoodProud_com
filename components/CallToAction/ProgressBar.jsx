import React from "react";

function ProgressBar({ progress }) {
    const progressBarStyles = {
        width: `${progress}%`,
    };

    return (
        <div className="h-2 bg-[gray] rounded-full mx-w-[500px] w-full ">
            <div
                className="h-full bg-blue rounded-full mx-w-[500px]"
                style={progressBarStyles}
                
            />
        </div>
    );
}

export default ProgressBar;
