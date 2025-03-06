import React, { Fragment } from 'react';
import PlantProductItem from './PlantProductItem';

function normalize_value(value) {
    console.log(value)
    return value ? value.substring(0, 5) : "";
}

function ProductCategoryViewModel({category="", products=[]}) {
    return (
        <Fragment>
            <div key={normalize_value(category)}>{category}</div>

            {products.map((p) => (
                <Fragment>
                    <div>
                        <PlantProductItem plant={p}/>
                    </div>
                </Fragment>
            ))}
        </Fragment>
    )
};

export default ProductCategoryViewModel;
