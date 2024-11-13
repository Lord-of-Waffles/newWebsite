import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/background"}>Background</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;