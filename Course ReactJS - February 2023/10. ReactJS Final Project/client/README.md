## Healthy food application - NutriGit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## UI/UX Main Components
- User authentication, CRUD (Catalogs, Create, Edit, Delete) operations for Recipes/Catalogs.

# Home Page Component
- This component showcases a healthy food app with a tagline and paragraph on its philosophy, a contact section, an informative section on balanced diets with an external resource link and a salmon fish image, and the three latest recipes displayed as RecipeItem components. It uses React hooks and an AuthContext context object to manage state and retrieve recipes from the API. It's an attractive and engaging way to introduce the app and its features to users.

# Register Page Component
- The Register component is a React functional component that renders a form for user registration. It manages state using hooks like useState, useCallback, useReducer, and useContext, and uses a validations object for form field validation. It also uses navigate and userLogin constants for authentication. The form has input fields for personal details like name, email, image URL, and password, and a submit button. The submitHandler function sends a request to the server to register the user and logs them in if successful. The changeHandler function updates the state when a user types in a form field.

# Login/Logout Page Component
-Login Component
- The Login component is a memoized functional component that displays a login form to the user. It uses hooks such as useContext, useNavigate, useReducer, and useState to manage state and handle user actions. It receives the userLogin function from AuthContext and uses navigate to redirect the user upon successful login. The submitHandler function checks for empty fields and authenticates the user using service.loginUser. It displays an error message using the Error component if there's an error.

-Logout component
- This is a React functional component called Logout that logs out the currently authenticated user by making an API call to the backend using the service object provided. It utilizes the useContext hook to access the AuthContext and get the current user and the userLogout function to update the authentication state when the user logs out. The component also uses the useNavigate hook to navigate the user back to the home page after they have logged out. The useEffect hook is used to navigate the user to the home page whenever userLogout changes.

# Catalogs Components for Recipes/Products
- Recipes Catalog
- The RecipesCatalog component is a functional component that displays a catalog of recipes. It uses the useContext hook to retrieve the getAllRecipes function from the AuthContext. The component manages state using the useState hook and sets a loading state to display a spinner while the recipes are being fetched.
The useEffect hook is used to fetch recipes from the API by calling getAllRecipes and setting the recipes state when the data is returned. If there are no recipes available, a message is displayed indicating this.
The component renders two links to other pages, a section to display the recipes, and either a spinner or a list of RecipeCatalogItem components based on the loading state. The RecipeCatalogItem component is used to display information about individual recipes.

- Catalog Products
- The ProductsCatalog component is a functional component that displays a catalog of products. It uses the useState, useContext, and useEffect hooks to manage state and fetch data. It also uses the PublicContext to access the getAllProducts function. The component displays a spinner while fetching data and renders a list of product items once the data is received. If there are no products, it displays a message. The component also includes links to switch between the products and recipes catalogs.

# Create components for Products/Recipes
- Create Recipes
- The code is a React functional component that creates a form for users to input recipe information. It uses React hooks such as useContext, useNavigate, and useReducer to manage the state of the form data. The component also validates user input before submitting the form and sends the data to a backend service via an API. The code also includes basic HTML structure, CSS classes, and inline styles for styling the form.

- Create Products
- This code is a React functional component called "CreateProduct", which creates a form for users to input information about a product, such as its title, type, image URL, nutrition information, and description. When the form is submitted, the data is sent to a server using a service, and the user is redirected to the catalog of products page. The component uses several React hooks, including useState, useReducer, useCallback, useContext, and useNavigate, and it also imports a CSS module and an image.

# Delete components for Products/Recipes
- Delete Products
-This is a React component called "Delete". It takes in some props, including closeHandler, title, type, deleteHandler, and _id. It uses the useContext hook to get the user's access token from AuthContext. It returns a JSX element with a modal that asks the user to confirm the deletion of an item, along with buttons to confirm or cancel the deletion.

- Delete Recipes
- This is a React functional component that renders a confirmation modal dialog for deleting an item. It receives several props including a close handler, title, type, delete handler, and item id. It also accesses the user object from the AuthContext. The component returns a backdrop and a modal container with a title, message, and two buttons to confirm or cancel the delete action. The confirm button triggers the delete handler passing the item id and the user access token.

# Edit components for Products/Recipes
- Edit Products
- This is a React component called "EditProduct". It renders a form that allows users to edit product information such as title, type, image URL, nutrition information, and description. It retrieves the product data from the server based on the product ID parameter in the URL. When the form is submitted, it sends the updated product data to the server for persistence. The component uses state hooks to manage the form data and navigation hooks to redirect the user to the product details page after editing.

- Edit Recipes
- This is a React functional component called EditRecipe that allows the user to edit a recipe. It uses the useState and useEffect hooks to manage state and fetch data, respectively. It also utilizes useContext and useNavigate hooks to manage authentication and navigate between pages. The component renders a form with input fields for the title, category, image URL, ingredients, and preparation. The user can edit the recipe details and submit the form, which will trigger a submitHandler function. The function will update the recipe in the database and navigate to the details page of the edited recipe.

# Password Reset
- The PasswordReset component is a React functional component that allows a user to reset their password. It uses several hooks and manages state using a reducer. The component renders a form that prompts the user to enter their email and, if the email exists, their new password and a confirmation of that password. The component also includes error handling for incorrect email addresses and displays error messages to the user as needed. Once the user has entered their information and clicked the submit button, the component sends the information to the server to reset the password.