import React from 'react';

const Letters: React.FC = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];

    return (
        <div>
            <h1>{randomLetter}</h1>
        </div>
    );
};

export default Letters;