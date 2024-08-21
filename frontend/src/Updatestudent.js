import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function Updatestudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [marks, setMarks] = useState('')
    const [grade, setGrade] = useState('')
    const [city, setCity] = useState('')
    const { id } = useParams();
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.put('http://localhost:5001/update/' + id, { name, email, marks, grade, city })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit function */}
                        <h2>Update Student</h2>
                        <div className='mb-3'>
                            <label>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={name} // Bind input value to name state
                                onChange={(e) => setName(e.target.value)} // Update name state when input changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                value={email} // Bind input value to email state
                                onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Marks</label>
                            <input
                                type='text'
                                className='form-control'
                                value={marks} // Bind input value to marks state
                                onChange={(e) => setMarks(e.target.value)} // Update marks state when input changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Grade</label>
                            <input
                                type='text'
                                className='form-control'
                                value={grade} // Bind input value to grade state
                                onChange={(e) => setGrade(e.target.value)} // Update grade state when input changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>City</label>
                            <input
                                type='text'
                                className='form-control'
                                value={city} // Bind input value to city state
                                onChange={(e) => setCity(e.target.value)} // Update city state when input changes
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Update</button> {/* Button to submit the form */}
                    </form>
                </div>
            </div>
            

        </div>
    )
}

export default Updatestudent;