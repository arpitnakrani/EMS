import { DocumentContextProvider } from "./context/document";
import Home from "./pages/home";

function App() {

  return (
    <div className="h-screen w-full bg-gray-50">
      <DocumentContextProvider>
        <Home />
      </DocumentContextProvider>
    </div>
  );
}

export default App;
