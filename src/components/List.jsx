import React from "react";

const List = () => {
  const names = ["bipul", "andrew", "jake"];
  const bike = ["bmw", "mt15", "ns200"];

  const info = [
    {
        id :1,
        name : 'bruce',
        age :24,
        skills : 'reactjs'
    },
    {
        id :2,
        name : 'jon',
        age :20,
        skills : 'mongodb'
    },
    {
        id :3,
        name : 'bipul',
        age :19,
        skills : 'sql'
    }
  ]


  return (
    <>
    <div className="list-div">
      <div>
        {names.map((name) => (
          <h4>{name}</h4>
        ))}
      </div>

      <div>
        {bike.map((bikes) => (
          <h4>{bikes}</h4>
        ))}
      </div>

      
    </div>
    <div>
        {info.map(people => 
         <h2 style={{color:'green'}} key={people.name}>my name is  {people.name} iam {people.age} years old iam a {people.skills} devloper</h2>   
            )}
    </div>
    </>
  );
};

export default List;
