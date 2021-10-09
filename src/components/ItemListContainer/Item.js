import React from 'react';
import { HiTag } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import './ItemListContainer.css';

export const Item = ( {id, name, description, category, price, img} ) => {

    return (
        <div className= "item-card">
        <img src={img} alt= {`${name} ${description}`} className="item-card-img"></img>
        <p className= "item-card-category">{category.toUpperCase()}</p>
        <p className= "item-card-product-name">{name}</p>
        <p className= "item-card-description"> <HiInformationCircle className="item-card-icon"/> {description}</p>
        <p className= "item-card-price"><HiTag className="item-card-icon"/> Precio: ${price}</p>
        <button className= "item-card-btn">AGREGAR AL CARRITO</button>
        </div>
    )
}