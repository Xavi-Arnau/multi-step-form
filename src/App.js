import { Outlet } from "react-router-dom";
import Progress from "./components/Progress";
import RegFormProvider from "./contexts/RegFormContext";

function App() {
  return (
    <RegFormProvider>
      <div className="bg-magnolia h-screen md:pt-[15vh]">
        <div className="md:w-3/5 mx-auto bg-magnolia md:bg-white rounded-xl min-h-[60vh] flex flex-col md:flex-row md:p-4 shadow-xl">
          <Progress />

          <Outlet />
        </div>
      </div>
    </RegFormProvider>
  );
}

export default App;
