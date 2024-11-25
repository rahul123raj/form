import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/style/form.css'

const Update = () => {
    let navigate = useNavigate()
    let updateform = useRef()
    let [upimg,setupimg] = useState(null)
    let [cnf,setcnf] = useState(true)

    let {id} = useParams()

    let handleimg = (e) =>{
        let img = URL.createObjectURL(e.target.files[0])
        console.log(img)
        setupimg(img)
        setcnf(false)
    }
    
    //! get method
    let [olddata, setolddata] = useState([{
        imgurl: '',
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

        console.log(updateform)
        let formdata = new FormData()
        formdata.append('file',updateform.current[0].files[0])
        formdata.append('name',updateform.current[1].value)
        formdata.append('email',updateform.current[2].value)
        formdata.append('mobno',updateform.current[3].value)
        formdata.append('address',updateform.current[4].value)
        formdata.append('branch',updateform.current[5].value)

        await fetch(`http://localhost:5000/form/${id}`,{
            method: 'PATCH',

            body: formdata,
        })


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
            <div className="updatepic">
                <img src={cnf ? olddata[0].imgurl : upimg} alt="" width="150px" height="150px" />
                <label htmlFor="photo">Edit</label>
                <input type="file" id="photo" accept="image/*" onChange={handleimg} />
            </div>
            <div className="inputs">
                <input type="text" defaultValue={olddata[0].name} />
                <input type="text" defaultValue={olddata[0].email} />
                <input type="text" defaultValue={olddata[0].mobno} />
                <input type="text" defaultValue={olddata[0].address} />
                <input type="text" defaultValue={olddata[0].branch} />
                <div className="btn">
                    <button type='submit' >Update</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Update