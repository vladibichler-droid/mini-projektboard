const aufgabenFormular = document.querySelector("#aufgabenFormular");
const aufgabenEingabe = document.querySelector("#aufgabenEingabe");
const zuruecksetzenButton = document.querySelector("#zuruecksetzenButton");

const offenListe = document.querySelector("#offenListe");
const arbeitListe = document.querySelector("#arbeitListe");
const fertigListe = document.querySelector("#fertigListe");
const archivListe = document.querySelector("#archivListe");

const offenZaehler = document.querySelector("#offenZaehler");
const arbeitZaehler = document.querySelector("#arbeitZaehler");
const fertigZaehler = document.querySelector("#fertigZaehler");
const archivZaehler = document.querySelector("#archivZaehler");

const gesamtZaehler = document.querySelector("#gesamtZaehler");
const offenUebersicht = document.querySelector("#offenUebersicht");
const arbeitUebersicht = document.querySelector("#arbeitUebersicht");
const fertigUebersicht = document.querySelector("#fertigUebersicht");
const archivUebersicht = document.querySelector("#archivUebersicht");

const speicherName = "miniProjektboardAufgaben";

let aufgaben = [];

const standardAufgaben = [
  {
    id: 1,
    text: "HTML-Grundstruktur erstellen",
    status: "offen"
  },
  {
    id: 2,
    text: "CSS-Datei verbinden",
    status: "offen"
  },
  {
    id: 3,
    text: "Layout testen",
    status: "arbeit"
  },
  {
    id: 4,
    text: "Projektordner erstellt",
    status: "fertig"
  },
  {
    id: 5,
    text: "Alte Test-Aufgabe archiviert",
    status: "archiv"
  }
];

const statusTexte = {
  offen: "Offen",
  arbeit: "In Arbeit",
  fertig: "Fertig",
  archiv: "Archiv"
};

aufgabenFormular.addEventListener("submit", function (event) {
  event.preventDefault();

  const aufgabenText = aufgabenEingabe.value.trim();

  if (aufgabenText === "") {
    alert("Bitte gib zuerst eine Aufgabe ein.");
    return;
  }

  const neueAufgabe = {
    id: neueIdErstellen(),
    text: aufgabenText,
    status: "offen"
  };

  aufgaben.push(neueAufgabe);

  aufgabenEingabe.value = "";
  aufgabenEingabe.focus();

  aufgabenSpeichern();
  boardAnzeigen();
});

zuruecksetzenButton.addEventListener("click", function () {
  const bestaetigung = confirm("Möchtest du wirklich wieder die Beispiel-Aufgaben laden?");

  if (bestaetigung === false) {
    return;
  }

  aufgaben = standardAufgabenKopieren();

  aufgabenSpeichern();
  boardAnzeigen();
});

function boardAnzeigen() {
  offenListe.innerHTML = "";
  arbeitListe.innerHTML = "";
  fertigListe.innerHTML = "";
  archivListe.innerHTML = "";

  aufgaben.forEach(function (aufgabe) {
    const karte = aufgabenkarteErstellen(aufgabe);

    if (aufgabe.status === "offen") {
      offenListe.appendChild(karte);
    }

    if (aufgabe.status === "arbeit") {
      arbeitListe.appendChild(karte);
    }

    if (aufgabe.status === "fertig") {
      fertigListe.appendChild(karte);
    }

    if (aufgabe.status === "archiv") {
      archivListe.appendChild(karte);
    }
  });

  leereSpaltenPruefen();
  zaehlerAktualisieren();
}

function aufgabenkarteErstellen(aufgabe) {
  const karte = document.createElement("div");
  karte.classList.add("aufgabenkarte");

  const statusZeile = document.createElement("div");
  statusZeile.classList.add("status-zeile");

  const statusChip = document.createElement("span");
  statusChip.classList.add("status-chip");
  statusChip.textContent = statusTexte[aufgabe.status];

  statusZeile.appendChild(statusChip);

  const textBereich = document.createElement("div");
  textBereich.classList.add("aufgaben-text");
  textBereich.textContent = aufgabe.text;

  const aktionen = document.createElement("div");
  aktionen.classList.add("karten-aktionen");

  if (aufgabe.status !== "offen") {
    const offenButton = verschiebeButtonErstellen("Offen", aufgabe.id, "offen");
    aktionen.appendChild(offenButton);
  }

  if (aufgabe.status !== "arbeit") {
    const arbeitButton = verschiebeButtonErstellen("In Arbeit", aufgabe.id, "arbeit");
    aktionen.appendChild(arbeitButton);
  }

  if (aufgabe.status !== "fertig") {
    const fertigButton = verschiebeButtonErstellen("Fertig", aufgabe.id, "fertig");
    aktionen.appendChild(fertigButton);
  }

  if (aufgabe.status !== "archiv") {
    const archivButton = verschiebeButtonErstellen("Archiv", aufgabe.id, "archiv");
    archivButton.classList.add("archiv-button");
    aktionen.appendChild(archivButton);
  }

  const loeschenButton = loeschenButtonErstellen(aufgabe.id);
  aktionen.appendChild(loeschenButton);

  karte.appendChild(statusZeile);
  karte.appendChild(textBereich);
  karte.appendChild(aktionen);

  return karte;
}

function verschiebeButtonErstellen(text, aufgabenId, neuerStatus) {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", function () {
    aufgaben.forEach(function (aufgabe) {
      if (aufgabe.id === aufgabenId) {
        aufgabe.status = neuerStatus;
      }
    });

    aufgabenSpeichern();
    boardAnzeigen();
  });

  return button;
}

function loeschenButtonErstellen(aufgabenId) {
  const button = document.createElement("button");
  button.textContent = "Löschen";
  button.classList.add("loeschen-button");

  button.addEventListener("click", function () {
    const bestaetigung = confirm("Möchtest du diese Aufgabe wirklich löschen?");

    if (bestaetigung === false) {
      return;
    }

    aufgaben = aufgaben.filter(function (aufgabe) {
      return aufgabe.id !== aufgabenId;
    });

    aufgabenSpeichern();
    boardAnzeigen();
  });

  return button;
}

function leereSpaltenPruefen() {
  leerenHinweisAnzeigen(offenListe, "Keine offenen Aufgaben.");
  leerenHinweisAnzeigen(arbeitListe, "Keine Aufgaben in Arbeit.");
  leerenHinweisAnzeigen(fertigListe, "Keine fertigen Aufgaben.");
  leerenHinweisAnzeigen(archivListe, "Keine archivierten Aufgaben.");
}

function leerenHinweisAnzeigen(liste, text) {
  if (liste.children.length > 0) {
    return;
  }

  const hinweis = document.createElement("div");
  hinweis.classList.add("leer-hinweis");
  hinweis.textContent = text;

  liste.appendChild(hinweis);
}

function zaehlerAktualisieren() {
  const offenAnzahl = aufgaben.filter(function (aufgabe) {
    return aufgabe.status === "offen";
  }).length;

  const arbeitAnzahl = aufgaben.filter(function (aufgabe) {
    return aufgabe.status === "arbeit";
  }).length;

  const fertigAnzahl = aufgaben.filter(function (aufgabe) {
    return aufgabe.status === "fertig";
  }).length;

  const archivAnzahl = aufgaben.filter(function (aufgabe) {
    return aufgabe.status === "archiv";
  }).length;

  const gesamtAnzahl = aufgaben.length;

  offenZaehler.textContent = offenAnzahl;
  arbeitZaehler.textContent = arbeitAnzahl;
  fertigZaehler.textContent = fertigAnzahl;
  archivZaehler.textContent = archivAnzahl;

  gesamtZaehler.textContent = gesamtAnzahl;
  offenUebersicht.textContent = offenAnzahl;
  arbeitUebersicht.textContent = arbeitAnzahl;
  fertigUebersicht.textContent = fertigAnzahl;
  archivUebersicht.textContent = archivAnzahl;
}

function aufgabenSpeichern() {
  localStorage.setItem(speicherName, JSON.stringify(aufgaben));
}

function aufgabenLaden() {
  const gespeicherteAufgaben = localStorage.getItem(speicherName);

  if (gespeicherteAufgaben === null) {
    aufgaben = standardAufgabenKopieren();
    aufgabenSpeichern();
    return;
  }

  aufgaben = JSON.parse(gespeicherteAufgaben);
}

function standardAufgabenKopieren() {
  return standardAufgaben.map(function (aufgabe) {
    return {
      id: aufgabe.id,
      text: aufgabe.text,
      status: aufgabe.status
    };
  });
}

function neueIdErstellen() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

aufgabenLaden();
boardAnzeigen();
