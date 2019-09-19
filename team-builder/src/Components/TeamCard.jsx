import React from 'react';

const TeamCard = props => {
    console.log("TEAM CARD PROPS", props.members)
    return (
        <>
            {props.members.map(member => (<div className="member" key={member.id}>
                <h2>{member.name}</h2>
                <h5>{member.email} </h5>
                <p>{member.role} </p>
            </div>
                )) }
        </>
    );
};
export default TeamCard;