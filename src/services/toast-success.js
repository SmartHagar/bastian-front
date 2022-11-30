/** @format */

import toast from "react-hot-toast";

const toastSuccess = (event, position = "top-right") => {
  // if (event.judul === "Berhasil") {
  toast.success(event.pesan, {
    duration: 4000,
    position,

    // Styling
    style: {},
    className: "",

    // Custom Icon
    icon: "👏",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
  //   NotificationManager.success(event.pesan, event.judul);
  // }
};

export default toastSuccess;
