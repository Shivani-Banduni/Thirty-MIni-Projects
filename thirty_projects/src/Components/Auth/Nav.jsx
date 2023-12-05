import React from 'react';
import './nav.css'
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
  
    const data=['Home', 'Product', 'Clothing']
    const { logout } = useAuth0();
const { loginWithRedirect } = useAuth0();
const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div className='main'>
           {data.map((e)=> {return <ul><li>{e}</li></ul>})} 

        {isAuthenticated ?  
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button> :

            <button onClick={() => loginWithRedirect()}>Login</button>

        }
{isAuthenticated ? <p>{user.name}</p>: null}
        </div>
    );
}

export default Nav;





// dev-wuwvj0t4vciyv1rc.us.auth0.com - domain
// 7nO1HT3tUQDvdDqivq5xuxAjCpFbqok4 - clinet