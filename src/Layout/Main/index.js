import { Topbar } from "../../Components/Topbar/Topbar";
import "./styles.css";
export const Main = ({ children }) => {
  return (
    <div className="main-container">
      <Topbar />
      <>{children}</>
    </div>
  );
};
