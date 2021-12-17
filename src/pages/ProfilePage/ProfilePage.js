import "./ProfilePage.css";
import CustomList from "../../components/CustomList/CustomList";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import "aos/dist/aos.css";
import Aos from "aos";

function ProfilePage() {
  // Get the value from the context
  const {  user} = useContext(AuthContext);
  
  
  //use effect for the scroll animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 
  //set the user state

  //function to import the user model using axios

  //useEffect for initialization

  return (
    <div className="profile-wrapper">
      <div data-aos="fade-right" className="profile-container">
        <div className="profile-page-title">
          <h1>My HybridBox Zone</h1>
        </div>
        <h2> {user.name}</h2>
        <img src={user.image} alt="profilePic" className="profile-img" />
        <br></br>
        {/* <Link to="/edit-profile"><button className='edit-btn'>Edit Profile</button></Link> */}
      </div>
      <aside data-aos="fade-left">
        <CustomList />

        {/*  <div className='prices-container'>
      <h4>Qty:</h4>
      <h4>Discount:</h4>
      <h4>Total Price:</h4>
      </div> */}

        <div className="checkout">
          <button className="checkout-btn">Checkout</button>
        </div>
      </aside>
    </div>
  );
}

export default ProfilePage;
