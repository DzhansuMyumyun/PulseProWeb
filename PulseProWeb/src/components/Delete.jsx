import React from 'react';
import products from '../products';




function Delete() {

    const [productList, setProductList] = React.useState(products);

    // Function to handle deleting a product by its ID
    const handleDelete = (id) => {
        setProductList((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    return(
        <div className="listContainer">
            <h2>Delete Products</h2>
            <ul style={styles.list}>
            {productList.map((product) => (
                <li key={product.id} style={styles.item}>
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
                <button style={styles.deleteButton} onClick={() => handleDelete(product.id)}>
                    Delete
                </button>
                </li>
            ))}
            </ul>
        </div>
    )
}



// Simple styles for the list and buttons
const styles = {
    list: {
      listStyle: 'none',
      padding: 0,
      maxWidth: '500px',
      margin: '0 auto',
    },
    item: {
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    deleteButton: {
      padding: '8px 15px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
  };

export default Delete