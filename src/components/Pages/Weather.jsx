import React from 'react'
    const ImageLink = () => {
        const handleClick = () => {
            window.open('https://github.com/thomassmith0526/ts-weather', '_blank')
        };

        return (
            <a href="https://github.com/thomassmith0526/ts-weather" target="_blank" rel="green acres">
                <img src="https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F" alt="Clickable Image" onClick={handleClick}/>
            </a>
        );
    };
export default ImageLink;