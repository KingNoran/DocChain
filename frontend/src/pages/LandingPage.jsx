import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-[10rem] leading-none font-bold mt-20">
                Doc. Chain
            </h1>
            <p className="text-2xl m-3  font-semibold">
                Welcome to Doc. Chain!
            </p>
            <input
                className="border-2 m-8 border-solid border-black w-96 px-3 py-2 text-xl rounded-3xl text-center"
                type="text"
                placeholder="Public key"
            />
            <button className="bg-black text-white font-semibold text-2xl mb-32 border-2 border-solid border-black px-7 py-1 rounded-3xl hover:bg-white hover:text-black">
                Enter
            </button>
            <Link to="/login">
                <p className="hover:text-slate-700 font-semibold text-lg">Account Login</p>
            </Link>
        </div>
    );
};

export default LandingPage;
