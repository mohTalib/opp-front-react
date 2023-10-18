import React from "react";
import { Image } from "react-bootstrap";
import logo1 from './logo1.png';


function SpotifyLogo() {
  return (
    <div className="spotify__logo__div text-center" style={{ padding: 22 }}>
      <Image
        src={logo1}
        alt=""
        className="img-fluid"
        style={{ width: 340 }}
      />
    </div>
  );
}

export default SpotifyLogo;
