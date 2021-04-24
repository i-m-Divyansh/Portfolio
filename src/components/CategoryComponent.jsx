import React from 'react'


const CategoryComponent = ({ Categories, projectHandler, ActiveBtn }) => {


    // return 
    return (
        <div className="mb-4 d-flex justify-content-center">
            {Categories.map((category, index) => <button onClick={() => projectHandler(category)}
                key={index}
                className={ActiveBtn === category ? "myCategoryActiveBtn" : "myCategoryBtn"}>{category}</button>)}
        </div>
    )
}

export default CategoryComponent;
