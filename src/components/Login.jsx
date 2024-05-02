import banner from '../assets/banner.png'
import logo from '../assets/logo.png'

const Login = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: 'auto',
    };

    return (
        <div className='w-full h-full' style={backgroundImageStyle}>
            <div className='w-full h-screen flex lg:flex-row'>
                <div className='w-[55%] h-full font-code text-white justify-center flex flex-col px-24'>
                    <p className='text-center font-bold text-4xl mb-3'>LOGIN</p>
                    <label htmlFor="username" className="text-left font-semibold text-lg my-3">
                        USERNAME
                    </label>
                    <input type='text'
                        placeholder='Enter your username'
                        id='username'
                        className='p-3 rounded-md bg-white bg-opacity-15 backdrop-blur-sm text-lg mb-3' />
                    <label htmlFor='password' className='text-left font-semibold text-lg my-3'>
                        PASSWORD
                    </label>
                    <input type='password'
                        placeholder='Enter your password'
                        id='password'
                        className='p-3 rounded-md bg-white bg-opacity-15 backdrop-blur-sm text-lg mb-3' />
                    <button className='p-3 text-lg text-darker font-bold rounded-md bg-gradient-to-b from-light to-dark my-10'>SUBMIT</button>
                    <p className='text-center text-lg'>
                        Don't have an account? <span className='text-lightb font-semibold'>REGISTER</span>
                    </p>
                </div>
                <div className='w-[45%] p-10 text-white flex absolute top-0 right-0 items-center justify-end'>
                    <img src={logo} alt='Logo' className='w-8 mr-5' />
                    <p className='font-code font-bold text-2xl'>Happy Snippet</p>
                </div>
            </div>
        </div>
    )
}

export default Login