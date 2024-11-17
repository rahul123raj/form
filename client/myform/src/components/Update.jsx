import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let navigate = useNavigate()
    let updateform = useRef()

    let {id} = useParams()

    
    let [olddata, setolddata] = useState([{
        name: '',
        email: '',
        mobno: '',
        address: '',
        branch: '',
}])

    useEffect(()=>{
        fetch(`http://localhost:5000/form/${id}`)
        .then(data => data.json())
        .then(res => setolddata(res.payload))
      },[id])

    //   console.log(olddata[0])
 
    let  handleupdate = async (e) =>{
        e.preventDefault()
        let data = {
            
            name:updateform.current[0].value,
            email:updateform.current[1].value,
            mobno:updateform.current[2].value,
            address:updateform.current[3].value,
            branch:updateform.current[4].value
        }

        await fetch(`http://localhost:5000/form/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        })

        console.log(data)

        alert(`your is updated successfully`)
        navigate(`/studentdata`)
    }

    let handleCancel = () =>{
        navigate(`/studentdata`)
    }
    
  return (
    <>
        <div className="update">
            <h1>Edit your details</h1>
            <form action="" ref={updateform} onSubmit={handleupdate}>
                <input type="text" defaultValue={olddata[0].name} />
                <input type="text" defaultValue={olddata[0].email} />
                <input type="text" defaultValue={olddata[0].mobno} />
                <input type="text" defaultValue={olddata[0].address} />
                <input type="text" defaultValue={olddata[0].branch} />
                <button type='submit' >Update</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    </>
  )
}

export default Update