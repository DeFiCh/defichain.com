---
title: Einen Masternode betreiben
description: Wie man einen Defichain Masternode unter Linux/macOS betreibt
---

## Einführung

Wenn du einen Masternode auf DefiChain einrichtest, kannst du am Konsensprotokoll teilnehmen und Staking-Rewards erhalten. Um einen Masternode einzurichten, musst du über mindestens 20.000 DFI verfügen.

_HINWEIS: Diese Anleitung setzt grundlegende Kenntnisse im Umgang mit dem Linux-Terminal voraus._

## Masternode-Rollen
Es gibt zwei verschiedene Rollen: den "masternode owner" und den "masternode operator". Der Owner hält die Sicherheiten und die Hauptaktivität (Minten neuer Token, Abstimmung über Verankerung) wird vom Operator durchgeführt. Im Prinzip kann ein Node beide Rollen spielen.

## Für Owner, die ihre eigenen Masternodes betreiben
In diesem Szenario ist die Adresse des Operators gleich der (Kollateral-) Adresse des Owners.

### Schritt 1 - Herunterladen und Extrahieren der Node-Software

Der erste Schritt besteht darin, die Binärdateien herunterzuladen. Hier sind die Links zu den Binärdateien für Windows, Linux und macOS (bitte lade die neueste Version herunter):

[Downloads](/downloads/)

Danach können wir die tar-Datei entpacken, indem wir folgendes ausführen (Ersetze 1.x.x mit deiner Versionsnummer):
```
tar -xvzf defichain-1.x.x-x86_64-pc-linux-gnu.tar.gz
```

### Schritt 2 - Binärdateien in das Benutzerverzeichnis kopieren

Wir möchten, dass die Node-Software in einem einheitlichen und leicht zugänglichen Verzeichnis gespeichert wird, also erstellen wir eines in unserem Home-Ordner. Dazu musst du Folgendes ausführen:

```
mkdir ~/.defi
```

Kopiere nun die Binärdateien, indem du Folgendes ausführst:
```
cp ./defichain-1.x.x/bin/* ~/.defi
```

### Schritt 3 - Einrichten von crontab, damit unser Node im Hintergrund läuft

Jetzt können wir unseren Node direkt starten, indem wir `~/.defi/defid` ausführen, aber das wäre nicht sehr bequem, da wir die ganze Zeit die Terminalsitzung offen halten und diesen Befehl jedes Mal ausführen müssten, wenn wir unseren Computer oder unsere SSH-Sitzung neu starten. 

Stattdessen werden wir crontab verwenden, um den Prozess am Laufen zu halten. Führe `crontab -e` aus und wähle einen Editor (ich empfehle Nano, wenn du dir nicht sicher bist, welchen du wählen sollst), dann füge:

```
* * * * * pidof defid || ~/.defi/defid
```

in die Datei ein und drücke `Strg-X` und dann die Eingabetaste, um die Datei zu speichern.

### Schritt 4 - Einrichten einer Owner-Adresse mit entsprechendem Kapitaleinsatz

Um einen Masternode betreiben zu können, musst du mindestens 20.000 DFI besitzen. Richten wir eine Adresse mit genügend Kapital ein, um sie als Owner zu verwenden. Masternodes unterstützen derzeit nur Legacy-Adressen, also erstelle eine Masternode-Adresse mit:

```
~/.defi/defi-cli getnewaddress "<label>" legacy
```

wobei "label" eine beliebige Bezeichnung ist, die du der Adresse geben möchtest.

Um das Guthaben an diese Adresse zu übertragen, kannst du Folgendes verwenden:

```
~/.defi/defi-cli sendtoaddress address
```

wobei Adresse die neue Owner-Adresse ist, die du erstellt hast.

### Schritt 5 - Registriere dich als Masternode im Netzwerk

Um am Staking-Algorithmus teilzunehmen, musst du dem Netzwerk mitteilen, dass du teilnehmen willst. Dies kannst du tun, indem du folgenden Befehl über das Defi CLI ausführst:

```
~/.defi/defi-cli createmasternode address
```

wobei "Adresse" sowohl für die Owner- als auch für die Kollateraladresse die neue, von dir erstellte Adresse sein sollte. Bitte beachte, dass es 10 DFI kostet, diesen Befehl auszuführen.

### Schritt 6 - Konfiguriere den Masternode und starte neu

Wir sind fast fertig. Damit der Masternode richtig funktioniert, müssen wir noch ein paar Konfigurationsänderungen vornehmen. Die Konfigurationsdatei wird sich in `~/.defi/defi.conf`befinden. Stellen wir sicher, dass die Konfigurationsdatei existiert, indem wir Folgendes ausführen `touch ~/.defi/defi.conf`. Öffne nun diese Konfigurationsdatei in einem Editor deiner Wahl und füge Folgendes hinzu:

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS
```

Da wir uns entschieden haben, Owner und Operator über dieselbe Adresse laufen zu lassen, setze einfach die gleiche Legacy-Adresse ein, die du für `OPERATOR_ADDRESS` erstellt hast. In diesem Fall ist es nicht nötig, die Owner-Adresse anzugeben.

Der letzte Schritt besteht darin, den Node neu zu starten. Da wir crontab laufen haben, müssen wir den Prozess nur beenden und crontab wird ihn nach einer Minute wieder starten. Diesen letzten Schritt können wir ausführen, indem wir `killall defi-init` ausführen. Eine Minute später sollte unser Masternode laufen und Token minten.

Wir können sicherstellen, dass der Masternode läuft, indem wir Folgendes ausführen:

```
~/.defi/defi-cli listmasternodes
```

Suche deine Masternode-Adresse in der Liste der Masternodes, um zu überprüfen, ob du alles erfolgreich eingerichtet hast.

Du kannst den Befehl `getmasternodeblocks OPERATOR_ADDRESS` ausführen, um zu sehen, wie viele Blöcke dein Masternode bisher gemint hat.

## Für Owner, die die Aufgaben des Masternodes an einen anderen Node delegieren möchten
In diesem Fall ist die Operator-Adresse eine andere als die Owner-Adresse (Kollateraladresse).

### Schritt 1-4 - Wie oben

Führe die Schritte 1-4 genauso aus wie im obigen Abschnitt für den Betrieb deines eigenen Masternodes. Wenn du auch den Operator Node selbst einrichtest, dann wiederhole die Schritte 1-4 für den Operator Node auf einem anderen Rechner.

### Schritt 5 - Registriere dich als Masternode im Netzwerk

Um am Staking-Algorithmus teilzunehmen, musst du dem Netzwerk mitteilen, dass du teilnehmen willst. Dies kannst du tun, indem du folgenden Befehl über das Defi CLI ausführst:

```
~/.defi/defi-cli createmasternode OWNER_ADDRESS OPERATOR_ADDRESS
``` 

wobei `OWNER_ADDRESS` die Adresse des Kollateral-/Owner Nodes und `OPERATOR_ADDRESS` die Adresse des Operators ist. Bitte beachte, dass es 10 DFI kostet, diesen Befehl auszuführen.

Danach gibt es nichts mehr zu tun. Du kannst einfach sicherstellen, dass dein Masternode-Operator den Masternode auf seiner Seite korrekt betreibt, indem du ihm die Operator-Adresse übermittelst.

Wir können überprüfen, ob der Masternode läuft, indem wir Folgendes ausführen: 

```
~/.defi/defi-cli listmasternodes
```

Sieh nach deiner Masternode-Adresse in der Liste der Masternodes, um zu überprüfen, ob alles erfolgreich eingerichtet wurde.

Du kannst den Befehl `getmasternodeblocks OPERATOR_ADDRESS` eingeben, um zu sehen, wie viele Blöcke dein Masternode bisher gemintet hat.

## Einrichten über die DeFi Wallet Desktop-App

Es ist ganz einfach, deinen Masternode über die DeFi Wallet Desktop-App einzurichten. Gehe einfach auf die Registerkarte Masternodes und klicke auf "Erstellen +" in der oberen rechten Ecke des Bildschirms. Der Prozess ist automatisch und selbsterklärend.

![Masternode1](/img/guides/run-a-masternode/masternode.png)

## Mehrere Masternodes auf demselben Rechner betreiben

Wenn du mehrere Masternodes auf demselben Rechner betreiben möchtest, musst du einfach mehrere `masternode_operator`-Einträge in deiner `defi.conf` vornehmen:

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS_1
masternode_operator=OPERATOR_ADDRESS_2
masternode_operator=OPERATOR_ADDRESS_3
```

Beim nächsten Aufruf beginnt der Node mit dem Minting für alle angegebenen Masternodes. Es gibt keine feste Grenze dafür, wie viele Masternodes ein einzelner Rechner betreiben kann.

## Masternodes zurückziehen

Wenn du dich entscheidest, deinen Masternodebetrieb zu beenden, kannst du Folgendes ausführen 

```
~/.defi/defi-cli resignmasternode
```
## Masternode-Status
Wenn du eine Transaktion "createemasternode" (oder "resignmasternode") sendest, bedeutet das nicht, dass sie sofort nach dem Übertragen an die Blockchain wirksam wird. Für jeden Status gibt es gewisse Verzögerungen.

Masternodes können in diesen Status vorkommen:
```
        PRE_ENABLED,
        ENABLED,
        PRE_RESIGNED,
        RESIGNED,
        PRE_BANNED,
        BANNED
```
- `PRE_ENABLED` - Masternode wurde erstellt, wartet aber nach der Erstellung auf genügend Blöcke, um aktiviert zu werden.
- `ENABLED` - Masternode ist voll funktionsfähig, kann Blöcke minten und Verankerungen signieren
- `PRE_RESIGNED` - Der Masternode ist noch in Betrieb, hat aber eine "Resign"-Transaktion erhalten und wartet eine gewisse Verzögerung lang, um aus dem Betrieb genommen zu werden.
- `RESIGNED` - Masternode außer Betrieb genommen, das Kollateral freigeschaltet und zur Rückforderung verfügbar
- `PRE_BANNED` - Der Masternode wurde als "Krimineller" überführt (er signierte zwei Blöcke von parallelen Forks auf unmittelbarer Höhe und wir bekamen ein spezielles Proofing-Tx auf der Chain), aber immer noch funktionsfähig (wartend, wie im Fall von PRE_RESIGNED)
- `BANNED` - Masternode deaktiviert, Kollateral freigeschaltet und kann zurückverlangt werden (wie RESIGNED, aber durch Deaktivierung erzwungen)
