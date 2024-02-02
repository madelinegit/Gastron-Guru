import React, { useState } from "react";
import "./Multislect.scss";

interface MultiSelectProps {
  heading: string;
  options: string[];
  submit: (selectedOptions: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ heading, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleSelect = (option: string) => {
    setSelectedOptions((prevState) => {
      //updates selectedOptions state based on the previous state
      if (prevState.includes(option)) {
        //checks if the current option argument is already in the [options array]
        return prevState.filter((opt) => opt !== option);
        //if so, not included, array returned
      } else {
        return [...prevState, option];
        //option is added and new array returned
      }
    });
  };
  const handleSubmit = (selectedOptions: string[]) => {
    console.log(selectedOptions);
    setSelectedOptions([]);
  };
  const isOptionSelected = (option: string) => {
    return selectedOptions.includes(option);
  };

  return (
    <div className="multiselect">
      <div className="multiselect-container">
        <p className="chefs-reg">Chef's Registration 2/3</p>
        <h4>
          Multiselect Title & Dropdown Menu Here
          <br />
          Integration of NCD 32
        </h4>
        <h4 className="multiselect-heading"> Specialty </h4>
        {/* heading prop TBD */}
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            className={`multiselect-button ${
              isOptionSelected(option) ? "button-dark" : "button-blue"
            }`}
          >
            {option}
          </button>
        ))}
        <p className="selected-options-text">
          {/* Selected options: */}
          {selectedOptions.join(", ")}
        </p>
        <button
          type="submit"
          className="button-dark submit-button"
          onClick={() => handleSubmit(selectedOptions)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};




export default MultiSelect;

//<MultiSelect heading ="heading" options ={["Wedding", "Corporate", "High-End", "In-House", "Outdoor"]}/>
//In html, hard coded options that did not exist in an api yet
