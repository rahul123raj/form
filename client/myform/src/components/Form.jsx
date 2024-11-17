import React, { useRef, useState } from 'react';
import '../assets/style/form.css';

const Form = () => {
  const [student, setStudent] = useState({});
  const formData = useRef();
  const [cnf, setcnf] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.current[0].value,
      email: formData.current[1].value,
      mobno: formData.current[2].value,
      address: formData.current[3].value,
      branch: formData.current[4].value,
    };

    setStudent(data);
    setcnf(true); // Show the preview after form submission
  };

  const handleclick = async (e) => {
    // e.preventDefault();

    await fetch('http://localhost:5000/form', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(student),
    });

    console.log('Data is posted');
  };

  const handlecancel = (e) => {
    e.preventDefault();
    setcnf(false); // Hide the preview table when canceled
  };

  return (
    <div className="form">
      <h1>Fill the Details</h1>
      <form onSubmit={handleSubmit} ref={formData}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Branch" />
        <input type="submit" value="Submit" />
      </form>

      {cnf && (
        <table>
          <thead>
            <tr>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{student.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <td>Mob No</td>
              <td>{student.mobno}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{student.address}</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>{student.branch}</td>
            </tr>
            <tr>
               <button onClick={handleclick}>OK</button>
              
                <button onClick={handlecancel}>Cancel</button>
              
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Form;
