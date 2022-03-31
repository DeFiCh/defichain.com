---
title: Comment utiliser l'application DeFiChain
description: Un guide étape par étape pour utiliser et installer l'application DeFiChain.
---

## Télécharger l'application

Téléchargez la dernière application depuis la page [downloads](/downloads).

## Exigences minimales

| Exigences | Minimum requis |
|-|-|
| Mémoire vive | 4Go |
| OS | macOS 10.14, Windows 10, Ubuntu LTS 18 et supérieur |

## Installation sur macOS

### Étape 1 : Installation

Ouvrez l'image téléchargée **DeFi-Wallet-<version>.dmg**. Dans la fenêtre du Finder qui s'ouvre, faites glisser le DeFi Wallet situé sur la gauche, sur le raccourci du répertoire Applications sur la droite.

![](/img/guides/installing-defi-app/drag-to-install.png)

### Étape 2 : Gérer l'invite de sécurité de macOS lors de l'ouverture de l'application

Ouvrez l'application. La première fois que vous ouvrez l'application de bureau DeFi Wallet, une invite de sécurité vous sera présentée. Appuyez sur OK pour la rejeter.

![](/img/guides/installing-defi-app/macos-security-prompt.png)

\**Vous verrez cette invite de sécurité dans les premières versions non signées de l'application. Dans les versions futures signées par Apple, vous ne verrez pas d'invite de sécurité. Pour l'instant, veuillez suivre l'étape 3 pour une solution de contournement.*

### Étape 3 : Autoriser l'exécution de l'application

\**N'ouvrez l'application de cette façon que si vous êtes sûr d'avoir téléchargé l'application de bureau DeFi Wallet depuis une source officielle. L'application de bureau DeFi Wallet est actuellement disponible uniquement sur le [site officiel](/) et [DeFiChain’s GitHub](https://github.com/DeFiCh/app/releases).*

Aller à **Préférences système** et cliquer sur **Sécurité et confidentialité**.

![](/img/guides/installing-defi-app/system-preferences.png)

Cliquez ensuite sur le **Ouvrir quand même**.

![](/img/guides/installing-defi-app/open-anyway-a.png)

Cliquez sur **Ouvrir** dans la fenêtre de confirmation.

![](/img/guides/installing-defi-app/open-anyway-b.png)

L'application de bureau DeFi Wallet se lancera automatiquement lorsque l'installation sera terminée.

## Installation sur Windows

### Step 1: Installation

Double-cliquez sur le fichier téléchargé.

### Étape 2 : Invite de sécurité de Windows

Si c'est la première fois que vous installez l'application de bureau DeFi Wallet, le programme d'installation peut vous présenter une invite de sécurité comme indiqué. Cliquez sur **Plus d'infos**.

\**Microsoft Windows SmartScreen peut signaler les fichiers nouvellement téléchargés qui n'ont pas accumulé un historique suffisamment long.*

![](/img/guides/installing-defi-app/CUmfPMS.png)

### Étape 3 : Contourner l'invite de sécurité de Windows

Cliquez sur **Exécuter quand même** pour commencer l'installation.

![](/img/guides/installing-defi-app/S7SFwms.png)

L'application DeFi se lancera automatiquement lorsque l'installation sera terminée.

## Installation sur Linux à l'aide d'AppImage

Veuillez vous assurer que vous avez activé l'option **Autoriser l'exécution du fichier en tant que programme** pour le fichier à télécharger.

![](/img/guides/installing-defi-app/TU3ggCU.png)

Vous pouvez maintenant ouvrir l'application de bureau DeFi Wallet.

## Installation sur Linux avec Debian

Vous pouvez choisir d'installer l'application de bureau DeFi Wallet en tant qu'outil IUG ou en tant qu'outil de ligne de commande.

### Utilisation du Centre logiciel Ubuntu

La méthode la plus simple consiste à utiliser le Centre logiciel dans Ubuntu. Il suffit de naviguer jusqu'au dossier (généralement le dossier *Téléchargements*) contenant le fichier **.deb** téléchargé et de l'ouvrir.

### Installer les fichiers .deb en ligne de commande à l'aide de dpkg

Si vous voulez installer des paquets **deb** en utilisant la ligne de commande, vous pouvez utiliser la commande `apt` ou la commande `dpkg`.

```
sudo apt install PATH_TO_DEB_FILE
```

ou

```
sudo dpkg -i PATH_TO_DEB_FILE
```


Vous pouvez maintenant ouvrir l'application DeFi Wallet.

---

## Utilisation du portefeuille

### L'interface du portefeuille

![](/img/guides/installing-defi-app/wallets.png)

#### Barre latérale de navigation principale

- Onglet **Soldes** : Envoyez et recevez des fonds, et consultez les transactions
- Onglet **Liquidité** : Ajoutez et retirez des liquidités, et visualisez le TAEG de vos liquidités.
- Onglet **DEX** : Échange entre des wrapped BTC/ETH/USDT et DFI
- Onglet **Tokens** : Consultez les tokens DST (DeFi Standard) vérifiés par la communauté et créez les vôtres.
- Onglet **Blockchain** : Un mini explorateur de blocs intégré pour examiner la blockchain
- Onglet **Masternodes** : Voir une liste de masternodes et créer le vôtre

#### Sous-navigation dans la barre latérale

- **Console**: Exécuter les commandes CLI de DeFiChain
- **Aide**: Options d'aide
- **Paramètres**: Basculer entre le réseau Mainnet et Testnet, la langue et d'autres paramètres

### Ouverture d'un portefeuille

Passez à l'onglet **Soldes**, choisissez un portefeuille, par exemple DFI.

![](/img/guides/installing-defi-app/wallets-choose.png)

### Envoi de fonds

#### Étape 1

Dans un portefeuille, cliquez sur **Envoyer**.

![](/img/guides/installing-defi-app/wallet-send.png)

#### Étape 2

Donnez le **Montant** et, l'**Adresse de destination** à envoyer. Vous pouvez également saisir une adresse en utilisant la fonction de scanner de codes QR à côté du champ d'adresse. Appuyez sur **CONTINUER** lorsque vous êtes prêt.

![](/img/guides/installing-defi-app/wallet-send1.png)

#### Étape 3

Vérifiez le **Montant** et l'**Adresse de destination** et assurez-vous qu'ils sont corrects. Le bouton **Finaliser l'envoi** est désactivé pendant quelques secondes pour vous protéger d'un envoi accidentel.

![](/img/guides/installing-defi-app/wallet-send2.png)

Cliquez sur **Finaliser l'envoi** pour confirmer l'envoi.

![](/img/guides/installing-defi-app/wallet-send3.png)

#### Étape 4

Une fois la transaction terminée, appuyez sur **Retour au portefeuille** pour revenir au portefeuille.

![](/img/guides/installing-defi-app/wallet-send4.png)

Vous devriez voir votre dernière transaction dans la liste des **Transactions** de votre portefeuille.

---

### Recevoir des fonds

#### Étape 1

Dans un portefeuille sélectionné, cliquez sur **Recevoir**.

![](/img/guides/installing-defi-app/wallet-receive.png)

Cliquez ensuite sur **Nouvelle adresse** pour créer une nouvelle adresse de réception.

![](/img/guides/installing-defi-app/wallet-receive1.png)

#### Étape 2

Remplissez les informations et donnez à votre adresse une libellé significative. Cliquez ensuite sur **Créer**.

![](/img/guides/installing-defi-app/wallet-receive2.png)

#### Étape 3

La nouvelle adresse de réception que vous venez de créer apparaîtra dans votre liste d'adresses de réception.

![](/img/guides/installing-defi-app/wallet-receive3.png)

Cliquez sur le bouton **Code QR** pour faire apparaître un code QR de l'adresse.

![](/img/guides/installing-defi-app/wallet-receive4.png)

Cliquez sur le bouton **copier l'adresse** pour copier l'adresse dans le presse-papiers de votre système.

![](/img/guides/installing-defi-app/wallet-receive5.png)
