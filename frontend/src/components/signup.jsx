import React from 'react'
import GenderCheckBox from './gender/genderCheckBox'

const signup = () => {
    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center text-gray-300'>Sign Up <span className=' text-purple-500'>Now</span></h1>

                <form>
                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Abel Noa' className=' w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='abelnoa' className=' w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className=' w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className=' label p-2'>
                            <span className=' text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className=' w-full input input-bordered h-10' />
                    </div>

                    {/* Gender checkbox */}
                    <GenderCheckBox />

                    <a href="#" className=' text-sm hover:underline hover:text-blue-500 mt-2 inline-block pl-2.5'>Already have an account?</a>
                    <div>
                        <button className=' btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default signup