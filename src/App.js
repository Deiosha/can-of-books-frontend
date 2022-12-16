import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import { withAuth0 } from '@auth0/auth0-react';


import Profile from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router >
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element= {this.props.auth0.isAuthenticated && <BestBooks />} 
            >

            </Route>
            <Route path='/about' element={<Profile />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
