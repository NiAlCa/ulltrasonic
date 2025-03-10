//'use client'

import React from "react";
import { getHomeInfo } from "../../lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export const Hero = async () => {
    const { title, description, image } = await getHomeInfo();
   // console.log({ title, description, image});



    return (
        <section className="hero">
            <div className="hero__container">
                <h1 className="hero__title">{title}</h1>
                <div className="hero__description">
                    <BlocksRenderer content={description} />
                </div>
                <div className="hero__image">
                    <img src={image} alt="Cover" className="hero__img" />
                </div>
            </div>


        </section>
    );
};
