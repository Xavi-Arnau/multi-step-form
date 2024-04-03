import Progress from "./components/Progress";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {
  return (
    <div className="bg-magnolia h-screen md:pt-[15vh]">
      <div className="md:w-3/5 mx-auto bg-magnolia md:bg-white rounded-xl min-h-[60vh] flex flex-col md:flex-row md:p-4 shadow-xl">
        <Progress />

        <Step4 />
      </div>
    </div>
  );
}

export default App;
