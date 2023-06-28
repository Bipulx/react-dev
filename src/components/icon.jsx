import React from "react";
import { FaFacebookSquare,FaFacebookMessenger,FaGithubSquare} from "react-icons/fa";
//install npm install react-icons --save
const Icon = () => {
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:'1',
        gap:'4rem'
        
    }}>
      <h2>
        <FaFacebookSquare />

        <FaFacebookMessenger/>
        <FaGithubSquare/>
      </h2>
    </div>
  );
};

export default Icon;
