import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";
import { style } from "@mui/system";
function WhatsAppFloatingButton() {
  return (
    <FloatingWhatsApp
      phoneNumber={"+923270075555"}
      accountName={"TheItern"}
      statusMessage={"Typically replies instantly during work hours."}
      chatMessage={`Hello there!Hope you're fine and enjoying good Health ✨ 🙌 How may I help you?`}
      avatar={"/Images/logo.png"}
      allowEsc
      allowClickAway={true}
      notification
      notificationSound
    />
  );
}

export default WhatsAppFloatingButton;
