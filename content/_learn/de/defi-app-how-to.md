---
title: Leitfaden DeFi Wallet Desktop-App
description: Eine schrittweise Anleitung zur Verwendung und Installation der DeFi Wallet Desktop-App
---

## Die App herunterladen

Lade die neueste App-Version von der Seite [Downloads](/downloads) herunter.

## Mindestanforderungen

| Anforderung     | Mindestens erforderlich                           |
| --------------- | ------------------------------------------------- |
| Arbeitsspeicher | 4 GB                                              |
| Betriebssystem  | macOS 10.14, Windows 10, Ubuntu LTS 18 oder höher |

## Installation unter macOS

### Schritt 1: Installation

Öffne das heruntergeladene Image **DeFi-Wallet-<Version>.dmg**. Ziehe im Finder-Fenster, das sich öffnet, die DeFi Wallet Desktop-App auf der linken Seite auf die Verknüpfung mit dem Verzeichnis Applications auf der rechten Seite.

![](/img/guides/installing-defi-app/drag-to-install.png)

### Schritt 2: Umgang mit der macOS-Sicherheitsabfrage beim Öffnen der App

Öffne die App. Wenn du die DeFi Wallet Desktop-App zum ersten Mal öffnest, wird dir eine Sicherheitsabfrage angezeigt. Klicke OK, um sie zu ignorieren.

![](/img/guides/installing-defi-app/macos-security-prompt.png)

\*_Diese Sicherheitsabfrage erscheint bei frühen, nicht signierten Versionen der App. In zukünftigen Versionen, die von Apple signiert sind, wird keine Sicherheitsabfrage mehr zu sehen sein. Falls also noch nötig, bitte Schritt 3 ausführen._

### Schritt 3: Ausführung der App zulassen

\*_Öffne die App nur auf diese Weise, wenn du sicher bist, dass du die DeFi Wallet Desktop-App von einer offiziellen Quelle heruntergeladen hast. Die DeFi Wallet Desktop-App ist derzeit nur auf der [offiziellen Website](/) und [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases) verfügbar._

Gehe zu **Systemeinstellungen** und klicke auf **Sicherheit & Datenschutz**..

![](/img/guides/installing-defi-app/system-preferences.png)

Dann klicke auf **Dennoch öffnen**.

![](/img/guides/installing-defi-app/open-anyway-a.png)

Klicke auf **Öffnen** im Bestätigungs-Pop-up.

![](/img/guides/installing-defi-app/open-anyway-b.png)

Die DeFi Wallet Desktop-App wird automatisch gestartet, wenn die Installation abgeschlossen ist.

## Installation unter Windows

### Schritt 1: Installation

Ein Doppelklick auf die heruntergeladene Datei

### Schritt 2: Windows-Sicherheitsabfrage

Wenn du die DeFi Wallet Desktop-App zum ersten Mal installierst, kann es sein, dass das Installationsprogramm eine Sicherheitsabfrage anzeigt. Klicke auf **Mehr Info**.

\*_Microsoft Windows SmartScreen kann neu hochgeladene Dateien melden, die noch nicht lange genug in der Vergangenheit liegen._

![](/img/guides/installing-defi-app/CUmfPMS.png)

### Schritt 3: Umgehen der Windows-Sicherheitsabfrage

Klicke auf **Dennoch ausführen**, um die Installation zu starten.

![](/img/guides/installing-defi-app/S7SFwms.png)

Die DeFi Wallet Desktop-App wird automatisch gestartet, wenn die Installation abgeschlossen ist.

## Installieren unter Linux mit AppImage

Bitte stelle sicher, dass du die Option **Ausführen der Datei als Programm erlauben** für die Download-Datei aktiviert hast.

![](/img/guides/installing-defi-app/TU3ggCU.png)

Du kannst jetzt die DeFi Wallet Desktop-App öffnen.

## Installieren unter Linux mit Debian

Du kannst die DeFi Wallet Desktop-App entweder als GUI-Tool oder als Befehlszeilen-Tool installieren.

### Software Center verwenden

Die einfachste Methode ist, das Software Center in Ubuntu zu verwenden. Navigiere einfach zu dem Ordner, der die heruntergeladene **.deb** Datei enthält (normalerweise der Ordner _Downloads_), und öffne sie.

### Installiere .deb-Dateien in der Befehlszeile mit dpkg

Wenn du **deb** Pakete über die Befehlszeile installieren willst, kannst du entweder den Befehl `apt` oder den Befehl `dpkg` verwenden.

```
sudo apt install PATH_TO_DEB_FILE
```

or

```
sudo dpkg -i PATH_TO_DEB_FILE
```

Du kannst jetzt die DeFi Wallet öffnen.

---

## Verwendung der Wallet

### Die Wallet-Oberfläche

![](/img/guides/installing-defi-app/wallets.png)

#### Hauptnavigation in der Seitenleiste

- Tab **Guthaben**: Geld senden und empfangen und Transaktionen einsehen
- Tab **Liquidität**: Liquidität hinzufügen und entfernen und Jahreszins deiner Liquiditäts-Miningbestände anzeigen
- Tab **DEX**: Tauschen zwischen gewrappten BTC/ETH/USDT und DFI
- Tab **Token**: Von der Community verifizierte DST-Tokens (DeFi Standard Token) ansehen und eigene erstellen
- Tab **Blockchain**: Ein eingebauter Mini-Block-Explorer zur Einsicht in die Blockchain
- Tab **Masternodes**: Eine Liste der Masternodes anzeigen und deinen eigenen erstellen

#### Unternavigation in der Seitenleiste

- **Konsole**: DeFiChain CLI-Befehle ausführen (Befehlszeilenschnittstelle)
- **Hilfe**: Hilfe-Optionen
- **Einstellungen**: Wechsel zwischen Main- und Testnetz, Sprache und anderen Einstellungen

### Öffnen einer Wallet

Wechsle zum Tab **Guthaben**, wähle eine Wallet, z.B. DFI.

![](/img/guides/installing-defi-app/wallets-choose.png)

### Guthaben senden

#### Schritt 1

In einer Wallet klickst du auf **Senden**.

![](/img/guides/installing-defi-app/wallet-send.png)

#### Schritt 2

Gib den **Betrag** und die **Adresse** ein, an die du senden möchtest. Du kannst eine Adresse auch mit dem QR-Code-Scanner neben dem Adressfeld eingeben. Klicke auf **WEITER**, wenn du bereit bist.

![](/img/guides/installing-defi-app/wallet-send1.png)

#### Schritt 3

Überprüfe den **Betrag** und die **Adresse** und stelle sicher, dass sie korrekt sind. Die Schaltfläche **Betrag senden** ist für ein paar Sekunden deaktiviert, um dich vor versehentlichem Senden zu schützen.

![](/img/guides/installing-defi-app/wallet-send2.png)

Klicke auf **Betrag senden**, um den Auftrag zu bestätigen.

![](/img/guides/installing-defi-app/wallet-send3.png)

#### Schritt 4

Nachdem die Transaktion abgeschlossen ist, klicke auf **Zurück zur Wallet**, um zur Wallet zurückzukehren.

![](/img/guides/installing-defi-app/wallet-send4.png)

Du solltest deine letzte Transaktion in der Liste der **Transaktionen** in deiner Wallet sehen.

---

### Empfang von Zahlungen

#### Schritt 1

Klicke innerhalb einer ausgewählten Wallet auf **EMPFANGEN**.

![](/img/guides/installing-defi-app/wallet-receive.png)

Klicke dann auf **NEUE ADRESSE**, um eine neue Empfangsadresse zu erstellen.

![](/img/guides/installing-defi-app/wallet-receive1.png)

#### Schritt 2

Fülle die Informationen aus und gib deiner Adresse eine aussagekräftige Bezeichnung. Klicke dann auf **Erstellen**.

![](/img/guides/installing-defi-app/wallet-receive2.png)

#### Schritt 3

Die neue Empfangsadresse, die du gerade erstellt hast, erscheint in deiner Liste der Empfangsadressen.

![](/img/guides/installing-defi-app/wallet-receive3.png)

Klicke auf die Schaltfläche **QR-Code**, um einen QR-Code der Adresse aufzurufen.

![](/img/guides/installing-defi-app/wallet-receive4.png)

Klicke auf die Schaltfläche **Adresse kopieren**, um die Adresse in die Zwischenablage deines Systems zu kopieren.

![](/img/guides/installing-defi-app/wallet-receive5.png)
