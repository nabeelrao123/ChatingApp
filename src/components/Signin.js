import React from "react";


const Signin = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const submithandler = () => {
        const data = { username, password }
    }

    return (
        <div className='h-screen flex bg-gray-bg1' >
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-16'>
                <h1 className='text-2xl font-bold text-primary mt-4 mb-12 text-center'>
                    SignIn
                </h1>
                <form>
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
                            type='password'
                            className={`w-full p-2 text-primary border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Enter your password'
                            onChange={(event) => setpassword(event.target.value)}
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
        </div>
    )
}

export default Signin;