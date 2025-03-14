import React, { Fragment } from 'react';
import ImageComponent from './ImageComponent';
import { addItem } from './CartSlice';

function PlantProductItem({plant}) {
    const handleAddToCart = (product) => {
        dispatchEvent(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState, [product.name]: true
        }))
    };
    
    return (
        <Fragment>
            <div className='product-card' key={plant.index}>
                <div key={plant.name} className='product-title'>{plant.name}</div>
                <div key={plant.name + ".img"}><ImageComponent src={plant.image.src} alt={plant.image.alt} /></div>
                <div key={plant.name + ".desc"}>{plant.description}</div>
                <div key={plant.name + ".cost"}>{plant.cost}</div>
                <button type="button" className='product-button' onClick={() => handleAddToCart(plant)}>Add To Cart</button>
            </div>
        </Fragment>)
}

export default PlantProductItem;