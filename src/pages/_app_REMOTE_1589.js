import "../styles/globals.css";
import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
    </>
  );
}
