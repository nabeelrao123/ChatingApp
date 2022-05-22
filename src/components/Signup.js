import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from '../src/Header';
import axios from 'axios';
import { data } from 'autoprefixer';


function Signup() {

    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const submithandler = () => {
        const data = { name, username, email, password, confirmpassword }
        postdata(data);
    }
    const postuser = async (obj) => {
        try {
            const response = await axios.post("", obj)
            console.log(error)
        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <div className='h-screen flex bg-gray-bg1' >
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-16'>
                <h1 className='text-2xl font-bold text-primary mt-4 mb-12 text-center'>
                    SignUp
                </h1>
                <form>
                    <div>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Enter your name'
                            onChange={(event) => setname(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Enter your username'
                            onChange={(event) => setusername(event.target.value)}
                            required

                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Enter your email'
                            onChange={(event) => setemail(event.target.value)}
                            required

                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Enter your password'
                            onChange={(event) => setpassword(event.target.value)}
                            required

                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confirmpassword'
                            placeholder='Confirm password'
                            onChange={(event) => setconfirmpassword(event.target.value)}
                            required

                        />
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <button
                            type="submit"
                            class="inline-block rounded-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={submithandler}
                        >
                            Submit
                        </button>          </div>
                </form>
            </div>
        </div>);
}

export default Signup;
