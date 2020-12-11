import "./styles.css";
import { Search } from "../Search";

export const Topbar = () => {
  return (
    <div className="topbar">
      <img src="si" alt="this is a topbar" />
      <Search />
      <div className="buttons-container">
        <button>logout</button>
        <button>login</button>
        <button>register</button>
      </div>
    </div>
  );
};
