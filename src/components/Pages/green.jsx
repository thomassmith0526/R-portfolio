import React from 'react'
    const ImageLink = () => {
        const handleClick = () => {
            window.open('https://github.com/thomassmith0526/Project2', '_blank')
        };

        return (
            <a href="https://github.com/thomassmith0526/Project2" target="_blank" rel="green acres">
                <img src="https://www.lushome.com/wp-content/uploads/2014/03/backyard-designs-landscaping-ideas-green-grass-flowers-12.jpg" alt="Clickable Image" onClick={handleClick}/>
            </a>
        );
    };
export default ImageLink;