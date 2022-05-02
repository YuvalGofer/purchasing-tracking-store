import React from 'react';
import './Styles/Card.css';

function MainCards(props) {
    return (
        <div className='card'>
            <div className='card_body'>
                <img src={props.img} alt=""
                    className='card_image' />
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_description'>{props.description}</p>
            </div>
            <div className='card_btn'>
                <button >
                    <h2>
                        Shop now
                    </h2>
                </button>
            </div>
        </div>
    )
}
export default MainCards