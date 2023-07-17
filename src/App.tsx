import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import AddToList from "./components/addToList";
import DebouncingInputWithReact from "./components/debouncingProject/debouncingInputWithReact";
import ModelRocketLaneTest from "./components/rocketLanetest/rocketLaneInitial";
import ThreeIInfoTechTest from "./components/threeiinfotechTest/Test1";
export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // const [number, setNumber] = useState<number | string>(5);

  // const handleNumberChange = () => {
  //   setNumber("45");
  // }
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Sample001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaA5OsFnsoZBzW1K5bjBv1ik6lJ0z7854FmfA4fzWzRA&s",
      age: 26,
      note: "Nothing to say",
    },
  ]);

  return (
    <div className="App">
      <h1>This is the sample Typescript application</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
      <DebouncingInputWithReact />
      <ThreeIInfoTechTest />
      <ModelRocketLaneTest />
    </div>
  );
}

export default App;
