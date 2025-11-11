import { Outlet, Link, useLocation } from 'react-router-dom';

const AuthLayout = () => {

    const location = useLocation();
    

    return(
        <div className='auth-layout'>
            <div className='auth-bubble'>
                <form className='auth-form'>
                    <Outlet />
                    <button type='submit'>
                        {location.pathname ==='/login' ? 'login' : 'register'}
                    </button>
                </form>

                { location.pathname === '/login' && 
                    <button>
                        <Link to="/register">Don't have an account? Register Here</Link>
                    </button>}
                { location.pathname === '/register' && 
                    <button>
                        <Link to="/login">Already have an account? Login</Link>
                    </button>}
                <button>
                    <Link to='/home'>Back to Home...</Link>
                </button>
            </div>
        </div>
    )
}

export default AuthLayout;