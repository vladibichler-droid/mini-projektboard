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
const meilensteinFormular = document.querySelector("#meilensteinFormular");
const meilensteinEingabe = document.querySelector("#meilensteinEingabe");
const meilensteinListe = document.querySelector("#meilensteinListe");
const detailMeilensteinFortschritt = document.querySelector("#detailMeilensteinFortschritt");

const linkFormular = document.querySelector("#linkFormular");
const linkTitelEingabe = document.querySelector("#linkTitelEingabe");
const linkUrlEingabe = document.querySelector("#linkUrlEingabe");
const linkListe = document.querySelector("#linkListe");
const detailLinkAnzahl = document.querySelector("#detailLinkAnzahl");

const teamFormular = document.querySelector("#teamFormular");
const teamNameEingabe = document.querySelector("#teamNameEingabe");
const teamListe = document.querySelector("#teamListe");
const detailTeamAnzahl = document.querySelector("#detailTeamAnzahl");

const tagFormular = document.querySelector("#tagFormular");
const tagEingabe = document.querySelector("#tagEingabe");
const tagListe = document.querySelector("#tagListe");
const detailTagAnzahl = document.querySelector("#detailTagAnzahl");

const benachrichtigungTitel = document.querySelector("#benachrichtigungTitel");
const benachrichtigungListe = document.querySelector("#benachrichtigungListe");
const benachrichtigungenAktualisierenButton = document.querySelector("#benachrichtigungenAktualisierenButton");

const aktivitaetTitel = document.querySelector("#aktivitaetTitel");
const aktivitaetListe = document.querySelector("#aktivitaetListe");
const aktivitaetLeerenButton = document.querySelector("#aktivitaetLeerenButton");

const syncStatus = document.querySelector("#syncStatus");
const syncButton = document.querySelector("#syncButton");
const syncZeitpunkt = document.querySelector("#syncZeitpunkt");
const syncDetails = document.querySelector("#syncDetails");

const vorschlagInhalt = document.querySelector("#vorschlagInhalt");
const vorschlagAktualisierenButton = document.querySelector("#vorschlagAktualisierenButton");

const autoFertig = document.querySelector("#autoFertig");
const autoArbeit = document.querySelector("#autoArbeit");
const autoOffen = document.querySelector("#autoOffen");

const chartOffen = document.querySelector("#chartOffen");
const chartArbeit = document.querySelector("#chartArbeit");
const chartFertig = document.querySelector("#chartFertig");
const chartArchiv = document.querySelector("#chartArchiv");

const historyListe = document.querySelector("#historyListe");

const wochenTageElemente = {
  montag: document.querySelector("#montag"),
  dienstag: document.querySelector("#dienstag"),
  mittwoch: document.querySelector("#mittwoch"),
  donnerstag: document.querySelector("#donnerstag"),
  freitag: document.querySelector("#freitag"),
  samstag: document.querySelector("#samstag"),
  sonntag: document.querySelector("#sonntag")
};

const statHeute = document.querySelector("#statHeute");
const statChecklisten = document.querySelector("#statChecklisten");
const statMeilensteine = document.querySelector("#statMeilensteine");
const statTimer = document.querySelector("#statTimer");
const statLinks = document.querySelector("#statLinks");
const statTeam = document.querySelector("#statTeam");

const projektStatDurchschnitt = document.querySelector("#projektStatDurchschnitt");
const projektStatAbgeschlossen = document.querySelector("#projektStatAbgeschlossen");
const projektStatAktiv = document.querySelector("#projektStatAktiv");
const projektStatArchiv = document.querySelector("#projektStatArchiv");

const kompaktModus = document.querySelector("#kompaktModus");
const kompaktModusSpeicherName = "miniProjektboardKompaktModus";

const ringDurchschnitt = document.querySelector("#ringDurchschnitt");
const ringDurchschnittText = document.querySelector("#ringDurchschnittText");
const ringFertig = document.querySelector("#ringFertig");
const ringFertigText = document.querySelector("#ringFertigText");
const ringOffen = document.querySelector("#ringOffen");
const ringOffenText = document.querySelector("#ringOffenText");

const wissensdatenbankText = document.querySelector("#wissensdatenbankText");
const wissensdatenbankSpeichern = document.querySelector("#wissensdatenbankSpeichern");
const wissensdatenbankSpeicherName = "miniProjektboardWissensdatenbank";

const ressourceTitel = document.querySelector("#ressourceTitel");
const ressourceUrl = document.querySelector("#ressourceUrl");
const ressourceHinzufuegen = document.querySelector("#ressourceHinzufuegen");
const ressourcenListe = document.querySelector("#ressourcenListe");
const ressourcenSpeicherName = "miniProjektboardRessourcen";

let ressourcen = [];
let detailProjektId = null;
let timerIntervall = null;


const speicherName = "miniProjektboardAufgabenV12";
const aktiverWorkspaceSpeicherName = "miniProjektboardAktiverWorkspace";
const aktivitaetSpeicherName = "miniProjektboardAktivitaeten";
const syncSpeicherName = "miniProjektboardSyncZeitpunkt";

let aktiverWorkspace = "programmieren";
let aufgaben = [];
let aktivitaeten = [];
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
  aktivitaetHinzufuegen("Projekt erstellt", neueAufgabe.text);

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
  benachrichtigungenAnzeigen();
  aktivitaetenAnzeigen();
  syncAnzeigeAktualisieren();
  vorschlagAnzeigen();
  miniChartsAktualisieren();
  historyAnzeigen();
  wochenplanAnzeigen();
  miniStatistikenAktualisieren();
  projektStatistikenAktualisieren();
  ringdiagrammeAktualisieren();
});

kalenderHeuteButton.addEventListener("click", function () {
  kalenderDatum = new Date();
  ausgewaehltesDatum = datumAlsSchluessel(new Date());
  kalenderAnzeigen();
  benachrichtigungenAnzeigen();
  aktivitaetenAnzeigen();
  syncAnzeigeAktualisieren();
  vorschlagAnzeigen();
  miniChartsAktualisieren();
  historyAnzeigen();
  wochenplanAnzeigen();
  miniStatistikenAktualisieren();
  projektStatistikenAktualisieren();
  ringdiagrammeAktualisieren();
});

kalenderWeiterButton.addEventListener("click", function () {
  kalenderDatum.setMonth(kalenderDatum.getMonth() + 1);
  kalenderAnzeigen();
  benachrichtigungenAnzeigen();
  aktivitaetenAnzeigen();
  syncAnzeigeAktualisieren();
  vorschlagAnzeigen();
  miniChartsAktualisieren();
  historyAnzeigen();
  wochenplanAnzeigen();
  miniStatistikenAktualisieren();
  projektStatistikenAktualisieren();
  ringdiagrammeAktualisieren();
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
  karte.draggable = true;
  karte.dataset.aufgabenId = aufgabe.id;

  karte.addEventListener("dragstart", function () {
    karte.classList.add("dragging");
    event.dataTransfer.setData("text/plain", String(aufgabe.id));
  });

  karte.addEventListener("dragend", function () {
    karte.classList.remove("dragging");
  });

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

      automatisierungsregelnAnwenden(aufgabe);
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
    timeline: Array.isArray(aufgabe.timeline) ? aufgabe.timeline : [],
    meilensteine: Array.isArray(aufgabe.meilensteine) ? aufgabe.meilensteine : [],
    links: Array.isArray(aufgabe.links) ? aufgabe.links : [],
    team: Array.isArray(aufgabe.team) ? aufgabe.team : [],
    tags: Array.isArray(aufgabe.tags) ? aufgabe.tags : []
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
aktivitaetenLaden();
aufgabenLaden();
wissensdatenbankLaden();
ressourcenLaden();
ressourcenAnzeigen();
kompaktModusLaden();
workspaceAnzeigeAktualisieren();
dragUndDropEinrichten();
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
  tagsAnzeigen(aufgabe);
  teamAnzeigen(aufgabe);
  linksAnzeigen(aufgabe);
  meilensteineAnzeigen(aufgabe);
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
  aktivitaetHinzufuegen("Notiz gespeichert", aufgabe.text);

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

  const datum = new Date().toLocaleString("de-DE");

  aufgabe.timeline.unshift({
    id: neueIdErstellen(),
    titel: titel,
    beschreibung: beschreibung,
    datum: datum
  });

  aktivitaetHinzufuegen(titel, `${aufgabe.text}: ${beschreibung}`, datum);

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


function meilensteineAnzeigen(aufgabe) {
  meilensteinListe.innerHTML = "";

  if (!Array.isArray(aufgabe.meilensteine)) {
    aufgabe.meilensteine = [];
  }

  const erledigt = aufgabe.meilensteine.filter(function (punkt) {
    return punkt.erledigt;
  }).length;

  detailMeilensteinFortschritt.textContent = `${erledigt} / ${aufgabe.meilensteine.length} erledigt`;

  if (aufgabe.meilensteine.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("meilenstein-leer");
    leer.textContent = "Noch keine Meilensteine vorhanden.";
    meilensteinListe.appendChild(leer);
    return;
  }

  aufgabe.meilensteine.forEach(function (punkt) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("meilenstein-punkt");

    if (punkt.erledigt) {
      eintrag.classList.add("erledigt");
    }

    const checkbox = document.createElement("button");
    checkbox.type = "button";
    checkbox.classList.add("meilenstein-checkbox");
    checkbox.textContent = punkt.erledigt ? "✓" : "";

    if (punkt.erledigt) {
      checkbox.classList.add("aktiv");
    }

    checkbox.addEventListener("click", function () {
      punkt.erledigt = !punkt.erledigt;

      timelineEintragHinzufuegen(
        aufgabe,
        punkt.erledigt ? "Meilenstein erledigt" : "Meilenstein wieder geöffnet",
        punkt.text
      );

      aufgabenSpeichern();
      meilensteineAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    const text = document.createElement("span");
    text.classList.add("meilenstein-text");
    text.textContent = punkt.text;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("meilenstein-loeschen");
    loeschen.textContent = "Löschen";

    loeschen.addEventListener("click", function () {
      aufgabe.meilensteine = aufgabe.meilensteine.filter(function (eintrag) {
        return eintrag.id !== punkt.id;
      });

      timelineEintragHinzufuegen(aufgabe, "Meilenstein gelöscht", punkt.text);

      aufgabenSpeichern();
      meilensteineAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    eintrag.appendChild(checkbox);
    eintrag.appendChild(text);
    eintrag.appendChild(loeschen);

    meilensteinListe.appendChild(eintrag);
  });
}

meilensteinFormular.addEventListener("submit", function (event) {
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

  const text = meilensteinEingabe.value.trim();

  if (text === "") {
    return;
  }

  if (!Array.isArray(aufgabe.meilensteine)) {
    aufgabe.meilensteine = [];
  }

  aufgabe.meilensteine.push({
    id: neueIdErstellen(),
    text: text,
    erledigt: false
  });

  meilensteinEingabe.value = "";

  timelineEintragHinzufuegen(aufgabe, "Meilenstein hinzugefügt", text);

  aufgabenSpeichern();
  meilensteineAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});


benachrichtigungenAktualisierenButton.addEventListener("click", function () {
  benachrichtigungenAnzeigen();
});

function benachrichtigungenAnzeigen() {
  benachrichtigungListe.innerHTML = "";

  const hinweise = benachrichtigungenErmitteln();

  benachrichtigungTitel.textContent = `${hinweise.length} Hinweise`;

  if (hinweise.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("benachrichtigung-leer");
    leer.textContent = "Keine aktuellen Hinweise im aktiven Workspace.";
    benachrichtigungListe.appendChild(leer);
    return;
  }

  hinweise.forEach(function (hinweis) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("benachrichtigung-eintrag");
    eintrag.classList.add(hinweis.typ);

    const titel = document.createElement("strong");
    titel.textContent = hinweis.titel;

    const text = document.createElement("span");
    text.textContent = hinweis.text;

    eintrag.appendChild(titel);
    eintrag.appendChild(text);

    benachrichtigungListe.appendChild(eintrag);
  });
}

function benachrichtigungenErmitteln() {
  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const hinweise = [];

  workspaceAufgaben.forEach(function (aufgabe) {
    if (aufgabe.fortschritt === 100 && aufgabe.status !== "archiv") {
      hinweise.push({
        typ: "erfolg",
        titel: "Projekt abgeschlossen",
        text: `${aufgabe.text} ist bei 100 %. Prüfe, ob es archiviert werden kann.`
      });
    }

    if (aufgabe.favorit) {
      hinweise.push({
        typ: "info",
        titel: "Favorit im Fokus",
        text: `${aufgabe.text} ist angeheftet und sollte regelmäßig geprüft werden.`
      });
    }

    const offeneChecklisten = Array.isArray(aufgabe.checkliste)
      ? aufgabe.checkliste.filter(function (punkt) {
          return !punkt.erledigt;
        }).length
      : 0;

    if (offeneChecklisten > 0) {
      hinweise.push({
        typ: "warnung",
        titel: "Offene Checkliste",
        text: `${aufgabe.text} hat ${offeneChecklisten} offene Checklistenpunkte.`
      });
    }

    const offeneMeilensteine = Array.isArray(aufgabe.meilensteine)
      ? aufgabe.meilensteine.filter(function (punkt) {
          return !punkt.erledigt;
        }).length
      : 0;

    if (offeneMeilensteine > 0) {
      hinweise.push({
        typ: "warnung",
        titel: "Offene Meilensteine",
        text: `${aufgabe.text} hat ${offeneMeilensteine} offene Meilensteine.`
      });
    }

    if (aufgabe.zeitStart) {
      hinweise.push({
        typ: "info",
        titel: "Timer läuft",
        text: `Bei ${aufgabe.text} läuft aktuell die Zeiterfassung.`
      });
    }
  });

  return hinweise.slice(0, 8);
}


function linksAnzeigen(aufgabe) {
  linkListe.innerHTML = "";

  if (!Array.isArray(aufgabe.links)) {
    aufgabe.links = [];
  }

  detailLinkAnzahl.textContent = `${aufgabe.links.length} Einträge`;

  if (aufgabe.links.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("link-leer");
    leer.textContent = "Noch keine Dateien oder Links hinterlegt.";
    linkListe.appendChild(leer);
    return;
  }

  aufgabe.links.forEach(function (link) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("link-eintrag");

    const info = document.createElement("div");

    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    linkElement.textContent = link.titel;

    const urlText = document.createElement("span");
    urlText.textContent = link.url;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("link-loeschen");
    loeschen.textContent = "Löschen";

    loeschen.addEventListener("click", function () {
      aufgabe.links = aufgabe.links.filter(function (eintrag) {
        return eintrag.id !== link.id;
      });

      timelineEintragHinzufuegen(aufgabe, "Link gelöscht", link.titel);

      aufgabenSpeichern();
      linksAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    info.appendChild(linkElement);
    info.appendChild(urlText);

    eintrag.appendChild(info);
    eintrag.appendChild(loeschen);

    linkListe.appendChild(eintrag);
  });
}

linkFormular.addEventListener("submit", function (event) {
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

  const titel = linkTitelEingabe.value.trim();
  const url = linkUrlEingabe.value.trim();

  if (titel === "" || url === "") {
    return;
  }

  if (!Array.isArray(aufgabe.links)) {
    aufgabe.links = [];
  }

  aufgabe.links.push({
    id: neueIdErstellen(),
    titel: titel,
    url: url
  });

  linkTitelEingabe.value = "";
  linkUrlEingabe.value = "";

  timelineEintragHinzufuegen(aufgabe, "Link hinzugefügt", titel);

  aufgabenSpeichern();
  linksAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});


function aktivitaetHinzufuegen(titel, beschreibung, datum = new Date().toLocaleString("de-DE")) {
  aktivitaeten.unshift({
    id: neueIdErstellen(),
    titel: titel,
    beschreibung: beschreibung,
    workspace: aktiverWorkspace,
    datum: datum
  });

  if (aktivitaeten.length > 80) {
    aktivitaeten = aktivitaeten.slice(0, 80);
  }

  aktivitaetenSpeichern();
}

function aktivitaetenAnzeigen() {
  aktivitaetListe.innerHTML = "";

  const sichtbareAktivitaeten = aktivitaeten.filter(function (eintrag) {
    return eintrag.workspace === aktiverWorkspace;
  }).slice(0, 12);

  aktivitaetTitel.textContent = `${sichtbareAktivitaeten.length} letzte Aktivitäten`;

  if (sichtbareAktivitaeten.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("aktivitaet-leer");
    leer.textContent = "Noch keine Aktivitäten im aktiven Workspace.";
    aktivitaetListe.appendChild(leer);
    return;
  }

  sichtbareAktivitaeten.forEach(function (eintrag) {
    const element = document.createElement("div");
    element.classList.add("aktivitaet-eintrag");

    const titel = document.createElement("strong");
    titel.textContent = eintrag.titel;

    const beschreibung = document.createElement("span");
    beschreibung.textContent = eintrag.beschreibung;

    const datum = document.createElement("span");
    datum.textContent = eintrag.datum;

    element.appendChild(titel);
    element.appendChild(beschreibung);
    element.appendChild(datum);

    aktivitaetListe.appendChild(element);
  });
}

function aktivitaetenSpeichern() {
  localStorage.setItem(aktivitaetSpeicherName, JSON.stringify(aktivitaeten));
}

function aktivitaetenLaden() {
  const gespeicherteAktivitaeten = localStorage.getItem(aktivitaetSpeicherName);

  if (gespeicherteAktivitaeten === null) {
    aktivitaeten = [];
    return;
  }

  aktivitaeten = JSON.parse(gespeicherteAktivitaeten);
}

aktivitaetLeerenButton.addEventListener("click", function () {
  const bestaetigung = confirm("Möchtest du das Aktivitätsprotokoll für diesen Workspace wirklich leeren?");

  if (bestaetigung === false) {
    return;
  }

  aktivitaeten = aktivitaeten.filter(function (eintrag) {
    return eintrag.workspace !== aktiverWorkspace;
  });

  aktivitaetenSpeichern();
  aktivitaetenAnzeigen();
  syncAnzeigeAktualisieren();
  vorschlagAnzeigen();
  miniChartsAktualisieren();
  historyAnzeigen();
  wochenplanAnzeigen();
  miniStatistikenAktualisieren();
  projektStatistikenAktualisieren();
  ringdiagrammeAktualisieren();
});


function teamAnzeigen(aufgabe) {
  teamListe.innerHTML = "";

  if (!Array.isArray(aufgabe.team)) {
    aufgabe.team = [];
  }

  detailTeamAnzahl.textContent = `${aufgabe.team.length} Personen`;

  if (aufgabe.team.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("team-leer");
    leer.textContent = "Noch keine Personen oder Rollen zugeordnet.";
    teamListe.appendChild(leer);
    return;
  }

  aufgabe.team.forEach(function (person) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("team-person");

    const avatar = document.createElement("span");
    avatar.classList.add("team-avatar");
    avatar.textContent = initialenErstellen(person.name);

    const name = document.createElement("span");
    name.textContent = person.name;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("team-loeschen");
    loeschen.textContent = "×";

    loeschen.addEventListener("click", function () {
      aufgabe.team = aufgabe.team.filter(function (eintrag) {
        return eintrag.id !== person.id;
      });

      timelineEintragHinzufuegen(aufgabe, "Teammitglied entfernt", person.name);

      aufgabenSpeichern();
      teamAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    eintrag.appendChild(avatar);
    eintrag.appendChild(name);
    eintrag.appendChild(loeschen);

    teamListe.appendChild(eintrag);
  });
}

teamFormular.addEventListener("submit", function (event) {
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

  const name = teamNameEingabe.value.trim();

  if (name === "") {
    return;
  }

  if (!Array.isArray(aufgabe.team)) {
    aufgabe.team = [];
  }

  aufgabe.team.push({
    id: neueIdErstellen(),
    name: name
  });

  teamNameEingabe.value = "";

  timelineEintragHinzufuegen(aufgabe, "Teammitglied hinzugefügt", name);

  aufgabenSpeichern();
  teamAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});

function initialenErstellen(name) {
  return name
    .split(" ")
    .filter(function (teil) {
      return teil.trim() !== "";
    })
    .slice(0, 2)
    .map(function (teil) {
      return teil[0].toUpperCase();
    })
    .join("");
}


syncButton.addEventListener("click", function () {
  const zeitpunkt = new Date().toLocaleString("de-DE");
  localStorage.setItem(syncSpeicherName, zeitpunkt);

  syncStatus.textContent = "Synchronisiert";
  syncZeitpunkt.textContent = `Letzte Synchronisierung: ${zeitpunkt}`;
  syncDetails.textContent = `${aufgaben.length} Projekte und ${aktivitaeten.length} Aktivitäten lokal gesichert.`;

  aktivitaetHinzufuegen("Synchronisierung", "Die lokalen Projektdaten wurden synchronisiert.");
  aktivitaetenAnzeigen();
});

function syncAnzeigeAktualisieren() {
  const gespeicherterZeitpunkt = localStorage.getItem(syncSpeicherName);

  if (gespeicherterZeitpunkt === null) {
    syncStatus.textContent = "Lokal gespeichert";
    syncZeitpunkt.textContent = "Noch nicht synchronisiert";
    syncDetails.textContent = "Daten werden aktuell im Browser gespeichert.";
    return;
  }

  syncStatus.textContent = "Synchronisiert";
  syncZeitpunkt.textContent = `Letzte Synchronisierung: ${gespeicherterZeitpunkt}`;
  syncDetails.textContent = `${aufgaben.length} Projekte und ${aktivitaeten.length} Aktivitäten lokal gesichert.`;
}


vorschlagAktualisierenButton.addEventListener("click", function () {
  vorschlagAnzeigen();
  aktivitaetHinzufuegen("Vorschlag aktualisiert", "Die intelligente Empfehlung wurde neu berechnet.");
  aktivitaetenAnzeigen();
});

function vorschlagAnzeigen() {
  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace && aufgabe.status !== "archiv";
  });

  if (workspaceAufgaben.length === 0) {
    vorschlagInhalt.innerHTML = "Keine aktiven Projekte in diesem Workspace vorhanden.";
    return;
  }

  const offeneFavoriten = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.favorit && aufgabe.fortschritt < 100;
  });

  if (offeneFavoriten.length > 0) {
    const projekt = offeneFavoriten[0];
    vorschlagInhalt.innerHTML = `<strong>${projekt.text}</strong><br>Dieses Projekt ist angeheftet und noch nicht abgeschlossen. Es wäre sinnvoll, hier als Nächstes weiterzumachen.`;
    return;
  }

  const fastFertigeProjekte = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.fortschritt >= 70 && aufgabe.fortschritt < 100;
  });

  if (fastFertigeProjekte.length > 0) {
    const projekt = fastFertigeProjekte[0];
    vorschlagInhalt.innerHTML = `<strong>${projekt.text}</strong><br>Dieses Projekt ist schon weit fortgeschritten. Ein Abschluss wäre ein guter nächster Schritt.`;
    return;
  }

  const offeneMeilensteine = workspaceAufgaben.filter(function (aufgabe) {
    return Array.isArray(aufgabe.meilensteine) && aufgabe.meilensteine.some(function (punkt) {
      return !punkt.erledigt;
    });
  });

  if (offeneMeilensteine.length > 0) {
    const projekt = offeneMeilensteine[0];
    vorschlagInhalt.innerHTML = `<strong>${projekt.text}</strong><br>Dieses Projekt hat offene Meilensteine. Es lohnt sich, dort den nächsten Meilenstein abzuschließen.`;
    return;
  }

  const offeneChecklisten = workspaceAufgaben.filter(function (aufgabe) {
    return Array.isArray(aufgabe.checkliste) && aufgabe.checkliste.some(function (punkt) {
      return !punkt.erledigt;
    });
  });

  if (offeneChecklisten.length > 0) {
    const projekt = offeneChecklisten[0];
    vorschlagInhalt.innerHTML = `<strong>${projekt.text}</strong><br>Dieses Projekt hat offene Checklistenpunkte. Arbeite am besten einen kleinen Punkt ab.`;
    return;
  }

  const niedrigsterFortschritt = workspaceAufgaben
    .slice()
    .sort(function (a, b) {
      return a.fortschritt - b.fortschritt;
    })[0];

  vorschlagInhalt.innerHTML = `<strong>${niedrigsterFortschritt.text}</strong><br>Dieses Projekt hat aktuell den niedrigsten Fortschritt. Ein kleiner Startschritt würde helfen.`;
}


function tagsAnzeigen(aufgabe) {
  tagListe.innerHTML = "";

  if (!Array.isArray(aufgabe.tags)) {
    aufgabe.tags = [];
  }

  detailTagAnzahl.textContent = `${aufgabe.tags.length} Tags`;

  if (aufgabe.tags.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("tag-leer");
    leer.textContent = "Noch keine Tags hinterlegt.";
    tagListe.appendChild(leer);
    return;
  }

  aufgabe.tags.forEach(function (tag) {
    const chip = document.createElement("div");
    chip.classList.add("tag-chip");

    const name = document.createElement("span");
    name.textContent = `#${tag.name}`;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("tag-loeschen");
    loeschen.textContent = "×";

    loeschen.addEventListener("click", function () {
      aufgabe.tags = aufgabe.tags.filter(function (eintrag) {
        return eintrag.id !== tag.id;
      });

      timelineEintragHinzufuegen(aufgabe, "Tag entfernt", tag.name);

      aufgabenSpeichern();
      tagsAnzeigen(aufgabe);
      timelineAnzeigen(aufgabe);
    });

    chip.appendChild(name);
    chip.appendChild(loeschen);

    tagListe.appendChild(chip);
  });
}

tagFormular.addEventListener("submit", function (event) {
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

  const tagName = tagEingabe.value.trim().replace(/^#/, "");

  if (tagName === "") {
    return;
  }

  if (!Array.isArray(aufgabe.tags)) {
    aufgabe.tags = [];
  }

  const existiertSchon = aufgabe.tags.some(function (tag) {
    return tag.name.toLowerCase() === tagName.toLowerCase();
  });

  if (existiertSchon) {
    tagEingabe.value = "";
    return;
  }

  aufgabe.tags.push({
    id: neueIdErstellen(),
    name: tagName
  });

  tagEingabe.value = "";

  timelineEintragHinzufuegen(aufgabe, "Tag hinzugefügt", tagName);

  aufgabenSpeichern();
  tagsAnzeigen(aufgabe);
  timelineAnzeigen(aufgabe);
});


function dragUndDropEinrichten() {
  const spalten = document.querySelectorAll("[data-status-zone]");

  spalten.forEach(function (spalte) {
    spalte.addEventListener("dragover", function (event) {
      event.preventDefault();
      spalte.classList.add("drag-over");
    });

    spalte.addEventListener("dragleave", function () {
      spalte.classList.remove("drag-over");
    });

    spalte.addEventListener("drop", function (event) {
      event.preventDefault();

      const aufgabenId = Number(event.dataTransfer.getData("text/plain"));
      const neuerStatus = spalte.dataset.statusZone;

      aufgabePerDragVerschieben(aufgabenId, neuerStatus);
      spalte.classList.remove("drag-over");
    });
  });
}

function aufgabePerDragVerschieben(aufgabenId, neuerStatus) {
  const aufgabe = aufgaben.find(function (eintrag) {
    return eintrag.id === aufgabenId;
  });

  if (!aufgabe || !statusTexte[neuerStatus]) {
    return;
  }

  const alterStatus = aufgabe.status;

  if (alterStatus === neuerStatus) {
    return;
  }

  aufgabe.status = neuerStatus;

  if (neuerStatus === "arbeit" && aufgabe.fortschritt === 0) {
    aufgabe.fortschritt = 5;
  }

  if (neuerStatus === "fertig") {
    aufgabe.fortschritt = 100;
  }

  timelineEintragHinzufuegen(
    aufgabe,
    "Per Drag & Drop verschoben",
    `${statusTexte[alterStatus]} → ${statusTexte[neuerStatus]}`
  );

  aufgabenSpeichern();
  boardAnzeigen();
}


function automatisierungsregelnAnwenden(aufgabe) {
  if (!aufgabe || aufgabe.status === "archiv") {
    return;
  }

  const alterStatus = aufgabe.status;
  let neuerStatus = alterStatus;

  if (autoFertig.checked && aufgabe.fortschritt === 100) {
    neuerStatus = "fertig";
  }

  if (autoArbeit.checked && aufgabe.fortschritt > 0 && aufgabe.fortschritt < 100) {
    neuerStatus = "arbeit";
  }

  if (autoOffen.checked && aufgabe.fortschritt === 0) {
    neuerStatus = "offen";
  }

  if (alterStatus !== neuerStatus) {
    aufgabe.status = neuerStatus;

    timelineEintragHinzufuegen(
      aufgabe,
      "Automatisierungsregel ausgeführt",
      `${statusTexte[alterStatus]} → ${statusTexte[neuerStatus]}`
    );
  }
}

autoFertig.addEventListener("change", function () {
  aktivitaetHinzufuegen(
    "Automatisierungsregel geändert",
    autoFertig.checked
      ? "100 %-Regel wurde aktiviert."
      : "100 %-Regel wurde deaktiviert."
  );

  aktivitaetenAnzeigen();
});

autoArbeit.addEventListener("change", function () {
  aktivitaetHinzufuegen(
    "Automatisierungsregel geändert",
    autoArbeit.checked
      ? "In-Arbeit-Regel wurde aktiviert."
      : "In-Arbeit-Regel wurde deaktiviert."
  );

  aktivitaetenAnzeigen();
});

autoOffen.addEventListener("change", function () {
  aktivitaetHinzufuegen(
    "Automatisierungsregel geändert",
    autoOffen.checked
      ? "Offen-Regel wurde aktiviert."
      : "Offen-Regel wurde deaktiviert."
  );

  aktivitaetenAnzeigen();
});


function miniChartsAktualisieren() {
  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const gesamt = workspaceAufgaben.length || 1;

  const offen = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "offen";
  }).length;

  const arbeit = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "arbeit";
  }).length;

  const fertig = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "fertig";
  }).length;

  const archiv = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "archiv";
  }).length;

  chartOffen.style.width = `${Math.round((offen / gesamt) * 100)}%`;
  chartArbeit.style.width = `${Math.round((arbeit / gesamt) * 100)}%`;
  chartFertig.style.width = `${Math.round((fertig / gesamt) * 100)}%`;
  chartArchiv.style.width = `${Math.round((archiv / gesamt) * 100)}%`;
}


function historyAnzeigen() {
  historyListe.innerHTML = "";

  const eintraege = aktivitaeten
    .filter(function (eintrag) {
      return eintrag.workspace === aktiverWorkspace;
    })
    .slice(0, 8);

  if (eintraege.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("history-leer");
    leer.textContent = "Noch keine Änderungen im aktiven Workspace.";
    historyListe.appendChild(leer);
    return;
  }

  eintraege.forEach(function (eintrag) {
    const element = document.createElement("div");
    element.classList.add("history-eintrag");

    const titel = document.createElement("strong");
    titel.textContent = eintrag.titel;

    const beschreibung = document.createElement("span");
    beschreibung.textContent = eintrag.beschreibung;

    const datum = document.createElement("span");
    datum.textContent = eintrag.datum;

    element.appendChild(titel);
    element.appendChild(beschreibung);
    element.appendChild(datum);

    historyListe.appendChild(element);
  });
}


function wochenplanAnzeigen() {
  const tage = {
    montag: [],
    dienstag: [],
    mittwoch: [],
    donnerstag: [],
    freitag: [],
    samstag: [],
    sonntag: []
  };

  const aktiveAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace && aufgabe.status !== "archiv";
  });

  aktiveAufgaben.forEach(function (aufgabe, index) {
    const tagNamen = Object.keys(tage);
    const tag = tagNamen[index % tagNamen.length];
    tage[tag].push(aufgabe);
  });

  Object.keys(wochenTageElemente).forEach(function (tag) {
    const element = wochenTageElemente[tag];
    element.innerHTML = `<strong>${tagNameFormatieren(tag)}</strong>`;

    if (tage[tag].length === 0) {
      const leer = document.createElement("span");
      leer.classList.add("wochenplan-leer");
      leer.textContent = "Keine Aufgaben";
      element.appendChild(leer);
      return;
    }

    tage[tag].slice(0, 3).forEach(function (aufgabe) {
      const eintrag = document.createElement("div");
      eintrag.classList.add("wochenplan-aufgabe");
      eintrag.textContent = aufgabe.text;
      element.appendChild(eintrag);
    });
  });
}

function tagNameFormatieren(tag) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}


function miniStatistikenAktualisieren() {
  const heute = heutigesDatumErstellen();

  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const heuteErstellt = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.erstelltAm === heute;
  }).length;

  const offeneChecklisten = workspaceAufgaben.reduce(function (gesamt, aufgabe) {
    if (!Array.isArray(aufgabe.checkliste)) {
      return gesamt;
    }

    return gesamt + aufgabe.checkliste.filter(function (punkt) {
      return !punkt.erledigt;
    }).length;
  }, 0);

  const offeneMeilensteine = workspaceAufgaben.reduce(function (gesamt, aufgabe) {
    if (!Array.isArray(aufgabe.meilensteine)) {
      return gesamt;
    }

    return gesamt + aufgabe.meilensteine.filter(function (punkt) {
      return !punkt.erledigt;
    }).length;
  }, 0);

  const aktiveTimer = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.zeitStart;
  }).length;

  const links = workspaceAufgaben.reduce(function (gesamt, aufgabe) {
    return gesamt + (Array.isArray(aufgabe.links) ? aufgabe.links.length : 0);
  }, 0);

  const team = workspaceAufgaben.reduce(function (gesamt, aufgabe) {
    return gesamt + (Array.isArray(aufgabe.team) ? aufgabe.team.length : 0);
  }, 0);

  statHeute.textContent = heuteErstellt;
  statChecklisten.textContent = offeneChecklisten;
  statMeilensteine.textContent = offeneMeilensteine;
  statTimer.textContent = aktiveTimer;
  statLinks.textContent = links;
  statTeam.textContent = team;
}


function projektStatistikenAktualisieren() {
  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const durchschnitt = durchschnittlichenFortschrittBerechnen(workspaceAufgaben);

  const abgeschlossen = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "fertig";
  }).length;

  const aktiv = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status !== "archiv";
  }).length;

  const archiv = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "archiv";
  }).length;

  projektStatDurchschnitt.textContent = `${durchschnitt} %`;
  projektStatAbgeschlossen.textContent = abgeschlossen;
  projektStatAktiv.textContent = aktiv;
  projektStatArchiv.textContent = archiv;
}


function kompaktModusLaden() {
  const gespeichert = localStorage.getItem(kompaktModusSpeicherName);

  if (gespeichert === "aktiv") {
    kompaktModus.checked = true;
    document.body.classList.add("kompakt-aktiv");
  }
}

kompaktModus.addEventListener("change", function () {
  if (kompaktModus.checked) {
    document.body.classList.add("kompakt-aktiv");
    localStorage.setItem(kompaktModusSpeicherName, "aktiv");
    aktivitaetHinzufuegen("Kompaktmodus aktiviert", "Die Board-Ansicht wurde verdichtet.");
  } else {
    document.body.classList.remove("kompakt-aktiv");
    localStorage.setItem(kompaktModusSpeicherName, "inaktiv");
    aktivitaetHinzufuegen("Kompaktmodus deaktiviert", "Die normale Board-Ansicht wurde wiederhergestellt.");
  }

  aktivitaetenAnzeigen();
});


function ringdiagrammeAktualisieren() {
  const workspaceAufgaben = aufgaben.filter(function (aufgabe) {
    return aufgabe.workspace === aktiverWorkspace;
  });

  const gesamt = workspaceAufgaben.length || 1;

  const durchschnitt = durchschnittlichenFortschrittBerechnen(workspaceAufgaben);

  const fertig = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "fertig";
  }).length;

  const offen = workspaceAufgaben.filter(function (aufgabe) {
    return aufgabe.status === "offen";
  }).length;

  const fertigProzent = Math.round((fertig / gesamt) * 100);
  const offenProzent = Math.round((offen / gesamt) * 100);

  ringSetzen(ringDurchschnitt, ringDurchschnittText, durchschnitt);
  ringSetzen(ringFertig, ringFertigText, fertigProzent);
  ringSetzen(ringOffen, ringOffenText, offenProzent);
}

function ringSetzen(element, textElement, prozent) {
  const grad = Math.round((prozent / 100) * 360);

  element.style.background = `conic-gradient(#22d3ee ${grad}deg, rgba(15, 23, 42, 0.85) ${grad}deg)`;
  textElement.textContent = `${prozent} %`;
}


function wissensdatenbankLaden() {
  const gespeicherterText = localStorage.getItem(wissensdatenbankSpeicherName);

  if (gespeicherterText !== null) {
    wissensdatenbankText.value = gespeicherterText;
  }
}

wissensdatenbankSpeichern.addEventListener("click", function () {
  localStorage.setItem(wissensdatenbankSpeicherName, wissensdatenbankText.value);

  aktivitaetHinzufuegen(
    "Wissensdatenbank gespeichert",
    "Die globale Wissensdatenbank wurde aktualisiert."
  );

  aktivitaetenAnzeigen();
});


function ressourcenLaden() {
  const gespeicherteRessourcen = localStorage.getItem(ressourcenSpeicherName);

  if (gespeicherteRessourcen === null) {
    ressourcen = [];
    return;
  }

  ressourcen = JSON.parse(gespeicherteRessourcen);
}

function ressourcenSpeichern() {
  localStorage.setItem(ressourcenSpeicherName, JSON.stringify(ressourcen));
}

function ressourcenAnzeigen() {
  ressourcenListe.innerHTML = "";

  if (ressourcen.length === 0) {
    const leer = document.createElement("div");
    leer.classList.add("ressourcen-leer");
    leer.textContent = "Noch keine Ressourcen gespeichert.";
    ressourcenListe.appendChild(leer);
    return;
  }

  ressourcen.forEach(function (ressource) {
    const eintrag = document.createElement("div");
    eintrag.classList.add("ressourcen-eintrag");

    const info = document.createElement("div");

    const link = document.createElement("a");
    link.href = ressource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = ressource.titel;

    const url = document.createElement("span");
    url.textContent = ressource.url;

    const loeschen = document.createElement("button");
    loeschen.type = "button";
    loeschen.classList.add("ressourcen-loeschen");
    loeschen.textContent = "Löschen";

    loeschen.addEventListener("click", function () {
      ressourcen = ressourcen.filter(function (eintrag) {
        return eintrag.id !== ressource.id;
      });

      ressourcenSpeichern();
      ressourcenAnzeigen();

      aktivitaetHinzufuegen("Ressource gelöscht", ressource.titel);
      aktivitaetenAnzeigen();
    });

    info.appendChild(link);
    info.appendChild(url);

    eintrag.appendChild(info);
    eintrag.appendChild(loeschen);

    ressourcenListe.appendChild(eintrag);
  });
}

ressourceHinzufuegen.addEventListener("click", function () {
  const titel = ressourceTitel.value.trim();
  const url = ressourceUrl.value.trim();

  if (titel === "" || url === "") {
    return;
  }

  ressourcen.push({
    id: neueIdErstellen(),
    titel: titel,
    url: url
  });

  ressourceTitel.value = "";
  ressourceUrl.value = "";

  ressourcenSpeichern();
  ressourcenAnzeigen();

  aktivitaetHinzufuegen("Ressource hinzugefügt", titel);
  aktivitaetenAnzeigen();
});
