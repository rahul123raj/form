import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/style/studentData.css'

const StudentData = () => {

  let navigate = useNavigate()
let [data , setData] = useState([])
// let [iddata , setIdata] = useState({})

useEffect(()=>{
  fetch('http://localhost:5000/form')
  .then(data => data.json())
  .then(res => setData(res.payload))
},[data])



  // console.log(data)

  let handleDelete =async (id) =>{
    await fetch(`http://localhost:5000/form/${id}`, {
      method: 'Delete',
    });
  }

let handleEdit = async (id) =>{
  navigate(`/studentdata/update/${id}`)
}

  return (
    <>
      <div className="table">
        <div className="heading">
        <h1>Students Details</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>srno</th>
              <th>name</th>
              <th>email</th>
              <th>mobile no</th>
              <th>address</th>
              <th>branch</th>
              <th>actions</th>
            </tr>
          </thead>
          
          <tbody>
            {
              data.map((elem,i)=>{
                let {name,mobno,email,address,branch,_id} = elem

                return(
                  <tr>
                  <td>{i+1}</td>
                  <td>{name}</td>
                  <td>{mobno}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{branch}</td>
                  <td>
                    
                    <button id='edit' onClick={() => handleEdit(_id)}>Edit</button>
                    <button id='delete' onClick={()=> handleDelete(_id)}>Delete</button>
                  </td>
                  </tr>
                )
              })
            }
          </tbody>
        
        </table>
      </div>


    </>
  )
}

export default StudentData