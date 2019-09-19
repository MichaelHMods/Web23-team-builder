import React, {useState} from "react";
import TeamForm from './Components/TeamForm';


const AppTest = () => {
    const [members, setMembers] = useState({
        name: "",
        email: "",
        role: "", 
    });

    const addNewMember = member =>{
        const newMember = {
            id: Date.now(),
            //date now will denote a unique id number
            name: member.name,
            email: member.email,
            role: member.role,
        };
        setMembers([...members, newMember]);
    }
    return (

        <div>
            <header>
                <h1 className="title">Build Your Team HERE!!!</h1>
            </header>
            <TeamForm addNewMember={addNewMember}/>
            <TeamCard members={members}/>

        </div>
    )
}

export default AppTest;