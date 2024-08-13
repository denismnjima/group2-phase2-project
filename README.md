# Culinary Voyage

Culinary Voyage is a React project designed to showcase and search for recipes. It allows users to explore a variety of recipes and provides advanced search capabilities, such as filtering by ingredients.

## Running and Testing

To run and test the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```
   ```bash
    cd Culinary-Voyage
    ``` 
2. **Install depedencies**
    ``` bash
    npm install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    ```
## file structure
```arduino
Culinary-Voyage
├── public
├── src
│   ├── assets
│   │   └── react.svg
│   ├── Components
│   │   ├── FeaturedRecipe.jsx
│   │   ├── FilterSearch.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── RecipeCard.jsx
│   │   └── RecipesContainer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

```
### Components
FeaturedRecipe.jsx: Displays the featured recipe on the homepage, showcasing the most popular or highlighted recipe.

__FilterSearch.jsx__: Handles the advanced search functionality, allowing users to filter recipes based on various ingredients or criteria.

__Footer.jsx__: The footer section of the application, containing links and other information.

__Hero.jsx__: The hero section at the top of the homepage, typically used for a large, prominent image or message.

__Navbar.jsx__: The navigation bar that allows users to navigate between different sections of the application.

__RecipeCard.jsx__: A card component that displays individual recipe details, such as the image, title, and a brief description.

__RecipesContainer.jsx__: A container component that holds and manages multiple RecipeCard components, displaying a list of recipes.
