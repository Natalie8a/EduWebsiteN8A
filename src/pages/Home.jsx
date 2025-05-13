import { faBook } from "@fortawesome/free-solid-svg-icons";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <p>
        <img src="src/assets/img/SVGlogo.svg" alt="Logo" width="600px" />
      </p>
      <FontAwesomeIcon icon={faBook} id="bookStyle" />
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};
