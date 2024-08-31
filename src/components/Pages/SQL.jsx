import React from 'react'
    const ImageLink = () => {
        const handleClick = () => {
            window.open('https://github.com/thomassmith0526/SQL', '_blank')
        };

        return (
            <a href="https://github.com/thomassmith0526/SQL" target="_blank" rel="green acres">
                <img src="https://cdn.corporatefinanceinstitute.com/assets/database-1024x703.jpeg" alt="Clickable Image" onClick={handleClick}/>
            </a>
        );
    };
export default ImageLink;