import React from "react";
import MainCards from "../Components/MainCards";
import '../Components/Styles/Card.css';

function Products() {
    return (
        <div className="wrapper">
            <MainCards
                img='./Assets/oriental-noodles.jpg'
                title="Oriental recipes"
                description="Recipes for everydays" />
            <MainCards
                img='./Assets/oriental-noodles.jpg'
                title="Mexican recipes"
                description="Recipes for everydays" />
            <MainCards
                img='./Assets/restaurant  .jpg'
                title="mediterranean recipes"
                description="Recipes for everydays" />
            <MainCards
                img='./Assets/oriental-noodles.jpg'
                title="Eastern-Europe recipes"
                description="Recipes for everydays" />
            <MainCards
                img='./Assets/oriental-noodles.jpg'
                title="American recipes"
                description="Recipes for everydays" />
            <MainCards
                img='./Assets/oriental-noodles.jpg'
                title="Latin-American recipes"
                description="Recipes for everydays" />
        </div>
    )
}
export default Products;