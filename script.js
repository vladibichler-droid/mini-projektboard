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
const fortschrittUebersicht = document.querySelector("#fortschrittUebersicht");
const fortschrittUebersichtBalken = document.querySelector("#fortschrittUebersichtBalken");

const speicherName = "miniProjektboardAufgaben";

let aufgaben = [];

const standardAufgaben = [
  {
    id: 1,
    text: "Mini-Projektboard weiterentwickeln",
    status: "arbeit",
    fortschritt: 65,
    erstelltAm: heutigesDatumErstellen()
  },
  {
    id: 2,
    text: "CloudOps Hosting Platform dokumentieren",
    status: "fertig",
    fortschritt: 100,
    erstelltAm: heutigesDatumErstellen()
  },
  {
    id: 3,
    text: "Developer Dashboard optisch verbessern",
    status: "offen",
    fortschritt: 15,
    erstelltAm: heutigesDatumErstellen()
  },
  {
    id: 4,
    text: "Alte Testaufgaben archivieren",
    status: "archiv",
    fortschritt: 100,
    erstelltAm: heutigesDatumErstellen()
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
    status: "offen",
    fortschritt: 0,
    erstelltAm: heutigesDatumErstellen()
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

  const fortschrittKurz = document.createElement("span");
  fortschrittKurz.classList.add("fortschritt-prozent");
  fortschrittKurz.textContent = `${aufgabe.fortschritt} %`;

  statusZeile.appendChild(statusChip);
  statusZeile.appendChild(fortschrittKurz);

  const textBereich = document.createElement("div");
  textBereich.classList.add("aufgaben-text");
  textBereich.textContent = aufgabe.text;

  const metaZeile = document.createElement("div");
  metaZeile.classList.add("meta-zeile");
  metaZeile.textContent = `Erstellt am: ${aufgabe.erstelltAm}`;

  const fortschrittBox = fortschrittAnzeigeErstellen(aufgabe.fortschritt);
  const fortschrittSteuerung = fortschrittSteuerungErstellen(aufgabe);

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
  karte.appendChild(metaZeile);
  karte.appendChild(fortschrittBox);
  karte.appendChild(fortschrittSteuerung);
  karte.appendChild(aktionen);

  return karte;
}

function fortschrittAnzeigeErstellen(fortschritt) {
  const box = document.createElement("div");
  box.classList.add("fortschritt-box");

  const kopf = document.createElement("div");
  kopf.classList.add("fortschritt-kopf");

  const text = document.createElement("span");
  text.textContent = "Fortschritt";

  const prozent = document.createElement("span");
  prozent.textContent = `${fortschritt} %`;

  const leiste = document.createElement("div");
  leiste.classList.add("fortschritt-leiste");

  const fuellung = document.createElement("div");
  fuellung.classList.add("fortschritt-fuellung");
  fuellung.classList.add(fortschrittKlasseErmitteln(fortschritt));
  fuellung.style.width = `${fortschritt}%`;

  kopf.appendChild(text);
  kopf.appendChild(prozent);

  leiste.appendChild(fuellung);

  box.appendChild(kopf);
  box.appendChild(leiste);

  return box;
}

function fortschrittSteuerungErstellen(aufgabe) {
  const steuerung = document.createElement("div");
  steuerung.classList.add("fortschritt-steuerung");

  const minusButton = document.createElement("button");
  minusButton.textContent = "−";
  minusButton.title = "Fortschritt verringern";

  const wert = document.createElement("div");
  wert.classList.add("fortschritt-wert");
  wert.textContent = `${aufgabe.fortschritt} %`;

  const plusButton = document.createElement("button");
  plusButton.textContent = "+";
  plusButton.title = "Fortschritt erhöhen";

  minusButton.addEventListener("click", function () {
    fortschrittAendern(aufgabe.id, -5);
  });

  plusButton.addEventListener("click", function () {
    fortschrittAendern(aufgabe.id, 5);
  });

  steuerung.appendChild(minusButton);
  steuerung.appendChild(wert);
  steuerung.appendChild(plusButton);

  return steuerung;
}

function fortschrittAendern(aufgabenId, schritt) {
  aufgaben.forEach(function (aufgabe) {
    if (aufgabe.id === aufgabenId) {
      aufgabe.fortschritt = wertBegrenzen(aufgabe.fortschritt + schritt);

      if (aufgabe.fortschritt === 100 && aufgabe.status !== "archiv") {
        aufgabe.status = "fertig";
      }

      if (aufgabe.fortschritt > 0 && aufgabe.fortschritt < 100 && aufgabe.status !== "archiv") {
        aufgabe.status = "arbeit";
      }

      if (aufgabe.fortschritt === 0 && aufgabe.status !== "archiv") {
        aufgabe.status = "offen";
      }
    }
  });

  aufgabenSpeichern();
  boardAnzeigen();
}

function verschiebeButtonErstellen(text, aufgabenId, neuerStatus) {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", function () {
    aufgaben.forEach(function (aufgabe) {
      if (aufgabe.id === aufgabenId) {
        aufgabe.status = neuerStatus;

        if (neuerStatus === "offen" && aufgabe.fortschritt === 0) {
          aufgabe.fortschritt = 0;
        }

        if (neuerStatus === "arbeit" && aufgabe.fortschritt === 0) {
          aufgabe.fortschritt = 5;
        }

        if (neuerStatus === "fertig") {
          aufgabe.fortschritt = 100;
        }
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
  const durchschnitt = durchschnittlichenFortschrittBerechnen();

  offenZaehler.textContent = offenAnzahl;
  arbeitZaehler.textContent = arbeitAnzahl;
  fertigZaehler.textContent = fertigAnzahl;
  archivZaehler.textContent = archivAnzahl;

  gesamtZaehler.textContent = gesamtAnzahl;
  offenUebersicht.textContent = offenAnzahl;
  arbeitUebersicht.textContent = arbeitAnzahl;
  fertigUebersicht.textContent = fertigAnzahl;
  archivUebersicht.textContent = archivAnzahl;

  fortschrittUebersicht.textContent = `${durchschnitt} %`;
  fortschrittUebersichtBalken.style.width = `${durchschnitt}%`;
}

function durchschnittlichenFortschrittBerechnen() {
  if (aufgaben.length === 0) {
    return 0;
  }

  const summe = aufgaben.reduce(function (gesamt, aufgabe) {
    return gesamt + aufgabe.fortschritt;
  }, 0);

  return Math.round(summe / aufgaben.length);
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
  aufgaben = aufgaben.map(function (aufgabe) {
    return aufgabeReparieren(aufgabe);
  });

  aufgabenSpeichern();
}

function aufgabeReparieren(aufgabe) {
  const reparierteAufgabe = {
    id: aufgabe.id || neueIdErstellen(),
    text: aufgabe.text || "Unbenannte Aufgabe",
    status: aufgabe.status || "offen",
    fortschritt: aufgabe.fortschritt,
    erstelltAm: aufgabe.erstelltAm || heutigesDatumErstellen()
  };

  if (typeof reparierteAufgabe.fortschritt !== "number") {
    reparierteAufgabe.fortschritt = 0;
  }

  reparierteAufgabe.fortschritt = wertBegrenzen(reparierteAufgabe.fortschritt);

  if (!statusTexte[reparierteAufgabe.status]) {
    reparierteAufgabe.status = "offen";
  }

  return reparierteAufgabe;
}

function standardAufgabenKopieren() {
  return standardAufgaben.map(function (aufgabe) {
    return {
      id: aufgabe.id,
      text: aufgabe.text,
      status: aufgabe.status,
      fortschritt: aufgabe.fortschritt,
      erstelltAm: aufgabe.erstelltAm
    };
  });
}

function wertBegrenzen(wert) {
  if (wert < 0) {
    return 0;
  }

  if (wert > 100) {
    return 100;
  }

  return wert;
}

function fortschrittKlasseErmitteln(fortschritt) {
  if (fortschritt <= 25) {
    return "fortschritt-niedrig";
  }

  if (fortschritt <= 75) {
    return "fortschritt-mittel";
  }

  return "fortschritt-hoch";
}

function heutigesDatumErstellen() {
  const heute = new Date();

  return heute.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function neueIdErstellen() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

aufgabenLaden();
boardAnzeigen();
