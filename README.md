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
        - Browse ["/browse"]
           - Header
           - MainComponent
             - VideoBackground
             - VideoTitle
           - SecondaryComponent  


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

# Authentication
- Authentication should work for logged in/logged out users. ie., logged out users should not get access for the browse page and vice versa.[Add onAuthChange code inside header component and use navigate function]

# unsubscribe
- Unsubscribe the onAuthStateChanged() Function whenever the component[Header] unmounts. This is the best practice.

- Use constants.js for all the hard coded string  values. [Best Practice]

# Browse Page
- Create Account on RapidAPI and subscribe to the database you want. We have subscribed to the IMDB database which provide us the list of most popular 100 movies.
- create API_OPTIONS under constants file.
- Fetch the API using the API URL.
- Create redux store for the movies which stores the movies list details.
- Dispatch an action to add movies list which we get from the API call - on the redux store.
- Here due to overlimit usage of the API call on Rapid API, we have used omdbapi - which gives us a simple list of movie details.
- For this api - no just create a user account and get the api key in our email address. And use that api key to call the api and you will get the list of movies.
- After that - store that movie list in the redux store we previously created.

# Components under Browse Page
- Main Component - VideoBackground and VideoTitle Components
- Pass the video id to VideoBackground Component.
- Pass the title to the VideoTitle Component from the moviesList data [Read it using useSelector]
- So we have created the main video in our browse page.