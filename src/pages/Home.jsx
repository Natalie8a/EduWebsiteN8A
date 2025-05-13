import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <p>
        <img src="src/assets/img/SVGlogo.svg" alt="Logo" width="600px" />
      </p>
    </div>
  );
};
