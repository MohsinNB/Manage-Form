import { useState } from "react";
import "./App.css";

function App() {
  let [formObject, setFormObject] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const inputOnChange = (property, value) => {
    setFormObject((prevObject) => ({
      ...prevObject,
      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObject));
  };
  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => {
            inputOnChange("fName", e.target.value);
          }}
          value={formObject.fName}
          type="text"
          name=""
          id=""
          placeholder="first Name"
        />
        <input
          onChange={(e) => {
            inputOnChange("lName", e.target.value);
          }}
          value={formObject.lName}
          type="text"
          name=""
          id=""
          placeholder="last name"
        />
        <select
          onChange={(e) => {
            inputOnChange("city", e.target.value);
          }}
          value={formObject.city}
        >
          <option value="Choose city">Choose city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Sylhet">Sylhet</option>
        </select>
        <br />
        <input
          onChange={() => {
            inputOnChange("gender", "Male");
          }}
          checked={formObject.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => {
            inputOnChange("gender", "Female");
          }}
          checked={formObject.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
