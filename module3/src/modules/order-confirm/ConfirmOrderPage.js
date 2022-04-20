import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { Link } from 'react-router-dom';

function ConfirmOrder() {

    const { isLoggedIn } = useContext(LoginContext);


    return (

        isLoggedIn ?
            (
                <div className="container mt-5" style={{ textAlign: "center", justifyContent: "center" }}>
                    <h5 style={{ color: "green" }}>
                        <i className="fas fa-check-circle"></i>&nbsp;
                        Congratulations. You have successfully redeemed your points.<br></br>
                        You will receive your vouchers in your registered mail id.

                    </h5>
                    <br></br>
                    <h6 style={{ color: "green" }}>Redirecting to homepage...</h6>
                </div>
            ) :
            (
                <div className="mt-5">
                    Please Sign in to redeem your points. &nbsp; &nbsp;
                    <Link className="btn btn-primary" to="/login">
                        <i className="fas fa-user" />&nbsp; Sign in

                    </Link>
                </div>
            )
    )
}
export default ConfirmOrder