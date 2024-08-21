import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Student() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5001/')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err))
    }, [])

    //delete request
    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:5001/student/' + id) // Send DELETE request to the server with the student ID
            window.location.reload() // Reload the page to reflect the changes
        }
        catch (error) {
            console.log(error) // Log any errors that occur during the deletion
        }
    }


    return (
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={'/create'} className='btn btn-success'>Add</Link>
                <thead>
                    <th>name</th>
                    <th>email</th>
                    <th>marks</th>
                    <th>grade</th>
                    <th>city</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {
                        students.map((student) => (
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.marks}</td>
                                <td>{student.grade}</td>
                                <td>{student.city}</td>
                                <td>
                                    <Link to={`update/${student.id}`} className='btn btn-primary'>update</Link>
                                    <button className='btn btn-danger ms-2' onClick={(e) => handledelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>


            </div>

        </div>
    )
}

export default Student