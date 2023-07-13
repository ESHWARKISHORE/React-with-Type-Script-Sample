import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
      }[]
    >
  >;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({ name: "", age: "", note: "", url: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        name="name"
        onChange={handleChange}
        className="AddToList-input"
      />
      <input
        type="number"
        placeholder="Age"
        value={input.age}
        name="age"
        onChange={handleChange}
        className="AddToList-input"
      />
      <input
        type="text"
        placeholder="Image Url"
        value={input.url}
        name="url"
        onChange={handleChange}
        className="AddToList-input"
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        name="note"
        onChange={handleChange}
        className="AddToList-input"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
