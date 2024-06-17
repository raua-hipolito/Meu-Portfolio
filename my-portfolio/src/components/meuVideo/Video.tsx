import React from 'react';

function Video() {
    return (
<div className="flex justify-center items-center py-4 px-3">
    <div className="relative w-full h-96 sm:h-80 md:h-96 lg:h-[450px] mb-8 rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
            src="https://www.youtube.com/embed/qj5YuLWMvo0" 
            width="100%" 
            height="100%" 
            title="YouTube my video"
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full"
        >
        </iframe>
    </div>
</div>

    )
}

export default Video;