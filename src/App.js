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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://data.b-lost-dev.com/api-test/data-test-get').then((data) => setData(data.data))
//   }, []);

//   console.log(data);

//   return (
//     <></>
//   );
// }

// export default App;
