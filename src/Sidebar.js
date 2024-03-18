// ResponsiveSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveSidebar = () => {
    return (
        <div className='col-2 p-0 m-0'>
            {/* Mobile */}
            {/* <div className="d-md-none">
                <nav className="navbar navbar-light p-0 bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Sidebar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <div className="collapse" id="sidebarCollapse">
                    <div className="bg-light">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* Desktop */}
            <div className="d-none d-md-block">
                <div className="d-flex flex-column bg-secondary p-3" style={{ height: '100vh', width: '280px' }}>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/marketing" className="nav-link fs-4 text-warning">Marketing</Link>
                        </li>
                        <li>
                            <Link to="/check-fg-inventory" className="nav-link fs-4 text-warning">
                                CHECK FG INVENTORY
                            </Link>
                        </li>
                        <li>
                            <Link to="/check-fg-inventory" className="nav-link fs-4 text-warning">
                                Report
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveSidebar;
