import '../styles/header.css'
const Header = () =>{

    const userName = 'John'
    return (
    <div className="header">
        <div className="ToDo">
            <h1>ToDo App</h1 >
        </div>
        
        
        <div className="profile">
            <img src="#"/>
            <div className="greeting">
                <h3>Welcome, &nbsp; {userName}</h3>
            </div>
                
            
        </div>
    </div>
    )
}

export default Header