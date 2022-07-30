import React from "react";
import { CardComponent } from "../Card/card";

export const Category = ({title, imgUrl}) => {
    return(
    <CardComponent 
    title={title}
    imgUrl={imgUrl}
    />
    );
}