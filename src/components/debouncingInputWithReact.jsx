import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

const DebouncingInputWithReact = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);

  return (
    <>
      <input value={inputValue} onChange={handelChange} />
    </>
  );
};

export default DebouncingInputWithReact;
