import logo from "../logo.svg";
import Div100vh from "react-div-100vh";

const Loading = () => {
  return (
    <Div100vh>
      <div className="container mt-5 text-center">
        <img className="react-logo" src={logo} alt="loading" />
      </div>
    </Div100vh>
  );
};

export default Loading;
