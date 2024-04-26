import './main-content.css';
import {Outlet} from "react-router-dom";

export const MainContent = () => {
  return (
    <div className={'mainContent'}>
      <Outlet/>
    </div>
  );
};