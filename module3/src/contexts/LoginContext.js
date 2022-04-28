import React, { createContext, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constants';
import usePersistState from '../usePersistState';
// creating login context to store the values.
export const LoginContext = createContext();

function LoginContextProvider(props) {

    const defaultUser = {
        ccNumber: 0,
        ccName: "",
        userName: "",
        userId: "",
        availableRedeemPoints: 0,
        totalRewardsGained: 0,
        role: ""
    }

    // When initiating the new hook you need to pass a key for the store.
  // you can also optionally pass a default value which will be overwritten if the store already exists.
    const [loggedInUser, setLoggedInUser] = usePersistState('loggedInUser', defaultUser);
    const [ isLoggedIn, setIsLoggedIn] = usePersistState(false);

    //const [loggedInUser, setLoggedInUser] = useState(defaultUser)
    //const [ isLoggedIn, setIsLoggedIn] = useState(false);

    const setLoginUserDetails = (user) =>  {

        console.log("setting log in user details");
        setIsLoggedIn(true)
        
        setLoggedInUser( user);
           
    }

    const logoutUser = () => {

        setIsLoggedIn(false);
        setLoggedInUser(defaultUser);

    } 

    const refreshLoginDetails = async () => {

        let userId =  loggedInUser.userId
        let password = loggedInUser.password
        await axios.post(API_URL + 'ccuser/login', null, {headers: { authorization: 'Basic ' + window.btoa(userId + ":" + password) }, params:{userId:userId},})
        .then(response => {
            console.log(response);
            
            // updating the login context
            setLoginUserDetails(response.data.body)
           

        })
        .catch(error => {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('error', error.message);

            }
        

        })

    }

    return (
        <div>
            <LoginContext.Provider
                value={{ loggedInUser, 
                         isLoggedIn, 
                         setLoginUserDetails, 
                         logoutUser,
                         refreshLoginDetails
                        }}
            >
                {props.children}
            </LoginContext.Provider>
        </div>
    );

}

export default LoginContextProvider;