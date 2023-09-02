import { useState } from "react";

const FieldSet = ({ label, placeholder, handleGetAge, errorField }) => {
  const fieldsetStyle = "flex flex-col gap-1 md:gap-2";
  const inputStyle = "border w-[5.5rem] md:w-[7rem] px-[0.9rem] py-[0.7rem] rounded-md shadow-sm border focus:outline-none md:text-2xl";
  const dateStyle = "uppercase text-xs tracking-[0.25em]";

  const [value, setValue] = useState("");
  const [isValidValue, setIsValidValue] = useState(true);

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Remove non-numeric characters
    inputValue = inputValue.replace(/\D/g, "");

    // Limit to 2 characters

    if (label === "year") {
      inputValue = inputValue.slice(0, 4);
    } else {
      inputValue = inputValue.slice(0, 2);
    }

    // if (label === "year" && parseInt(inputValue, 10) > new Date().getFullYear()) {
    //   inputValue = new Date().getFullYear();
    // }

    setValue(inputValue);
    validateValue(inputValue);
    handleGetAge(inputValue);
  };

  // console.log(errorField);

  const validateValue = (inputValue) => {
    let numberLimit = 0;
    if (label === "day") {
      numberLimit = 31;
    }
    if (label === "month") {
      numberLimit = 12;
    }

    if (label === "year") {
      numberLimit = new Date().getFullYear();
    }

    const parsedInputValue = parseInt(inputValue, 10);

    if (parsedInputValue < 1 || parsedInputValue > numberLimit) {
      // console.log("Invalid");
      setIsValidValue(false);
      return false;
    } else {
      setIsValidValue(true);
      return true;
    }
  };

  // console.log(isValidValue);

  // switch (label) {
  //   case "day":
  //     console.log("Hello");
  //     break;
  //   case "month":
  //     console.log("World");
  //     break;
  //   default:
  //     console.log("year");
  // }

  // const errMessage = () => {
  //   // return label === "year" ? "past" : label;
  // };

  const errorStyle = () => {
    if (isValidValue && errorField) {
      return "text-smokey-grey";
    } else if (value && isValidValue) {
      return "text-smokey-grey";
    } else {
      return "text-light-red";
    }
  };

  const inputErrorStyle = () => {
    if (isValidValue && errorField) {
      return "border-light-grey";
    } else if (value && isValidValue) {
      return "border-light-grey";
    } else {
      return "border-light-red";
    }
  };

  return (
    <>
      <fieldset className={fieldsetStyle}>
        <label className={`${dateStyle} ${errorStyle()}`} htmlFor={label}>
          {label}
        </label>
        <input type="text" value={value} onChange={handleChange} className={`${inputErrorStyle()} ${inputStyle} hover:border-off-black transition`} placeholder={placeholder} />

        <p className={`${errorField || value ? "hidden" : "block"} text-light-red italic text-xs max-[450px]:max-w-[10ch]`}>This field is required</p>
        <p className={`${isValidValue ? "hidden" : ""} text-light-red italic text-xs max-[450px]:max-w-[10ch]`}>{`Must be ${label === "year" ? "in the" : "a valid"} ${label === "year" ? "past" : label}`}</p>
      </fieldset>
    </>
  );
};

export default FieldSet;
