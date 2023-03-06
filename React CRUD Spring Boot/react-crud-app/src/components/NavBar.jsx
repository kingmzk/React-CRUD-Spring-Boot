import {Toolbar,AppBar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)
`
background: #111111
`
const Tabs = styled(NavLink)`
font-size : 20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`



const NavBar = () => {
    return (
     <Header position='static'>
        <Toolbar>
            <Tabs to="/">Employee Management by MZK</Tabs>
            <Tabs to="/all">All User</Tabs>
            <Tabs to="/add">Add User</Tabs>

        </Toolbar>
     </Header>
    );
};

export default NavBar;



















//Remainder of Hooks
// import React, { useState, useEffect } from 'react';

// function Counter() {
//   // Declare a state variable called count and initialize it to 0
//   const [count, setCount] = useState(0);

//   // Use useEffect to set up an interval that updates count every second
//   useEffect(() => {
//     // Create a timer id
//     const timerId = setInterval(() => {
//       // Update count by one using setCount
//       setCount(count => count + 1);
//     }, 1000);
//     // Return a cleanup function that clears the interval
//     return () => clearInterval(timerId);
//   }, []); // Pass an empty array as the dependency array to run useEffect only once

//   // Return a JSX element that displays the count
//   return <div>Count: {count}</div>;
// }

// export default Counter;