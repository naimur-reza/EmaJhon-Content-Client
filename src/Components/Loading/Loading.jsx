import React from 'react';

const Loading = () => {
    return (
        <div className='flex text-5xl items-center justify-center min-h-[calc(100vh-80px)]'>
            <p>L</p>
            <div className='h-9 w-9 border-dashed border-warning  border-4 mt-2 rounded-full animate-spin'></div>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>....
        </div>
    );
};

export default Loading;