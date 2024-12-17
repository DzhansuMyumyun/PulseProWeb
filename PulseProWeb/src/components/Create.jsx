import React from "react";

function Create() {

    // State to manage form inputs
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', { name, description });
        // Optionally, clear the form after submission
        setName('');
        setDescription('');
    };

    return(
        <div className="formContainer display-flex"> 
            <div className="formDiv">
                <h2>Create Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <br />
                        <input 
                            type="text" 
                            id="description"
                            value={description}
                            onChange={(e)=> setDescription(e.target.value)}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                    <button type="submit">Create Product</button>

                </form>
            </div>

        </div>
    )
}

export default Create