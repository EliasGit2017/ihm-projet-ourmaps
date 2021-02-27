import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out our current work and the progess we made for this project!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/lol.jpg"}
                            text="Check out the interviews made by Damien"
                            label="Interviews" 
                            path='/services'
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-11.jpg"} 
                            text="Check out the interviews made by Lyna"
                            label="Interviews" 
                            path='/services'
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-12.jpg"}
                            text="Check out the interviews made by Elias"
                            label="Interviews" 
                            path='/services'
                        />
                        <CardItem 
                            src={process.env.PUBLIC_URL+"/images/img-13.jpg"}
                            text="Check out the interviews made by Sarah"
                            label="Interviews" 
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
