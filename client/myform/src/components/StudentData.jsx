import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
        <h1>Studets Details</h1>
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
                    
                    <button onClick={() => handleEdit(_id)}>Edit</button>
                    <button onClick={()=> handleDelete(_id)}>Delete</button>
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