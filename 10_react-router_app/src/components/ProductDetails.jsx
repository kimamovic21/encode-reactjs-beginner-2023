import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { state } = useLocation();
    console.log(state);
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h2>Product Details</h2>
            <p>Name: {state.name}</p>
            <p>Calories: {state.calories}</p>
            <p>Fat(g): {state.fat}</p>
            <p>Carbs(g): {state.carbs}</p>
            <p>Protein(g): {state.protein}</p>
        </div>
    );
};

export default ProductDetails;