import { useRoutes } from "react-router-dom";
import Footer from "./components/commons/footer";
import Nav from "./components/commons/nav";
import { routes } from "./Routes";

function App() {
  const elem = useRoutes(routes);
  return (
    <div>
      <Nav/>
      {elem}
      <Footer/>
    </div>
  );
}

export default App;