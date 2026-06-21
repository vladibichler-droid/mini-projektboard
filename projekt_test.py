from pathlib import Path
import subprocess

checks = []

def pruefen(beschreibung, bedingung):
    checks.append((beschreibung, bedingung))

index = Path("index.html")
style = Path("style.css")
script = Path("script.js")

index_text = index.read_text(encoding="utf-8") if index.exists() else ""
style_text = style.read_text(encoding="utf-8") if style.exists() else ""
script_text = script.read_text(encoding="utf-8") if script.exists() else ""

pruefen("index.html vorhanden", index.exists())
pruefen("style.css vorhanden", style.exists())
pruefen("script.js vorhanden", script.exists())

bereiche = [
    ("Workspace-System", "workspace-bereich"),
    ("Analyse-Dashboard", "analyse-dashboard"),
    ("Kalenderansicht", "kalender-dashboard"),
    ("Detailansicht", "detailOverlay"),
    ("Checklisten", "checklistenFormular"),
    ("Zeiterfassung", "zeitStartButton"),
    ("Projekt-Timeline", "timelineListe"),
    ("Meilensteine", "meilensteinFormular"),
    ("Benachrichtigungen", "benachrichtigungListe"),
    ("Dateien & Links", "linkFormular"),
    ("Aktivitätsprotokoll", "aktivitaetListe"),
    ("Team-Modus", "teamFormular"),
    ("Synchronisierung", "syncButton"),
    ("Intelligente Vorschläge", "vorschlagInhalt"),
    ("Tag-System", "tagFormular"),
    ("Drag & Drop", "data-status-zone"),
    ("Automatisierungsregeln", "autoFertig"),
    ("Mini-Charts", "chartOffen"),
    ("Änderungsverlauf", "historyListe"),
    ("Wochenplan", "wochenplan-dashboard"),
    ("Statistikkarten", "statHeute"),
    ("Projektstatistiken", "projektStatDurchschnitt"),
    ("Kompaktmodus", "kompaktModus"),
    ("Ringdiagramme", "ringDurchschnitt"),
    ("Wissensdatenbank", "wissensdatenbankText"),
    ("Ressourcenverwaltung", "ressourceTitel"),
    ("Budget-Tracking", "budgetGeplant"),
    ("Roadmap", "roadmapTitel"),
    ("Coding-Statistik", "codingStatProjekte"),
    ("Vorlagenbibliothek", "vorlagen-dashboard"),
    ("Große Fortschrittsübersicht", "gesamtFortschrittRing"),
]

for name, suchtext in bereiche:
    pruefen(f"{name} im HTML gefunden", suchtext in index_text)

funktionen = [
    "boardAnzeigen",
    "aufgabenSpeichern",
    "aufgabenLaden",
    "workspaceAnzeigeAktualisieren",
    "analyseDashboardAktualisieren",
    "kalenderAnzeigen",
    "detailFensterOeffnen",
    "checklisteAnzeigen",
    "zeiterfassungAnzeigen",
    "timelineAnzeigen",
    "meilensteineAnzeigen",
    "linksAnzeigen",
    "teamAnzeigen",
    "tagsAnzeigen",
    "dragUndDropEinrichten",
    "automatisierungsregelnAnwenden",
    "miniChartsAktualisieren",
    "historyAnzeigen",
    "wochenplanAnzeigen",
    "miniStatistikenAktualisieren",
    "projektStatistikenAktualisieren",
    "ringdiagrammeAktualisieren",
    "ressourcenAnzeigen",
    "budgetAnzeigen",
    "roadmapAnzeigen",
    "codingStatistikAktualisieren",
    "gesamtFortschrittAktualisieren",
]

for funktion in funktionen:
    pruefen(f"JavaScript-Funktion {funktion} gefunden", f"function {funktion}" in script_text)

css_klassen = [
    ".workspace-bereich",
    ".analyse-dashboard",
    ".kalender-dashboard",
    ".detail-overlay",
    ".timeline-liste",
    ".benachrichtigung-dashboard",
    ".aktivitaet-dashboard",
    ".mini-chart-dashboard",
    ".history-dashboard",
    ".wochenplan-dashboard",
    ".projektstatistik-dashboard",
    ".ring-dashboard",
    ".budget-dashboard",
    ".roadmap-dashboard",
    ".gesamtfortschritt-dashboard",
]

for klasse in css_klassen:
    pruefen(f"CSS-Klasse {klasse} gefunden", klasse in style_text)

print("\nTECHNISCHER HAUPTTEST")
print("=" * 40)

fehler = 0

for beschreibung, ok in checks:
    if ok:
        print(f"✅ {beschreibung}")
    else:
        print(f"❌ {beschreibung}")
        fehler += 1

print("=" * 40)

if fehler == 0:
    print("✅ Ergebnis: Alle technischen Prüfungen bestanden.")
else:
    print(f"❌ Ergebnis: {fehler} Problem(e) gefunden.")

print("\nGit-Status:")
subprocess.run(["git", "status", "--short"])
