# Create React App using vite
- Configure tailwind CSS
- Set up Github Repository

# Component Structure 
- In Body Component - if path "/" - Login Component
- In Body Component - if path "/browse" - Browse Component
- Main
  - App
     - Body
        - Login ["/"]
           - Header 
        - Browser ["/browse"]


- Login Component - Aded Header Component plus Sign In Form as well as Sign up form
- Form Validation
- useRef Hook
- Setup FireBase and deploy firebase and have a live url for the site.
- Signup/Signin authentication using firebase - Now, once Signed Up - Inputs are validated and the validated users will get added into firebase console. And they can log in successfully using their credentials.
- After authentication we will get a user object. Now create a Redux Store and store that object into the store.
- Signout authentication using firebase.

# Build a Redux Store
- Create a store using configureStore()
- Create a Slice having the reducers and actions using createSlice.
- Attach the user slice created to the store using configurestore()
- Provide the store created to the Body Component in App.jsx using <Provider />
- When user signs up a form, dispatch an action which calls the reducer function to add the user details to the Redux Store.
- When user signs out, dispatch an action which calls the reducer function to remove the user details from teh redux store.
