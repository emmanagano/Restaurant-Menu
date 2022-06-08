import foodItems from "./menuData"

export function Breakfast () {
    const breakfastItems = foodItems.filter(item => {
        if(item.category === "breakfast") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {breakfastItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()} 
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function Appetizers () {
    const appetizersItems = foodItems.filter(item => {
        if(item.category === "appetizers") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {appetizersItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()} 
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function Entrees () {
    const entreesItems = foodItems.filter(item => {
        if(item.category === "entrees") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {entreesItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <p>{foodItem.extraNotes}</p>
                        <p>{foodItem.subNote}</p>
                        <h2>
                            {foodItem.title?.toUpperCase()} 
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function American () {
    const americanItems = foodItems.filter(item => {
        if(item.category === "american") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {americanItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()} 
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function Filipino () {
    const filipinoItems = foodItems.filter(item => {
        if(item.category === "filipino") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {filipinoItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()} 
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function Pizza () {
    const pizzaItems = foodItems.filter(item => {
        if(item.category === "pizza") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {pizzaItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()}
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export function SoupsAndSalads () {
    const soupSaladItems = foodItems.filter(item => {
        if(item.category === "soups-salads") {
            return true
        }
    });
    return (
        <div
            className="food-main-container"
        >
            {soupSaladItems.map(foodItem => {
                return (
                    <div 
                        key={foodItem.title}
                        className="food-item-container"
                    >
                        <h1>{foodItem.extraDisplay}</h1>
                        <h2>
                            {foodItem.title?.toUpperCase()}
                        </h2>
                        <p>
                            {foodItem.price}
                        </p>
                        <p>
                            {foodItem.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}