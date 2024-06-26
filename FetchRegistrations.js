import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Style.css';
const FetchRegistrations = () => {
    
    const [formData, setFormData]=useState({ name:'', task:'', email:'', password:''})
    const [res, setRes] = useState([])

    const fetchData= async ()=>{ 
      await axios.get('http://localhost:8080/retrive',
      {headers:{
        "authorization":`Bearer ${localStorage.getItem("token")}`,
        "Accept":"application/json",
        "Content-Type":"application/json"
      }})

      .then(response=>{ 
         setRes(response.data) 
         console.log(Response.data) 
      })} 
      useEffect(()=>{ 
       fetchData() 
      }, 
       [])


 const updateData=async(id)=>{ 
      console.log(id) 
      const res=await axios.put(`http://localhost:8080/users/${id}`, formData) 
      fetchData(); 
      console.log(res.data) 
      } 
  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:8080/users/${id}`,)
    .then(response=>{
      console.log(response.data)
    })
    fetchData()
  }
    const changeHandler=(e)=>{ 
        setFormData({ ...formData, [e.target.name]: e.target.value}); 
      };   



   
  return (
    <div style={{backgroundColor:'white'}}><center><h1>Registrations Details</h1>
    <table style = {{width: '70%', color:'black', backgroundColor:'pink'}}border={50}>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Password</th>
        <th>Update Details</th>
      </tr>
      {
        res.map((item, index) => (
          <tr key={index}>
            {/* <td>{item._id}</td> */}
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td> 
                <input type='text' name='name'  
                placeholder='New Name'  
                onChange={changeHandler}/> 
                <input type='text' name='role'  
                placeholder='New Role'  
                onChange={changeHandler}/> 
                <input type='text' name='email'  
                placeholder='New Email'  
                onChange={changeHandler}/> 
                <input type='password' name='password'  
                placeholder='New Password'  
                onChange={changeHandler}/> 
                <button onClick={()=>updateData(item._id)}>update</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>handleDelete(item._id)}>delete</button> 
            </td>
          </tr>
        ))
      }
    </table>
    </center>

{/*     
    {JSON.stringify(res)} */}

    </div>
  )
}

export default FetchRegistrations;