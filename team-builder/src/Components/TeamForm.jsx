import React, { useState } from "react";


const TeamForm = props => {
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
        //creates note 
        props.addNewNote(member)
        //resets inputs from fields
        setMember({ name: "", email: "", role: ""});

    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor='email'>E-mail</label>
            <input
                id='email'
                type='email'
                onChange={handleChanges}
                value={member.email}
            />
            <label htmlFor='role'>Role</label>
            <input
                id='role'
                type='text'
                onChange={handleChanges}
                value={member.role}
            />
            <button type='submit'>Add Member</button>
        </form>
     
    )
}
export default TeamForm;