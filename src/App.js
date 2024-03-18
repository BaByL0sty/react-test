// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './component/Home';
import Marketing from './component/Marketing';

// Default Timezone Asia/Bangkok
import moment from 'moment';
import 'moment-timezone';
moment.tz.setDefault('Asia/Bangkok');

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-10 p-4">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/marketing" element={<Marketing />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router >
  );
}

export default App;