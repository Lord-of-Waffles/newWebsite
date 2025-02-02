import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}></Link>
        <Link to={"/projects"}></Link>
        <Link to={"/background"}></Link>
        <Link to={"/contact"}></Link>
        <Link to={"/satellite"}></Link>
        <Link to={"/todo"}></Link>
        <Link to={"/trainer"}></Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;