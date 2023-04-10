import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
    const handleSubmit = () => {};

    return (
        <>
            <div className="flex flex-col justify-center items-center w-96 md:min-w-fit lg:w-[1000px] lg:h-[700px] mt-5">
                <h2 className="underline text-3xl font-bold mb-6 z-10">
                    Reset Password
                </h2>
                <div className="rounded-lg shadow-2xl px-20 py-6 w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-6"
                    >
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="code"
                                className="input input-bordered input-sm w-full border-2 border-[#014715]"
                            />
                        </div>
                        <div className="form-control items">
                            <button
                                type="submit"
                                className="w-full bg-[#03AA33] py-1 flex justify-center items-center text-center text-white font-semibold rounded-lg"
                            >
                                Reset
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

export default ResetPassword;