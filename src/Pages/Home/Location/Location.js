import React from "react";
import GoogleMapReact from "google-map-react";
import LocationIcon from "../../../Assets/Icons/LocationIcon.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {
  const defaultProps = {
    center: {
      lat: 23.8103,
      lng: 90.4125,
    },
    zoom: 13,
  };

  return (
    <div>
      <h1 className="text-3xl font-serif mb-8">Our Location</h1>
      <div className="flex justify-center">
        <div style={{ height: "70vh", width: "50%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={90.4125} lng={90.4125} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Location;
