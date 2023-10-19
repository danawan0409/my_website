import * as React from 'react';
import MediaCard1 from './card1.jsx';
import MediaCard2 from './card2.jsx';
import MediaCard3 from './card3.jsx';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './latest.css';

const Latest = () => {
    return (
        <>
        <div className='latest' id='latest'>
            <div className='latestTitle'>Latest Updates</div>
            <div className='cardbox'>
                <div className='cards'>
                    <MediaCard1/>
                    <MediaCard2/>
                    <MediaCard3/>
                </div>
                <button className='seeMore'>
                    <span className='btnText'>See More</span>
                    <KeyboardArrowRight/>
                </button>
            </div>
        </div>
        </>
    );
}

export default Latest; 