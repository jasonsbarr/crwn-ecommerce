import { Outlet } from "react-router-dom";
import categories from "../../data/categories";
import Directory from "../../components/directory/directory.component";

export const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />;
      <Outlet />
    </div>
  );
};

export default Home;
