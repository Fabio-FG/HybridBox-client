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
    <div className='profile-wrapper'>
    <div className='profile-container'>
      
    <div className='profile-page-title'>
      <h1>My HybridBox Zone</h1>
    </div>
      <h2>Hello, {user.name}</h2>
      <img src={user.image} alt="profilePic" className="profile-img"/>
      <p><button className='edit-btn'>Edit Profile</button></p>
     

      <p><b>My role:</b>{user.role}</p>
    </div>
      <aside>
      <CustomList />
      <hr></hr>
      <div className='prices-container'>
      <h4>Qty:</h4>
      <h4>Discount:</h4>
      <h4>Total Price:</h4>
      </div>

      <div className='checkout'>
        <button className='checkout-btn'>Checkout</button>
        
      </div>
      </aside>
    </div>
  );
}

export default ProfilePage;
