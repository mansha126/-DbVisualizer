import React from 'react'
import { useState, useEffect } from 'react';

const ShowManager = () => {

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    // for holding user data to update
    // const [userFormData, setUserFormData] = useState(null);
    
    // to show or hide update form
    // const [showForm, setShowForm] = useState(false);

    // this will fetch user data from backend
    const getDataFromBackend = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:5000/shows/getall');
        const data = await response.json();
        console.log(data);
        setUserList(data);
        setLoading(false);
    }



    // Effect Hook
    // this will tell react what to do when component opens
    useEffect(() => {
      getDataFromBackend();
    }, []);
    const deleteUser = async (id) => { 
        console.log(id);
        const response = await fetch('http://localhost:5000/shows/delete/'+id, {method : 'DELETE',})
        if(response.status === 200){
            console.log('user deleted');
            // toast.success('User Deleted 😎');
            getDataFromBackend();
        }
     }

    const displayUsers = () => {
        if (loading) {
            return (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            );
          } 
          else{
        return <table className='table bg-white'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Views</th>
                    <th>Reviews</th>
                    <th>Publisher</th>
                    <th>Created At</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (users) => (
                        <tr>
                            <td>{users._id}</td>
                            <td>{users.title}</td>
                            <td>{users.views}</td>
                            <td>{users.reviews}</td>
                            <td>{users.publisher}</td>
                            <td>{new Date(users.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={ (e) => deleteUser(users._id) }>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                            
                        </tr>
                    ) )
                }
            </tbody>
        </table>
    }
    }
  return (
    <div className='container-fluid'>
        <h1 className='text-center'>Show Manager</h1>
        <div className="row">
            <div className="col-md">
                {displayUsers()}
            </div>
           
        </div>
    </div>
  )
}

export default ShowManager;