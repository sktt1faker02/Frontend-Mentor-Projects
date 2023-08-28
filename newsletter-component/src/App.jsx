import { useState } from "react";
import "./styles.css";
import Button from "./Button";
import Success from "./Success";
import heroBgMobile from "../assets/images/illustration-sign-up-mobile.svg";
// import heroBgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [inputStyle, setInputStyle] = useState("");

  const resetState = () => {
    setEmail("");
    setError(null);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(null);
    setInputStyle("");
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;

    if (!inputValue) {
      return;
    }

    if (!isValidEmail(inputValue)) {
      setError(true);
      setInputStyle("text-tomato border-tomato");
    } else {
      setError(false);
      setInputStyle("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    if (!isValidEmail(email)) {
      setError(true);
      setInputStyle("text-tomato bg-tomato bg-opacity-20");
    } else {
      setError(false);
      setInputStyle("");
    }
  };

  return (
    <>
      <main className={`flex justify-center items-center min-h-screen max-w-[400px] mx-auto md:max-w-[885px]`}>
        <div className={`${error === false ? "hidden" : ""} grid md:grid-cols-2 place-items-center gap-12 md:pl-10 md:pr-6 md:py-6 md:bg-white md:mx-6 md:rounded-3xl md:shadow-md`}>
          <img className={`${error === false ? "hidden" : ""} md:content-bgDesktop md:col-start-2`} src={heroBgMobile} alt="Sign Up" />

          <div className={`${error === false ? "hidden" : ""} px-6 flex flex-col gap-7 md:px-0 md:row-start-1`}>
            <div className="flex flex-col gap-4">
              <h1 className="font-fw-700 text-dark-slate-grey text-4xl md:text-5xl">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-4">
                  <img className="self-start" src={iconList} alt="feature" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li className="flex gap-4">
                  <img className="self-start" src={iconList} alt="feature" />
                  <p>Measuring to ensure updates are a success</p>
                </li>
                <li className="flex gap-4">
                  <img className="self-start" src={iconList} alt="feature" />
                  <p> And much more!</p>
                </li>
              </ul>
            </div>
            <form className="flex flex-col">
              <div className="flex justify-between">
                <label className="text-sm font-fw-700 text-dark-slate-grey mb-2">Email address</label>
                <label className={`${error ? "block" : "hidden"} text-sm font-fw-700 text-red-500`}>Valid email required</label>
              </div>
              <input value={email} onChange={handleChange} onBlur={handleBlur} required autoComplete="off" className={`px-5 py-4 border border-grey rounded-lg shadow-sm mb-4 hover:border-charcoal-grey transition focus:outline-none focus:border-charcoal-grey ${error ? "border-tomato hover:border-tomato" : ""} ${inputStyle}`} type="email" id="email" placeholder="email@company.com" />
              <Button onSubmit={handleSubmit} buttonText="Subscribe to monthly newsletter"></Button>
            </form>
          </div>
        </div>
        {error === false && <Success className="flex" email={email} onDismiss={resetState} />}
      </main>
      <footer className={`${error === false ? "hidden" : ""} mb-6 text-center md:text-white`}>
        Challenge by <span className="text-tomato">Frontend Mentor</span>. Coded by <span className="text-tomato">Michael Tabilin</span>
      </footer>
    </>
  );
};

export default App;
