import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: null
    });

    const { name, email, password } = formData;
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        /* 
        blue colors
        bg: #d4f1f4
        text: #05445e
        hover: #189AB4
        extra: #75E6DA
     */
        <>
            <div className="flex flex-col justify-center items-center min-w-fit mt-5 container mx-auto max-w-md drop">
                <h2 className="text-3xl font-bold mb-6 text-[#05445e]">
                    Sign Up
                </h2>
                <div className="rounded-lg shadow-lg shadow-[#189AB4] p-8 w-full bg-white">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                    >
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered input-sm md:input-md w-full border-2"
                                id="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered input-sm md:input-md w-full border-2"
                                id="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="number"
                                placeholder="Password"
                                className="input input-bordered input-sm md:input-md w-full border-2"
                                id="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control items">
                            <button
                                type="submit"
                                className="w-full bg-[#d4f1f4] hover:bg-[#75E6DA] duration-300 flex justify-center items-center text-center text-[#05445e] font-semibold rounded-lg"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="form-control justify-center items-center mt-2">
                        <p className="text-[#05445e]">
                            Already have an account?{" "}
                            <Link to="/sign-in">
                                <span className="font-bold text-[]">
                                    Sign In
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
