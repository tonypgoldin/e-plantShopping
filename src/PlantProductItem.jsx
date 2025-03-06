import React, { Fragment } from 'react';
import ImageComponent from './ImageComponent';

function PlantProductItem({plant}) {
    return (
        <Fragment>
            <div key={plant.name}>{plant.name}</div>
            <div key={plant.name + ".img"}><ImageComponent src={plant.image.src} alt={plant.image.alt} /></div>
            <div key={plant.name + ".desc"}>{plant.description}</div>
            <div key={plant.name + ".cost"}>{plant.cost}</div>
        </Fragment>)
}

export default PlantProductItem;