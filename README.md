# applyYourSelf-Job-Tracker
Full stack MERN Project.

-Used NPM to add normalized CSS and styled-components to provide cross browser consistency, prevent name collisions, and allow stylizing of entire react components using wrappers.

-Used React Router to allow for the website to be a multi-page application.  Set up routes for if user is logged in, a registration page, a landing page, and a catch all error page for URLs not defined.

-Added an isMember function to toggle FormRow components on the login/register screen. Utilized conditional rendering with inline ternarny operators to display different form fields if the user is already registered and can log in, or needs to register.

-Set up a global context using createContext and a useContext hook to pass values deep into the component tree.  This allows the alert function to be used globally as oppossed to passed to each prop.



<img src="https://user-images.githubusercontent.com/91037796/171723508-c90523fd-f41f-4338-a6f5-f372adc5fc66.png" width=50% height=50%>


-Used a reducer (a function that take the current state and an action as arguments, and return a new state result) and dispatch functions to enable alerts to show and clear after a brief period of time (user not inputting all values into the form, etc.)


<img src="https://user-images.githubusercontent.com/91037796/171750486-4053e32c-028b-4690-9281-7f4e01e18475.png" width=50% height=50%>

-Used Postman to test APIs and express routes for user authentication and connecting to the MongoDB database:

<img src="https://user-images.githubusercontent.com/91037796/183325705-55763bc2-b43c-4a8e-979b-8e4235bf6c1e.png" width=50% height=50%>



-Created a user model to with Mongoose schema for use with MongoDB.  Used a validator package from npm to validate the email.  Ensured the email is unique with the "unique: true" property in the userSchema, and used the error handler to display a message if the email field is not unique (already in the MongoDB database).

<img src="https://user-images.githubusercontent.com/91037796/178848537-40aae12d-bdfa-48e5-9989-2e555298968b.png" width=50% height=50%>

-Implemented password hashing in MongoDB with npm package bcryptjs to protect user data in the event the databse information was ever compromised by a malicious party. Also used npm to install packages such as express-async-errors  to avoid numerous try/catch statements for controllers, and http-status-codes to prevent hard coding of status codes.  


<img src="https://user-images.githubusercontent.com/91037796/183325614-c074d5f1-ce97-422f-a2ba-c98fb3eaa92b.png" width=50% height=50%>
<img src="https://user-images.githubusercontent.com/91037796/183319400-f7021d38-2803-4d15-8717-6fb85a86077e.png" width=50% height=50%>


-Implemented JSON Web Token (JWT) using npm package jsonwebtoken for user authentication and to prevent unauthorized users from accessing pages.


-Used npm install package concurrently to be able to run the front end and back end of the application at the same time.  

<img src="https://user-images.githubusercontent.com/91037796/183328759-5d8a11d8-3389-4ab9-a158-9a0a3d729d1e.png" width=50% height=50%>

