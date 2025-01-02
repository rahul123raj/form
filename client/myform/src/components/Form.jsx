import React, { useRef, useState } from "react";
import "../assets/style/form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [student, setStudent] = useState({});
  const formData = useRef();
  const [cnf, setcnf] = useState(false);
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.current[1].value;

    const capitalizeName = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const data = {
      photo: formData.current[0].files[0]
        ? URL.createObjectURL(formData.current[0].files[0])
        : null,
      name: capitalizeName,
      email: formData.current[2].value,
      mobno: formData.current[3].value,
      address: formData.current[4].value,
      branch: formData.current[5].value,
    };

    setStudent(data);
    setcnf(true); // Show the preview after form submission
  };

  const handleclick = async (e) => {
    try {
      // e.preventDefault();
      setBool(true);
      let { name, email, mobno, address, branch } = student;
      let formdata = new FormData();
      formdata.append("file", formData.current[0].files[0]);
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("mobno", mobno);
      formdata.append("address", address);
      formdata.append("branch", branch);

      await fetch("https://form-m5lt.onrender.com", {
        method: "POST",
        body: formdata,
      });

      console.log("Data is posted");

      navigate(`/studentdata`);
    } catch (error) {
      console.log(error);
    } finally {
      setBool(false);
    }
  };

  const handlecancel = (e) => {
    e.preventDefault();
    setcnf(false); // Hide the preview table when canceled
  };

  // console.log(URL.createObjectURL(formData.current[0].files[0]))

  return (
    <div className="form">
      <form onSubmit={handleSubmit} ref={formData}>
        <h1>Fill the Details</h1>
        <div className="pic">
          <label for="photo">Upload Passport Size Photo:</label>
          <input type="file" accept="image/*" id="photo" required/>
        </div>
        <input type="text" placeholder="Name" required/>
        <input type="text" placeholder="Email" required/>
        <input type="text" placeholder="Mobile Number" required/>
        <input type="text" placeholder="Address" required/>
        <input type="text" placeholder="Branch" required/>
        <button type="submit">Submit</button>
      </form>

      {cnf && (
        <div className="preview">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>photo</td>
                <td>
                  <img
                    src={student.photo}
                    alt="student pic"
                    width="150px"
                    height="150px"
                  />
                </td>
              </tr>
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
            </tbody>
          </table>
          <div className="btns">
            <button id="ok" onClick={handleclick}>
              {bool ? "Loading..." : "OK"}
            </button>
            <button id="cancel" onClick={handlecancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
