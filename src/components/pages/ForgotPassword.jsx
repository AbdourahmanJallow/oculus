import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [formData, setFormData] = useState({
        email: ""
    });

    const { email } = formData;

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = () => {};

    return (
        <>
            <div className="flex flex-col justify-center items-center min-w-fit mt-5 container mx-auto max-w-md">
                <h2 className="underline text-3xl font-bold mb-6">
                    Forgot Password
                </h2>
                <div className="rounded-lg shadow-lg p-8 w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-6"
                    >
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Confirm Email"
                                className="input input-bordered input-sm md:input-md w-full border-2"
                                id="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control items">
                            <button
                                type="submit"
                                className="w-full bg-[#03AA33] py-1 flex justify-center items-center text-center text-white font-semibold rounded-lg"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                    <div className="form-control w-full items-center mb-4">
                        <p className="mt-4">OR</p>
                    </div>
                    <div className="form-control">
                        <Link to="/sign-in">
                            <button
                                type="submit"
                                className="w-full bg-white py-1 flex justify-center items-center text-center text-[#03AA00] font-semibold rounded-lg border-2"
                            >
                                Back To Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
