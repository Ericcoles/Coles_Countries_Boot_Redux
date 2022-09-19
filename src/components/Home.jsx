import React from "react";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div>
      <div>
        <span>Countries app </span>is a simple React application made in
        Business College Helsinki lessons. App uses{" "}
        <a href="https://restcountries.com/">https://restcountries.com/ </a> and{" "}
        <a href="https://openweathermap.org/">https://openweathermap.org/</a>
      </div>
      <img
        src={`https://images.unsplash.com/photo-1662912849052-c401a5cb8abf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80`}
      />
    </div>
  );
};

export default Home;
