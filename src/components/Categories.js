import { useState } from "react";
import { Link } from "react-router-dom";

function Categories () {
    return (
        <div className="categories-container">
            <Link 
                to="/breakfast"
            >
                Breakfast
            </Link>
            <Link
                to="/appetizers"
            >
                Appetizers
            </Link>
            <Link
                to="/entrees"
            >
                Entrees
            </Link>
            <Link 
                to="/american"
            >
                American
            </Link>
            <Link
                to="/filipino"
            >
                Filipino
            </Link>
            <Link
                to="/pizza"
            >
                Pizza
            </Link>
            <Link
                to="/soups-salads"
            >
                Soups & Salads
            </Link>
        </div>
    )
}

export default Categories;