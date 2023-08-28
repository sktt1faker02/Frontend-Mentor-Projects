import Button from "./Button";
import iconSuccess from "../assets/images/icon-success.svg";

const Success = ({ className, email, onDismiss }) => {
  const handleClick = () => {
    onDismiss();
  };

  return (
    <div className="px-6 h-[618px] flex flex-col justify-between md:justify-center md:max-w-[475px] md:bg-white md:h-[485px] md:gap-8 md:px-12 md:rounded-3xl md:shadow-md">
      <div className={`${className} flex-col items-start gap-7 mt-20 md:mt-0`}>
        <img src={iconSuccess} alt="success" />
        <h2 className="font-fw-700 text-dark-slate-grey text-4xl md:text-5xl">Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <span className="text-dark-slate-grey font-fw-700">{email}</span>. Please open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onSubmit={handleClick} buttonText="Dismiss message" />
    </div>
  );
};

export default Success;
