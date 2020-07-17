import React, {useState} from "react";
import Tweet from "./Tweet";

// Component called APP
function App() {

  const [users, setUsers] = useState([
    {name: "Walter Veith", message:"Walter Julius Veith author and speaker known for his work in nutrition", views:"1000k"},
    {name: "Christopher Hudson",message:"Forerunner, is a Seventh-day Adventist who is famous for the fiery sermons he gives", views:"500k"},
    {name: "Randy Skeet",message:"is an evangelist and revivalist from Ann Arbor, Michigan", views:"650k"}
  ]);
  return (
    // JSX
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} views={user.views}></Tweet>
      ))}
      
    </div>
  );
}

export default App; // export react
