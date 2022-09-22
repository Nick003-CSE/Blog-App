import { useState } from "react";
const Home = () => {
    
    const [name,setName]=useState('Nikunj');//Here name is the value=nikunj and setname can be used to change it anywhere else.
    const [age,setAge]=useState(25);

    const handleClick=()=>{
      setName('Gobind');
      setAge(69);
    }

    // const handleClickAgain=(name)=>{
    //     console.log('Hello '+ name );
    // }
    /*If we pass any name dynamically here itself then it will invoke it before
      clicking the button therefore we do this with the help of anonymous fn*/

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/*<button onClick={()=>{                      
                handleClickAgain('Nikunj')
            }}>Click</button>*/}
        </div>
     );
}
 
export default Home;