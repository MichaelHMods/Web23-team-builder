import React, {useState} from "react";
import TeamForm from './Components/TeamForm';


const AppTest = () => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "", 
    });

    const addNewMember
    return (
        <div>
            <header>
                <h1 className="title">Build Your Team HERE!!!</h1>
            </header>
            <TeamForm/>

        </div>
    )
}

export default AppTest;