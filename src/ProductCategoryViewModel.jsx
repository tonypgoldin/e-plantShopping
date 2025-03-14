import React, { Fragment } from 'react';
import PlantProductItem from './PlantProductItem';

function normalize_value(value) {
    return value ? value.substring(0, 5) : "";
}

function ProductCategoryViewModel({category="", products=[]}) {
    return (
        <Fragment>
            <h1><div key={normalize_value(category)}>{category}</div></h1>
            <div key={category} className='product-list'>
                {products.map((p) => (
                    <Fragment>
                        <div>
                            <PlantProductItem plant={p}/>
                        </div>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
};

export default ProductCategoryViewModel;
