import React, { useState, useEffect } from 'react';

const Get_data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.b-lost-dev.com/api-data?g=test');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Post_data = () => {
  const [formData, setFormData] = useState({
    name: 'Test Name',
    email: 'Test Email',
    phone: 'Test Phone',
    address: 'Test Address',
    city: 'Test City',
    country: 'Test Country',
    postal_code: 'Test Postal Code',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log('formData:', formData);
    e.preventDefault();
    try {
      const response = await fetch('https://data.b-lost-dev.com/api-data?p=test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const jsonData = await response.json();
      setResponse(jsonData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h1>Submit Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="test" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
          <label>Postal Code:</label>
          <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response.message}</p>}
    </div>
  );
};

function App() {
  return (
    <div>
      <Get_data />
      <Post_data />
    </div>
  );
}

export default App;
