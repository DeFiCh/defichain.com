---
title: Verschlüsselung der Wallet
description: So verschlüsselt man seine Wallet über die Konsole
---

**Hinweis**: Wenn du deine Wallet über die Konsole verschlüsselst, ändert sich deine mnemonische Phrase, die 24 Wiederherstellungswörter stimmen also nicht mehr. Verlasse dich nicht auf deine mnemonische Phrase als Backup, wenn du diese Anleitung befolgst, sondern erstelle ein Backup, nachdem du die Verschlüsselung aktiviert hast, und speichere es an einem sicheren Ort.

Zum Zeitpunkt des Verfassens dieses Artikels, v2.1.4, verfügt die App noch nicht über eine grafische Benutzeroberfläche, die die Verschlüsselung oder das Sperren der Wallet erleichtert. Dies kann ein ernsthaftes Risiko darstellen, da deine Wallets von jeder Person oder jedem System übernommen werden können, die/der Zugriff auf die Datei "wallet.dat" in deinem DeFi-Ordner hat.

Da DeFiChain Node ein Fork von Bitcoin Core ist, verfügt er über eine übernommene Wallet-Verschlüsselung, die du relativ einfach verwalten kannst.

Diese Anleitung zeigt dir, wie du die Ver- und Entschlüsselung der Wallet, auch Wallet Locking und Unlocking genannt, über den Konsolenzugang der DeFi Wallet Desktop-App durchführen kannst. 

**Disclaimer**: Überprüfe und informiere dich über alle Befehle, die du in die Konsole eingibst, vor allem wenn sie aus nicht vertrauenswürdigen Quellen stammen. Der Autor dieses Leitfadens ist nicht für den Verlust von angelegtem Kapital verantwortlich.

## 1. Sichern deiner Wallet

1. Erstelle eine Sicherungskopie deiner bestehenden `wallet.dat` an einem sicheren Speicherort. Diese Datei ist sehr wichtig, um deine DFI- und DeFi-Standard-Tokens (DSTs) wiederherzustellen, falls etwas schief geht. Die Datei findest du normalerweise unter den folgenden Pfaden:
  `~/.defi/wallets` unter Linux
  `~/Library/Application Support/DeFi/wallets` auf dem Mac
  `<root>\Users\<username>\AppData\Roaming\DeFi Blockchain\wallets` unter Windows.
  Denk daran, dass diese Datei _unverschlüsselt_ ist! Bewahre sie absolut sicher auf!

2. Um deine Wallet zum ersten Mal zu sichern, musst du einen langen, zufälligen Passsatz erstellen. Zur Veranschaulichung wird in dieser Anleitung der folgende Passsatz `ERSETZE_DIES_DURCH_EINEN_LANGEN_SICHEREN_PASSSATZ` verwendet. Du kannst jeden Zufallsgenerator für Passsätze verwenden, am besten einen Offline-Generator. Schreibe ihn sorgfältig auf.

3. Verschlüssele deine Wallet, indem du in der Konsole Folgendes eingibst: 

    ```
    encryptwallet ERSETZE_DIES_DURCH_EINEN_LANGEN_SICHEREN_PASSSATZ
    ```

    Es sollte ein paar Sekunden dauern und du solltest die Meldung `wallet encrypted` sehen.  Ab diesem Zeitpunkt ist deine Wallet, d.h. die Datei "wallet.dat", standardmäßig verschlüsselt. 

    Deine DeFi Wallet Desktop-App wird wie gewohnt funktionieren und deine DeFi Liquiditäts-Mining-Rewards werden wie gewohnt eingehen. Wenn du versuchst, DFI oder DST zu senden, solltest du die folgende Meldung sehen: `Add-on auth TX failed: Can't sign TX`. Das zeigt, dass deine Wallet Keys jetzt verschlüsselt sind. Ein Hacker, der zu diesem Zeitpunkt Zugang zu deiner Wallet hat, kann nur deine Bestände einsehen, sie aber nicht ausgeben.

## 2. Entsperren deiner Wallet

Da der Betriebsmodus deiner Wallet jetzt standardmäßig gesperrt und verschlüsselt ist, musst du deine Wallet jedes Mal entsperren, wenn du eine Transaktion durchführen willst, z.B. wenn du DFI oder DST sendest, einen DEX-Tausch durchführst, Liquidität hinzufügst, etc.

Zum Entsperren gehst du zur Konsole und gibst ein:

```
walletpassphrase ERSETZE_DIES_DURCH_EINEN_LANGEN_SICHEREN_PASSSATZ 60
```

Dadurch wird deine Wallet für 60 Sekunden entsperrt. Danach kehrt sie automatisch wieder in den gesperrten Zustand zurück.

Jetzt kannst du deine App aufrufen und innerhalb von 60 Sekunden jede gewünschte Transaktion durchführen. Wenn du die Meldung `Add-on auth TX failed: Can't sign TX` bekommst, während du versuchst, eine Transaktion durchzuführen, bedeutet das, dass deine Wallet jetzt wieder gesperrt ist und du sie wie oben beschrieben mit dem Befehl `walletpassphrase...`  wieder entsperren musst.

## 3. Sperren deiner Wallet

Wenn du feststellst, dass du deine Transaktion in einer kürzeren Zeit abgeschlossen hast und du sicherstellen willst, dass deine Wallet sofort gesperrt wird, ohne auf die Abschaltung zu warten, gib einfach ein

```
walletlock
```

Dadurch wird deine Wallet unmittelbar gesperrt und es können keine weiteren Transaktionen mehr durchgeführt werden!

## 4. Überprüfen des Verschlüsselungsstatus deiner Wallet

Um sicherzustellen, dass deine Wallet wirklich gesperrt und verschlüsselt ist, kannst du Folgendes eingeben:

```
getwalletinfo
```

Bei einer verschlüsselten Wallet solltest du eine Meldung erhalten, die `"unlocked_until": 1609145224` enthält. Wenn eine Wallet gesperrt ist, sollte `unlocked_until` `0` anzeigen. Wenn sie entsperrt ist, sollte sie einen [UNIX-Zeitstempel](https://www.epochconverter.com) anzeigen.

Bei einer unverschlüsselten Wallet fehlt `unlocked_until`. Es zeigt nicht einmal `0` an.

---

## Tipps

1. Sobald du sicher bist, dass deine Wallet sicher verschlüsselt ist, solltest du die unverschlüsselte `wallet.dat`, die du zuvor gesichert hast, sicher löschen. Du brauchst sie nicht mehr.

2. Um den Passsatz zu ändern, verwende `walletpassphrasechange "alter Passsatz" "neuer Passsatz"`.

3. Die in diesem Leitfaden beschriebenen Schritte werden in zukünftige Versionen der DeFi Wallet Desktop-App integriert. Die Unterstützung von Hardware Wallets wie Ledger ist ebenfalls in Arbeit.
