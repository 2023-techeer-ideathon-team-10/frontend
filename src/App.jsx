import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";
import '../src/reset.scss'
import Nav from "./commponents/commons/footer";

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