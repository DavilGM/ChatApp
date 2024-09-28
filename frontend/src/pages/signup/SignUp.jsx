import GenderCheckbox from "./genderCheckbox"
import { Link } from 'react-router-dom'
import { useState } from "react"
import useSignup from "../../hooks/useSignup";

const SignUp = () => {


    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    };
    return (
        <div className="flex flex-col items-center justify-center min-w-96 nx-auto ">
            <div className=" w-full p-6 shadow-md rounded-lg bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
                <h1 className="text-3xl front-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Full name
                            </span>
                        </label>
                        <input type="text"
                            placeholder="Enter Full Name"
                            className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Username
                            </span>
                        </label>
                        <input type="text"
                            placeholder="Enter Username"
                            className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Password
                            </span>
                        </label>
                        <input type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base  text-gray-300 label-text">
                                Confirm password
                            </span>
                        </label>
                        <input type="password"
                            placeholder="Enter Confirm Password"
                            className="w-full input mb-3 input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    {/* CHECK BOX HERE */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/Login" className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>

                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp