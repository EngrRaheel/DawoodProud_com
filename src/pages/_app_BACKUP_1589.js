import "../styles/globals.css";
<<<<<<< HEAD
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> 3b9991864c8f81d0f8bbcca843bf1b59022af316
import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
    </>
  );
}
