import { AppBar } from "@mui/material";
import Navbar from "../components/Navbar";

const person = {
  name: 'name',
  theme: {
    
    color: 'black'
  }
};

export default function TodoList() {
  return (
    <>
    <AppBar>
    <Navbar>
      
    </Navbar>
    </AppBar>
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/gojo2.jpg"
        alt="GOJO"
        width={500}
      />
      
      <ul>
        <li>test@gmail.com</li>
        <li>6133211*****</li>
        <li>090******</li>
      </ul>
    </div>
    </>
  );
}