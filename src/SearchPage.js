import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResults from "./SearchResults";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays near by</p>
        <Button variant="outlined"> Cancellation flexebiltiy</Button>
        <Button variant="outlined"> Type of place</Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> Rooms and beds</Button>
        <Button variant="outlined"> More filters</Button>
      </div>
      <SearchResults
        img="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="London United kingdom"
        description="1bed . kitchen . lift "
        price="$51/night"
        total="$75/total"
        star={4.5}
      />
      <SearchResults
        img="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="London United kingdom"
        description="1bed . kitchen . lift "
        price="$51"
        total="$75"
        star={4.5}
      />
      <SearchResults
        img="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="London United kingdom"
        description="1bed . kitchen . lift "
        price="$51"
        total="$75"
        star={4.5}
      />
    </div>
  );
}

export default SearchPage;
