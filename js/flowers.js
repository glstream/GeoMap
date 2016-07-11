// Data

var flowers = [
  {
    "name": "Hydrangia",
    "latin": "Hydrangea",
    "light": "Sun",
    "ease": 3
  },
  {
    "name": "Chrysanthemum",
    "latin": "Chrysanthemum",
    "light": "Part Sun",
    "ease": 1
  },
  {
    "name": "Peony",
    "latin": "Paeonia",
    "light": "Part Sun",
    "ease": -1
  },
  {
    "name": "Orchid",
    "latin": "Paeonia",
    "light": "Shade",
    "ease": -5
  },
  {
    "name": "Fern",
    "latin": "Dryopteris",
    "light": "Shade",
    "ease": 5
  },
  {
    "name": "Rose",
    "latin": "Rosa",
    "light": "Sun",
    "ease": -4
  },
  {
    "name": "Tulip",
    "latin": "Tulipa",
    "light": "Sun",
    "ease": -2
  },
  {
    "name": "Daisy",
    "latin": "Bellis Perenis",
    "light": "Part Sun",
    "ease": 4
  }
];

flowers.map(function(flower){
  flower["value"] = Math.floor(Math.random()* 100)+1;
  return flower;
});
