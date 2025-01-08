const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
sidebar.classList.toggle("collapsed");
document.querySelector("main").classList.toggle("collapsed");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  document.querySelector("main").classList.toggle("collapsed");
});

// Toggle Statistik
document.getElementById("toggle-statistics").addEventListener("click", () => {
  const statisticsSection = document.getElementById("statistics-section");
  const mapsSection = document.querySelector(".webgis-content");

  statisticsSection.classList.toggle("collapsed");

  if (statisticsSection.classList.contains("collapsed")) {
    mapsSection.style.flex = "1";
  } else {
    mapsSection.style.flex = "0.25";
  }
});

// get element
var suhu1 = document.getElementById("suhu-titik1");
var suhu2 = document.getElementById("suhu-titik2");
var suhu3 = document.getElementById("suhu-titik3");
var suhu4 = document.getElementById("suhu-titik4");
var suhu5 = document.getElementById("suhu-titik5");
var suhu6 = document.getElementById("suhu-titik6");

var kelembaban1 = document.getElementById("kelembaban-titik1");
var kelembaban2 = document.getElementById("kelembaban-titik2");
var kelembaban3 = document.getElementById("kelembaban-titik3");
var kelembaban4 = document.getElementById("kelembaban-titik4");
var kelembaban5 = document.getElementById("kelembaban-titik5");
var kelembaban6 = document.getElementById("kelembaban-titik6");

// fetch data
function fetchData() {
  var apiUrl1 =
    "https://api.thingspeak.com/channels/2800079/feeds/last.json?timezone=Asia%2FJakarta&api_key=AG7A0LFIS5X7JOYI";

  fetch(apiUrl1)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 1:", data);

      suhu1.innerText = parseFloat(data.field4).toFixed(2);
      kelembaban1.innerText = parseFloat(data.field3).toFixed(2);
      document.getElementById("coordinate1").innerText = data.field1 + " | " + data.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data.field1}&lon=${data.field2}&format=json`
      )
        .then((response) => response.json())
        .then((dataLoc) => {
          document.getElementById("type1").innerText = dataLoc.type;
          document.getElementById("address1").innerText = dataLoc.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 1:", error));

  var apiUrl2 =
    "https://api.thingspeak.com/channels/2801000/feeds/last.json?timezone=Asia%2FJakarta&api_key=J1KY0PCXK3P9KL0I";

  fetch(apiUrl2)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON Titik 2:", data2);

      suhu2.innerText = parseFloat(data2.field4).toFixed(2);
      kelembaban2.innerText = parseFloat(data2.field3).toFixed(2);
      document.getElementById("coordinate2").innerText = data2.field1 + " | " + data2.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data2.field1}&lon=${data2.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc2) => {
          document.getElementById("type2").innerText = dataLoc2.type;
          document.getElementById("address2").innerText = dataLoc2.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 2:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2801113/feeds/last.json?timezone=Asia%2FJakarta&api_key=8V3PIJRSHYQ5G8WX";

  fetch(apiUrl3)
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Response JSON Titik 3:", data3);

      suhu3.innerText = parseFloat(data3.field4).toFixed(2);
      kelembaban3.innerText = parseFloat(data3.field3).toFixed(2);
      document.getElementById("coordinate3").innerText = data3.field1 + " | " + data3.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data3.field1}&lon=${data3.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc3) => {
          document.getElementById("type3").innerText = dataLoc3.type;
          document.getElementById("address3").innerText = dataLoc3.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 3:", error));

  // Fetch data for Titik 4
  var apiUrl4 =
    "https://api.thingspeak.com/channels/2800883/feeds/last.json?timezone=Asia%2FJakarta&api_key=JR7XWW4B6E9UR9PV";
  fetch(apiUrl4)
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Response JSON Titik 4:", data4);

      suhu4.innerText = parseFloat(data4.field4).toFixed(2);
      kelembaban4.innerText = parseFloat(data4.field3).toFixed(2);
      document.getElementById("coordinate4").innerText = data4.field1 + " | " + data4.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data4.field1}&lon=${data4.field2}&format=json`
      )
        .then((response4) => response4.json())
        .then((dataLoc4) => {
          document.getElementById("type4").innerText = dataLoc4.type;
          document.getElementById("address4").innerText = dataLoc4.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 4:", error));

  // Fetch data for Titik 5
  var apiUrl5 =
    "https://api.thingspeak.com/channels/2800874/feeds/last.json?timezone=Asia%2FJakarta&api_key=TL1XBVRPQ4GY49";
  fetch(apiUrl5)
    .then((response5) => response5.json())
    .then((data5) => {
      console.log("Response JSON Titik 5:", data5);

      suhu5.innerText = parseFloat(data5.field4).toFixed(2);
      kelembaban5.innerText = parseFloat(data5.field3).toFixed(2);
      document.getElementById("coordinate5").innerText = data5.field1 + " | " + data5.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data5.field1}&lon=${data5.field2}&format=json`
      )
        .then((response5) => response5.json())
        .then((dataLoc5) => {
          document.getElementById("type5").innerText = dataLoc5.type;
          document.getElementById("address5").innerText = dataLoc5.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 5:", error));

  // Fetch data for Titik 6
  var apiUrl6 =
    "https://api.thingspeak.com/channels/2800859/feeds/last.json?timezone=Asia%2FJakarta&api_key=0872MBIFVV0UKD9D";
  fetch(apiUrl6)
    .then((response6) => response6.json())
    .then((data6) => {
      console.log("Response JSON Titik 6:", data6);

      suhu6.innerText = parseFloat(data6.field4).toFixed(2);
      kelembaban6.innerText = parseFloat(data6.field3).toFixed(2);
      document.getElementById("coordinate6").innerText = data6.field1 + " | " + data6.field2;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data6.field1}&lon=${data6.field2}&format=json`
      )
        .then((response6) => response6.json())
        .then((dataLoc6) => {
          document.getElementById("type6").innerText = dataLoc6.type;
          document.getElementById("address6").innerText = dataLoc6.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data Titik 6:", error));
}

fetchData();
