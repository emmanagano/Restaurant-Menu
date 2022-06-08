const foodItems = [
    {
        extraDisplay: "American Breakfast",
        category: "breakfast"
    },
    {
        title: "Big Bob's American Breakfast",
        description: "2pcs of eggs, bacon, pancakes, & hashbrowns ",
        price: 350,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "L.A. Healthy Egg White Omelet",
        description: "egg whites - mixed vegetables - swiss cheese - hashbrown - bacon",
        price: 250,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "New Mexico Spanish Omelet",
        description: "onions - potatoes - salsa - hashbrown - bacon",
        price: 300,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Wyoming Western Omelet",
        description: "green & red peppers - onions - tomatoes - ham - cheese - hashbrown - bacon",
        price: 250,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Steak and Eggs",
        description: "2 eggs - filet slice - hashbrown - bacon",
        price: 550,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Eggs Benedict",
        description: "2 english muffins - over poached eggs - hollandaise sauce",
        price: 250,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "2 Large Pancakes",
        description: "",
        price: 130,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Egg",
        description: "",
        price: 25,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Hashbrown",
        description: "",
        price: 45,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Pancake",
        description: "",
        price: 75,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        title: "Bacon",
        description: "",
        price: 50,
        category: "breakfast",
        subCategory: "american-breakfast"
    },
    {
        extraDisplay: "Filipino Breakfast",
        category: "breakfast"
    },
    {
        title: "Longsilog",
        description: "longanisa - fried rice & egg",
        price: 100,
        category: "breakfast",
        subCategory: "filipino-breakfast"
    },
    {
        title: "Hotsilog",
        description: "hotdog - fried rice & egg",
        price: 100,
        category: "breakfast",
        subCategory: ""
    },
    {
        title: "Cornsilog",
        description: "cornbeef - fried rice & egg",
        price: 100,
        category: "breakfast",
        subCategory: "filipino-breakfast"
    },
    {
        title: "Porksilog",
        description: "breaded pork - fried rice & egg",
        price: 165,
        category: "breakfast",
        subCategory: ""
    },
    {
        title: "Chicksilog",
        description: "breaded chicken breast - fried rice & egg",
        price: 165,
        category: "breakfast",
        subCategory: "filipino-breakfast"
    },
    {
        title: "Daingsilog",
        description: "fried daing bangus - fried rice & egg",
        price: 140,
        category: "breakfast",
        subCategory: "filipino-breakfast"
    },
    {
        title: "Extra Fried Rice",
        description: "",
        price: 30,
        category: "breakfast",
        subCategory: "filipino-breakfast"
    },
    {
        title: "Maryland Fried Calamari",
        description: "crispy fried & breaded squid",
        price: 220,
        category: "appetizers",
        subCategory: ""
    },
    {
        title: "Alabama Fried Green Tomatoes",
        description: "with garlic mayonnaise",
        price: 110,
        category: "appetizers",
        subCategory: ""
    },
    {
        title: "California Zucchini Sticks",
        description: "fried & breaded - spicy salsa",
        price: 120,
        category: "appetizers",
        subCategory: ""
    },
    {
        title: "Pittsburg Chicken Fingers",
        description: "sliced & breaded chicken breast",
        price: 140,
        category: "appetizers",
        subCategory: ""
    },
    {
        title: "Milwaukee Cheese Fries",
        description: "crispy fries with melted cheese",
        price: 120,
        category: "appetizers",
        subCategory: ""
    },
    {
        title: "Green Bay Chili Cheese Fries",
        description: "crispy fries - chili - melted cheese - jalapeños",
        price: 140,
        category: "appetizers",
        subCategory: ""
    },
    {
        extraDisplay: "Texas Chicken",
        category: "entrees"
    },
    {
        extraNotes: `Roasted | Fried | BBQ`,
        subNote: "one side included: mashed potatoes | fries | onion rings | rice | grilled veggies",
        category:"entrees"
    },
    {
        title: "Whole",
        description: "",
        price: 550,
        category: "entrees",
        subCategory: "texas-chicken"
    },
    {
        title: "Half",
        description: "",
        price: 300,
        category: "entrees",
        subCategory: "texas-chicken"
    },
    {
        title: "Quarter",
        description: "",
        price: 200,
        category: "entrees",
        subCategory: "texas-chicken"
    },
    {
        title: "Chicken Breast Filet",
        description: "with lemon butter",
        price: 180,
        category: "entrees",
        subCategory: "texas-chicken"
    },
    {
        title: "Boston Chicken Curry",
        description: "mixed rice - chicken & vegetables - curry sauce",
        price: 400,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "Miami Stir Fry",
        description: "chicken - vegetables - pineapple - ham - fried rice",
        price: 400,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "New Orleans Cajun Shrimp Stir Fry",
        description: "spicy shrimp - vegetables - egg slices - fried rice",
        price: 400,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "El Paso Burrito",
        description: "chicken or beef - white sauce - red kidney beans - salsa",
        price: 350,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "Pennsylvania Pork Schnitzel ",
        description: "breaded pork loin - lemon butter",
        price: 420,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "Dallas Buffalo Spicy Wings",
        description: "",
        price: 420,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "Minneapolis Meat Loaf",
        description: "home-made juicy meatloaf with salsa",
        price: 420,
        category: "entrees",
        subCategory: ""
    },
    {
        title: "Seattle Salmon",
        description: "pan roasted salmon loin - pineapple - mango sauce",
        price: 500,
        category: "entrees",
        subCategory: ""
    },
    {
        extraDisplay: "Steaks",
        category: "entrees"
    },
    {
        extraNotes: "9.5oz / 270g",
        category: "entrees"
    },
    {
        title: "Rib Eye",
        description: "",
        price: 1150,
        category: "entrees",
        subCategory: "steaks"
    },
    {
        title: "T-Bone",
        description: "",
        price: 1150,
        category: "entrees",
        subCategory: "steaks"
    },
    {
        title: "Filet Mignon",
        description: "",
        price: 1150,
        category: "entrees",
        subCategory: "steaks"
    },
    {
        title: "Rib Eye (19oz / 550 g)",
        description: "for group size",
        price: 2200,
        category: "entrees",
        subCategory: "steaks"
    },
    {
        title: "Two Sides Included",
        description:"mashed potatoes | caramelized onions | green beans | fries | onion rings | rice | salad | grilled veggies | mac & cheese",
        price:"",
        category:"entrees",
        subCategory:""
    },
    {
        extraDisplay: "Pasta",
        category: "entrees"
    },
    {
        extraNotes:"Spaghetti | Fettucini | Penne",
        category:"entrees"
    },
    {
        title: "Long Island Carbonara",
        description: "chicken or tuna - parmesan cream - mushroom",
        price: 350,
        category: "entrees",
        subCategory: "pasta"
    },
    {
        title: "Time Square Spaghetti and Meatballs",
        description: "tomato sauce - parmesan cheese",
        price: 400,
        category: "entrees",
        subCategory: "pasta"
    },
    {
        title: "New Mexico Chicken Pasta",
        description: "breast filet chunks - tomato sauce",
        price: 350,
        category: "entrees",
        subCategory: "pasta"
    },
    {
        title: "Portland Pesto Pasta",
        description: "chicken or steak strips - pesto sauce",
        price: 400,
        category: "entrees",
        subCategory: "pasta"
    },
    {
        title: "Orlando Pasta",
        description: "marinara sauce - grilled chicken breast",
        price: 350,
        category: "entrees",
        subCategory: "pasta"
    },
    {
        title: "Pan Roasted Chicken",
        description: "marinated breast filet - mushroom gravy",
        price: 180,
        category: "filipino",
        subCategory: ""
    },
    {
        title: "Sweet and Sour Fish",
        description: "dory fish filet - sweet & sour sauce",
        price: 250,
        category: "filipino",
        subCategory: ""
    },
    {
        title: "Liempo",
        description: "fried - vinegar sauce",
        price: 250,
        category: "filipino",
        subCategory: ""
    },
    {
        title: "Roast Beef",
        description: "with creamy mushroom sauce",
        price: 250,
        category: "filipino",
        subCategory: ""
    },
    {
        title: "Callos",
        description: "ox tripe - oxfeet - sausage - garbanzos",
        price: 250,
        category: "filipino",
        subCategory: ""
    },
    {
        title: "Chicken BBQ",
        description: "marinated quarter chicken - bbq sauce",
        price: 200,
        category: "filipino",
        subCategory: ""
    },
    {
        extraDisplay: "Soups",
        category: "soups-salads"
    },
    {
        title: "Thick Green Pea Soup",
        description: "blended green peas - reduced sour cream - sliced bread",
        price: 220,
        category: "soups-salads",
        subCategory: "soups"
    },
    {
        title: "Thick Tomato Soup",
        description: "blended tomatoes - reduced sour cream - sliced bread",
        price: 220,
        category: "soups-salads",
        subCategory: "soups"
    },
    {
        title: "Chunky Chicken Soup",
        description: "noodle soup - vegetables",
        price: 220,
        category: "soups-salads",
        subCategory: "soups"
    },
    {
        extraDisplay: "Salads",
        category: "soups-salads"
    },
    {
        title: "California Chicken Caesar Salad",
        description: "lettuce - tomatoes - grilled chicken - caesar dressing",
        price: 300,
        category: "soups-salads",
        subCategory: "salads"
    },
    {
        title: "Memphis Chicken Salad",
        description: "grilled chicken - lettuce - tomatoes - cucumbers - olives - carrots - sliced eggs - parmesan cheese",
        price: 300,
        category: "soups-salads",
        subCategory: "salads"
    },
    {
        title: "Gulfport Prawn Salad",
        description: "grilled prawns - lettuce - tomatoes - cucumber - olives - carrots - sliced eggs - parmesan cheese",
        price: 330,
        category: "soups-salads",
        subCategory: "salads"
    },
    {
        title: "San Era Tuna Salad",
        description: "tuna chunks - lettuce tomatoes - cucumber olives - carrots - sliced eggs - parmesan cheese",
        price: 300,
        category: "soups-salads",
        subCategory: "salads"
    },
    {
        title: "Mr. Bob's Bodacious Burger (W/ Wo Cheese)",
        description: "a large juicy grilled patty - lettuce - tomato - onions",
        price: 305,
        category: "american",
        subCategory: "burgers"
    },
    {
        title: "Dubble Trubble (2 Patties W/ Wo Cheese)",
        description: "",
        price: 370,
        category: "american",
        subCategory: "burgers"
    },
    {
        title: "Bacon and Cheese Bomber (2 Strips)",
        description: "",
        price: 370,
        category: "american",
        subCategory: ""
    },
    {
        title: "Champion Chili Burger",
        description:"",
        price: 370,
        category: "american",
        subCategory: ""
    },
    {
        title: "Famous Burger Blast",
        description: "",
        price: 1500,
        category: "american",
        subCategory: ""
    },
    {
        title: "Chicken Burger",
        description: "",
        price: 300,
        category: "american",
        subCategory: ""
    },
    {
        title: "Nashville Pita",
        description: "sliced chicken - pressed pita - cheese - ham - onions",
        price: 375,
        category: "american",
        subCategory: ""
    }, 
    {
        title: "Arizona Burrito Wrap",
        description: "spicy shredded chicken or ground beef - beans - salsa - cheese",
        price: 300,
        category: "american",
        subCategory: ""
    },
    {
        title: "Santa Fe Chicken Pesto Wrap",
        description: "shredded chicken - tomatoes - cheese - sour cream - lettuce",
        price: 300,
        category: "american",
        subCategory: ""
    },
    {
        title: "San Antonio Alamochicken Or Beef Taco",
        description: "2pcs hard taco shell - onions - lettuce - cheese - sour cream - salsa",
        price: 300,
        category: "american",
        subCategory: ""
    },
    {
        title: "Philly Cheese Steak Sandwich",
        description: "shredded beef - caramelized onions - mushroom - cheese",
        price: 330,
        category: "american",
        subCategory: ""
    },
    {
        title: "Washington D.C Club Sandwich",
        description: "tomato - lettuce ham - bacon - cheese",
        price: 290,
        category: "american",
        subCategory: ""
    },
    {
        title: "Holy Hackensack Hotdog",
        description: " luscious all-meat dog - toasted bun - relish - mustard - caramelized onions",
        price: 250,
        category: "american",
        subCategory: ""
    },
    {
        title: "Hoboken Pepperoni & Cheese",
        description: "",
        price: 520,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "Hoboken Pepperoni & Cheese",
        description: "",
        price: 300,
        subPrice: 520,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "Hawaiian",
        description: "",
        price: 300,
        subPrice: 520,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "Cincinnati All-Cheese",
        description: "mozzarella - parmesan - cheddar",
        price: 320,
        subPrice: 520,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "San Diego Meatlover",
        description: "chicken - ground beef - ham",
        price: 350,
        subPrice: 550,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "Key West Meatballs",
        description: "meatballs - onions - olives - pineapple - pepperoni",
        price: 350,
        subPrice: 550,
        category: "pizza",
        subCategory: ""
    },
    {
        title: "Vermont Veggie Lovers",
        description: "",
        price: 320,
        subPrice: 520,
        category: "pizza",
        subCategory: ""
    },
    // {
    //     title: "",
    //     description: "",
    //     price: ,
    //     category: "",
    //     subCategory: ""
    // },
]

module.exports = foodItems;