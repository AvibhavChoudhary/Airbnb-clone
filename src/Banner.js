import React, { useState } from "react";
import "./Banner.css";
import { Avatar, Button } from "@material-ui/core";
import DatePicker from "./DatePicker";
import { useHistory } from "react-router-dom";
function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <DatePicker />}
      </div>
      <div className="banner__info">
        <h2>Get out and stretch your imagination</h2>
        <h5>
          plan out a different kind of gateway to uncover the hidden gems for
          you
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore near by
        </Button>
      </div>
    </div>
  );
}

export default Banner;
