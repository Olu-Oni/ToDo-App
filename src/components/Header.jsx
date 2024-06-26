import "../styles/header.css";
import profileImg from "../images/icons8-user-96.png";
const Header = () => {
  const userName = "John"; 
  
  //<img src={profileImg} />
  return (
    <div className="header">
      <div className="ToDo">
        <h1>ToDo App</h1>
      </div>

      <div className="profile">
        <div className="profileImg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#007FFF" viewBox="-1.35 -3 27 27" strokeWidth="1.5" stroke="#007FFF" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        </div>
        

        <div className="greeting">
          <h3>Welcome, &nbsp; {userName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
