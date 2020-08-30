import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div>
      <Banner />
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Lorem ipsum blahh blahh"
          title="Nice appartment"
          price="$149"
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Awesome place to spend time with your loved once"
          title="Wonderful place"
          price="$189"
        />
        <Card
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Luxirous place to stay"
          title="Fantastic place"
          price="$229"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Lorem ipsum blahh blahh"
          title="Nice appartment"
          price="$149"
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Awesome place to spend time with your loved once"
          title="Wonderful place"
          price="$189"
        />
        <Card
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Luxirous place to stay"
          title="Fantastic place"
          price="$229"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Lorem ipsum blahh blahh"
          title="Nice appartment"
          price="$149"
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Awesome place to spend time with your loved once"
          title="Wonderful place"
          price="$189"
        />
        <Card
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Luxirous place to stay"
          title="Fantastic place"
          price="$229"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Lorem ipsum blahh blahh"
          title="Nice appartment"
          price="$149"
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Awesome place to spend time with your loved once"
          title="Wonderful place"
          price="$189"
        />
        <Card
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Luxirous place to stay"
          title="Fantastic place"
          price="$229"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Lorem ipsum blahh blahh"
          title="Nice appartment"
          price="$149"
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Awesome place to spend time with your loved once"
          title="Wonderful place"
          price="$189"
        />
        <Card
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          description="Luxirous place to stay"
          title="Fantastic place"
          price="$229"
        />
      </div>
    </div>
  );
}

export default Home;
