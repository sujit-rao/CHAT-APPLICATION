import React, { useState } from 'react'
import GenderCheckBox from './gender/genderCheckBox'
import { Link } from 'react-router-dom'

const signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }
    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center text-gray-300'>Sign Up <span className=' text-purple-500'>Now</span></h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Abel Noa' className=' w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='abelnoa' className=' w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className=' w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className=' w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    {/* Gender checkbox */}
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to={'/login'} className=' text-sm hover:underline hover:text-blue-500 mt-2 inline-block pl-2.5'>Already have an account?</Link>
                    <div>
                        <button className=' btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default signup;