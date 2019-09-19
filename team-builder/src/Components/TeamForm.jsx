import React, { useState } from "react";


const TeamForm = () => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "", 
    });
    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value });
        console.log(member);
    };

    const submitForm = e => {
        e.preventDefault();
        PaymentResponse.a
    }

    return (
        <div>
            <h1>Team Builder</h1>
        </div>
    )
}
export default TeamForm;