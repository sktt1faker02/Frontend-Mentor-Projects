import illustrationHero from "../images/illustration-hero.svg";
import musicIcon from "../images/icon-music.svg";

function OrderSummary() {
  return (
    <div className="shadow-md rounded-b-2xl">
      <img src={illustrationHero} className="rounded-t-2xl" alt="illustration" />
      <div className="flex flex-col bg-very-pale-blue py-7 px-6  gap-5 rounded-b-2xl">
        <h1 className="text-dark-blue text-xl font-fw-900 text-center">Order Summary</h1>
        <p className="text-center max-w-25ch text-desaturated-blue mx-auto">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="flex items-center justify-between bg-light-pale-blue py-5 px-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-5">
            <span>
              <img src={musicIcon} alt="Music" />
            </span>
            <div>
              <p className="font-fw-700 text-dark-blue">Annual Plan</p>
              <p className="text-desaturated-blue">$59.99/year</p>
            </div>
          </div>
          <a href="/" className="underline text-bright-blue font-fw-700 transition hover:no-underline hover:opacity-80">
            Change
          </a>
        </div>
        <div className="flex flex-col gap-5 mt-2">
          <button className="btn-shadow bg-bright-blue py-3 text-very-pale-blue font-fw-700 rounded-xl transition hover:opacity-80">Proceed to Payment</button>
          <button className="text-desaturated-blue font-fw-900 transition hover:text-dark-blue">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
