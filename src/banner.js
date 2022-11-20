import React from "react";
import { useState } from "react";
function banner() {
  return (
    <div className="caroursel" style={{ padding: "30px", height: "40px" }}>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://nlk.bmscdn.com/showcaseimage/eventimage/fast--furious-9-23-07-2021-07-57-39-017.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://nlk.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/top-gun-maverick-et00000972-26-01-2020-04-11-47.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ford_v_ferrari_mainmenu_1600x686_5b773f80.jpeg?region=0,0,1600,686"
              class="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default banner;
