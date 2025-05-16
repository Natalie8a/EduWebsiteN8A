// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instanceOf } from "prop-types";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { WhatsApp } from "../components/WhatsApp";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { handlePhoneNumber } from "../components/Hover";

export const Contact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <div className="container-fluid bg-light centerContact">
        <h1>Contáctanos</h1>
        <p>
          Hablemos 👋. Nos encontramos en Bogotá, Colombia. No dudes en ponerte
          en contacto con nosotros mediante redes:
        </p>
        <div className="clickableIcons">
          <a href="tel:3232151790" target="_blank">
            <FontAwesomeIcon
              icon={faSquarePhone}
              className="conIcon phone"
              onMouseOver={handlePhoneNumber}
            />
          </a>
          <a href={WhatsApp}>
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="greenIcon conIcon"
            />
          </a>
          <br /> <br />
          <a
            href="https://www.facebook.com/cabanadelsaber/?locale=es_LA"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="blueIcon conIcon"
            />
          </a>
          <br /> <br />
          <a href="https://www.instagram.com/lacabanadelsaber/" target="_blank">
            {" "}
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="pinkIcon conIcon"
            />
          </a>
        </div>
        <h1>... O envíanos un mensaje por el formulario:</h1>{" "}
        <p className="parenthesis">
          (nos llegará a lacabanadelsaber@gmail.com)
        </p>
        {/* The form doesn't work yet, gotta learn the api thing better to make it work */}
        <form>
          <div className="form-group messageB fs-4">
            <label for="exampleFormControlInput1">Tu e-mail:</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="form-group messageB fs-4">
            <label for="exampleFormControlTextarea1">Tu mensaje:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <br />
          <button type="button" className="btn btn-secondary b-send messageB">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
