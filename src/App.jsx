import { useRoutes, useLocation } from "react-router-dom";
import { routes } from "./Routes";
import Nav from "./components/commons/nav";
import Footer from "./components/commons/footer";


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const elem = useRoutes(routes);
  
  return (
    <div>
      {!isLoginPage && <Nav />}
      {elem}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;