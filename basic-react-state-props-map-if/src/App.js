import React, { useState } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import personList from "./components/DataBase";
import Button from "./components/Button";
function App() {
  const [data, setData] = useState(personList);

  return (
    <>
      <Button />
      <PersonList okkes={data} />
    </>
  );
}

export default App;
