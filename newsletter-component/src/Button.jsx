const Button = ({ onSubmit, addClass, buttonText }) => {
  return (
    <button onClick={onSubmit} className={`relative bg-dark-slate-grey px-5 py-4 font-fw-700 mb-8 md:mb-0 rounded-lg shadow-sm text-white transition ${addClass}`}>
      <span className="flex justify-center items-center rounded-lg shadow-sm absolute inset-0 bg-bgButtonHover opacity-0 hover:opacity-100 transition-opacity hover:shadow-box-shadow-btn">{buttonText}</span>
      {buttonText}
    </button>
  );
};

export default Button;
