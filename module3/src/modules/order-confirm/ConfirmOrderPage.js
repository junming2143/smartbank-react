import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmOrder() {

    let navigate= useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("OrderConfirm") === null){
            navigate("/")
        }
        else{
            sessionStorage.removeItem("OrderConfirm")
        }
    }, [])

    return (

            <div className="container mt-5" style={{ textAlign: "center", justifyContent: "center" }}>
                <h5 style={{ color: "green" }}>
                    <i className="fas fa-check-circle"></i>&nbsp;
                    Congratulations. You have successfully redeemed your points.<br></br>
                    You will receive your vouchers in your registered mail id.

                </h5>
                <br></br>
                <h6 style={{ color: "green" }}>Redirecting to homepage...</h6>
            </div>
        
    )
}
export default ConfirmOrder