import React from "react"
import products from '../products';

function List() {
    return(
        <div className="listContainer">
            <h2>Product List</h2>
            <ul className="list-style-none">
            {products.map((product) => (
                <li key={product.id} style={styles.item}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

// Simple styles for the list items
const styles = {
    item: {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
};

export default List