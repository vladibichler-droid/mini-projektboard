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

const kalenderMonatTitel = document.querySelector("#kalenderMonatTitel");
const kalenderZurueckButton = document.querySelector("#kalenderZurueckButton");
const kalenderHeuteButton = document.querySelector("#kalenderHeuteButton");
const kalenderWeiterButton = document.querySelector("#kalenderWeiterButton");
const kalenderGrid = document.querySelector("#kalenderGrid");
const kalenderAuswahlTitel = document.querySelector("#kalenderAuswahlTitel");
const kalenderAufgabenListe = document.querySelector("#kalenderAufgabenListe");

const detailOverlay = document.querySelector("#detailOverlay");
const detailTitel = document.querySelector("#detailTitel");
const detailStatus = document.querySelector("#detailStatus");
const detailFortschritt = document.querySelector("#detailFortschritt");
const detailWorkspace = document.querySelector("#detailWorkspace");
const detailDatum = document.querySelector("#detailDatum");
const detailNotiz = document.querySelector("#detailNotiz");
const detailSchliessenButton = document.querySelector("#detailSchliessenButton");
const detailSpeichernButton = document.querySelector("#detailSpeichernButton");
const checklistenFormular = document.querySelector("#checklistenFormular");
const checklistenEingabe = document.querySelector("#checklistenEingabe");
const checklistenListe = document.querySelector("#checklistenListe");
const detailChecklisteFortschritt = document.querySelector("#detailChecklisteFortschritt");

const detailZeitGesamt = document.querySelector("#detailZeitGesamt");
const zeitStatus = document.querySelector("#zeitStatus");
const zeitStartButton = document.querySelector("#zeitStartButton");
const zeitStopButton = document.querySelector("#zeitStopButton");
const zeitZuruecksetzenButton = document.querySelector("#zeitZuruecksetzenButton");
const timelineListe = document.querySelector("#timelineListe");
const detailTimelineAnzahl = document.querySelector("#detailTimelineAnzahl");

let detailProjektId = null;
let timerIntervall = null;


const speicherName = "miniProjektboardAufgabenV12";
const aktiverWorkspaceSpeicherName = "miniProjektboardAktiverWorkspace";

let aktiverWorkspace = "programmieren";
let aufgaben = [];
let kalenderDatum = new Date();
let ausgewaehltesDatum = null;

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

  const neueAufgabe = {
    id: neueIdErstellen(),
    text: aufgabenText,
    status: "offen",
    fortschritt: 0,
    erstelltAm: heutigesDatumErstellen(),
    favorit: false,
    workspace: aktiverWorkspace,
    timeline: []
  };

  timelineEintragHinzufuegen(neueAufgabe, "Projekt erstellt", "Das Projekt wurde im Workspace angelegt.");

  aufgaben.push(neueAufgabe);

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
    ausgewaehltesDatum = null;
    workspaceAnzeigeAktualisieren();
    boardAnzeigen();
  });
});

kalenderZurueckButton.addEventListener("click", function () {
  kalenderDatum.setMonth(kalenderDatum.getMonth() - 1);
  kalenderAnzeigen();
});

kalenderHeuteButton.addEventListener("click", function () {
  kalenderDatum = new Date();
  ausgewaehltesDatum = datumAlsSchluessel(new Date());
  kalenderAnzeigen();
});

kalenderWeiterButton.addEventListener("click", function () {
  kalenderDatum.setMonth(kalenderDatum.getMonth() + 1);
  kalenderAnzeigen();
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
  const detailButton = document.createElement("button");
  detailButton.textContent = "Details";
  detailButton.classList.add("detail-button");

  detailButton.addEventListener("click", function () {
    detailFensterOeffnen(aufgabe.id);
  });

  aktionen.prepend(detailButton);

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
    timelineEintragHinzufuegen(
      aufgabe,
      aufgabe.favorit ? "Favorit gesetzt" : "Favorit entfernt",
      aufgabe.favorit ? "Das Projekt wurde angeheftet." : "Das Projekt ist nicht mehr angeheftet."
    );
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
      const alterFortschritt = aufgabe.fortschritt;
      aufgabe.fortschritt = wertBegrenzen(aufgabe.fortschritt + schritt);

      if (alterFortschritt !== aufgabe.fortschritt) {
        timelineEintragHinzufuegen(
          aufgabe,
          "Fortschritt geändert",
          `Von ${alterFortschritt} % auf ${aufgabe.fortschritt} %.`
        );
      }

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
        const alterStatus = aufgabe.status;
        aufgabe.status = neuerStatus;

        if (alterStatus !== neuerStatus) {
          timelineEintragHinzufuegen(
            aufgabe,
            "Status geändert",
            `${statusTexte[alterStatus]} → ${statusTexte[neuerStatus]}`
          );
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

function kalenderAnzeigen() {
  kalenderGrid.innerHTML = "";

  const jahr = kalenderDatum.getFullYear();
  const monat = kalenderDatum.getMonth();

  kalenderMonatTitel.textContent = kalenderDatum.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric"
  });

  const ersterTag = new Date(jahr, monat, 1);
  const letzterTag = new Date(jahr, monat + 1, 0);
  const startOffset = (ersterTag.getDay() + 6) % 7;
  const tageImMonat = letzterTag.getDate();

  const zellenAnzahl = Math.ceil((startOffset + tageImMonat) / 7) * 7;
  const startDatum = new Date(jahr, monat, 1 - startOffset);

  for (let index = 0; index < zellenAnzahl; index++) {
    const aktuellerTag = new Date(startDatum);
    aktuellerTag.setDate(startDatum.getDate() + index);

    const tagElement = kalenderTagErstellen(aktuellerTag, monat);
    kalenderGrid.appendChild(tagElement);
  }

  kalenderAuswahlAnzeigen();
}

function kalenderTagErstellen(datum, aktuellerMonat) {
  const tag = document.createElement("button");
  tag.type = "button";
  tag.classList.add("kalender-tag");

  const datumSchluessel = datumAlsSchluessel(datum);
  const aufgabenAmTag = aufgabenFuerKalendertag(datumSchluessel);

  if (datum.getMonth() !== aktuellerMonat) {
    tag.classList.add("inaktiv");
  }

  if (datumSchluessel === datumAlsSchluessel(new Date())) {
    tag.classList.add("heute");
  }

  if (datumSchluessel === ausgewaehltesDatum) {
    tag.classList.add("ausgewaehlt");
  }

  const zahl = document.createElement("span");
  zahl.classList.add("kalender-tag-zahl");
  zahl.textContent = datum.getDate();

  tag.appendChild(zahl);

  if (aufgabenAmTag.length > 0) {
    const marker = document.createElement("span");
    marker.classList.add("kalender-marker");
    marker.textContent = aufgabenAmTag.length;
    tag.appendChild(marker);
  }

  tag.addEventListener("click", function () {
    ausgewaehltesDatum = datumSchluessel;
    kalenderAnzeigen();
  });

  return tag;
}

function kalenderAuswahlAnzeigen() {
  kalenderAufgabenListe.innerHTML = "";

  if (ausgewaehltesDatum === null) {
    kalenderAuswahlTitel.textContent = "Kein Tag ausgewählt";

    const leer = document.createElement("div");
    leer.classList.add("kalender-leer");
    leer.textContent = "Wähle einen Tag aus, um passende Aufgaben zu sehen.";
    kalenderAufgabenListe.appendChild(leer);
    return;
  }

  kalenderAuswahlTitel.textContent = datumSchluesselFormatieren(ausgewaehltesDatum);

  const aufgabenAmTag = aufgabenFuerKalendertag(ausgewaehltesDatum);

  if (aufgabenAmTag.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("kalender-leer");
    leer.textContent = "Keine Aufgaben an diesem Tag.";
    kalenderAufgabenListe.appendChild(leer);
    return;
  }

  aufgabenAmTag.forEach(function (aufgabe) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("kalender-aufgabe");

    const titel = document.createElement("strong");
    titel.textContent = aufgabe.text;

    const details = document.createElement("span");
    details.textContent = `${statusTexte[aufgabe.status]} · ${aufgabe.fortschritt} %`;

    eintrag.appendChild(titel);
    eintrag.appendChild(details);
    kalenderAufgabenListe.appendChild(eintrag);
  });
}

function aufgabenFuerKalendertag(datumSchluessel) {
  return aufgaben.filter(function (aufgabe) {
    return (
      aufgabe.workspace === aktiverWorkspace &&
      datumAusDeutschemFormat(aufgabe.erstelltAm) === datumSchluessel
    );
  });
}

function datumAlsSchluessel(datum) {
  const jahr = datum.getFullYear();
  const monat = String(datum.getMonth() + 1).padStart(2, "0");
  const tag = String(datum.getDate()).padStart(2, "0");

  return `${jahr}-${monat}-${tag}`;
}

function datumAusDeutschemFormat(datumText) {
  const teile = datumText.split(".");

  if (teile.length !== 3) {
    return "";
  }

  return `${teile[2]}-${teile[1]}-${teile[0]}`;
}

function datumSchluesselFormatieren(datumSchluessel) {
  const teile = datumSchluessel.split("-");

  if (teile.length !== 3) {
    return datumSchluessel;
  }

  return `${teile[2]}.${teile[1]}.${teile[0]}`;
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
    workspace: aufgabe.workspace || "programmieren",
    checkliste: Array.isArray(aufgabe.checkliste) ? aufgabe.checkliste : [],
    zeitSekunden: typeof aufgabe.zeitSekunden === "number" ? aufgabe.zeitSekunden : 0,
    zeitStart: aufgabe.zeitStart || null,
    timeline: Array.isArray(aufgabe.timeline) ? aufgabe.timeline : []
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


function detailFensterOeffnen(aufgabenId) {
  const aufgabe = aufgaben.find(function (eintrag) {
    return eintrag.id === aufgabenId;
  });

  if (!aufgabe) {
    return;
  }

  detailProjektId = aufgabe.id;

  detailTitel.textContent = aufgabe.text;
  detailStatus.textContent = statusTexte[aufgabe.status];
  detailFortschritt.textContent = `${aufgabe.fortschritt} %`;
  detailWorkspace.textContent = workspaces[aufgabe.workspace] || aufgabe.workspace;
  detailDatum.textContent = aufgabe.erstelltAm;
  detailNotiz.value = aufgabe.notiz || "";

  checklisteAnzeigen(aufgabe);
  zeiterfassungAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
  detailOverlay.classList.add("aktiv");
}

function detailFensterSchliessen() {
  timerAktualisierungStoppen();
  detailOverlay.classList.remove("aktiv");
  detailProjektId = null;
}

detailSchliessenButton.addEventListener("click", detailFensterSchliessen);

detailOverlay.addEventListener("click", function (event) {
  if (event.target === detailOverlay) {
    detailFensterSchliessen();
  }
});

detailSpeichernButton.addEventListener("click", function () {
  if (detailProjektId === null) {
    return;
  }

  const aufgabe = aufgaben.find(function (eintrag) {
    return eintrag.id === detailProjektId;
  });

  if (!aufgabe) {
    return;
  }

  aufgabe.notiz = detailNotiz.value;
  timelineEintragHinzufuegen(aufgabe, "Notiz gespeichert", "Die Projektnotiz wurde aktualisiert.");

  aufgabenSpeichern();
  detailFensterSchliessen();
});


function checklisteAnzeigen(aufgabe) {
  checklistenListe.innerHTML = "";

  if (!Array.isArray(aufgabe.checkliste)) {
    aufgabe.checkliste = [];
  }

  const erledigt = aufgabe.checkliste.filter(function (punkt) {
    return punkt.erledigt;
  }).length;

  detailChecklisteFortschritt.textContent = `${erledigt} / ${aufgabe.checkliste.length} erledigt`;

  if (aufgabe.checkliste.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("checklisten-leer");
    leer.textContent = "Noch keine Checklistenpunkte vorhanden.";
    checklistenListe.appendChild(leer);
    return;
  }

  aufgabe.checkliste.forEach(function (punkt) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("checklisten-punkt");

    if (punkt.erledigt) {
      eintrag.classList.add("erledigt");
    }

    const checkbox = document.createElement("button");
    checkbox.type = "button";
    checkbox.classList.add("checklisten-checkbox");
    checkbox.textContent = punkt.erledigt ? "✓" : "";

    if (punkt.erledigt) {
      checkbox.classList.add("aktiv");
    }

    checkbox.addEventListener("click", function () {
      punkt.erledigt = !punkt.erledigt;
      timelineEintragHinzufuegen(
        aufgabe,
        punkt.erledigt ? "Checklistenpunkt erledigt" : "Checklistenpunkt wieder geöffnet",
        punkt.text
      );
      aufgabenSpeichern();
      checklisteAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    const text = document.createElement("span");
    text.classList.add("checklisten-text");
    text.textContent = punkt.text;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("checklisten-loeschen");
    loeschen.textContent = "Löschen";

    loeschen.addEventListener("click", function () {
      aufgabe.checkliste = aufgabe.checkliste.filter(function (eintrag) {
        return eintrag.id !== punkt.id;
      });

      timelineEintragHinzufuegen(aufgabe, "Checklistenpunkt gelöscht", punkt.text);

      aufgabenSpeichern();
      checklisteAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    eintrag.appendChild(checkbox);
    eintrag.appendChild(text);
    eintrag.appendChild(loeschen);

    checklistenListe.appendChild(eintrag);
  });
}

checklistenFormular.addEventListener("submit", function (event) {
  event.preventDefault();

  if (detailProjektId === null) {
    return;
  }

  const aufgabe = aufgaben.find(function (eintrag) {
    return eintrag.id === detailProjektId;
  });

  if (!aufgabe) {
    return;
  }

  const text = checklistenEingabe.value.trim();

  if (text === "") {
    return;
  }

  if (!Array.isArray(aufgabe.checkliste)) {
    aufgabe.checkliste = [];
  }

  aufgabe.checkliste.push({
    id: neueIdErstellen(),
    text: text,
    erledigt: false
  });

  timelineEintragHinzufuegen(aufgabe, "Checklistenpunkt hinzugefügt", text);

  checklistenEingabe.value = "";

  aufgabenSpeichern();
  checklisteAnzeigen(aufgabe);
});


function zeiterfassungAnzeigen(aufgabe) {
  timerAktualisierungStoppen();

  detailZeitGesamt.textContent = zeitFormatieren(gesamteZeitSekundenBerechnen(aufgabe));

  if (aufgabe.zeitStart) {
    zeitStatus.textContent = "Timer läuft";
    zeitStatus.classList.add("aktiv");
    timerIntervall = setInterval(function () {
      detailZeitGesamt.textContent = zeitFormatieren(gesamteZeitSekundenBerechnen(aufgabe));
    }, 1000);
  } else {
    zeitStatus.textContent = "Kein Timer aktiv";
    zeitStatus.classList.remove("aktiv");
  }
}

function timerAktualisierungStoppen() {
  if (timerIntervall !== null) {
    clearInterval(timerIntervall);
    timerIntervall = null;
  }
}

function aktuelleDetailAufgabeErmitteln() {
  if (detailProjektId === null) {
    return null;
  }

  return aufgaben.find(function (eintrag) {
    return eintrag.id === detailProjektId;
  }) || null;
}

zeitStartButton.addEventListener("click", function () {
  const aufgabe = aktuelleDetailAufgabeErmitteln();

  if (!aufgabe || aufgabe.zeitStart) {
    return;
  }

  aufgabe.zeitStart = new Date().toISOString();
  timelineEintragHinzufuegen(aufgabe, "Timer gestartet", "Die Zeiterfassung wurde gestartet.");
  aufgabenSpeichern();
  zeiterfassungAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});

zeitStopButton.addEventListener("click", function () {
  const aufgabe = aktuelleDetailAufgabeErmitteln();

  if (!aufgabe || !aufgabe.zeitStart) {
    return;
  }

  const startZeit = new Date(aufgabe.zeitStart).getTime();
  const jetzt = Date.now();
  const differenzSekunden = Math.max(0, Math.floor((jetzt - startZeit) / 1000));

  aufgabe.zeitSekunden = (aufgabe.zeitSekunden || 0) + differenzSekunden;
  aufgabe.zeitStart = null;

  timelineEintragHinzufuegen(aufgabe, "Timer gestoppt", `${zeitFormatieren(differenzSekunden)} erfasst.`);

  aufgabenSpeichern();
  zeiterfassungAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});

zeitZuruecksetzenButton.addEventListener("click", function () {
  const aufgabe = aktuelleDetailAufgabeErmitteln();

  if (!aufgabe) {
    return;
  }

  const bestaetigung = confirm("Möchtest du die gespeicherte Zeit wirklich zurücksetzen?");

  if (bestaetigung === false) {
    return;
  }

  aufgabe.zeitSekunden = 0;
  aufgabe.zeitStart = null;

  timelineEintragHinzufuegen(aufgabe, "Zeit zurückgesetzt", "Die gespeicherte Arbeitszeit wurde gelöscht.");

  aufgabenSpeichern();
  zeiterfassungAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});

function gesamteZeitSekundenBerechnen(aufgabe) {
  let sekunden = aufgabe.zeitSekunden || 0;

  if (aufgabe.zeitStart) {
    const startZeit = new Date(aufgabe.zeitStart).getTime();
    const jetzt = Date.now();
    sekunden += Math.max(0, Math.floor((jetzt - startZeit) / 1000));
  }

  return sekunden;
}

function zeitFormatieren(sekundenGesamt) {
  const stunden = Math.floor(sekundenGesamt / 3600);
  const minuten = Math.floor((sekundenGesamt % 3600) / 60);
  const sekunden = sekundenGesamt % 60;

  if (stunden > 0) {
    return `${stunden} Std. ${minuten} Min.`;
  }

  if (minuten > 0) {
    return `${minuten} Min. ${sekunden} Sek.`;
  }

  return `${sekunden} Sek.`;
}


function timelineEintragHinzufuegen(aufgabe, titel, beschreibung) {
  if (!Array.isArray(aufgabe.timeline)) {
    aufgabe.timeline = [];
  }

  aufgabe.timeline.unshift({
    id: neueIdErstellen(),
    titel: titel,
    beschreibung: beschreibung,
    datum: new Date().toLocaleString("de-DE")
  });

  if (aufgabe.timeline.length > 30) {
    aufgabe.timeline = aufgabe.timeline.slice(0, 30);
  }
}

function timelineAnzeigen(aufgabe) {
  timelineListe.innerHTML = "";

  if (!Array.isArray(aufgabe.timeline)) {
    aufgabe.timeline = [];
  }

  detailTimelineAnzahl.textContent = `${aufgabe.timeline.length} Ereignisse`;

  if (aufgabe.timeline.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("timeline-leer");
    leer.textContent = "Noch keine Ereignisse vorhanden.";
    timelineListe.appendChild(leer);
    return;
  }

  aufgabe.timeline.forEach(function (eintrag) {
    const element = document.createElement("div");
    element.classList.add("timeline-eintrag");

    const titel = document.createElement("strong");
    titel.textContent = eintrag.titel;

    const beschreibung = document.createElement("span");
    beschreibung.textContent = eintrag.beschreibung;

    const datum = document.createElement("span");
    datum.textContent = eintrag.datum;

    element.appendChild(titel);
    element.appendChild(beschreibung);
    element.appendChild(datum);

    timelineListe.appendChild(element);
  });
}
