// Marketing.js
import React, { useState, useEffect } from 'react';

const Marketing = () => {

    const [data, setData] = useState([]);

    // Get Hostname
    var api_url = 'https://data.b-lost-dev.com/api/data'; // Production

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api_url);
                // If Response error
                if (response.error) {
                    throw new Error('Failed to fetch data');
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData); // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Run this effect only once on component mount

    return (
        <div className='row'>
            {/* Title */}
            <div className='col-9'>
                <div className='row'>
                    {/* Input File And Button */}
                    <div className='col-12 pb-4'>
                        <div className='row g-3'>
                            <div className='col-1 text-end pt-2'>
                                <span>Upload File :</span>
                            </div>
                            <div className='col-4'>
                                <input type='file' className='form-control' />
                            </div>
                            <div className='col-2'>
                                <button type='button' className='btn btn-secondary'>Upload</button>
                            </div>
                        </div>
                    </div>

                    {/* Search from */}
                    <div className='col-12'>
                        <div className='row g-3'>

                            <div className='col-1 text-end pt-2'>
                                <span>Search :</span>
                            </div>
                            <div className='col-3'>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">
                                            <i className="bi bi-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-1 text-end pt-2'>
                                <span>Catalog :</span>
                            </div>
                            <div className='col-3 p-0'>
                                <select className='form-select' id='inputGroupSelect01'>
                                    <option defaultValue>Modal</option>
                                    <option value='1'>One</option>
                                    <option value='2'>Two</option>
                                    <option value='3'>Three</option>
                                </select>
                            </div>

                            <div className='col-1 text-end'>
                                <button type='button' className='btn btn-secondary'>Search</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Date Range */}
            <div className='col-3'>
                <div className='row justify-content-end'>
                    <div className='col-6 me-5'>
                        <div className="input-group">
                            {/* Default Date Now */}
                            <input type="date" className="form-control" ></input>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Order Management */}
            <div className='col-12'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Marketing;