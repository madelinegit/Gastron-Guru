import React, {useState} from "react";

interface MultiSelectProps {
  heading: string;
  options: string[];
  // option: string;
}

const MultiSelect:React.FC<MultiSelectProps> = ({ heading, options }) => {
  //React.FC<interface> explains the type of each prop so that it wont be "any"
  //heading and options are the props
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  //initializes "selectionOptions" useState within empy array
  //'setSelectionOptions' is the function to update state
  //<string[]> tells typescript that selectedOptions is an arrayof strings 'string[]'

  const handleSelect = (option:string) => {
    //declares 'handleSelect' function which takes "option" as argument
    setSelectedOptions(prevState => {
      //updates selectedOptions state based on the previous state
      if (prevState.includes(option)) {
        //checks if the current option argument is already in the [options array]
        return prevState.filter(opt => opt !== option);
        //if so, not included, array returned
      } else {
        return [...prevState, option];
        //option is added and new array returned
      }
    });
  }


return (
  <div>
    <h1> {heading} </h1>
    {/* heading prop */}
    {options.map((option, index) => (
      <button key ={index} onClick={() => handleSelect(option)}>
        {option}
      </button>
      //'handleSelect' on click, each button has a unique key {index}
    ))}
    <div>
      Selected options: {selectedOptions.join(', ')}
      {/* displays selectedOptions in a list joined with commas */}
      </div>
    </div>
  )
}

export default MultiSelect
