// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom"; // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types"; // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"; // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer"; // Import a custom hook for accessing the global state
import { useForm } from "react-hook-form";
import Flowchart from "../components/Flowchart";
import flowchart from "../assets/img/FlowChart.png";
import logo from "../assets/img/SVGlogo.svg";
// Define and export the Single component which displays individual item details.
export const SignUp = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 className="abc">PROCESO DE INSCRIPCIÓN</h1>
        <br />
        <div className="flex-container withfc">
          <img src={flowchart} alt="mermaid flowchart" className="flowChart" />
          <p id="centerProcess">
            Para las familias que aun no han tomado la decision de educar en
            casa, quieren hacerlo y no saben como, se les realiza un taller tipo
            coach interactivo el cual tiene un costo de 30 000 por familia, este
            se realiza de manera grupal o individual en caso de que en el
            horario no puedan asistir al grupal.
            <br /> <br /> Si ya educas en casa y necesitas apoyo en el
            acompañamiento y proceso de educación de tus hijos, puedes saltarte
            el anterior paso y seguir con el siguiente paso. Después de tomar el
            taller tipo coach se realiza una charla informativa gratuita sobre
            el proyecto y la metodología, esta charla se realiza de manera
            grupal o puedes agendar una cita virtual. <br /> <br /> Después de
            asistir a la charla informativa si ya tomaste la decision de seguir
            el proceso con nosotros. Se procedería a realizar la inscripción en
            la cual debes diligenciar el formato de inscripción, formato de toma
            de fotografías y si lo requieres, el formato de inscripción a clubes
            anexando copia del pago y enviarlo al correo
            lacabanadelsaber@gmail.com. <br /> <br /> Una vez enviados los
            documentos y el pago se agenda una cita para conocer a la familia y
            contarles el proceso a seguir y la forma de trabajo, ese seria el
            primer día en el desarrollo del proyecto. Semanalmente se les
            enviaría el paso a paso para la asesoría y acompañamiento en
            procesos de aprendizajes por medio de la metodología de Aprendizaje
            basado en proyectos (ABP). <br /> <br /> El pago se debe realizar la
            primera semana de cada ciclo o mes y lo pueden realizar a una de las
            siguientes cuentas enviando copia del soporte al whatsapp 3232151790
            o correo lacabanadelsaber@gmail.com con la información del pago:
            Nombre del niño, tipo de servicio y mes. <br /> <br /> Cuenta de
            ahorros de Bancolombia: 571-718531-01 a nombre de Natalia Hernandez{" "}
            <br /> <br /> Cuenta de Daviplata o Nequi 3232151790 a nombre de
            Natalia Hernandez <br /> <br /> Agradecemos tu disposición y
            esperamos tenerte pronto en nuestros programas. Si requieres mas
            información contáctate con nosotros para tenerte en cuenta.
          </p>
          <img src={flowchart} alt="mermaid flowchart" className="flowChart" />
        </div>
        <img src={logo} alt="logo" className="abc logo" />
        <br /> <br /> <br /> <br />
      </div>
    </>
  );
};
