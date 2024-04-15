# Instructions

## User Authentication

authUtils.js

- [ ] implement functions

blogUtils.js

- [ ] add token to createEntry -function (you should get the token from localStorage)

useUserContext.js

- [ ] add state for token, user, isAuthenticated, loadingAuthRequest
- [ ] add states and setters to the provider

Login.jsx

- [ ] import loginUser and pass it to `<AuthForm/>`

Register.jsx

- [ ] import registerUser and pass it to `<AuthForm/>`

AuthForm.jsx

- [ ] receive inputList and request-function as props
- [ ] get relevant values from the useUserContext (setToken, setIsAuthenticated, setLoadingAuthRequest)
- [ ] implement handleSubmit function

App.jsx

- [ ] get relevant values from useUserContext (token, setToken, setUser, setIsAuthenticated, isAuthenticated, setLoadingAuthRequest)
- [ ] get the token from localStorage and validate it; you need to use the getUser function to do so

CreateForm.jsx

- [ ] import createEntry - function
- [ ] finish handleSubmit function

Navbar.jsx

- [ ] get relevant values from useUserContext (setToken, setUser, setIsAuthenticated, isAuthenticated)
- [ ] implement logout function; remove token from localstorage, clear states and navigate to home
- [ ] conditionally render Navlinks based on whether your are logged in

Dashboard.jsx

- [ ] get relevant values from useUserContext (user);
- [ ] add a useEffect and fetch the entries written by the user

Protext.jsx

- [ ] add a component to prevent users from accessing a page they should not be able to see. (Dashboard, Create)
- [ ] adjust the links in the navbar
