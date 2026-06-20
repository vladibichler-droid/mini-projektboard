const aufgabenFormular = document.querySelector("#aufgabenFormular");
const aufgabenEingabe = document.querySelector("#aufgabenEingabe");
const sucheEingabe = document.querySelector("#sucheEingabe");
const zuruecksetzenButton = document.querySelector("#zuruecksetzenButton");

const workspaceName = document.querySelector("#workspaceName");
const workspaceButtons = document.querySelectorAll(".workspace-button");

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

const analyseAlle = document.querySelector("#analyseAlle");
const analyseWorkspace = document.querySelector("#analyseWorkspace");
const analyseFavoriten = document.querySelector("#analyseFavoriten");
const analyseAktivsterWorkspace = document.querySelector("#analyseAktivsterWorkspace");
const analyseProduktivitaet = document.querySelector("#analyseProduktivitaet");
const analyseStatus = document.querySelector("#analyseStatus");
const analyseBalken = document.querySelector("#analyseBalken");

const speicherName = "miniProjektboardAufgabenV12";
const aktiverWorkspaceSpeicherName = "miniProjektboardAktiverWorkspace";

let aktiverWorkspace = "programmieren";
let aufgaben = [];

const workspaces = {
  programmieren: "💻 Programmieren",
  privat: "🏠 Privat",
  lernen: "📚 Lernen",
  arbeit: "💼 Arbeit"
};

const standardAufgaben = [
  {
    id: 1,
    text: "Mini-Projektboard weiterentwickeln",
    status: "arbeit",
    fortschritt: 65,
    erstelltAm: heutigesDatumErstellen(),
    favorit: true,
    workspace: "programmieren"
  },
  {
    id: 2,
    text: "CloudOps Hosting Platform dokumentieren",
    status: "fertig",
    fortschritt: 100,
    erstelltAm: heutigesDatumErstellen(),
    favorit: true,
    workspace: "programmieren"
  },
  {
    id: 3,
    text: "Wohnung aufräumen",
    status: "offen",
    fortschritt: 10,
    erstelltAm: heutigesDatumErstellen(),
    favorit: false,
    workspace: "privat"
  },
  {
    id: 4,
    text: "JavaScript Grundlagen wiederholen",
    status: "arbeit",
    fortschritt: 35,
    erstelltAm: heutigesDatumErstellen(),
    favorit: false,
    workspace: "lernen"
  },
  {
    id: 5,
    text: "Wochenplanung vorbereiten",
    status: "offen",
    fortschritt: 0,
    erstelltAm: heutigesDatumErstellen(),
    favorit: false,
    workspace: "arbeit"
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

  aufgaben.push({
    id: neueIdErstellen(),
    text: aufgabenText,
    status: "offen",
    fortschritt: 0,
    erstelltAm: heutigesDatumErstellen(),
    favorit: false,
    workspace: aktiverWorkspace
  });

  aufgabenEingabe.value = "";
  aufgabenEingabe.focus();

  aufgabenSpeichern();
  boardAnzeigen();
});

sucheEingabe.addEventListener("input", function () {
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

workspaceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    aktiverWorkspace = button.dataset.workspace;
    localStorage.setItem(aktiverWorkspaceSpeicherName, aktiverWorkspace);
    sucheEingabe.value = "";
    workspaceAnzeigeAktualisieren();
    boardAnzeigen();
  });
});

function workspaceAnzeigeAktualisieren() {
  workspaceName.textContent = workspaces[aktiverWorkspace];

  workspaceButtons.forEach(function (button) {
    if (button.dataset.workspace === aktiverWorkspace) {
      button.classList.add("aktiv");
    } else {
      button.classList.remove("aktiv");
    }
  });
}

function boardAnzeigen() {
  offenListe.innerHTML = "";
  arbeitListe.innerHTML = "";
  fertigListe.innerHTML = "";
  archivListe.innerHTML = "";

  const sichtbareAufgaben = gefilterteAufgabenErmitteln();

  sichtbareAufgaben.forEach(function (aufgabe) {
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
  zaehlerAktualisieren(sichtbareAufgaben);
  analyseDashboardAktualisieren();
}

function gefilterteAufgabenErmitteln() {
  const suchbegriff = sucheEingabe.value.trim().toLowerCase();

  let sichtbareAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  if (suchbegriff !== "") {
    sichtbareAufgaben = sichtbareAufgaben.filter(function (aufgabe) {
      const text = aufgabe.text.toLowerCase();
      const status = statusTexte[aufgabe.status].toLowerCase();
      const datum = aufgabe.erstelltAm.toLowerCase();
      const favoritText = aufgabe.favorit ? "favorit angeheftet wichtig stern" : "";

      return (
        text.includes(suchbegriff) ||
        status.includes(suchbegriff) ||
        datum.includes(suchbegriff) ||
        favoritText.includes(suchbegriff)
      );
    });
  }

  return sichtbareAufgaben.sort(function (a, b) {
    if (a.favorit === b.favorit) {
      return b.fortschritt - a.fortschritt;
    }

    return a.favorit ? -1 : 1;
  });
}

function aufgabenkarteErstellen(aufgabe) {
  const karte = document.createElement("div");
  karte.classList.add("aufgabenkarte");

  if (aufgabe.favorit) {
    karte.classList.add("favorit");
  }

  const topZeile = document.createElement("div");
  topZeile.classList.add("karten-topzeile");

  const statusChip = document.createElement("span");
  statusChip.classList.add("status-chip");
  statusChip.textContent = statusTexte[aufgabe.status];

  const favoritButton = favoritButtonErstellen(aufgabe);

  topZeile.appendChild(statusChip);
  topZeile.appendChild(favoritButton);

  const statusZeile = document.createElement("div");
  statusZeile.classList.add("status-zeile");

  const fortschrittKurz = document.createElement("span");
  fortschrittKurz.classList.add("fortschritt-prozent");
  fortschrittKurz.textContent = `${aufgabe.fortschritt} %`;

  statusZeile.appendChild(fortschrittKurz);

  const textBereich = document.createElement("div");
  textBereich.classList.add("aufgaben-text");
  textBereich.textContent = aufgabe.text;

  const metaZeile = document.createElement("div");
  metaZeile.classList.add("meta-zeile");
  metaZeile.textContent = aufgabe.favorit
    ? `Erstellt am: ${aufgabe.erstelltAm} · Angeheftet`
    : `Erstellt am: ${aufgabe.erstelltAm}`;

  const fortschrittBox = fortschrittAnzeigeErstellen(aufgabe.fortschritt);
  const fortschrittSteuerung = fortschrittSteuerungErstellen(aufgabe);

  const aktionen = document.createElement("div");
  aktionen.classList.add("karten-aktionen");

  if (aufgabe.status !== "offen") {
    aktionen.appendChild(verschiebeButtonErstellen("Offen", aufgabe.id, "offen"));
  }

  if (aufgabe.status !== "arbeit") {
    aktionen.appendChild(verschiebeButtonErstellen("In Arbeit", aufgabe.id, "arbeit"));
  }

  if (aufgabe.status !== "fertig") {
    aktionen.appendChild(verschiebeButtonErstellen("Fertig", aufgabe.id, "fertig"));
  }

  if (aufgabe.status !== "archiv") {
    const archivButton = verschiebeButtonErstellen("Archiv", aufgabe.id, "archiv");
    archivButton.classList.add("archiv-button");
    aktionen.appendChild(archivButton);
  }

  aktionen.appendChild(loeschenButtonErstellen(aufgabe.id));

  karte.appendChild(topZeile);
  karte.appendChild(statusZeile);
  karte.appendChild(textBereich);
  karte.appendChild(metaZeile);
  karte.appendChild(fortschrittBox);
  karte.appendChild(fortschrittSteuerung);
  karte.appendChild(aktionen);

  return karte;
}

function favoritButtonErstellen(aufgabe) {
  const button = document.createElement("button");
  button.classList.add("favorit-button");
  button.textContent = "★";
  button.title = aufgabe.favorit ? "Favorit entfernen" : "Als Favorit markieren";

  if (aufgabe.favorit) {
    button.classList.add("aktiv");
  }

  button.addEventListener("click", function () {
    aufgabe.favorit = !aufgabe.favorit;
    aufgabenSpeichern();
    boardAnzeigen();
  });

  return button;
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
  const suchbegriff = sucheEingabe.value.trim();

  leerenHinweisAnzeigen(offenListe, suchbegriff ? "Keine offenen Treffer." : "Keine offenen Aufgaben.");
  leerenHinweisAnzeigen(arbeitListe, suchbegriff ? "Keine Treffer in Arbeit." : "Keine Aufgaben in Arbeit.");
  leerenHinweisAnzeigen(fertigListe, suchbegriff ? "Keine fertigen Treffer." : "Keine fertigen Aufgaben.");
  leerenHinweisAnzeigen(archivListe, suchbegriff ? "Keine archivierten Treffer." : "Keine archivierten Aufgaben.");
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

function zaehlerAktualisieren(sichtbareAufgaben) {
  const offenAnzahl = sichtbareAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "offen";
  }).length;

  const arbeitAnzahl = sichtbareAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "arbeit";
  }).length;

  const fertigAnzahl = sichtbareAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "fertig";
  }).length;

  const archivAnzahl = sichtbareAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "archiv";
  }).length;

  const gesamtAnzahl = sichtbareAufgaben.length;
  const durchschnitt = durchschnittlichenFortschrittBerechnen(sichtbareAufgaben);

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

function analyseDashboardAktualisieren() {
  const alleAnzahl = aufgaben.length;

  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const workspaceAnzahl = workspaceAufgaben.length;

  const favoritenAnzahl = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.favorit;
  }).length;

  const produktivitaet = durchschnittlichenFortschrittBerechnen(workspaceAufgaben);
  const aktivsterWorkspace = aktivstenWorkspaceErmitteln();

  analyseAlle.textContent = alleAnzahl;
  analyseWorkspace.textContent = workspaceAnzahl;
  analyseFavoriten.textContent = favoritenAnzahl;
  analyseAktivsterWorkspace.textContent = aktivsterWorkspace;
  analyseProduktivitaet.textContent = `${produktivitaet} %`;
  analyseBalken.style.width = `${produktivitaet}%`;
  analyseStatus.textContent = produktivitaetsTextErmitteln(produktivitaet, workspaceAnzahl);
}

function aktivstenWorkspaceErmitteln() {
  let besterWorkspace = "–";
  let hoechsteAnzahl = 0;

  Object.keys(workspaces).forEach(function (workspaceKey) {
    const anzahl = aufgaben.filter(function (aufgabe) {
      return aufgabe.workspace === workspaceKey;
    }).length;

    if (anzahl > hoechsteAnzahl) {
      hoechsteAnzahl = anzahl;
      besterWorkspace = workspaces[workspaceKey];
    }
  });

  return besterWorkspace;
}

function produktivitaetsTextErmitteln(prozent, anzahl) {
  if (anzahl === 0) {
    return "Noch leer";
  }

  if (prozent >= 80) {
    return "Sehr stark";
  }

  if (prozent >= 50) {
    return "Guter Fortschritt";
  }

  if (prozent > 0) {
    return "In Bewegung";
  }

  return "Startbereit";
}

function durchschnittlichenFortschrittBerechnen(aufgabenListe) {
  if (aufgabenListe.length === 0) {
    return 0;
  }

  const summe = aufgabenListe.reduce(function (gesamt, aufgabe) {
    return gesamt + aufgabe.fortschritt;
  }, 0);

  return Math.round(summe / aufgabenListe.length);
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

function aktivenWorkspaceLaden() {
  const gespeicherterWorkspace = localStorage.getItem(aktiverWorkspaceSpeicherName);

  if (gespeicherterWorkspace && workspaces[gespeicherterWorkspace]) {
    aktiverWorkspace = gespeicherterWorkspace;
  }
}

function aufgabeReparieren(aufgabe) {
  const reparierteAufgabe = {
    id: aufgabe.id || neueIdErstellen(),
    text: aufgabe.text || "Unbenannte Aufgabe",
    status: aufgabe.status || "offen",
    fortschritt: aufgabe.fortschritt,
    erstelltAm: aufgabe.erstelltAm || heutigesDatumErstellen(),
    favorit: aufgabe.favorit || false,
    workspace: aufgabe.workspace || "programmieren"
  };

  if (typeof reparierteAufgabe.fortschritt !== "number") {
    reparierteAufgabe.fortschritt = 0;
  }

  reparierteAufgabe.fortschritt = wertBegrenzen(reparierteAufgabe.fortschritt);

  if (!statusTexte[reparierteAufgabe.status]) {
    reparierteAufgabe.status = "offen";
  }

  if (!workspaces[reparierteAufgabe.workspace]) {
    reparierteAufgabe.workspace = "programmieren";
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
      erstelltAm: aufgabe.erstelltAm,
      favorit: aufgabe.favorit,
      workspace: aufgabe.workspace
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

aktivenWorkspaceLaden();
aufgabenLaden();
workspaceAnzeigeAktualisieren();
boardAnzeigen();
