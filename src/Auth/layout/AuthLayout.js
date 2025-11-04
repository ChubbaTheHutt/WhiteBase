import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {

    return(
        <div className='auth-layout'>
            <div className='auth-bubble'>
                <Outlet />

                <Link to='/home'>Cancel</Link>
            </div>
        </div>
    )
}

export default AuthLayout;