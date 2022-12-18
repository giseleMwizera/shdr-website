import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./MapContainer.css";

function MapContainer() {
  const API_KEY = "AIzaSyDk-O5ROPH3SjuFWGO3-9lF3E1U-y-xzuQ";
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kigali&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://formatjson.org/word-counter">Word Counter</a>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE",
})(MapContainer);
