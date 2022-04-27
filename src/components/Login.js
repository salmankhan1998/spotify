import React from "react";
import { loginUrl } from "./spotify";

const Login = () => {
     return(
         <div className='login'>
            <div className='logo'>
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify icon" />
            </div>
            <a href={loginUrl}>Login with spotify</a>
         </div>
     );
};

export default Login;