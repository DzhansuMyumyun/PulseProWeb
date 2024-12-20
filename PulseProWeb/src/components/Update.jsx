import React from 'react';
import products from '../products';


function Update() {

    const [productList, setProductList] = React.useState(products);
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    const [updatedName, setUpdatedName] = React.useState('');
    const [updatedDescription, setUpdatedDescription] = React.useState('');

    const handleUpdate = (product) => {
        setSelectedProduct(product);
        setUpdatedName(product.name);
        setUpdatedDescription(product.description);
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();
      
        setProductList((prevProducts) =>
          prevProducts.map((p) =>
            p.id === selectedProduct.id ? { ...p, name: updatedName, description: updatedDescription } : p
          )
        );
      
        // Close the update form
        setSelectedProduct(null);
    };


    // React.useEffect(() => {
    //     console.log('Updated product list:', productList);
    //   }, [productList]);

    
    // function handleUpdate(id){
    //     return console.log(`Update product with ID: ${id}`)
    // }

    return(
        <div className="listContainer">
            <h2>Product List</h2>
            <ul className="list-style-none">
            {productList.map((product) => (
                <li key={product.id} style={styles.item}>
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                    <button style={styles.button} onClick={() => handleUpdate(product)}>
                        Update
                    </button>
                </li>
            ))}
            </ul>

            {selectedProduct && (
                <form onSubmit={handleFormSubmit} style={styles.form}>
                    <h3>Update Product</h3>
                    <div style={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        id="name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                        id="description"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Save Changes
                    </button>
                    <button type="button" style={styles.cancelButton} onClick={() => setSelectedProduct(null)}>
                        Cancel
                    </button>
                </form>
            )}

        </div>
    )
}



// Simple styles for the list, buttons, and form
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
    button: {
      padding: '8px 15px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    cancelButton: {
      padding: '8px 15px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginLeft: '10px',
      transition: 'background-color 0.3s',
    },
    form: {
      maxWidth: '500px',
      margin: '20px auto',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    formGroupLabel: {
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
  };
  







export default Update