import './ProfilePage.css'
import { Link } from "react-router-dom";
import CustomList from "../../components/CustomList/CustomList";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 
  console.log("list", user)
  //set the user state

  //function to import the user model using axios

  //useEffect for initialization

  return (
    <div>
      <h1>My HybridBox Zone</h1>
      <h2>Hello, {user.name}</h2>
      <img src={user.image} alt="profilePic" className="profile-img"/>
      <p><button className='edit-btn'>Edit Profile</button></p>
     

      <p><b>My role:</b>{user.role}</p>
      <CustomList />
    </div>
  );
}

export default ProfilePage;
