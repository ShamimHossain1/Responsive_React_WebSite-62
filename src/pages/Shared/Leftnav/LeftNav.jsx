import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));

    }, [])

    // console.log(categories)

    return (
        <div>
            <h4>All Categories</h4>

            {
                categories.map(categorie =>
                    <p key={categorie.id}>
                        <Link>{categorie.name}</Link>
                    </p>

                )
            }
        </div>
    );
};

export default LeftNav;