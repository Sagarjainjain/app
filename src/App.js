
import './App.css';

import Login from './auth/login/login';
import Signup from './auth/signup/Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import ProfilePage from './profile/Profile';
// import FlightDetails from './profile/flightdetails/flightdetails';
// import HotelDetails from './profile/hotelsdetails/hoteldetails';
import FlightTicket from './flights/FlightTicket/FlightTicket';
// import Accordian from './components/accordian/Accordian';
import FlightList from './flights/flightsList/FlightList';
import FlightSearch from './flights/Flight_search.jsx/FlightSearch';
import HomePage from './homepage/homepage';
// import HotelSearch from './hotels/Hotelsearch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flight" element={<FlightSearch />} />
        <Route path="/flight/search" element={<FlightList />} />
        <Route path="/flight/search/ticket" element={<FlightTicket />} />
      </Routes>
    </BrowserRouter>

    // <Accordian/>
    // <Login/>
    // <FlightTicket/>
    //<Signup/>
    // <ProfilePage/>
    // <FlightDetails/>
    // <HotelDetails/>
    // <HotelSearch/>
    // <InputAccord/>
  );
}

export default App;
