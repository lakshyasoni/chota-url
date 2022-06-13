import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        Chota <span>URL</span>
        {/* <div className="puchLine">Chota(Shorten) your URL</div> */}
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste your Long Link"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
