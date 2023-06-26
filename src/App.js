
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
import FlightDetails from './profile/flightdetails/flightdetails';

import HotelSearch from './hotels/Hotelsearch';
import HotelList from './hotels/hotel_list/HotelList';
import HotelDetails from './hotels/hotel_details/hotelDetails';
import HotelProfileDetails from './profile/hotelsdetails/hoteldetails';
import HotelTicket from './profile/hotelticket/hotelTicket';
import FlightTicketDetails from './profile/flightticket/flightticket';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route path='/profile/flights/:id' element={<FlightTicketDetails/>}/>
        <Route path='/profile/hotels/:id' element={<HotelTicket/>}/>
        <Route path="/profile/flights" element={<FlightDetails />} />
        <Route path="/profile/hotels" element={<HotelProfileDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flight" element={<FlightSearch />} />
        <Route path="/flight/search" element={<FlightList />} />
        <Route path="/flight/search/:id" element={<FlightTicket />} />
        <Route path="/hotel" element={<HotelSearch />} />
        <Route path="/hotel/search" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
