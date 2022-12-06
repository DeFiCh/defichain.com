---
title: Chiffrement du portefeuille
description: Comment chiffrer votre portefeuille via la console
---

**Avertissement** : Le chiffrement de votre portefeuille via la console entraînera un changement de votre phrase mnémonique. Ne comptez pas sur votre phrase mnémonique comme sauvegarde si vous suivez ce guide, faites plutôt une sauvegarde après avoir activé le chiffrement en utilisant des fichiers de sauvegarde et stockez-les dans un endroit sûr.

Au moment de la rédaction de ce document, v2.1.4, l'application ne dispose pas encore d'une interface graphique intégrée pour faciliter le chiffrement ou le verrouillage des portefeuilles. Cela peut constituer un risque sérieux car vos portefeuilles peuvent être compromis par toute personne ou système ayant accès à votre fichier `wallet.dat` dans votre dossier DeFi.

Comme le nœud DeFiChain est un fork de Bitcoin Core, il dispose d'un chiffrement de portefeuille hérité que vous êtes en mesure de gérer avec une relative facilité.

Ce guide montre comment vous pouvez effectuer le chiffrement et le déchiffrement du portefeuille, également connu sous le nom de verrouillage et déverrouillage du portefeuille par l'accès à la console disponible via l'application DeFi Wallet.

**Décharge de responsabilité** : Vérifiez et comprenez toutes les commandes que vous vous apprêtez à saisir dans la console, en particulier celles provenant de sources non fiables. L'auteur de ce guide n'est pas responsable de toute perte de fonds.

## 1. Sécuriser votre portefeuille

1. Faites une sauvegarde de votre `wallet.dat` existant dans un endroit sûr. Ce fichier est très important pour récupérer vos DFI et vos tokens standards DeFi (DST) si les choses tournent mal. Le fichier se trouve généralement dans les chemins suivants :
   `~/.defi/wallets` pour Linux
   `~/Library/Application Support/DeFi/wallets` pour Mac
   `<root>\Users\<username>\AppData\Roaming\DeFi Blockchain\wallets` pour Windows.
   N'oubliez pas que ce fichier est _non chiffré_ ! Gardez-le absolument en sécurité !

2. Pour sécuriser votre portefeuille pour la première fois, générez une phrase secrète aléatoire relativement longue mais facile à retenir pour vous. À titre d'illustration, ce guide utilisera les phrases secrètes suivantes `REMPLACER_CECI_PAR_UNE_LONGUE_PHRASE_SECRÈTE`. Vous pouvez utiliser n'importe quel générateur de mot de passe aléatoire, idéalement hors ligne. Notez-la en toute sécurité.

3. Verrouillez votre portefeuille en tapant ce qui suit dans la console :

   ```
   encryptwallet REMPLACER_CECI_PAR_UNE_LONGUE_PHRASE_SECRÈTE
   ```

   Cela devrait prendre quelques secondes et vous devriez voir un message `wallet encrypted`. À partir de ce moment, votre portefeuille, c'est-à-dire `wallet.dat`, sera chiffré par défaut.

   Votre application de bureau DeFi Wallet fonctionnera comme d'habitude en affichage seul, et vos récompenses de liquidity mining DeFi afflueront comme d'habitude. Essayez d'envoyer des DFI ou DST, vous devriez maintenant voir le message suivant : `Add-on auth TX failed : Can't sign TX`. Cela montre que les clés de votre portefeuille sont maintenant chiffrées. Un pirate ayant accès à votre portefeuille à ce stade serait seulement capable de voir vos avoirs, mais incapable de les dépenser.

## 2. Déverrouillage de votre portefeuille

Comme l'état de votre portefeuille est maintenant verrouillé et chiffré par défaut, vous devez maintenant déverrouiller votre portefeuille chaque fois que vous voulez effectuer une transaction, par exemple envoyer des DFI ou DST, effectuer un échange DEX, ajouter des liquidités, etc.

Pour déverrouiller, allez sur la console, et entrez :

```
walletpassphrase REMPLACER_CECI_PAR_UNE_LONGUE_PHRASE_SECRÈTE 60
```

Cela déverrouillera votre portefeuille pendant 60 secondes. Ensuite, il se remettra automatiquement en état de verrouillage.

Vous pouvez désormais vous rendre dans votre application et effectuer toutes les transactions que vous souhaitez, en 60 secondes. Si vous vous retrouvez à recevoir le message `Add-on auth TX failed: Can't sign TX` alors que vous essayez d'effectuer une transaction, cela signifie que votre portefeuille est à nouveau verrouillé, vous devrez le déverrouiller à nouveau avec `walletpassphrase` comme ci-dessus.

## 3. Verrouillage de votre portefeuille

Si vous constatez que vous effectuez votre transaction en un temps plus court et que vous voulez vous assurer que votre portefeuille est verrouillé immédiatement sans attendre le délai d'attente, il suffit d'entrer

```
walletlock
```

Cela verrouille immédiatement votre portefeuille et empêche toute autre transaction !

## 4. Vérification de l'état de chiffrement de votre portefeuille

Pour vous assurer que votre portefeuille est réellement verrouillé et chiffré, vous pouvez entrer :

```
getwalletinfo
```

Pour un portefeuille chiffré, vous devriez voir une réponse qui inclut `"unlocked_until": 1609145224`. Lorsqu'un portefeuille est verrouillé, `unlocked_until` doit afficher `0`. Lorsqu'il est déverrouillé, il affiche un [horodatage UNIX](https://www.epochconverter.com).

Pour un portefeuille non chiffré, `unlocked_until` est absent. Il n'afficherait même pas `0`.

---

## Conseils

1. Une fois que vous êtes sûr que votre portefeuille est bien chiffré, assurez-vous de vous débarrasser de votre `wallet.dat` non chiffré que vous avez fait une sauvegarde plus tôt. Vous n'en avez plus besoin.

2. Pour changer de phrase secrète, utilisez `walletpassphrasechange "anciennephrasesecrète" "nouvellephrasesecrète"`.

3. Les étapes décrites dans ce guide seront intégrées dans les futures versions de l'application de bureau DeFi Wallet. En outre, le support du portefeuille matériel via Ledger est également en cours de réalisation.
