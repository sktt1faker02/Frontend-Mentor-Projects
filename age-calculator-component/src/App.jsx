import "./styles.css";
import arrowIcon from "./assets/images/icon-arrow.svg";
import { useState } from "react";
import FieldSet from "./FieldSet";

const App = () => {
  const resultStyle = "flex gap-2 flex-wrap md:items-center max-[350px]:flex-col";
  const numberResultStyle = "font-extrabold text-5xl md:text-6xl italic text-purple";
  const wordsResultStyle = "font-extrabold text-5xl  md:text-7xl italic text-off-black";

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [ageDay, setAgeDay] = useState("- -");
  const [ageMonth, setAgeMonth] = useState("- -");
  const [ageYear, setAgeYear] = useState("- -");

  const [errorFieldDay, setErrorFieldDay] = useState(true);
  const [errorFieldMonth, setErrorFieldMonth] = useState(true);
  const [errorFieldYear, setErrorFieldYear] = useState(true);

  const handleGetDay = (newDay) => {
    setDay(newDay);
  };

  const handleGetMonth = (newMonth) => {
    setMonth(newMonth);
  };

  const handleGetYear = (newYear) => {
    setYear(newYear);
  };

  const validateAge = () => {
    // Check if day, month, and year have valid values
    const isDayValid = day !== "" && parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31;
    const isMonthValid = month !== "" && parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
    const isYearValid = year !== "" && parseInt(year, 10) >= 1 && parseInt(year, 10) <= new Date().getFullYear();

    // Update error flags based on validation

    if (day === "") {
      setErrorFieldDay(false);
    }

    if (month === "") {
      setErrorFieldMonth(false);
    }

    if (year === "") {
      setErrorFieldYear(false);
    }

    // If all fields are valid, perform age calculation
    if (isDayValid && isMonthValid && isYearValid) {
      calculateAge();
    }
  };

  const calculateAge = () => {
    const dayBirth = parseInt(day);
    const monthBirth = parseInt(month) - 1; // Adjust month index to 0-based
    const yearBirth = parseInt(year);

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - yearBirth;
    let ageMonths = currentMonth - monthBirth;
    let ageDays = currentDay - dayBirth;

    if (ageDays < 0) {
      // Borrow days from months
      ageDays += new Date(currentYear, currentMonth, 0).getDate();
      // console.log(ageDays);
      ageMonths--;
    }

    if (ageMonths < 0) {
      // Borrow months from years
      ageMonths += 12;
      ageYears--;
    }

    setAgeYear(ageYears);
    setAgeMonth(ageMonths);
    setAgeDay(ageDays);

    // console.log(ageYears, ageMonths, ageDays);
  };

  return (
    <>
      <main className="bg-white mx-auto mt-16 px-5 py-12 rounded-3xl rounded-br-[6rem] shadow-sm flex flex-col gap-16 max-w-[450px] md:mt-0 md:px-10 md:max-w-[600px] md:gap-10">
        <form className="flex flex-wrap justify-between gap-1 md:justify-start md:gap-6">
          <FieldSet label="day" placeholder="DD" handleGetAge={handleGetDay} errorField={errorFieldDay} />
          <FieldSet label="month" placeholder="MM" handleGetAge={handleGetMonth} errorField={errorFieldMonth} />
          <FieldSet label="year" placeholder="YYYY" handleGetAge={handleGetYear} min={4} errorField={errorFieldYear} />
        </form>
        <div className="flex justify-center items-center h-[1px] border md:justify-end">
          <img className="bg-purple hover:bg-off-black transition p-5 w-[4.5rem] rounded-[50%] cursor-pointer" src={arrowIcon} alt="calculate age" onClick={validateAge} />
        </div>
        <div className="flex flex-col gap-2">
          <div className={`${resultStyle}`}>
            <span className={`${numberResultStyle}`}>{ageYear}</span>
            <span className={wordsResultStyle}>{`${ageYear <= 1 ? "year" : "years"}`}</span>
          </div>
          <div className={resultStyle}>
            <span className={numberResultStyle}>{ageMonth}</span>
            <span className={wordsResultStyle}>{`${ageMonth <= 1 ? "month" : "months"}`}</span>
          </div>
          <div className={resultStyle}>
            <span className={numberResultStyle}>{ageDay}</span>
            <span className={wordsResultStyle}>{`${ageDay <= 1 ? "day" : "days"}`}</span>
          </div>
        </div>
      </main>
      <footer className="mt-4 text-center md:text-off-black">
        Challenge by <span className="text-purple">Frontend Mentor</span>. Coded by <span className="text-purple">Michael Tabilin</span>
      </footer>
    </>
  );
};

export default App;
