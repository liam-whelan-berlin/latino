"use strict";

const allergene = {
  a: "enthält Ei/-Erzeugnisse",
  b: "enthält Erdnüsse/-Erzeugnisse",
  c: "enthält Fisch/-Erzeugnisse",
  e: "enthält Krebstiere/-Erzeugnisse",
  f: "enthält Lupinien-Erzeugnisse",
  g: "enthält Mlch/-Erzeugnisse (laktosehaltig)",
  h: "enthält Schalenfrüchte",
  i: "enthält Schwefeldioxid und Sulfitw",
  j: "enthält Sellerie/-Erzeugnisse",
  k: "enthält Senf-/Erzeugnisse",
  l: "enthält Krebstiere-/Erzeugnisse",
  m: "enthält Sojabohnen/-Erzeugnisse",
  n: "enthält Weichtiere/-Erzeugnisse",
  p: "enthält Sesamsamen/-Erzeugnisse",
  "★": "enthält glutenhatige Getreide/-Erzeugnisse",
};

const zusatzstoffe = {
  1: "mit Farbstoff",
  2: "koffeinhaltig",
  3: "chininhaltig",
  4: "mit Süßstoff Aspartam",
  5: "Benzoesäure",
  12: "enthält Phenylalanin",
  "☆": "mit Ingwerauszug",
};

const ulAllergene = document.querySelector(".ul-allergene");

Object.keys(allergene).forEach((key) => {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  strong.innerText = `${key}`;
  li.appendChild(strong);
  const span = document.createElement("span");
  span.innerText = `${allergene[key]}`;
  li.appendChild(span);
  ulAllergene.appendChild(li);
});

const ulZusatzstoffe = document.querySelector(".ul-zusatzstoffe");

Object.keys(zusatzstoffe).forEach((key) => {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  strong.innerText = `${key}`;
  li.appendChild(strong);
  const span = document.createElement("span");
  span.innerText = `${zusatzstoffe[key]}`;
  li.appendChild(span);
  ulZusatzstoffe.appendChild(li);
});

const speisekarte = [
  {
    pageNumber: 1,
    sectionName: "Antipasti - Vorspeisen",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Mozzarella caprese",
        beschreibung: "Tomaten, Mozzarella mit Basilikum",
        nummer: 9,
        preis: 12.5,
        grosse: "",
        allergeneZusatzstoffe: ["g"],
      },
      {
        gericht: "Antipasto di verdura",
        beschreibung: "gegrilltes Gemüse der Saison mit Bruschetta",
        nummer: 501,
        preis: 13,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Vitello Tonnato",
        beschreibung:
          "Kalbfleisch dünn geschnitten mit Thunfischsauce und Kapern",
        nummer: 550,
        preis: 16,
        grosse: "",
        allergeneZusatzstoffe: ["a", "c", "g"],
      },
      {
        gericht: "Carpaccio di Manzo",
        beschreibung:
          "Rinderficonst dünn geschnitten mit Champignons, Rucola und gehobeltem Parmesankäse",
        nummer: 18,
        preis: 16,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Bruschetta",
        beschreibung: "",
        nummer: 163,
        preis: 5.5,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
      ,
      {
        gericht: "Focaccia",
        beschreibung: "",
        nummer: 161,
        preis: 5.5,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
    ],
  },
  {
    pageNumber: 2,
    sectionName: "Zuppe - Suppen",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Bohnensuppe",
        beschreibung: "",
        nummer: 1,
        preis: 7,
        grosse: "",
        allergeneZusatzstoffe: ["h", "j"],
      },
      {
        gericht: "Tomatensuppe",
        beschreibung: "",
        nummer: 4,
        preis: 7,
        grosse: "",
        allergeneZusatzstoffe: ["a", "g", "j"],
      },
      {
        gericht: "Stracciatella",
        beschreibung: "",
        nummer: 6,
        preis: 7,
        grosse: "",
        allergeneZusatzstoffe: ["a"],
      },
      {
        gericht: "Fischsuppe",
        beschreibung: "",
        nummer: 7,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["c", "e", "j"],
      },
    ],
  },
  {
    pageNumber: 3,
    sectionName: "Salate",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Tomatensalat",
        beschreibung: "",
        nummer: 25,
        preis: 5,
        grosse: "",
        allergeneZusatzstoffe: ["k"],
      },
      {
        gericht: "Gurkensalat",
        beschreibung: "",
        nummer: 27,
        preis: 5,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Beilagensalat",
        beschreibung: "",
        nummer: 29,
        preis: 5,
        grosse: "",
        allergeneZusatzstoffe: ["k"],
      },
      {
        gericht: "Insalata mista",
        beschreibung: "gemischter Salat",
        nummer: 28,
        preis: 11.5,
        grosse: "",
        allergeneZusatzstoffe: ["k"],
      },
      {
        gericht: "Insalata capriccio",
        beschreibung: "gemischter Salat mit Thunfisch und gerösteten Körnern",
        nummer: 30,
        preis: 14.5,
        grosse: "",
        allergeneZusatzstoffe: ["k", "c"],
      },
      {
        gericht: "Insalata del pastore",
        beschreibung: "gemischter Salat mit Fetakäse und gerösteten Körnern",
        nummer: 32,
        preis: 14.5,
        grosse: "",
        allergeneZusatzstoffe: ["k", "g"],
      },
      {
        gericht: "Insalata mista con pollo all' aceto balsamico",
        beschreibung:
          "gemischter Salat mit Hähnchenbruststreifen in Balsamessig, gehobeltem Parmesankäse und gerösteten Körnern",
        nummer: 504,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "h", "k"],
      },
    ],
  },
  {
    pageNumber: 4,
    sectionName: "Pasta - Nudelgerichte",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Linguine al salmone",
        beschreibung: "Bandnudeln mit Lachsstreifen in Tomatensahnesauce",
        nummer: 39,
        preis: 17.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "c", "g"],
      },
      {
        gericht: "Spaghetti all'arrabbiata",
        beschreibung: "Spaghetti mit pikanter Tomatensauce und Oliven",
        nummer: 40,
        preis: 12.5,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Spaghetti al pomodoro",
        beschreibung: "mit Tomatensauce und frischem Basilikum",
        nummer: 41,
        preis: 12,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Spaghetti amatriciana",
        beschreibung:
          "mit italienischem Speck und Zwiebeln in pikanter Tomatensauce",
        nummer: 44,
        preis: 15,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Spaghetti carbonara",
        beschreibung: "mit Schinken, Ei und Parmesankäse",
        nummer: 45,
        preis: 15,
        grosse: "",
        allergeneZusatzstoffe: ["★", "a", "g"],
      },
      {
        gericht: "Spaghetti aglio olio peperoncino",
        beschreibung:
          "mit Knoblauch, Oliven, Cherrytomaten, Porree und Peperoncino",
        nummer: 46,
        preis: 12.5,
        grosse: "",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Linguine alla marinara",
        beschreibung: "Nudeln mit Meeresfrüchten in Tomatensauce",
        nummer: 49,
        preis: 18,
        grosse: "",
        allergeneZusatzstoffe: ["★", "n", "e"],
      },
      {
        gericht: "Spaghetti alla romana",
        beschreibung:
          "mit Hähnchenbruststreifen, frischen Champignons in Gorgonzolarahmsauce",
        nummer: 50,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Lasagna al forno ",
        beschreibung: "",
        nummer: 54,
        preis: 16,
        grosse: "",
        allergeneZusatzstoffe: ["★", "a", "g"],
      },
      {
        gericht: "Tortellini freschi alla panna",
        beschreibung:
          "Frische mit Spinat und Ricotta gefüllte Teigtaschen in Sahnesauce und Parmesankäse",
        nummer: 55,
        preis: 16,
        grosse: "",
        allergeneZusatzstoffe: ["★", "a", "g"],
      },
      {
        gericht: "Spaghetti Bolognese",
        beschreibung:
          "Spaghetti mit Fleischragout und Tomatensauce und geriebenem Parmesankäse",
        nummer: 42,
        preis: 15.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "j"],
      },
      {
        gericht: "Tagliatelle con pollo, carciofi e pomodori secchi",
        beschreibung:
          "Bandnudeln mit Hähnchenbruststreifen, Artischocken und getrockneten Tomaten in Knoblauch-Olivenöl und Parmesankase",
        nummer: 513,
        preis: 17,
        grosse: "",
        allergeneZusatzstoffe: ["★", "b", "g"],
      },
    ],
  },
  {
    pageNumber: 5,
    sectionName: "Pizzen",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Pizza Margherita",
        beschreibung: "mit Tomaten, Mozzarella",
        nummer: 73,
        preis: 11,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Napoli",
        beschreibung: "mit Tomaten, Mozzarella, Sardellenficonsts und Kapern",
        nummer: 74,
        preis: 12,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "c"],
      },
      {
        gericht: "Pizza Calabrese",
        beschreibung: "mit Tomaten, Mozzarella und scharfer Salami ",
        nummer: 75,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Funghi",
        beschreibung: "mit Tomaten, Mozzarella und frischen Champignons",
        nummer: 77,
        preis: 12,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Salami",
        beschreibung: "mit Tomaten, Mozzarella und Plockwurst einfach",
        nummer: 78,
        preis: 12,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Tonno",
        beschreibung: "mit Tomaten, Mozzarella und Thunfisch",
        nummer: 81,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "c"],
      },
      {
        gericht: "Pizza Parma",
        beschreibung: "mit Tomaten, Mozzarella und Parmaschinken",
        nummer: 82,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Veneto",
        beschreibung: "mit Tomaten, Mozzarella, Gorgonzola und Spinat",
        nummer: 83,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Parma Rucola",
        beschreibung:
          "mit lomaten, Mozzarella, Parmaschinken, Rucola und gehobeltem Grana Padano",
        nummer: 84,
        preis: 18,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Quattro Stagioni",
        beschreibung:
          "mit Tomaten, Mozzarella, Champignons, Plockwurst einfach, Peperoni und Oliven",
        nummer: 85,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Mozzarella",
        beschreibung: "mit frischen Tomaten, Basilikum und Mozzarella",
        nummer: 86,
        preis: 14.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Primavera",
        beschreibung:
          "mit Tomaten, Mozzarella, Champignons, Peperoni, Thunfisch und Plockwurst einfach",
        nummer: 87,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "c"],
      },
      {
        gericht: "Pizza Pecorino",
        beschreibung: "mit Tomaten, Mozzarella, Fetakäse und Zwiebeln",
        nummer: 88,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Scampi",
        beschreibung: "mit Tomaten, Mozzarella, Großgarnelen und Knoblauch",
        nummer: 90,
        preis: 18.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "e"],
      },
      {
        gericht: "Pizza 'Latino'",
        beschreibung:
          "mit Tomaten, Mozzarella, Champignons, Schinken, Plockwurst eintach, Thunfisch und Artischocke",
        nummer: 93,
        preis: 18,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "c"],
      },
      {
        gericht: "Pizza Broccoli Prosciutto",
        beschreibung:
          "mit Tomaten, Mozzarella, Brokkoli und gekochtem Schinken",
        nummer: 94,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Gorgonzola e Funghi",
        beschreibung: "mit Gorgonzola und frischen Champignons",
        nummer: 95,
        preis: 14,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Pizza Marinara",
        beschreibung: "mit Tomaten, Mozzarella und Meeresfrüchten",
        nummer: 96,
        preis: 18,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "e"],
      },
      {
        gericht: "Pizza Verdura",
        beschreibung: "mit verschiedenen Gemüsesorten",
        nummer: 97,
        preis: 15.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
    ],
  },
  {
    pageNumber: 6,
    sectionName: "Pesce - Fischgerichte",
    sectionDetails:
      "Alle Fischgerichte werden mit Blattspinat, Rosmarinkartoffeln und Salat serviert.",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Ficonstto di salmone fresco alla griglia",
        beschreibung: "Frisches Lachsficonst vom Grill",
        nummer: 99,
        preis: 23.5,
        grosse: "",
        allergeneZusatzstoffe: ["c"],
      },
      {
        gericht: "Calamaretti",
        beschreibung: "Babycalamari vom Grill",
        nummer: 100,
        preis: 23,
        grosse: "",
        allergeneZusatzstoffe: ["c"],
      },
      {
        gericht: "Scampi alla griglia",
        beschreibung: "vom Grill",
        nummer: 108,
        preis: 28,
        grosse: "",
        allergeneZusatzstoffe: ["e"],
      },
      {
        gericht: "Scampi al forno",
        beschreibung: "Scampi al Werno ein-knoblauchsauce",
        nummer: 106,
        preis: 28,
        grosse: "",
        allergeneZusatzstoffe: ["e", "j", "k", "l"],
      },
      { heading: "Miesmuscheln - nach Saison" },
      {
        gericht: "Cozze naturale",
        beschreibung: "in Weißweinsauce",
        nummer: 114,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["j", "n"],
      },
      {
        gericht: "Cozze Latino",
        beschreibung: "in Tomatensauce",
        nummer: 115,
        preis: 18,
        grosse: "",
        allergeneZusatzstoffe: ["j", "n"],
      },
    ],
  },
  {
    pageNumber: 7,
    sectionName: "Fleischgerichte",
    sectionDetails:
      "Fleischgerichte werden wahlweise mit Rosmarinkartoffeln oder Gemüse und Salat serviert.",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Milanese",
        beschreibung: "Paniertes Schweineschnitzel mit Zitronenecke",
        nummer: 120,
        preis: 16.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "a", "g"],
      },
      {
        gericht: "Bistecchine di manzo",
        beschreibung:
          "Rindermedaillons gebraten mit Knoblauch, Peperoncino und Rosmarin",
        nummer: 547,
        preis: 33.5,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Ficonstto di manzo ",
        beschreibung: "Rinderficonst vom Grill",
        nummer: 148,
        preis: 33.5,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Ficonstto di manzo alla gorgonzola",
        beschreibung: "Rinderficonst vom Grill mit Gorgonzolasauce",
        nummer: 151,
        preis: 35.5,
        grosse: "",
        allergeneZusatzstoffe: ["g"],
      },
      {
        gericht: "Entrecôte alla griglia",
        beschreibung: "Entrecôte vom Grill",
        nummer: 549,
        preis: 29,
        grosse: "",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Fegato di vitello ",
        beschreibung: "Kalbsleber gebraten mit Zwiebeln",
        nummer: 522,
        preis: 25.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
    ],
  },
  {
    pageNumber: 8,
    sectionName: "Dessert",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Eisbecher",
        beschreibung: "Eisbecher",
        nummer: 179,
        preis: 4.5,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Eisbecher",
        beschreibung: "mit Eierlikör",
        nummer: 184,
        preis: 7,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g", "a"],
      },
      {
        gericht: "Tartufo",
        beschreibung: "",
        nummer: 188,
        preis: 6,
        grosse: "",
        allergeneZusatzstoffe: ["★", "g"],
      },
      {
        gericht: "Tiramisu",
        beschreibung: "",
        nummer: 190,
        preis: 7,
        grosse: "",
        allergeneZusatzstoffe: ["★", "a", "g", "2"],
      },
      {
        gericht: "Panna Cotta",
        beschreibung: "",
        nummer: 192,
        preis: 6,
        grosse: "",
        allergeneZusatzstoffe: ["g"],
      },
    ],
  },
  {
    pageNumber: 9,
    sectionName: "Warme Getränke",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Kaffee",
        beschreibung: "",
        nummer: 229,
        preis: 2.5,
        grosse: "Tasse",
        allergeneZusatzstoffe: ["2"],
      },
      {
        gericht: "Espresso",
        beschreibung: "",
        nummer: 230,
        preis: 2.5,
        grosse: "Tasse",
        allergeneZusatzstoffe: ["2"],
      },
      {
        gericht: "Cappuccino",
        beschreibung: "",
        nummer: 232,
        preis: 3,
        grosse: "Tasse",
        allergeneZusatzstoffe: ["2", "g"],
      },
      {
        gericht: "Tee",
        beschreibung: "diverse Sorten",
        nummer: 233,
        preis: 2.5,
        grosse: "Tasse",
        allergeneZusatzstoffe: [],
      },
    ],
  },
  {
    pageNumber: 10,
    sectionName: "Alkoholfreie Getränke",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Orangensaft",
        beschreibung: "",
        nummer: 210,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Apfelsaft",
        beschreibung: "naturtrüb",
        nummer: 211,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Grapefruitsaft",
        beschreibung: "",
        nummer: 212,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Ginger Ale",
        beschreibung: "",
        nummer: 213,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["☆"],
      },
      {
        gericht: "Tonic Water",
        beschreibung: "",
        nummer: 213,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["3"],
      },
      {
        gericht: "Bitter Lemon",
        beschreibung: "",
        nummer: 213,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["3"],
      },
      {
        gericht: "Coca-Cola",
        beschreibung: "",
        nummer: 218,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "2"],
      },
      {
        gericht: "Coca-Cola",
        beschreibung: "",
        nummer: 220,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "2"],
      },
      {
        gericht: "Coca-Cola Zero Sugar",
        beschreibung: "",
        nummer: 221,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "2", "4", "12"],
      },
      {
        gericht: "Coca-Cola Zero Sugar",
        beschreibung: "",
        nummer: 356,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "2", "4", "12"],
      },
      {
        gericht: "Spezi",
        beschreibung: "",
        nummer: 222,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["5", "2"],
      },
      {
        gericht: "Spezi",
        beschreibung: "",
        nummer: 257,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["5", "2"],
      },
      {
        gericht: "Fanta",
        beschreibung: "",
        nummer: 223,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "5"],
      },
      {
        gericht: "Fanta",
        beschreibung: "",
        nummer: 224,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1", "5"],
      },
      {
        gericht: "Sprite",
        beschreibung: "",
        nummer: 255,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Sprite",
        beschreibung: "",
        nummer: 257,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Fassbrause",
        beschreibung: "",
        nummer: 225,
        preis: 2.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1"],
      },
      {
        gericht: "Fassbrause",
        beschreibung: "",
        nummer: 226,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["1"],
      },
      {
        gericht: "Apfelsaftschorle",
        beschreibung: "",
        nummer: 358,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Apfelsaftschorle",
        beschreibung: "",
        nummer: 228,
        preis: 4.8,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Malztrunk",
        beschreibung: "",
        nummer: 246,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "San Pellegrino",
        beschreibung: "",
        nummer: 248,
        preis: 2.5,
        grosse: "0,15 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "San Pellegrino",
        beschreibung: "",
        nummer: 357,
        preis: 6,
        grosse: "0,75 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Brandenburger Quell - Classic",
        beschreibung: "",
        nummer: 217,
        preis: 4,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
    ],
  },
  {
    pageNumber: 11,
    sectionName: "Bier",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Spatenbräu",
        beschreibung: "",
        nummer: 242,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Spatenbräu",
        beschreibung: "",
        nummer: 243,
        preis: 5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Spatenbräu",
        beschreibung: "",
        nummer: 241,
        preis: 5.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Franziskaner",
        beschreibung: "Kristall, Hefe, hell",
        nummer: 244,
        preis: 5.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: ["★"],
      },
      {
        gericht: "Alkoholfreies Bier",
        beschreibung: "",
        nummer: 246,
        preis: 4.5,
        grosse: "0,13 l",
        allergeneZusatzstoffe: ["★"],
      },
    ],
  },
  {
    pageNumber: 12,
    sectionName: "Aperitifo",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Cynar",
        beschreibung: "",
        nummer: 196,
        preis: 4,
        grosse: "4 cl",
        allergeneZusatzstoffe: ["6"],
      },
      {
        gericht: "Cinzano",
        beschreibung: "rot, weiß, dry",
        nummer: 198,
        preis: 4,
        grosse: "5 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Averna",
        beschreibung: "",
        nummer: 200,
        preis: 4,
        grosse: "2 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Ramazzotti",
        beschreibung: "",
        nummer: 201,
        preis: 4,
        grosse: "2 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Campari Orange",
        beschreibung: "",
        nummer: 202,
        preis: 6,
        grosse: "4 cl",
        allergeneZusatzstoffe: ["1"],
      },
    ],
  },
  {
    pageNumber: 13,
    sectionName: "Spirituosen",
    sectionDetails: "",
    sectionFootnotes: "",
    sectionItems: [
      {
        gericht: "Grappa",
        beschreibung: "",
        nummer: 250,
        preis: 3.5,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Fernet Branca",
        beschreibung: "",
        nummer: 258,
        preis: 4,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Fernet Menta",
        beschreibung: "",
        nummer: 259,
        preis: 4,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: ["1"],
      },
      {
        gericht: "Sambuca",

        beschreibung: "",
        nummer: 266,
        preis: 3.5,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Amaretto",

        beschreibung: "",
        nummer: 267,
        preis: 3.5,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: ["h"],
      },
      {
        gericht: "Vecchia Romagna",
        beschreibung: "",
        nummer: 263,
        preis: 4.5,
        grosse: "0,12 cl",
        allergeneZusatzstoffe: [],
      },
    ],
  },
  {
    pageNumber: 14,
    sectionName: "Offene italienische Weine",
    sectionDetails: "",
    sectionFootnotes: "Unsere Weine enthalten Sulfit",
    sectionItems: [
      { heading: "Weißweine" },
      {
        gericht: "Pinot Grigio",
        beschreibung: "trocken",
        nummer: 322,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Pinot Grigio",
        beschreibung: "trocken",
        nummer: 323,
        preis: 6,
        grosse: "0,15 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Pinot Grigio",
        beschreibung: "trocken",
        nummer: 324,
        preis: 12,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Pinot Grigio",
        beschreibung: "trocken",
        nummer: 325,
        preis: 23,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 326,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 327,
        preis: 6,
        grosse: "0,15 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 328,
        preis: 12,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 329,
        preis: 23,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      { heading: "Rotweine" },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 330,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 331,
        preis: 6,
        grosse: "0,25 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 332,
        preis: 12,
        grosse: "0,5 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Landwein",
        beschreibung: "trocken",
        nummer: 333,
        preis: 23,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chianti",
        beschreibung: "trocken",
        nummer: 342,
        preis: 3.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chianti",
        beschreibung: "trocken",
        nummer: 343,
        preis: 7,
        grosse: "0,25 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chianti",
        beschreibung: "trocken",
        nummer: 344,
        preis: 14,
        grosse: "0,5 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chianti",
        beschreibung: "trocken",
        nummer: 345,
        preis: 25,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Lambrusco",
        beschreibung: "Perlwein süß",
        nummer: 334,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Lambrusco",
        beschreibung: "Perlwein süß",
        nummer: 335,
        preis: 6,
        grosse: "0,15 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Lambrusco",
        beschreibung: "Perlwein süß",
        nummer: 336,
        preis: 12,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Lambrusco",
        beschreibung: "Perlwein süß",
        nummer: 337,
        preis: 23,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      { heading: "Roséweine" },
      {
        gericht: "Chiaretto",
        beschreibung: "trocken",
        nummer: 338,
        preis: 3,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chiaretto",
        beschreibung: "trocken",
        nummer: 339,
        preis: 6,
        grosse: "0,25 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chiaretto",
        beschreibung: "trocken",
        nummer: 340,
        preis: 12,
        grosse: "0,5 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Chiaretto",
        beschreibung: "trocken",
        nummer: 341,
        preis: 23,
        grosse: "1 l",
        allergeneZusatzstoffe: [],
      },
      { heading: "Weinhaltige Mischgetränke" },
      {
        gericht: "Weißweinschorle",
        beschreibung: "",
        nummer: 349,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
      {
        gericht: "Rotweinschorle",
        beschreibung: "",
        nummer: 350,
        preis: 4.5,
        grosse: "0,1 l",
        allergeneZusatzstoffe: [],
      },
    ],
  },
  {
    pageNumber: 15,
    sectionName: "Spumante - Sekt",
    sectionDetails: "",
    sectionFootnotes: "Unsere Weine enthalten Sulfit",
    sectionItems: [
      {
        gericht: "Prosecco",
        beschreibung: "",
        nummer: 314,
        preis: 28,
        grosse: "0,75 l Fl.",
        allergeneZusatzstoffe: ["a"],
      },
      {
        gericht: "Prosecco",
        beschreibung: "",
        nummer: 311,
        preis: 4.5,
        grosse: "0,1 l Gl.",
        allergeneZusatzstoffe: ["a"],
      },
      {
        gericht: "Aperol Spritz",
        beschreibung: "",
        nummer: 312,
        preis: 6.5,
        grosse: "0,1 l Gl.",
        allergeneZusatzstoffe: ["a", "1"],
      },
    ],
  },
];

function resetPageHeight() {
  document.body.style.height = `${window.innerHeight}px`;
}

window.addEventListener("resize", resetPageHeight);

resetPageHeight();

const hamburger = document.querySelector(".span-icon-hamburger");
const mainNav = document.querySelector(".nav-main-nav");

hamburger.addEventListener("click", mainNavToggle);

function mainNavToggle() {
  document.body.classList.toggle("no-overflow");
  mainNav.classList.toggle("hide");
}

const mainNavItems = document.querySelectorAll(".li-hauptnavigation-link");
for (const mainNavItem of mainNavItems)
  mainNavItem.addEventListener("click", mainNavToggle);

const speisekartetNavItem = document.querySelector(".a-speisekarte");
speisekartetNavItem.addEventListener("click", goToMenu);

function goToMenu() {
  window.location.href = "#speisekarte";
  loadMenuContents(speisekarte);
}

const speisekarteInhaltNav = document.querySelector(
  ".nav-speisekarte-inhalt-2-nav"
);
const speisekarteMain = document.querySelector(".section-speisekarte-seite");
const speisekarteSeitenListe = document.querySelector(".ul-speisekarte-seiten");
const speisekartetNav = document.querySelector(".nav-speisekarte-seite-1-nav");
const arrowLeft = document.querySelector(".li-speisekarte-nav-zurueck");
const arrowRight = document.querySelector(".li-speisekarte-nav-vor");
let currentPageNumber = 1;

function checkCurrentPageNumber() {
  if (currentPageNumber >= speisekarte.length) currentPageNumber = 0;
  if (currentPageNumber === -1) currentPageNumber = speisekarte.length - 1;
}

const seiteNummer = document.querySelector(".span-speisekarte-seite-nummer");
const gesamtseitenzahl = document.querySelector(
  ".span-speisekarte-gesamtseitenzahl"
);

gesamtseitenzahl.innerText = speisekarte.length;

function changeVisibilityToNone(element) {
  element.style.visibility = "hidden";
}

function loadMenu(currentPageNumber) {
  speisekartetNav.classList.remove("hide");
  speisekarteInhaltNav.classList.add("hide");
  speisekarteMain.classList.remove("hide");
  speisekarteMain.innerHTML = "";
  const speisekarteSeiteHeading = document.createElement("h3");
  speisekarteSeiteHeading.setAttribute("class", "h3-speisekarte-seite-heading");
  speisekarteSeiteHeading.innerText =
    speisekarte[currentPageNumber].sectionName ||
    changeVisibilityToNone(speisekarteSeiteHeading);
  speisekarteMain.appendChild(speisekarteSeiteHeading);
  const speisekarteSeiteDetails = document.createElement("h3");
  speisekarteSeiteDetails.innerText =
    speisekarte[currentPageNumber].sectionDetails ||
    changeVisibilityToNone(speisekarteSeiteDetails);
  speisekarteMain.appendChild(speisekarteSeiteDetails);
  speisekarteSeiteDetails.setAttribute("class", "p-speisekarte-seite-details");
  seiteNummer.innerText = currentPageNumber + 1;
  const gerichte = document.createElement("section");
  gerichte.setAttribute("class", ".section-gerichte");

  speisekarte[currentPageNumber].sectionItems.forEach((sectionItem) => {
    const gericht = document.createElement("article");

    /* ... ... ... ... */
    if ("heading" in sectionItem) {
      const h4 = document.createElement("h4");
      h4.innerText = sectionItem.heading;
      h4.setAttribute("class", "h4-gericht-gruppe");
      gerichte.appendChild(h4);
    } else {
      gericht.setAttribute("class", "article-gericht");
      const gerichtNummer = document.createElement("aside");
      gerichtNummer.setAttribute("class", "aside-gericht-nummer");
      gerichtNummer.innerText =
        sectionItem.nummer || changeVisibilityToNone(gerichtNummer);
      gericht.appendChild(gerichtNummer);
      const divNB = document.createElement("div");
      divNB.setAttribute("class", "div-gericht-name-beschreibung");
      const gerichtName = document.createElement("h5");
      gerichtName.setAttribute("class", "h5-gericht-name");
      gerichtName.innerText = sectionItem.gericht;
      const gerichtBeschreibung = document.createElement("p");
      gerichtBeschreibung.setAttribute("class", "p-gericht-beschreibung");
      gerichtBeschreibung.innerText =
        sectionItem.beschreibung || changeVisibilityToNone(gerichtBeschreibung);
      divNB.appendChild(gerichtName);
      divNB.appendChild(gerichtBeschreibung);
      gericht.appendChild(divNB);
      const gerichtFussnoten = document.createElement("sup");
      gerichtFussnoten.setAttribute("class", "sup-gericht-fussnoten");
      gerichtFussnoten.innerText =
        sectionItem.allergeneZusatzstoffe.join(" ") ||
        changeVisibilityToNone(gerichtFussnoten);
      gericht.appendChild(gerichtFussnoten);
      const gerichtPreis = document.createElement("strong");
      gerichtPreis.setAttribute("class", "strong-gericht-preis");
      if (sectionItem.preis % 1 === 0) {
        sectionItem.preis += ",-";
      } else {
        sectionItem.preis = sectionItem.preis.toString();
        sectionItem.preis = sectionItem.preis.replace(".", ",");
      }
      gerichtPreis.innerText =
        sectionItem.preis || changeVisibilityToNone(gerichtPreis);
      gericht.appendChild(gerichtPreis);
      const gerichtGrosse = document.createElement("aside");
      gerichtGrosse.setAttribute("class", "aside-gericht-grosse");
      gerichtGrosse.innerText =
        sectionItem.grosse || ("none" && changeVisibilityToNone(gerichtGrosse));
      gericht.appendChild(gerichtGrosse);

      gerichte.appendChild(gericht);
    }
  });
  speisekarteMain.appendChild(gerichte);
  const speisekarteSeiteFootnotes = document.createElement("strong");
  speisekarteSeiteFootnotes.setAttribute(
    "class",
    "strong-speisekarte-seite-fussnoten"
  );
  speisekarteSeiteFootnotes.innerText =
    speisekarte[currentPageNumber].sectionFootnotes;
  speisekarteMain.appendChild(speisekarteSeiteFootnotes);
}

arrowLeft.addEventListener("click", () => {
  currentPageNumber--;
  checkCurrentPageNumber(currentPageNumber);
  loadMenu(currentPageNumber);
});

arrowRight.addEventListener("click", () => {
  currentPageNumber++;
  checkCurrentPageNumber(currentPageNumber);
  loadMenu(currentPageNumber);
});

function loadMenuContents(speisekarte) {
  speisekartetNav.classList.add("hide");
  speisekarteInhaltNav.classList.remove("hide");
  speisekarteMain.classList.add("hide");
  speisekarteSeitenListe.innerHTML = "";
  speisekarte.forEach((speisekarte, index) => {
    const li = document.createElement("li");
    li.innerText = speisekarte.sectionName;
    li.setAttribute("class", "li-speisekarte-seite");
    speisekarteSeitenListe.appendChild(li);
    li.addEventListener("click", () => {
      currentPageNumber = index;
      loadMenu(index);
    });
  });
}

addEventListener("load", (event) => {
  loadMenuContents(speisekarte);
});

const mittagskarteNavItem = document.querySelector(
  ".img-nav-link.mittagskarte"
);
const empfehlungenNavItem = document.querySelector(
  ".img-nav-link.empfehlungen"
);

const rundgangNavItem = document.querySelector(".a-rundgang");
const anfahrtNavItem = document.querySelector(".a-anfahrt");

function goHome() {
  window.location.href = "#startseite";
}

rundgangNavItem.addEventListener("click", goHome);
anfahrtNavItem.addEventListener("click", goHome);

const mittagskarteMainNavButton = document.querySelector(
  ".img-nav-link.mittagskarte"
);
const mittagskarteModal = document.querySelector(".article-mittagskarte");
const empfehlungenModal = document.querySelector(".article-empfehlungen");
const impressumModal = document.querySelector(".article-impressum");
const datenschutzModal = document.querySelector(".article-datenschutz");
const mittagskarteClose = document.querySelector(
  ".img-icon-close-mittagskarte"
);

mittagskarteMainNavButton.addEventListener("click", closeMittagsModal);

function closeMittagsModal() {
  mittagskarteModal.style.display = "none";
}

function openMittagsModal() {
  empfehlungenModal.style.display = "none";
  mittagskarteModal.style.display = "block";
  impressumModal.style.display = "none";
  datenschutzModal.style.display = "none";
}

mittagskarteMainNavButton.addEventListener("click", openMittagsModal);
mittagskarteClose.addEventListener("click", closeMittagsModal);

const empfehlungenMainNavButton = document.querySelector(".img-empfehlungen");
const empfehlungenClose = document.querySelector(
  ".img-icon-close-empfehlungen"
);

empfehlungenMainNavButton.addEventListener("click", openEmpfehlungenModal);

function closeEmpfehlungenModal() {
  empfehlungenModal.style.display = "none";
}

function openEmpfehlungenModal() {
  empfehlungenModal.style.display = "block";
  mittagskarteModal.style.display = "none";
  impressumModal.style.display = "none";
  datenschutzModal.style.display = "none";
}

empfehlungenClose.addEventListener("click", closeEmpfehlungenModal);

const impressumMainNavButton = document.querySelector(".img-impressum");
impressumMainNavButton.addEventListener("click", openImpressumModal);

const impressumClose = document.querySelector(".img-icon-close-impressum");

function closeImpressumModal() {
  impressumModal.style.display = "none";
}

function openImpressumModal() {
  empfehlungenModal.style.display = "none";
  mittagskarteModal.style.display = "none";
  impressumModal.style.display = "block";
  datenschutzModal.style.display = "none";
}

impressumClose.addEventListener("click", closeImpressumModal);

const datenschutzMainNavButton = document.querySelector(".img-datenschutz");
const datenschutzClose = document.querySelector(".img-icon-close-datenschutz");

datenschutzMainNavButton.addEventListener("click", openDatenschutzModal);

function closeDatenschutzModal() {
  datenschutzModal.style.display = "none";
}

function openDatenschutzModal() {
  empfehlungenModal.style.display = "none";
  mittagskarteModal.style.display = "none";
  impressumModal.style.display = "none";
  datenschutzModal.style.display = "block";
}

datenschutzClose.addEventListener("click", closeDatenschutzModal);
