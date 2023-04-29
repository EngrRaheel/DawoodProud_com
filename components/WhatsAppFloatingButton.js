import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";
import { style } from "@mui/system";
function WhatsAppFloatingButton() {
  return (
    <FloatingWhatsApp
      phoneNumber={"+923270075555"}
      accountName={"Dawood Proud"}
      statusMessage={"Typically replies instantly during work hours."}
      chatMessage={`Hello there! \nHope you're fine and enjoying good Health ✨🙌. \nHow may I help you?`}
      avatar={"/Images/logob.jpg"}
      allowEsc
      allowClickAway={true}
      notification
      notificationSound
      // Image={"/Images/logb.jpg"}
    />
  );
}

export default WhatsAppFloatingButton;
