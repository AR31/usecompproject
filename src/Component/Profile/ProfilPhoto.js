import React from "react";
import ProfilPhotoImg from "../../ProfilePhoto.jpg";

function ProfilPhoto() {
  return (
    <div className="container-img">
      <img
        src={ProfilPhotoImg}
        style={{ width: 300, height: 200, backgroundColor: "red" }}
      ></img>
    </div>
  );
}

export default ProfilPhoto;
