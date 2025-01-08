var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";
var suhu_dht22_titik4 = "";
var suhu_dht22_titik5 = "";
var suhu_dht22_titik6 = "";

var kelembaban_dht22_titik1 = "...";
var kelembaban_dht22_titik2 = "...";
var kelembaban_dht22_titik3 = "...";
var kelembaban_dht22_titik4 = "...";
var kelembaban_dht22_titik5 = "...";
var kelembaban_dht22_titik6 = "...";

function fetchData() {
  // API untuk titik 1
  var apiUrl1 =
    "https://api.thingspeak.com/channels/2800079/feeds/last.json?timezone=Asia%2FJakarta&api_key=AG7A0LFIS5X7JOYI";
  fetch(apiUrl1)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 1:", data);
      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 1:", error));

  // API untuk titik 2
  var apiUrl2 =
    "https://api.thingspeak.com/channels/2801000/feeds/last.json?timezone=Asia%2FJakarta&api_key=J1KY0PCXK3P9KL0I";
  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 2:", data);
      suhu_dht22_titik2 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 2:", error));

  // API untuk titik 3
  var apiUrl3 =
    "https://api.thingspeak.com/channels/2801113/feeds/last.json?timezone=Asia%2FJakarta&api_key=8V3PIJRSHYQ5G8WX";
  fetch(apiUrl3)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 3:", data);
      suhu_dht22_titik3 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 3:", error));

  // API untuk titik 4
  var apiUrl4 =
    "https://api.thingspeak.com/channels/2800883/feeds/last.json?timezone=Asia%2FJakarta&api_key=JR7XWW4B6E9UR9PV";
  fetch(apiUrl4)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 4:", data);
      suhu_dht22_titik4 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik4 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 4:", error));

  // API untuk titik 5
  var apiUrl5 =
    "https://api.thingspeak.com/channels/2800874/feeds/last.json?timezone=Asia%2FJakarta&api_key=TL1XBVRPQ4GY49";
  fetch(apiUrl5)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 5:", data);
      suhu_dht22_titik5 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik5 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 5:", error));

  // API untuk titik 6
  var apiUrl6 =
    "https://api.thingspeak.com/channels/2800859/feeds/last.json?timezone=Asia%2FJakarta&api_key=0872MBIFVV0UKD9D";
  fetch(apiUrl6)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON Titik 6:", data);
      suhu_dht22_titik6 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik6 = parseFloat(data.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data Titik 6:", error));
}

// Memanggil fetchData setiap 5 detik
setInterval(fetchData, 5000);


var json_Radius_Pemantauan_3 = {
  type: "FeatureCollection",
  name: "Radius_Pemantauan_3",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 1",
        HubDist: 2.19136,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 1.shp",
        Suhu: suhu_dht22_titik1,
        Kelembaban: kelembaban_dht22_titik1,
        xcoord: 106.6593,
        ycoord: -6.27874,
        Foto: "FOTO/Foto Titik 1.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.677368795464702, -6.278684774488322],
              [106.676502103944372, -6.284276074774129],
              [106.673951055820794, -6.289325732124865],
              [106.669965321167652, -6.293339437826596],
              [106.664935036551498, -6.29592427550425],
              [106.659352621506173, -6.296827192833074],
              [106.653764569339032, -6.295959783741272],
              [106.648717934287561, -6.293406950734758],
              [106.644706760279746, -6.289418596135228],
              [106.642123703601868, -6.284385154777635],
              [106.64122159144037, -6.278799365207182],
              [106.64208868127497, -6.273208025458104],
              [106.6446400398235, -6.268158460294728],
              [106.648625878440498, -6.264144943218565],
              [106.653656020848686, -6.261560318556139],
              [106.659238101832841, -6.260657557267609],
              [106.664825755685641, -6.261525005822679],
              [106.669872080312189, -6.264077746641804],
              [106.673883150356204, -6.268065912615752],
              [106.676466349242077, -6.27309914095814],
              [106.677368795464702, -6.278684774488322],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 2",
        HubDist: 14.04563,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 2.shp",
        Suhu: suhu_dht22_titik2,
        Kelembaban: kelembaban_dht22_titik2,
        xcoord: 106.73167,
        ycoord: -6.32562,
        Foto: "FOTO/Foto Titik 2.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.749740599045396, -6.325563516082448],
              [106.7488747739865, -6.331154738144755],
              [106.746324416094168, -6.336204613959691],
              [106.74233912711253, -6.340218813644912],
              [106.737308999333848, -6.342804372275253],
              [106.731726436654625, -6.343708166421276],
              [106.726137947021542, -6.342841703515627],
              [106.721090628083218, -6.340289792899251],
              [106.717078591476309, -6.336302246387543],
              [106.714494578573067, -6.331269419909852],
              [106.713591510446719, -6.325683992355551],
              [106.714457737965404, -6.32009272698876],
              [106.717008411667507, -6.315042941838316],
              [106.720993809180257, -6.311028932155821],
              [106.726023796756166, -6.308443590291859],
              [106.731606024051416, -6.307539956878475],
              [106.737194111224639, -6.3084064630886],
              [106.742241114353206, -6.310958283040457],
              [106.746253042429075, -6.314945639549429],
              [106.748837195535117, -6.31997824926076],
              [106.749740599045396, -6.325563516082448],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 3",
        HubDist: 3.18419,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 3.shp",
        Suhu: suhu_dht22_titik3,
        Kelembaban: kelembaban_dht22_titik3,
        xcoord: 106.72896,
        ycoord: -6.27719,
        Foto: "FOTO/Foto Titik 3.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.747036112530395, -6.277129673202014],
              [106.746170194360246, -6.282720886439132],
              [106.743619914344919, -6.287770699793315],
              [106.739634866882227, -6.291784789649949],
              [106.734605120652617, -6.294370202042782],
              [106.729023041975154, -6.295273828040245],
              [106.723435091019127, -6.294407191622692],
              [106.718388312285512, -6.291855119075132],
              [106.714376764255192, -6.28786743791023],
              [106.71179314044555, -6.282834517029982],
              [106.710890324071471, -6.277249044381435],
              [106.711756641757731, -6.271657787554731],
              [106.71430723563455, -6.266608063783271],
              [106.718292391419709, -6.262594162464126],
              [106.72332199905722, -6.260008965548641],
              [106.728903745165482, -6.259105499663353],
              [106.734491296605341, -6.259972179670486],
              [106.73953776147745, -6.262524162635297],
              [106.743549201185374, -6.266511655262699],
              [106.746132963587144, -6.271544360665617],
              [106.747036112530395, -6.277129673202014],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 4",
        HubDist: 6.23059,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 4.shp",
        Suhu: suhu_dht22_titik4,
        Kelembaban: kelembaban_dht22_titik4,
        xcoord: 106.69234,
        ycoord: -6.27408,
        Foto: "FOTO/Foto Titik 4.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.710409765155646, -6.27401759775374],
              [106.709543435423598, -6.279608856835155],
              [106.706992760051094, -6.284658584664964],
              [106.703007372413708, -6.288672465819337],
              [106.697977374816517, -6.291257566771518],
              [106.69239515843411, -6.292160809273467],
              [106.686807196993769, -6.291293755154151],
              [106.681760535899656, -6.288741271889174],
              [106.677749221839733, -6.284753227376012],
              [106.675165925102789, -6.279720026073399],
              [106.674263496637664, -6.274134383180479],
              [106.675130225019601, -6.268543082642697],
              [106.677681212300158, -6.263493445669206],
              [106.681666705965512, -6.25947975297982],
              [106.68669656321147, -6.256894866114084],
              [106.692278446472841, -6.25599178154628],
              [106.697866009263251, -6.256858877121956],
              [106.702912358449325, -6.259411269530585],
              [106.706923566481336, -6.26339912557875],
              [106.709507003569541, -6.268432112794938],
              [106.710409765155646, -6.27401759775374],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 5",
        HubDist: 6.73307,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 5.shp",
        Suhu: suhu_dht22_titik5,
        Kelembaban: kelembaban_dht22_titik5,
        xcoord: 106.72129,
        ycoord: -6.2512,
        Foto: "FOTO/Foto Titik 5.jpg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.739358007080611, -6.251144182436107],
              [106.738491969824267, -6.256735399043385],
              [106.735941662769463, -6.261785165253172],
              [106.731956683153612, -6.265799162115497],
              [106.726927093087085, -6.268384444878158],
              [106.721345243525107, -6.269287917428653],
              [106.715757572012919, -6.268421118866963],
              [106.710711095456801, -6.26586889138038],
              [106.706699842565627, -6.261881077598228],
              [106.704116477895326, -6.256848059292873],
              [106.703213859371957, -6.251262533818039],
              [106.704080294450009, -6.245671273835728],
              [106.706630914009267, -6.240621596857773],
              [106.710616001446226, -6.236607787750634],
              [106.715645453466479, -6.234022719550414],
              [106.721226971843748, -6.233119406414051],
              [106.726814245534186, -6.233986248350766],
              [106.731860409585849, -6.236538386605491],
              [106.735871554655972, -6.240526012632444],
              [106.738455057372605, -6.24555881637538],
              [106.739358007080611, -6.251144182436107],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        NAMOBJ: "Titik 6",
        HubDist: 6.92746,
        path: "C:\\Users\\sitiz\\Downloads\\SIG\\Tugas Akhir\\RESULT\\Titik 6.shp",
        Suhu: suhu_dht22_titik6,
        Kelembaban: kelembaban_dht22_titik6,
        xcoord: 106.67133,
        ycoord: -6.23956,
        Foto: "FOTO/Foto Titik 6.jpeg",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [106.689400853896927, -6.23950524244731],
              [106.688534248853784, -6.245096518942772],
              [106.685983421945764, -6.250146160175047],
              [106.681998021714818, -6.25415985920671],
              [106.676968151889426, -6.256744700485158],
              [106.671386191112376, -6.257647631408778],
              [106.665798587860081, -6.256780244527791],
              [106.660752352126508, -6.254227440021935],
              [106.656741488629308, -6.250239117224308],
              [106.654158623362505, -6.245205707687314],
              [106.653256565064325, -6.23961994676576],
              [106.654123566305941, -6.234028629736792],
              [106.656674702777792, -6.228979079292772],
              [106.660660207695031, -6.224965567693107],
              [106.665689937342606, -6.222380938897759],
              [106.671271566620817, -6.221478164347003],
              [106.676858773674567, -6.222345591761493],
              [106.681904699844324, -6.224898305479067],
              [106.685915458655259, -6.228886440844685],
              [106.688498464099936, -6.233919637898599],
              [106.689400853896927, -6.23950524244731],
            ],
          ],
        ],
      },
    },
  ],
};

function updateGeoJSON() {
  // Menyesuaikan Suhu untuk setiap titik (1 hingga 6)
  json_Radius_Pemantauan_3.features[0].properties.Suhu = suhu_dht22_titik1;
  json_Radius_Pemantauan_3.features[1].properties.Suhu = suhu_dht22_titik2;
  json_Radius_Pemantauan_3.features[2].properties.Suhu = suhu_dht22_titik3;
  json_Radius_Pemantauan_3.features[3].properties.Suhu = suhu_dht22_titik4;
  json_Radius_Pemantauan_3.features[4].properties.Suhu = suhu_dht22_titik5;
  json_Radius_Pemantauan_3.features[5].properties.Suhu = suhu_dht22_titik6;

  // Menyesuaikan Kelembaban untuk setiap titik (1 hingga 6)
  json_Radius_Pemantauan_3.features[0].properties.Kelembaban = kelembaban_dht22_titik1;
  json_Radius_Pemantauan_3.features[1].properties.Kelembaban = kelembaban_dht22_titik2;
  json_Radius_Pemantauan_3.features[2].properties.Kelembaban = kelembaban_dht22_titik3;
  json_Radius_Pemantauan_3.features[3].properties.Kelembaban = kelembaban_dht22_titik4;
  json_Radius_Pemantauan_3.features[4].properties.Kelembaban = kelembaban_dht22_titik5;
  json_Radius_Pemantauan_3.features[5].properties.Kelembaban = kelembaban_dht22_titik6;
}

function logJson() {
  updateGeoJSON();
  console.log("===============d=================");
  console.log(json_Radius_Pemantauan_3.features[0].properties.Suhu); // Titik 1
  console.log(json_Radius_Pemantauan_3.features[1].properties.Suhu); // Titik 2
  console.log(json_Radius_Pemantauan_3.features[2].properties.Suhu); // Titik 3
  console.log(json_Radius_Pemantauan_3.features[3].properties.Suhu); // Titik 4
  console.log(json_Radius_Pemantauan_3.features[4].properties.Suhu); // Titik 5
  console.log(json_Radius_Pemantauan_3.features[5].properties.Suhu); // Titik 6
  console.log("===========================a=====");
}

setInterval(logJson, 5000);
