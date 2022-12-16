/** @format */

import toast from "react-hot-toast";

const toastSuccess = (event, position = "top-right") => {
  // if (event.judul === "Berhasil") {
  toast[event.type](event.pesan, {
    duration: 4000,
    position,
  });
  //   NotificationManager.success(event.pesan, event.judul);
  // }
};

export default toastSuccess;
