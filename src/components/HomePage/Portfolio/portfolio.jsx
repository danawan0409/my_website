import * as React from 'react';
import MediaCard1 from './card1.jsx';
import MediaCard2 from './card2.jsx';
import MediaCard3 from './card3.jsx';
import MediaCard4 from './card4.jsx';
import MediaCard5 from './card5.jsx';
import MediaCard6 from './card6.jsx';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './portfolio.css';

const Portfolio = () => {
    return (
        <>
        <div className='portfolio' id='portfolio'>
            <div className='portfolioTitle'>Portfolio</div>
            <div className='portfolioCardbox'>
                <div className='portfolioCards'>
                    <MediaCard1/>
                    <MediaCard2/>
                    <MediaCard3/>
                    {/*<MediaCard4/>
                    <MediaCard5/>
    <MediaCard6/>*/}
                </div>
                <button className='portfolioSeeMore'>
                    <span className='moreText'>See More</span>
                    <KeyboardArrowRight/>
                </button>
            </div>
        </div>
        </>
    );
}

export default Portfolio; 