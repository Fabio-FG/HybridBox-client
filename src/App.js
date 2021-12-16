import "./App.css";
import { Routes, Route } from "react-router-dom";
import "animate.css/animate.min.css";

import Navbar from "./components/Navbar/Navbar";
//import pages
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import ChannelListPage from "./pages/ChannelListPage/ChannelListPage";
import ChannelDetailPage from "./pages/ChannelDetailsPage/ChannelDetailsPage";
import StreamDetailPage from "./pages/StreamDetailPage/StreamDetailPage";
import Footer from "./components/Footer/Footer";
import EditProfilePage from "./pages/EditProfilePage/EditProfilePage";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
        <Route path="/edit-profile" element={<IsPrivate> <EditProfilePage /> </IsPrivate>} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        
        <Route path="/channels" element={<ChannelListPage />} />
        <Route path="/channels/:channelId" element={<ChannelDetailPage /> } />
        <Route path="/streams/:streamId" element={<StreamDetailPage />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
