import React, { useState } from "react";
import accomodation from "../../data/logements.json";
import { useParams } from "react-router-dom";
import "./Slider.css";

function Slider() {
    const { id } = useParams();
    const accomodationPictures = accomodation.find((object) => object.id === id);

    const { pictures } = accomodationPictures;

    // ------------------------------ //
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    return (
        <section id="slider">
            {pictures.length > 1 && <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>}
            {pictures.length > 1 && <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>}
            {pictures.map((img, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && <img src={img} alt="Photos du logement" className="slider-image" />}
                        {index === current && (
                            <span className="slider-image-number">
                                {current + 1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}

export default Slider;
