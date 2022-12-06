---
title: Opérer un masternode
description: Comment faire fonctionner un masternode DeFiChain sur Linux/macOS
---

## Introduction

L'installation d'un masternode sur DeFiChain vous permet de participer au protocole de consensus et de recevoir des récompenses de staking. Une chose à noter est que pour mettre en place un masternode, vous devez avoir un minimum de 20 000 DFI.

_REMARQUE : Ce guide pratique nécessite une certaine familiarité avec le terminal Linux_

## Rôles des masternodes

Il existe deux rôles distincts : "propriétaire du masternode" et "opérateur du masternode". Le propriétaire détient la garantie et l'activité principale (minter de nouvelles coins, voter pour les ancrages) est réalisée par l'opérateur. En général, un nœud peut jouer les deux rôles.

## Pour les propriétaires qui opèrent leurs propres masternodes

Dans ce scénario, l'adresse de l'opérateur sera égale à l'adresse (garantie) du propriétaire .

### Étape 1 - Téléchargez et extrayez le logiciel de nœud.

La première étape consiste à télécharger les binaires. Voici les liens vers les binaires pour Windows, Linux et macOS (Veuillez télécharger la dernière version) :

[Téléchargements](/downloads/)

Ensuite, nous pouvons extraire le fichier tar en exécutant (remplacez 1.x.x par votre numéro de version) :

```
tar -xvzf defichain-1.x.x-x86_64-pc-linux-gnu.tar.gz
```

### Étape 2 - Copier les binaires dans le répertoire de l'utilisateur

Nous aimerions que le logiciel du nœud soit stocké dans un répertoire cohérent et facilement accessible, alors créons-en un dans notre dossier personnel. Ceci peut être fait en exécutant :

```
mkdir ~/.defi
```

Maintenant, copiez les binaires en exécutant :

```
cp ./defichain-1.x.x/bin/* ~/.defi
```

### Étape 3 - Configuration de crontab pour que notre nœud fonctionne en arrière-plan

Maintenant, nous pouvons exécuter directement notre nœud en exécutant `~/.defi/defid` mais ce n'est pas très pratique, car nous devrions garder la session de terminal ouverte en permanence et exécuter cette commande à chaque fois que nous redémarrons notre ordinateur ou notre session SSH.

A la place, nous allons utiliser crontab pour maintenir le processus en marche. Exécutez `crontab -e`, et sélectionnez un éditeur (je recommande Nano si vous ne savez pas lequel choisir), puis collez :

```
* * * * * pidof defid || ~/.defi/defid
```

dans le fichier et appuyez sur `Ctrl-X` puis sur entrée pour enregistrer le fichier.

### Étape 4 - Établissement de l'adresse du propriétaire avec des fonds suffisants

Afin d'exécuter un masternode, vous devez posséder au moins 20 000 DFI. Configurons une adresse avec suffisamment de fonds pour l'utiliser en tant que propriétaire. Les masternodes ne prennent actuellement en charge que les adresses anciennes, alors créez une adresse masternode en utilisant :

```
~/.defi/defi-cli getnewaddress "<label>" legacy
```

où "label" est le label que vous souhaitez donner à l'adresse.

Maintenant, afin de transférer les fonds à cette adresse, vous pouvez utiliser :

```
~/.defi/defi-cli sendtoaddress address
```

où "address" est la nouvelle adresse du propriétaire que vous avez créée.

### Étape 5 - Inscrivez-vous en tant que masternode sur le réseau

Afin de participer à l'algorithme de staking, vous devez diffuser au réseau que vous avez l'intention de participer. Ceci peut être fait en exécutant une commande à l'aide du CLI de Defi, la commande est :

```
~/.defi/defi-cli createmasternode address
```

où `address` pour l'opérateur et l'adresse de garantie doit être la nouvelle adresse legacy que vous avez créée. Veuillez noter que l'exécution de cette commande coûte 10 DFI.

### Étape 6 - Configurer le masternode et redémarrer

Nous avons presque fini. Pour que le masternode fonctionne correctement, nous devons faire quelques changements de configuration. Le fichier de configuration se trouvera dans `~/.defi/defi.conf`. Assurons-nous que le fichier de configuration existe en exécutant `touch ~/.defi/defi.conf`. Maintenant ouvrez ce fichier de configuration dans l'éditeur de votre choix et ajoutez ce qui suit :

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS
```

Parce que nous avons décidé de faire fonctionner le propriétaire et l'opérateur sur la même adresse, il suffit de substituer la même adresse legacy que vous avez créée pour `OPERATOR_ADDRESS`. Il n'est pas nécessaire de spécifier l'adresse du propriétaire dans ce cas.

Maintenant, l'étape finale consiste à redémarrer le nœud. Puisque nous avons crontab en cours d'exécution, il nous suffit de tuer le processus et crontab le relancera pour nous après une minute. Nous pouvons faire cette étape finale en exécutant `killall defi-init`. Une minute plus tard, notre masternode devrait fonctionner et minter des coins.

Nous pouvons confirmer que le masternode fonctionne en exécutant :

```
~/.defi/defi-cli listmasternodes
```

Recherchez l'adresse de votre masternode dans la liste des masternodes pour confirmer que vous avez bien tout configuré.

Vous pouvez exécuter la commande `getmasternodeblocks OPERATOR_ADDRESS` pour voir combien de blocs votre masternode a mintés jusqu'à présent.

## Pour les propriétaires qui souhaitent déléguer les tâches du masternode à un autre nœud

Dans ce scénario, l'adresse de l'opérateur sera différente de l'adresse (garantie) du propriétaire.

### Étape 1-4 - Idem que ci-dessus

Effectuez les étapes 1 à 4 de la même manière que dans la section ci-dessus pour l'exploitation de vos propres masternodes. Si vous configurez également le nœud opérateur vous-même, répétez les étapes 1 à 4 pour le nœud opérateur sur une autre machine.

### Étape 5 - Inscrivez-vous en tant que masternode sur le réseau

Afin de participer à l'algorithme de staking, vous devez diffuser au réseau que vous avez l'intention de participer. Ceci peut être fait en exécutant une commande à l'aide du CLI de Defi, la commande est :

```
~/.defi/defi-cli createmasternode OWNER_ADDRESS OPERATOR_ADDRESS
```

où `OWNER_ADDRESS` est l'adresse du nœud de garantie/propriétaire et `OPERATOR_ADDRESS` est l'adresse de l'opérateur. Veuillez noter que l'exécution de cette commande coûte 10 DFI.

Il n'y a rien à faire après cela, vous pouvez simplement vous assurer que votre opérateur de masternode exécute correctement le masternode de son côté en lui transmettant l'adresse de l'opérateur.

Nous pouvons confirmer que le masternode fonctionne en exécutant :

```
~/.defi/defi-cli listmasternodes
```

Recherchez l'adresse de votre masternode dans la liste des masternodes pour confirmer que vous avez bien tout configuré.

Vous pouvez exécuter la commande `getmasternodeblocks OPERATOR_ADDRESS` pour voir combien de blocs votre masternode a mintés jusqu'à présent.

## Création via l'application de bureau DeFi Wallet

Il est facile de configurer votre masternode via l'application de bureau DeFi Wallet, il suffit de naviguer vers l'onglet Masternodes et de cliquer sur "Créer +" dans le coin supérieur droit de l'écran. Le processus est automatisé et sans faille.

![Masternode1](/img/guides/run-a-masternode/masternode.png)

## Exécution de plusieurs masternodes sur la même machine

Si vous souhaitez faire tourner plusieurs masternodes sur la même machine, il vous suffit de spécifier plusieurs entrées `masternode_operator` dans votre `defi.conf` :

```
gen=1
spv=1
masternode_operator=OPERATOR_ADDRESS_1
masternode_operator=OPERATOR_ADDRESS_2
masternode_operator=OPERATOR_ADDRESS_3
```

Lors de la prochaine exécution, le nœud commencera à minter pour tous les masternodes spécifiés. Il n'y a pas de limite stricte au nombre de masternodes qu'une seule machine peut exécuter.

## Démission de masternodes

Si vous décidez de démissionner de votre masternode, vous pouvez exécuter

```
~/.defi/defi-cli resignmasternode
```

## Statuts du masternode

Envoyer une transaction `createmasternode` (ou 'resignmasternode') ne signifie pas qu'elle agit immédiatement après avoir été soumise à la blockchain. Il y a des délais spéciaux pour chaque statut.

Les masternodes peuvent exister dans ces statuts :

```
        PRE_ENABLED,
        ENABLED,
        PRE_RESIGNED,
        RESIGNED,
        PRE_BANNED,
        BANNED
```

- `PRE_ENABLED` - le masternode a été créé, mais attend un nombre suffisant de blocs après la création pour être activé
- `ENABLED` - le masternode est en état de fonctionnement complet, peut minter des blocs et signer des ancrages
- `PRE_RESIGNED` - le masternode est toujours opérationnel, mais a reçu une transaction 'resign' et attendra un délai spécial pour être résigné
- `RESIGNED` - masternode résigné, garantie déverrouillée et disponible pour être réclamée
- `PRE_BANNED` - le masternode a été pris comme un 'criminel' (il a signé deux blocs de forks parallèles sur des hauteurs proches et nous avons eu des tx de preuve spéciale sur la chaîne) mais il est toujours opérationnel (en attente, comme dans le cas de PRE_RESIGNED)
- `BANNED` - masternode désactivé, garantie déverrouillée et pouvant être récupérée (identique à RESIGNED, mais forcé par la désactivation)
