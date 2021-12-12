
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  console.log(user);

  //set the user state

  //function to import the user model using axios

  //useEffect for initialization

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name:{user.name}</p>
      <img src={user.profileImage} alt="profilePic"/>
     

      <p>{user.role}</p>

      <p>My HybridBox pack:{user.listOfChannels}</p>
    </div>
  );
}

export default ProfilePage;
