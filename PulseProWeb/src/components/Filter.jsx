import React from "react";
import products from '../products';


function Filter() {

    const [filterText, setFilterText] = React.useState('');
    const [filteredProducts, setFilteredProducts] = React.useState(products);

    const handleFilterChange = (e) => {
        const query = e.target.value;
        setFilterText(query);
    
        // Filter products based on the search query
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return(
        <div style={styles.container}>
            <h2>Filter Products</h2>
    
            {/* Search Input */}
            <input
            type="text"
            placeholder="Search by product name..."
            value={filterText}
            onChange={handleFilterChange}
            style={styles.input}
            />
    
            {/* Filtered Product List */}
            <ul style={styles.list}>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                <li key={product.id} style={styles.item}>
                    <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    </div>
                </li>
                ))
            ) : (
                <li style={styles.noResults}>No products found.</li>
            )}
            </ul>
        </div>
    )
}


const styles = {
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '20px',
      fontSize: '1rem',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    item: {
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    noResults: {
      textAlign: 'center',
      color: '#999',
      fontStyle: 'italic',
    },
};




export default Filter