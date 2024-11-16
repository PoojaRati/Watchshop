const baseUrl = "http://127.0.0.1:8000";

function displayWatches() {
  fetch("http://127.0.0.1:8000/api/watches/")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("watches-container");
      container.innerHTML = "";
      data.forEach((watch) => {
        const imageUrl = baseUrl + watch.image;
        const watchCard = `
            <div class="col-sm-6 col-xl-3">
            <div class="box">
              <a href="">
                <div class="img-box">
                  <img src="${imageUrl}" alt="${watch.name}" />
                </div>
                <div class="detail-box">
                  <h6>${watch.name}</h6>
                  <h6>
                    Price:
                    <span> $${watch.price} </span>
                  </h6>
                </div>
                <div class="brand">
                  <h6>${watch.brand}</h6>
                </div>
                <div class="new">
                  <span> Featured </span>
                </div>
              </a>
            </div>
          </div>
            `;
        container.innerHTML += watchCard;
      });
    });
}

document.addEventListener("DOMContentLoaded", displayWatches);

// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
