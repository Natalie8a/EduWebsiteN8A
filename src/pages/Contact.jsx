// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instanceOf } from "prop-types";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

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
          Hablemos 👋. No dudes en ponerte en contacto con nosotros mediante la
          información de contacto a continuación, o envíanos un mensaje mediante
          el formulario.
        </p>

        <p>
          Bogotá, Colombia
          <br /> <br />
          lacabanadelsaber@gmail.com
          <br /> <br />
          Número de contacto: 3232151790
          <br /> <br />
          Facebook: La Cabaña del Saber
          <br /> <br />
          Instagram: @lacabanadelsaber
        </p>

        <h1>Envíanos un mensaje</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <span>Nombre completo</span>
          <input placeHolder="inserte su nombre" {...register("example")} />
          <br />
          <span>Correo electrónico</span>
          <input placeHolder="inserte su email" {...register("example")} />
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("example")} />

          <button type="button" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
