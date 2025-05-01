import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoryPromise = fetch('/categories.json')
    .then((res) => res.json())


const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className='font-bold text-xl'>All categories </h1>
            <div>
                {
                    categories.map((category) =>
                        <NavLink to={`/category/${category.id}`} key={category.id}
                            className='btn bg-base-100 w-full my-3 border-0 hover:bg-base-300 text-accent font-semibold text-lg' >

                            {category.name}

                        </NavLink>
                    )

                }
            </div>
        </div >
    );
};

export default Categories;