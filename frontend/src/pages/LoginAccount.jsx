import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

const LoginAccount = () => {
    const { role } =  useParams();

    return (
        <div className='p-5'>
            <BackButton destination="/login" />   
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl m-16 font-semibold">
                    Welcome {role.charAt(0).toUpperCase() + role.slice(1)}!
                </h1>
                <div className='flex flex-col gap-5 items-center px-10 py-7 border-2 border-black rounded-lg '>
                    <input className='p-1.5 border-2 w-72 border-black rounded-3xl' type='email' placeholder='Email' />
                    <input className='p-1.5 border-2 w-72 border-black rounded-3xl' type='password' placeholder='Password' />
                    <button className="w-36 bg-black text-white font-semibold text-2xl border-2 border-solid border-black px-7 py-1 rounded-3xl hover:bg-white hover:text-black">
                        Enter
                    </button>
                </div>
            </div>         
        </div>
    );
}

export default LoginAccount