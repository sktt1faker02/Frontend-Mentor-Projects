import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <div className="py-4">
      <OrderSummary />
      <div className="attribution flex gap-1 text-sm justify-center mt-2">
        <p>Challenge By</p>
        <a className="text-bright-blue" href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor.
        </a>
        <span>Coded by</span> <p className="text-bright-blue">Michael Tabilin</p>
      </div>
    </div>
  );
}

export default App;
