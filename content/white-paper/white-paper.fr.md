---
title: Livre blanc
subtitle: Livre blanc
description: DeFiChain livre blanc (traduit de l'original en anglais)
---

**Synthèse**: La Fondation DeFiChain développe DeFiChain, une blockchain spécifiquement dédiée aux applications financières décentralisées. En se concentrant sur la fonctionnalité de la blockchain et en la dédiant spécifiquement à la finance décentralisée, DeFiChain fournit un débit de transaction élevé et inégalé, une réduction du risque d'erreurs et un développement spécifique de fonctionnalités intelligentes pour l'accomplissement de services financiers sur la blockchain.

**Ce document n'est pas prospectif**

Le présent document ne constitue ni n'implique de prospection d'aucune sorte. Aucun contenu de ce document ne doit être interprété comme une sollicitation d'investissement. Par conséquent, ce livre blanc ne se rapporte en aucune façon à une offre de titres dans quelque juridiction du monde que ce soit. Ce livre blanc constitue plutôt une description technique de la fonctionnalité des produits, du développement et de la distribution de DeFiChain.

**Ce document n'est pas une spécification technique finale**

Ce document ne constitue pas une spécification technique finale de DeFiChain. Les informations présentées dans ce livre blanc, qu'elles soient techniques ou autres, ont pour but de donner une idée générale de DeFiChain, de sa conception et de ses cas d'utilisation et peuvent être modifiées avec ou sans préavis. Pour connaître les dernières spécifications techniques, consultez les mises à jour et les documentations sur le site officiel. [https://defichain.com](https://defichain.com).

## Résumé

Le secteur des crypto-monnaies repose sur un postulat simple : les gens devraient avoir le contrôle total de leurs finances. Bien que cela semble être une déclaration simple et évidente, les systèmes actuels sont loin de fournir des services financiers qui sont vraiment sous le contrôle des personnes qui les utilisent. La mission de DeFiChain est de donner aux gens (et dans le futur, aux machines et aux appareils) un accès transparent aux services financiers décentralisés.

À cette fin, nous introduisons DeFiChain, une blockchain dédiée spécifiquement pour la finance décentralisée (DeFi) [https://defichain.com](https://defichain.com).

En dédiant la fonctionnalité d'une blockchain spécifiquement à la finance décentralisée, DeFiChain offre un débit de transaction élevé, un risque d'erreur réduit et un développement intelligent de fonctionnalités spécifiquement pour la réalisation de l'intention originale de Satoshi : créer une forme alternative fiable de services financiers construite sur le Bitcoin.

Le bitcoin, tel qu'il est décrit dans le livre blanc original de Satoshi, est conçu comme une forme d'argent numérique, un moyen de stocker et d'échanger de la valeur. L'évolution vers Ethereum et les contrats intelligents a permis de créer un grand nombre de nouvelles fonctionnalités à partir d'une blockchain, mais ce développement a eu un coût. Le concept d'un système d'exploitation global pour tout a créé un système qui nécessite une base de code complexe pour les contrats intelligents, un débit lent, et des difficultés autour de la gouvernance du système.

DeFiChain aborde la finance décentralisée comme un segment spécifique et critique de la communauté blockchain. DeFiChain est une blockchain dédiée qui est optimisée spécifiquement pour les applications DeFi. DeFiChain est intentionnellement non-Turing-complète et ne supporte aucune fonction autres que celles nécessaires pour la finance décentralisée, résultant en une blockchain qui fournit un débit plus élevé et une meilleure fonctionnalité spécifiquement pour les dApps liées à la finance. L'avantage d'un ensemble de commandes non-Turing-complètes est qu'il y a beaucoup moins de risques d'erreurs de codage du type de celles qui ont affecté les smart contracts d'Ethereum, comme le hack DAO ou le blocage des fonds. S'il est important que certains langages de smart contracts soient Turing-complets, dans le domaine de la finance, il convient de restreindre les capacités du langage en faveur d'un système plus sûr dont les vecteurs d'attaque sont considérablement réduits.

### Le problème

Aujourd'hui, presque tous les services financiers sont gérés par des banques. Les investissements, par exemple, sont, par définition, l'utilisation du capital pour gagner plus de capital. Les investisseurs font appel à une banque pour placer leur argent dans des actifs générant des intérêts ou des dividendes afin d'accroître leur patrimoine. Les problèmes liés aux services financiers sont de plus en plus évidents pour tout le monde : coûts des intermédiaires, lenteur des transactions, retards pour les transactions transfrontalières et inaccessibilité pour de nombreux secteurs de la population. Une myriade de solutions fintech ont été apportées pour améliorer le système, mais fondamentalement, le système bancaire sous-jacent est toujours sous contrôle, de sorte que la fintech n'a apporté que des améliorations limitées.

Les crypto-monnaies et la finance décentralisée (DeFi) offrent un moyen de commencer avec un nouveau système, en contournant les difficultés rencontrées pour changer le secteur de la finance. Alors que les crypto-monnaies ont attiré des milliards d'investissements, les services financiers décentralisés sont à la traîne. Lorsqu'il s'agit d'investir dans les crypto-monnaies, les investisseurs en crypto peuvent acheter et vendre, mais c'est tout. La crypto-monnaie elle-même ne peut pas être investie de la même manière que la monnaie fiduciaire. Les premières tentatives de création de prêts entre pairs et de tokenisation des actifs se sont jusqu'à présent révélées partielles et peu fiables, de sorte que les investisseurs ont des options extrêmement limitées lorsqu'il s'agit d'investir leurs crypto-actifs. Le potentiel est énorme pour fournir des services financiers en crypto, de la même manière qu'ils sont offerts en monnaie fiduciaire.

### La solution

DeFiChain est conçue pour les investisseurs sur le marché des crypto-monnaies qui cherchent à faire travailler leur crypto-monnaie comme toute autre forme de capital, de sorte qu'ils puissent assurer un retour sur investissement sur n'importe quel marché. DeFiChain est une blockchain non-Turing-complète dédiée, conçue spécifiquement pour la finance décentralisée (DeFi). La DeFi fournit une fonctionnalité complète pour ce segment spécifique de la communauté DLT, en sacrifiant d'autres types de fonctionnalité pour la simplicité, le débit rapide et la sécurité.

L'ensemble des fonctions comprend entre autres :

- Le prêt décentralisé
- Encapsulation (wrapping) décentralisé de token (wrapped BTC, wrapped ETH...)
- Oracles de prix décentralisés
- Le trading décentralisé
- Dettes et créances transférables
- Dettes non collatéralisées décentralisées
- Tokenisation d'actifs
- Distribution de dividendes

### Echéancier

![Roadmap](/img/white-paper/roadmap.png)

---

## Contexte/marché

### Les promesses et les défis de la DeFi

La finance décentralisée promet de fournir une variété d'instruments financiers sans avoir besoin d'intermédiaires pour garantir la fiabilité des services. Selon l'OCDE, les services financiers représentent généralement 20 à 30% du revenu total du marché des services et [environ 20% du produit intérieur brut total](https://www.investopedia.com/terms/g/gdp.asp) dans les [économies développées](https://www.investopedia.com/terms/d/developed-economy.asp)[^1]. Il s'agit d'une énorme industrie qui se consacre à une seule chose : s'assurer que les transactions financières sont fiables. Avec l'avènement de la blockchain, les systèmes sans confiance et les smart contracts peuvent être utilisés pour remplacer une grande partie des fonctionnalités de ce secteur, augmentant considérablement le retour sur investissement pour l'investisseur individuel.

Aujourd'hui, les services financiers fournissent un service important, mais à un coût très élevé, et malgré de nombreux développements au sein de la fintech, les problèmes sous-jacents suivants persistent :

- Des coûts de transaction élevés. En raison des exigences réglementaires, des systèmes existants présentant des problèmes d'interopérabilité complexes et du contrôle exercé par les grandes institutions, les frais de transaction sont élevés pour l'utilisateur moyen des services bancaires et financiers. Les services qui nécessitent un courtier sont encore plus chers, car des agents et d'autres intermédiaires sont impliqués.
- Lenteur des transactions, en particulier pour les transactions internationales. Bien qu'en théorie, les ordinateurs ne devraient prendre que quelques minutes pour effectuer une transaction, le transfert d'argent d'une institution à une autre peut prendre des heures dans un même pays, et des jours entre les pays.
- Manque de transparence et avantages injustes pour les grands acteurs. Les instruments financiers sont complexes et la plupart des gens n'ont pas accès aux informations qui leur permettraient de prendre des décisions optimales. Le manque de transparence est l'un des principaux facteurs qui ont conduit à la crise financière de 2008 et, à court terme, il désavantage toujours les petits investisseurs (le citoyen moyen) par rapport aux investisseurs institutionnels.
- Inaccessibilité et/ou coût plus élevé pour les personnes à faibles revenus. Les services financiers ne sont tout simplement pas disponibles dans de nombreuses régions et, lorsqu'ils le sont, les personnes à faibles revenus doivent payer des frais encore plus élevés (en pourcentage) que la moyenne.
- Malgré la législation visant à réduire le blanchiment d'argent et les crimes connexes, il n'existe pratiquement aucune preuve que le système actuel ou la LBC réduisent effectivement le blanchiment d'argent.

[^1]: https://www.investopedia.com/ask/answers/030515/what-percentage-global-economy-comprised-financial-services-sector.asp

La Fintech a tenté de résoudre ces problèmes, avec un certain succès. Les solutions Fintech telles que les services en ligne de virement à l'international, les applications d'épargne et d'investissement, et l'argent sur mobile pour les marchés mal desservis ont commencé à améliorer la situation. Toutefois, le changement est progressif et repose toujours sur un système qui nécessite fondamentalement l'intervention d'agents de confiance. S'il est possible de réduire certains coûts, la fintech ne peut fondamentalement pas résoudre les problèmes sous-jacents de manque de transparence, car elle utilise les mêmes instruments financiers et passe par les mêmes grandes institutions que la finance traditionnelle.

![2019: DeFi](/img/white-paper/2019-defi.png)

C'est pourquoi de nombreux investisseurs ont commencé à transférer une partie de leurs investissements dans les crypto-monnaies. Par définition, les crypto-monnaies offrent une transparence totale que les systèmes traditionnels ne peuvent tout simplement pas offrir. En outre, la quantité d'administration et de bureaucratie requise est minimale. La plupart des activités qui étaient effectuées par des agents peuvent être inscrites dans le code informatique des systèmes financiers décentralisés. Bien sûr, la création et la maintenance du code, ainsi que la maintenance des réseaux, entraînent encore des frais généraux, mais la bureaucratie est minime, ce qui élimine une grande partie du coût des transactions sur ces systèmes.

Malgré les promesses de la finance décentralisée, la technologie en est encore à ses débuts et il existe de nombreuses possibilités de créer un environnement financier décentralisé plus riche et plus robuste. À ce jour, les investisseurs en crypto-monnaies ont des options d'investissement extrêmement limitées. Les promesses de plateformes de prêts entre particuliers, de tokenisation des actifs et d'autres types de blockchains n'ont pas tenu leurs promesses, ont été piratées ou ont donné une version réduite de la promesse initiale.

Aujourd'hui, presque universellement, les investisseurs en crypto-monnaies n'ont qu'un seul moyen de gagner de l'argent sur leur capital : la hausse de l'actif en crypto-monnaies. Si, à court terme, cela peut constituer un bon investissement, ce n'est pas ainsi que la monnaie est censée fonctionner. L'investissement de capitaux doit fournir un retour sur investissement, et les crypto-monnaies sont conçues pour être comme toute autre forme de monnaie. Les investisseurs d'aujourd'hui veulent avoir la possibilité de prêter, d'investir et de recevoir des retours sur leurs investissements en crypto-monnaies. Des plateformes DeFi bien conçues devraient permettre le développement d'une variété d'instruments financiers sûrs et sécurisés pour l'investissement en crypto-monnaies.

![Sois ta propre banque](/img/white-paper/be-your-own-bank.png)

### Etat des lieux de la DeFi

La finance décentralisée (DeFi) est peuplée de blockchains à usage général, dont la plupart fournissent des ensembles de commandes Turing-complètes pour le développement de contrats intelligents (smart contract) sur la chaîne. Bien qu'elle soit appropriée pour de nombreux langages de programmation, cette recherche dogmatique de langages de contrats intelligents Turing-complets a entraîné divers problèmes en matière d'évolutivité, de sécurité et de robustesse des blockchains.

- Le nombre considérable de dApps sur des réseaux tels qu'Ethereum, EOS et TRON a un impact potentiel (ou avéré) sur les autres dApps du réseau. L'exemple le plus évident est celui de CryptoKitties, qui a pratiquement paralysé le réseau Ethereum. Bien que certains des réseaux à débit plus rapide affirment que cela ne peut pas se produire, il faudra un certain temps avant qu'un autre réseau atteigne la masse critique d'applications sur Ethereum pour que nous puissions prouver si c'est le cas ou non.
- Pour les dApps sérieuses de type financier, il est important de savoir que le réseau est maintenu et géré de manière responsable et sécurisée. Le fait qu'une blockchain soit submergée par des jeux, des paris et d'autres types d'applications moins "critiques" finira par influencer le développement et la direction des blockchains. Avec des modèles de gouvernance qui attribuent le pouvoir aux masternodes, aux groupes de développement et aux détenteurs de jetons, l'équipe de développement sera finalement influencée par les plus grands acteurs. Les applications financières décentralisées ne peuvent pas se permettre les conséquences potentielles du partage d'une blockchain avec quiconque choisit d'utiliser ce système d'exploitation.
- L'utilisation de commandes Turing-complètes oblige les programmeurs à créer des programmes complexes pour développer tout type d'application. Par exemple, pour créer un contrat de prêt de pair à pair sur MakerDAO, un programmeur a besoin d'environ 2000 lignes de code. Tout bug dans ce code peut entraîner la perte des fonds, ou toute autre conséquence. Le maintien d'un code aussi important signifie intrinsèquement une plus grande probabilité d'erreurs et un angle d'attaque plus important, même pour les applications simples.

Les limites des blockchains à usage général pour les applications DeFi ont ouvert une opportunité pour servir ce marché. Alors que la dynamique des crypto-monnaies a continué de croître, la plupart des applications actuelles sont encore sur Ethereum. Les préoccupations concernant le réseau ont déjà conduit certains des principaux projets à envisager un portage ou à travailler avec des blockchains alternatives ou supplémentaires.

### Les problèmes actuels de la DeFi

- Les dApps financières ont besoin de fiabilité et ne veulent pas être associées à des blockchains qui hébergent des apps telles que des paris, des divertissements ou d'autres apps qui peuvent ternir la réputation de la blockchain à tout moment.
- L'augmentation soudaine du volume d'une dApp sur une blockchain peut potentiellement avoir un impact sur toutes les autres dApps de cette blockchain, que ce soit en termes de débit, de prix des transactions ou autres impacts, comme on l'a vu avec CryptoKitties sur Ethereum.
- Les blockchains généralistes nécessitent une grande quantité de codage pour fournir des services financiers, ce qui augmente le risque de piratage ou de bogues dans le code. Les fonctionnalités qui sont des exigences de base pour les services financiers, comme le multisig, sont souvent difficiles à mettre en œuvre ou absentes des blockchains généralistes.
- La maintenance d'une blockchain Turing-complète signifie que les ressources ne sont pas concentrées sur les domaines appréciés par les applications DeFi.
- Les modèles de gouvernance de la plupart des blockchains actuelles sont immatures et montrent des signes de politisation, de centralisation et d'incertitude. Sans structure de gouvernance formelle, l'avenir de ces blockchains est incertain. Les récentes discussions sur les mises à niveau et les forks à la fois dans Ethereum et Bitcoin ont révélé l'immaturité de ces systèmes, et même le leader de la gouvernance, Aragon, a montré la vulnérabilité de son système de gouvernance lors du vote de l'été 2019, où un grand détenteur de jetons (une "baleine") a changé le résultat de plusieurs votes de propositions à la dernière minute. De telles vulnérabilités sont inacceptables sur les blockchains traitant de la finance.
- Des normes réglementaires et des organismes de réglementation qui répondent de manière appropriée aux besoins des monnaies et des instruments financiers transfrontaliers par nature. La réglementation basée sur les juridictions et sur les technologies existantes ne répond pas aux besoins du secteur de la DeFi. Il est clair qu'un nouveau cadre juridique et réglementaire est nécessaire pour protéger les droits des personnes utilisant ces systèmes.
- L'industrie de la blockchain elle-même n'a pas fait preuve de la maturité nécessaire pour mettre en place ses propres organismes de normalisation qui fourniront les meilleures pratiques ou une autorégulation démontrant sa fiabilité pour les applications financières décentralisées. À ce jour, les tentatives de création d'interopérabilité ou d'autorégulation ont été immatures et n'ont pas abouti à un leadership ou à des normes qui pourraient être adoptées par des organismes internationaux ou des régulateurs sérieux. L'absence d'autorégulation rend le secteur encore plus vulnérable à une réglementation extérieure, ce qui rend l'environnement risqué pour les investisseurs sérieux.

### Conséquences sur le secteur de la DeFi

- Les portefeuilles multi-sig sont ce que l'industrie a de mieux à offrir en matière de gestion conjointe des fonds, et les solutions pour le multi-sig sont, dans une certaine mesure, des maladresses. Le multi-sig a tendance à être spécifique à un fournisseur et n'est pas flexible aux différents scénarios. Par exemple, dans la finance traditionnelle, les comptes multi-signatures peuvent attribuer aux signataires différents niveaux d'autorité, ou exiger différentes signatures pour différents types et niveaux de transaction. Les différentes chaînes adoptent des approches différentes pour ajouter des capacités multisig à leurs blockchains existantes.
  - La BIP 11 : M-of-N Standard Transactions est une proposition d'amélioration du bitcoin (BIP) conçue pour ajouter un support multisig à la blockchain Bitcoin.
  - Ethereum fournit un ensemble de commandes Turing-complètes pour le développement de multisig sur la chaîne, ce qui conduit à de multiples entités fournissant des contrats intelligents multisig. Des bogues tels que ceux du multisig Parity (abordés ci-dessous) ont entraîné des pertes de fonds considérables.
- En raison de la complexité du code requis pour le multisig, en 2017, plus de 150 000 ETH ont été perdus à cause d'un piratage du portefeuille multisig de Parity, dû à une erreur dans le code[^2]. L'article référencé note les moyens par lesquels ce bug de code aurait pu être évité, mais il souligne le fait que ces complexités dans le codage provoquent de nombreux vecteurs d'attaque différents. Un marché entier s'est développé autour de l'audit des contrats intelligents, car c'est un domaine très vulnérable.
- Dans le plus grand piratage (ou bug ? !) de l'industrie, le DAO a été vidé de 3,6 millions de ETH en raison d'une erreur de codage dans le contrat intelligent détenant tous les fonds du DAO.

L'une des nombreuses conséquences est que le haut-niveau de risque est pris en compte dans les contrats sous-jacents, ce qui entraîne des surcoûts importants pour les utilisateurs, comme on peut le voir en comparant le taux des exemples DeFi et non DeFi. (Par exemple, 8 % avec DAI décentralisé contre 1,75 % avec USDC centralisé (daté de début octobre 2019) : https://deficompare.com/) Les deux tokens représentent 1 USD mais la version décentralisée est 6,25 % plus chère en raison du risque intégré dans le contrat Ethereum.

Les points décrits ci-dessus sont tout simplement inacceptables pour tout type de transaction financière ou tout profil d'investisseur. Pour cette raison, il est important de construire des services dédiés qui empêcheront de telles violations, réduiront les risques et donc les coûts. Dans le monde de la blockchain, le fait d'avoir des règles de programmation adéquates et de réduire les vecteurs d'attaque permet d'éviter ce type d'attaque.

[^2]: [https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7)

---

## Comparaison des alternatives DeFi existantes

### Bitcoin : pourquoi pas ?

Étant donné notre optimisme à l'égard de Bitcoin, la première question que l'on peut se poser est de savoir pourquoi ne pas développer DeFiChain en utilisant la blockchain Bitcoin. Bien que Bitcoin ne permette que des contrats intelligents basique, certains projets ont commencé à développer des solutions de contournement. Cependant, les coûts de transaction sont restrictifs sur la chaîne Bitcoin, et nous ne pensons pas qu'elle sera adaptée à la vitesse requise pour les transactions financières. La chaîne Bitcoin fonctionne actuellement comme prévu en tant que réserve de valeur. À notre avis, s'en tenir à cet objectif unique est la meilleure utilisation de la chaîne et cela a été prouvé au cours de la dernière décennie. L'ajout de services financiers dans la chaîne principale ajoute une complexité inutile et peut entraîner des effets secondaires indésirables à la fois pour la DeFi et pour Bitcoin. De plus, nous ne pensons pas que la gouvernance de Bitcoin soit prête à gérer cette situation, et à un moment donné, si les exigences de DeFiChain différaient de celles des mineurs ou des développeurs de la chaîne Bitcoin, nous serions soumis à leurs décisions.

### Solutions Turing-complètes : Ethereum, EOS, Tron... {#turing-complete-solutions}

À ce jour, un certain nombre d'applications DeFi ont été construites sur Ethereum, Tron, EOS et de nombreuses autres chaînes Turing-complètes. Comme Ethereum a été la plus largement adoptée, elle a permis de faire apparaître le plus rapidement les problèmes liés à l'utilisation d'une blockchain Turing-complète pour les applications DeFi. Le piratage de DAO a été l'une des premières et plus dramatiques expositions de la vulnérabilité de l'utilisation d'un langage aussi complexe. Quiconque émet un jeton sur le réseau sait à quel point c'est difficile. Le simple fait de créer et d'émettre un jeton ERC20 peut facilement coûter plus de 100 000 USD, si l'on tient compte du coût de l'audit des contrats intelligents devenu nécessaire pour les solutions innovantes. Le simple fait qu'il existe un secteur entier construit autour des "audits de contrats intelligents" devrait suffire à illustrer le problème. Malgré le fait que ERC20 soit le standard du marché, il est toujours facile à pirater, au point qu'il est impossible d'émettre ne serait-ce qu'un simple jeton sans faire appel à un auditeur professionnel très coûteux, et à un programmeur.

Une étude de 2018 a réussi à analyser un million de contrats intelligents et a trouvé plus de 34 000 contrats intelligents piratables[^3]. Il est impensable que 3,4 % des transactions financières soient vulnérables. Si, pour l'instant, ce problème semble être principalement centré sur Ethereum, nous pensons que la plupart des autres chaînes Turing-complètes connaîtront les mêmes problèmes une fois que davantage de cas d'utilisation auront été adoptés sur leurs bases.

Le deuxième problème réside principalement au sein d'Ethereum, à savoir que l'utilisation du réseau est déjà proche de sa capacité maximale. Il ne semble tout simplement pas possible d'utiliser le réseau pour toutes les applications financières décentralisées. La capitalisation boursière d'Ethereum représente un dixième de celle de Bitcoin. Si le système est déjà proche de sa capacité nominale, il est difficile de voir comment il peut gérer la capacité de devenir un véritable réseau DeFi pour le reste de l'écosystème, ce que Vitalik Buterin a reconnu dans une interview : https://beincrypto.com/ethereum-founders-admit-never-designed-scalability/.

[^3]: https://arxiv.org/pdf/1802.06038.pdf

![Sois ta propre banque](/img/white-paper/graph.png)

---

## La solution DeFiChain

### Rester dans l'écosystème Bitcoin

Le marché des crypto-monnaies dans son ensemble est difficile à prévoir. La plupart des tokens sont devenues sans valeur, et il reste à voir comment le système se maintiendra après l'épuisement de l'argent de plusieurs des principales ICO.

Malgré cela, nos perspectives sur le bitcoin en particulier sont extrêmement optimistes. Au cours de l'année dernière, malgré la volatilité des marchés, y compris l'instabilité des marchés financiers traditionnels, le bitcoin a conservé sa valeur, démontré son imperméabilité aux attaques et aux pirates, et gagné le respect des acteurs financiers traditionnels.

Le bitcoin est de plus en plus considéré comme une réserve de valeur, et il est perçu comme la norme par rapport à laquelle les autres crypto-monnaies sont mesurées. Bien que les portefeuilles des particuliers varient considérablement, le bitcoin reste la monnaie standard que presque tous les investisseurs en crypto-monnaies détiennent comme une partie importante de leurs avoirs. La formidable communauté et l'écosystème qui entourent le bitcoin sont de bon augure pour sa viabilité à long terme en tant que réserve de valeur.

Pour cette raison, la création de services financiers décentralisés autour de Bitcoin représente une opportunité formidable qui n'a pas encore été exploitée, en partie à cause de la difficulté de créer des contrats intelligents qui fonctionnent avec le réseau Bitcoin, et en partie à cause de l"éclatement de la communauté de développement vers de nombreux projets secondaires. Nous pensons que cette tendance de la communauté de développement à se jeter sur les développements les plus récents fait oublier l'essentiel : Bitcoin est là pour rester.
Ainsi, nous pensons que la construction d'une blockchain DeFiChain au-dessus de Bitcoin apporterait le meilleur des deux mondes : la stabilité et l'immutabilité de Bitcoin et l'évolutivité et l'utilitié de la chaine DeFi.

### Construire sur le bitcoin

Un des défis majeurs des nouvelles blockchains est de créer une immutabilité robuste disponible après qu'une masse critique d'utilisateurs et de blocs sécurise la chaîne. Afin de fournir une sécurité immédiate et une immutabilité de la blockchain, DeFiChain s'ancrera à la blockchain bitcoin. Sur une fréquence de l'ordre de quelques minutes, DeFiChain sauvegarde son arbre de Merkle le plus récent sur la blockchain Bitcoin, de façon similaire à la façon dont Rootstock (contrats intelligents Turing-complets sécurisés par Bitcoin https://www.rsk.co/) prévoit de se connecter à Bitcoin. De cette façon, la chaîne la plus récente est toujours entièrement sécurisée et immuable, et peut être vérifiée par rapport à l'enregistrement le plus récent ancré à Bitcoin. Au fil du temps, DeFiChain espacera les ancrages à des intervalles plus grands. Ce mécanisme d'ancrage assure des enregistrements prouvés immutables dès le premier jour et protège contre les attaques, les pirates et les vulnérabilités qui peuvent causer des problèmes dans les chaînes émergentes.

En parallèle, DeFiChain garde son propre mécanisme de consensus et son propre ensemble de fonctions, permettant toutes les caractéristiques que Bitcoin n'a pas intrinsèquement. Ceci est réalisé par DeFiChain qui est une blockchain non-Turing-complète dédiée, conçue spécifiquement pour le secteur de la finance décentralisée (DeFi), construite au-dessus de Bitcoin. DeFiChain fournit une fonctionnalité complète pour ce segment spécifique de la communauté DLT, en abandonnant d'autres fonctionnalité pour assurer la simplicité, le débit rapide et la sécurité.
DeFiChain utilise un mécanisme de preuve d'enjeu complètement décentralisé permettant :

- un consensus global, évolutif et économe en énergie ;
- des transactions rapides et une haute sécurité ;
- la capacité de créer une variété d'applications DeFi basées sur une chaîne, rapidement et avec un angle d'attaque très restreint ;
- le support de plusieurs tokens sur une seule chaîne grâce à la technologie des wrapped tokens décentralisés ;
- gouvernance décentralisée ;
- indépendance vis-à-vis des autres systèmes financiers et instruments financiers ;
- des investissements entièrement liquides, sans taille minimale d'investissement, ni période minimale de blocage.

Contrairement à Ethereum ou bien à certaines blockchains Turing-complètes, DeFiChain n'est pas une blockchain à usage général, et les commandes en-dehors de l'ensemble des fonctions de base ne sont pas autorisées. Limiter à dessein les commandes autorisées fournit un angle d'attaque considérablement réduit pour les contrats intelligents, éliminant les failles évidentes qui sont rendues possibles lorsque les programmeurs doivent concevoir un codage complexe pour ces fonctions. Les détails de celles-ci seront décrits dans la section suivante.

### Avantages de DeFiChain : résumé

- Développement d'une variété d'opérations et de vecteurs financiers pour l'économie des crypto-monnaies ;
- Haut débit pour toutes les transactions ;
- Blockchain plus sûre, plus sécurisée, spécifiquement pour la finance décentralisée ;
- Développement rapide de dApps pour la finance décentralisée ;
- Tranquillité d'esprit : la blockchain n'est pas utilisée pour d'autres types d'applications non financières. Les décisions de la Fondation et des principaux développeurs sont donc axées à 100 % sur les cas d'utilisation financiers décentralisés et rien d'autre ;
- Développement rapide des dApps avec des appels dédiés spécifiquement aux applications financières ;
- Angle minimal d'attaque des contrats intelligents financiers développés sur la plateforme ;
- Gouvernance fiable (hors chaîne et sur la chaîne) ;
- Hautement immutable - par ancrage périodique à la blockchain Bitcoin.

### Jeux d'applications initiales

- L'ensemble initial des fonctions comprend :
- Le prêt décentralisé
- Encapsulation décentralisée de jetons
- Oracles de prix décentralisés
- L'echange décentralisée
- Dettes et créances transférables
- Dettes non collatéralisées décentralisées
- Tokenisation d'actifs
- Distribution de dividendes

Ce chapitre donne une vue d'ensemble de chacune de ces fonctions et le chapitre suivant couvre les détails techniques de leur réalisation.

### Prêts décentralisés

Le prêt décentralisé permet aux individus et aux groupes d'emprunter et de prêter sans l'intervention d'une banque. Grâce à des systèmes de garantie, les prêts décentralisés sur Ethereum ont atteint plus d'un quart de milliard de dollars en 2018.

Tous ces systèmes sont basés sur Ethereum, ce qui signifie qu'ils ne s'adressent qu'à 15 % du marché, d'après sa capitalisation boursière. La plateforme DeFiChain s'adressera à 100 % du marché en traitant avec Bitcoin, mais aussi en incluant l'ensemble du marché par l'encapsulation et le pooling, comme décrit ci-dessous.

Les principales plateformes de prêt décentralisées (Compound, Dharma, dYdX et Maker) proposent des prêts à des taux allant de 0,5 % à 6 %. Comme tout est géré par des contrats intelligents, les frais bancaires sont éliminés, et les plateformes sont en mesure de fournir des taux bien meilleurs que ceux des banques. Au fur et à mesure que ces services de prêt décentralisés deviennent plus sûrs, on peut s'attendre à ce que le marché voit également une augmentation des possibilités de prêt de pair à pair par le biais d'applications dédiées.

La puissance du prêt décentralisé réside dans les gains d'efficacité du marché obtenus en éliminant les intermédiaires et l'administration impliqués dans le prêt. De plus, les investisseurs étant préoccupés par les taux d'intérêt minimaux, voire négatifs, le prêt décentralisé les protège de cette éventualité, en fournissant des intérêts au taux du marché tout en offrant aux emprunteurs de meilleurs taux que ceux qu'ils peuvent obtenir sur les marchés financiers existants. Compte tenu de l'ampleur du crédit et du rôle qu'il joue dans l'ensemble de l'économie, le prêt décentralisé offre la possibilité à beaucoup plus d'initiatives d'emprunter de l'argent sur la base de marchés ouverts et de conditions favorables. Un accès plus facile au crédit se traduit par une croissance plus rapide de l'économie.

Les premiers déploiement de prêts décentralisés sont entièrement collatéralisés, et en raison de la volatilité des crypto-monnaies, la plupart des plateformes exigent une garantie du double ou plus sur les prêts. Cela permet aux gens de contracter des prêts sur la base des crypto-monnaies qu'ils détiennent. Ils peuvent ainsi gérer leurs problèmes de trésorerie sans avoir à vendre leurs crypto-monnaies, tout en bénéficiant de conditions de prêt favorables.

### Wrapping décentralisé des jetons

Une question importante pour la DeFi est la capacité de travailler avec l'ensemble des crypto-monnaies, nativement, sur la blockchain. Alors que la transaction sur la blockchain se fait via le token natif $DFI, DeFiChain peut utiliser Bitcoin, Ethereum, ERC-20, ou toute autre crypto-monnaie grâce au wrapping (encapsulation).

Le wrapping permet l'utilisation de n'importe quel actif numérique de sorte que l'actif sous-jacent est maintenu, mais il peut effectuer des transactions sur une blockchain différente. DeFiChain fournit un mécanisme de wrapping décentralisé qui permet au propriétaire de la crypto-monnaie de maintenir l'ancrage à l'actif et d'utiliser un mécanisme de wrapping qui ne dépend pas d'un tiers comme garant du wrapping ou de l'actif. Les jetons encapsulés peuvent être facilement échangés contre leur valeur originale sur leur blockchain respective.
La création d'un jeton encapsulé sur DeFiChain est une activité récompensée, de sorte que les détenteurs de crypto-monnaies sont incités à créer des jetons encapsulés sur le réseau DeFiChain comme une forme d'investissement financier décentralisé récompensé.

Le wrapping est une capacité clé de la DeFi en raison du besoin d'interopérabilité de différents types de crypto-monnaies et d'actifs. À ce jour, il n'existe pas de normes d'interopérabilité entre les différentes monnaies, et le seul moyen d'interopérer entre les monnaies est d'utiliser le wrapping ou la collatéralisation, qui doit être fourni par un tiers. Tout l'intérêt de la décentralisation est que les gens n'ont pas besoin de faire confiance à une autorité. Pourtant, aujourd'hui, c'est le principal moyen pour les investisseurs d'interopérer entre Bitcoin et Ethereum sans conversion d'une monnaie à l'autre. Le protocole Polkadot fournit une plateforme pour le développement d'applications interopérables, mais pas spécifiquement pour la DeFi. En tant que nouveau protocole, il reste à voir comment il sera exploité.

Sans wrapping, les détenteurs devraient convertir leur crypto-monnaie en monnaie DeFiChain afin d'utiliser les services offerts. Évidemment, pour la plupart des investisseurs, c'est bloquant. L'investisseur a mis son argent dans le Bitcoin, ou l'Ethereum, ou autre, parce que c'est la monnaie qu'il veut détenir. Le but principal de DeFiChain est de permettre des transactions financières dans n'importe quel type d'actif cryptographique, de sorte que les gens puissent utiliser les actifs et les tokens qu'ils détiennent comme monnaie d'investissement dans d'autres types de produits financiers.
La fonction de wrapping décentralisé est cruciale pour permettre aux gens de détenir n'importe quel actif et d'effectuer des investissements dans une autre monnaie. Ainsi, par exemple, une personne détenant des bitcoins pourrait faire un prêt à une personne souhaitant emprunter des ETH, ou une personne souhaitant se couvrir contre la crypto-monnaie qu'elle détient pourrait le faire en utilisant une fonction d'encapsulation pour utiliser certains de ses actifs afin d'acheter des options dans d'autres types d'actifs.

### Oracles de prix décentralisés

DeFiChain inclura des oracles de prix pour collecter des données issues de blockchains extérieures. Les oracles sont utilisés pour collecter des données telles que le prix d'autres crypto-monnaies[^4]. Les oracles sont un moyen important pour les blockchains de collecter des informations précises à la fois d'autres blockchains et de marchés non cryptographiques[^5].

Participer en tant qu'oracle permet de gagner des tokens en fonction de l'exactitude des oracles. La fonction oracle intégrée permettra aux contrats intelligents de déterminer le nombre d'oracles, le pourcentage de consensus et les paramètres de récompense des oracles pour les données qu'ils fournissent.

Les oracles sont à terme destinés à être décentralisés. Cependant, DeFiChain sera lancée en nommant quelques oracles de confiance qui soumettront périodiquement des données de prix de source fiable sur DeFiChain.

### Échanges décentralisés

La fonction d'échange décentralisé (decentralized exchange) permettra l'échange (swap) de crypto-monnaies en mode pair-à-pair. La fonction d'échange décentralisé met en relation des personnes pour des échanges directs, sans qu'il soit nécessaire d'acheter et de vendre des devises par l'intermédiaire d'une bourse. L'utilisation de d'échange décentralisé réduit les risques associés à l'utilisation des exchanges et garantit que la crypto-monnaie ne s'émancipe pas des détenteurs de tokens. Il élimine également le risque de l'aspect tutellaire de l'exchange lui-même, car le mécanisme est de pair à pair sur la base d'un prix convenu ou du prix du marché au moment de l'échange.

Alors qu'un certain nombre d'échanges décentralisés sont disponibles sur le marché aujourd'hui[^7], la solution de DeFiChain permet l'intégration de capacités d'échange dans des applications tierces en créant un service d'échange décentralisé.

[^4]: https://cointelegraph.com/explained/blockchain-oracles-explained
[^5]: https://hackernoon.com/oracles-help-smart-contracts-resolve-subjective-events-d81639d8291c
[^6]: https://en.wikipedia.org/wiki/Decentralized_exchange
[^7]: https://coinsutra.com/best-decentralized-exchanges-dex/

### Dettes et créances transférables

DeFiChain fera un ensemble d'appels à projets sur les dettes et des créances transférables. Dans le monde de la finance centralisée, les dettes et les créances ne peuvent être gérées que par les institutions financières qui gèrent les prêts. Le manque de transparence de ces dettes transférables a été l'un des facteurs qui ont conduit à la crise financière de 2008.

Pour les petites et moyennes entreprises, cela peut être un outil particulièrement puissant. Par exemple, jane, avec son usine de gadgets, fournit un grand constructeur automobile, mais ce dernier paie ces gadgets à 60 jours. Pendant ce temps, Jane doit payer les matériaux nécessaires à la production des gadgets et, bien sûr, les salaires réguliers de ses ouvriers sur une base mensuelle ou hebdomadaire. Le constructeur automobile paiera la facture, mais pas à temps pour que Jane puisse régler toutes ses dépenses. Sans la DeFi, Jane doit se rendre à la banque et payer les taux d'intérêt qu'elle exige, car elle n'a pas d'autre choix. La fonction de créances transférables permettrait à quiconque de proposer à Jane un prêt basé sur les créances. Étant donné que de nombreuses personnes sont en mesure de constater que le constructeur automobile est un client à faible risque et qu'il paiera ses factures, quiconque le souhaite peut faire une offre à Jane à un meilleur taux que celui de la banque, créant ainsi un marché concurrentiel pour les dettes et les créances sur la base du risque réel et de l'évaluation de ce risque par le marché. Jane peut maintenant obtenir un prêt à des taux très avantageux et les prêteurs, de même, obtiennent d'excellents retours sur leurs prêts, malgré le fait qu'ils ne prêtent l'argent que pour 30 à 60 jours.

La Blockchain ajoute la transparence à l'échange de dettes et de prêts basés sur des créances ou d'autres types de promesses financières. DeFiChain inclura la capacité pour les organisations de créer des contrats intelligents qui permettent un investissement simple dans ces actifs, de sorte que les prêts pair-à-pair peuvent être faits sans la nécessité d'une institution financière pour garantir ces types d'actifs financiers.

### Dette décentralisée non collatéralisée

Dans le futur, il sera possible de fournir des prêts non collatéralisés (sans garantie) basés sur la réputation et d'autres facteurs concernant les emprunteurs. Il sera possible de développer des systèmes non collatéralisés grâce à différentes formes de références vérifiables et d'enregistrements de l'historique d'emprunt et de remboursement d'un individu. De nombreuses solutions d'identité développées aujourd'hui se penchent sur des systèmes anonymes et pseudonymes d'évaluation de la réputation, basés sur un identifiant décentralisé (DID) émis par l'individu, et des justificatifs vérifiables (VC) émis par des autorités connues et réputées pour fournir des informations sur l'historique de crédit de l'individu.

Les systèmes basés sur la réputation et les systèmes d'évaluation des risques devront être mis en place. Bien que cela prenne du temps, peut-être des années, il est prévisible que ce type de système puisse compléter ou remplacer les notes de crédit actuelles.

Une autre application potentielle de cette fonctionnalité serait la possibilité de créer des monnaies stables décentralisées sans garantie. Le succès de DAI et de MakerDAO montre l'intérêt des monnaies stables ancrées, mais le niveau élevé de garantie est un frein à la création d'autres projets de ce type. Il est possible que, grâce aux mécanismes du marché et au staking, des monnaies stables décentralisées et non collatéralisées puissent être créées.

### Tokenisation des actifs

La tokenisation d'actifs est la représentation d'un actif, tel qu'un bien immobilier ou les fonds propres d'une entreprise, en jetons immutables sur la blockchain[^8]. Ce domaine particulier de la finance décentralisée a un potentiel énorme et constitue l'un des domaines d'investissement les plus intéressants pour les détenteurs de crypto-monnaies[^9].

Si plusieurs tentatives de tokenisation d'actifs ont été faites dans l'univers blockchain, la plupart d'entre elles ont pivoté et fournissent désormais des services qui ne sont pas directement liés à la tokenisation d'actifs (LAtoken, Etherparty). Tokeny et Tokenize-IT se présentent comme des plateformes de tokenisation, mais au moment de la rédaction de ce document, leurs processus sont encore assez manuels et dépendent fortement des réglementations locales spécifiques et des exigences réglementaires de ces juridictions. D'autres blockchains, telles que Tezos, ont été mentionnées comme de bonnes plateformes pour la tokenisation d'actifs, mais, comme avec d'autres blockchains multi-usages, l'ensemble de commandes Turing-complet créera des contrats intelligents complexes qui sont inutiles lors de l'utilisation de DeFiChain.
DeFiChain fournira un module spécifiquement conçu pour la tokenisation d'actifs, et sera particulièrement facile à utiliser pour tokeniser des actifs tels que les capitaux propres des entreprises, les biens immobiliers et d'autres avoirs de valeur.

Récemment (octobre 2019), la loi Blockchain du Lichtenstein a créé la base juridique sur laquelle tout actif peut être tokenisé et légalement lié à des jetons ou à des "conteneurs" qui représentent le droit à l'actif. La loi est précise dans sa formulation, décrivant comment un conteneur émis par une partie de confiance peut désormais détenir les droits légaux de disposition sur l'actif. La disposition sur l'actif est distincte de la propriété ou des droits sur l'actif, ou même du contrôle en tant que concept spécifique. La formulation prudente de cette loi est une avancée pour tous les acteurs du monde de la tokenisation des actifs, car elle permettra désormais à quelqu'un de se présenter devant un tribunal avec un token et de s'attendre à avoir une légitimité juridique pour les actifs qui sont tokenisés (tant que l'autorité qui octroie le token est reconnue comme une autorité de confiance pour le faire). Elle ouvre également un espace pour DeFiChain pour demander ce statut de confiance, de sorte que la capacité de tokenisation d'actifs décrite ici peut être offerte comme une capacité décentralisée, légale et autorisée à laquelle les gens peuvent faire confiance, sans avoir à dépendre d'une autorité centralisée.

[^8]: https://www2.deloitte.com/lu/en/pages/technology/articles/tokenization-assets-disrupting-financial-industry.html
[^9]: https://www.forbes.com/sites/laurencoleman/2019/04/25/heres-why-interest-in-tokenizing-assets-is-starting-to-surge/#2ddeec4640a5

Pour plus d'informations sur cette loi, veuillez consulter le site Web du Liechtenstein à l'adresse https://liechtensteinusa.org/article/liechtensteins-parliament-approves-blockchain-act-unanimously

Exemples d'actifs que les gens peuvent désormais tokeniser à l'aide de la blockchain :

- Les titres, tels que les investissements dans les ETF, les actions et les parts ;
- Actions de sociétés privées ;
- Dispositifs de production d'énergie et de revenus, tels que les éoliennes, les fermes solaires, les satellites ;
- Propriété dans les moyens de production alimentaire (nouvelles formes de fermes coopératives où les non-agriculteurs pourraient être propriétaires de l'approvisionnement alimentaire au lieu de marchandises échangées sur des bourses) ;
- Voitures à conduite autonome, distributeurs automatiques, guichets automatiques et autres types de dispositifs autorégulateurs générateurs de revenus ;
- DAO (Distributed Autonomous Organizations) ;
- Petits investissements immobiliers (multipropriétés, appartements loués à court terme, etc.) ;
- Grands investissements immobiliers (aéroports, parcs d'attractions, complexes d'appartements, parcs d'affaires)

### Distribution de dividendes

Tout actif tokenisé avec retour sur investissement peut utiliser le module de distribution de dividendes pour créer des smart contracts qui versent automatiquement les retours sur investissement. L'utilisation de DeFiChain permettra un saut dans la fonctionnalité de la distribution de dividendes. Il sera possible de mettre en œuvre des modèles similaires à ceux d'aujourd'hui, où les paiements sont effectués sur une base hebdomadaire, mensuelle ou trimestrielle, ou des modèles où les paiements sont effectués sur une base quotidienne, horaire ou même minute par minute.

La distribution de dividendes serait pertinente dans tout type d'actif tokenisé, comme décrit ci-dessus. Par exemple, aujourd'hui, un gouvernement municipal pourrait émettre une obligation pour investir dans une éolienne afin de fournir de l'électricité. Le gouvernement s'occuperait de tout, et rembourserait cette obligation selon le calendrier prévu. Avec la distribution de dividendes, la collectivité pourrait acheter directement l'éolienne, et distribuer les dividendes aux investisseurs de l'éolienne. Au lieu de passer par l'administration requise par l'autorité centralisée (gouvernement), chaque citoyen qui le souhaite pourrait investir dans cette éolienne, et les dividendes seraient payés en fonction de la contribution de chaque personne à cet investissement. L'élimination des frais généraux et la distribution équitable des bénéfices seraient des avantages majeurs pour la communauté propriétaire de l'éolienne. Dans ce cas, l'éolienne est un bien public, mais elle pourrait aussi simplement être un investissement privé.

Tout investissement privé pourrait être géré de cette manière : un jukebox, un taxi à conduite autonome, un investissement immobilier, etc. La distribution automatique des dividendes réduit le besoin d'administration et de frais généraux, tout en éliminant l'incertitude sur les versements et le contrôle par une autorité centralisée.

La nécessité d'investir dans des dividendes communs devient de plus en plus pertinente avec l'IoT. Les capteurs sont capables de créer une valeur considérable. Une voiture à conduite autonome sera en mesure de fournir des services de mobilité. Les distributeurs automatiques, les capteurs, les satellites, etc. sont tous des appareils potentiellement générateurs de revenus que les gens peuvent posséder ensemble et dont ils peuvent partager les bénéfices, mais jusqu'à présent, la complexité juridique et financière de cette démarche était prohibitive. DeFiChain peut simplifier ces processus.

De même, la distribution des bénéfices pour une entreprise privée peut être mise en place. L'une des premières expériences dans ce domaine est une DAO (Distributed Autonomous Organization) appelée dOrg. Une dOrg est un collectif de programmeurs (ainsi qu'une équipe de ventes/opérations) qui sont copropriétaires de leur maison d'édition de logiciels. La distribution des salaires se fait par le biais d'une DAO qui fonctionne comme un multi-sig, de sorte que toutes les deux semaines, l'ensemble de l'organisation soumet ses demandes de paiement pour le travail demandé, et l'équipe vote pour approuver les demandes de salaire des uns et des autres. À l'intérieur de la dOrg, chaque personne détient une "réputation" qui représente le pourcentage de propriété que chaque personne a gagné (ils gagnent la propriété en fonction de la quantité de travail effectué depuis la création de l'entreprise). Mais qu'adviendra-t-il des bénéfices à la fin de l'année ? Vraisemblablement, chaque personne devra soumettre une demande pour son pourcentage de bénéfices, et tout le monde devra voter sur ce point également, car la DAO ne permet pas une distribution automatique des bénéfices. En utilisant DeFiChain, l'équipe pourrait facilement mettre en œuvre une fonction trimestrielle ou annuelle qui distribuerait automatiquement les bénéfices de l'entreprise à chaque personne, en fonction de leurs participations dans l'entreprise. Ce schéma fonctionnerait même pour les personnes qui étaient actives dans le passé, mais qui ne le sont plus, donc qui ne sont plus dans la DAO, mais qui détiennent toujours un pourcentage basé sur leurs contributions passées. Un autre type de contributeur pourrait être un investisseur qui met de l'argent dans l'entreprise, mais ne participe pas.

Les exemples ci-dessus semblent logiques et simples, mais ils sont aujourd'hui extrêmement chronophages et complexes. Les personnes qui veulent investir ensemble dans des sociétés, des biens immobiliers ou d'autres actifs générateurs de revenus font aujourd'hui face à la complexité du calcul et de la distribution de dividendes. Grâce à la fonctionnalité de distribution de dividendes de DeFiChain, il devient non seulement simple, mais aussi automatique pour les entreprises de distribuer des dividendes aux propriétaires d'actions.

---

## Conception de DeFiChain

### Paramètres de conception

En regardant les exigences de marché du chapitre précédent, DeFiChain doit répondre aux exigences suivantes :

1. Robuste et sécurisée : construite sur une blockchain éprouvée et sécurisée ;
2. Rapide et évolutive ;
3. Inclut un mécanisme de consensus décentralisé ;
4. Fournit un support extensible pour les contrats intelligents, sans un jeu d'instructions Turing-complètes ;
5. Aussi immutable que possible (ancrage de blocs actif).

Chacun de ces principes de conception est décrit en détail ci-dessous.

#### 1. Robuste et sécurisée

Le Bitcoin Core est la blockchain la plus robuste et la plus ancienne au monde. Elle fonctionne sans interruption depuis le bloc de genèse en janvier 2009. En outre, du point de vue de la sécurité, Bitcoin Core s'est avéré être la blockchain la plus sûre, sans aucun incident de sécurité, tout en sécurisant l'actif cryptographique dont la valorisation est la plus élevée au monde, à savoir le bitcoin (BTC). Au moment où nous écrivons ces lignes, le Bitcoin Core sécurise avec succès 150 milliards de dollars d'actifs cryptographiques, soit 68 % de la capitalisation du marché des actifs cryptographiques.

La sécurité et la robustesse prouvées du Bitcoin Core en ont fait la blockchain de choix pour la base d'extension de DeFiChain. DeFiChain est construit sur la base d'un fork de Bitcoin Core 0.18, plus précisément v0.18.1.

DeFiChain sera écrite en C++, et le plan est d'utiliser d'autres langages, tels que Rust, à l'avenir.

Bien que DeFiChain soit une nouvelle blockchain, le fait de la baser sur un fork du Bitcoin Core permet d'obtenir une chaîne facile à intégrer pour les échanges et les applications qui supportent Bitcoin.

#### 2. Rapide et évolutive

L'un des inconvénients avérés de la blockchain Bitcoin est la lenteur des transactions sur la chaîne. De plus, l'extensibilité est devenue un problème lorsque le nombre de blocs sur la chaîne augmente.

Afin d'implémenter une blockchain avec la vitesse et l'évolutivité requises, DeFiChain, fork du Bitcoin Core, inclura les améliorations suivantes :

- Temps de bloc : 30 secondes
- Taille des blocs : 16 Mo

Ces améliorations permettent d'obtenir un taux de transaction de plus de 2 200 transactions par seconde (tps) tout en maintenant des exigences de calcul et de bande passante gérables pour permettre les opérations décentralisées de DeFiChain.

Le tableau suivant compare les performances de Bitcoin et de ses forks, ainsi que d'Ethereum, à celles de DeFiChain :

<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Cadence du bloc (s)</th>
        <th scope="col">Taille du bloc (Mo)</th>
        <th scope="col">Volume de Tx (% du bloc)</th>
        <th scope="col">Taille Tx min (octets)</th>
        <th scope="col">Taille Tx moy (octets)</th>
        <th scope="col">Txs dans un bloc (max)</th>
        <th scope="col">Txs dans un bloc (moy)</th>
        <th scope="col">Tx par sec (max)</th>
        <th scope="col">Tx par sec (moy)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Bitcoin Core</th>
        <td>600</td>
        <td>1</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>4 561,45</td>
        <td>2 007,04</td>
        <td>7,6</td>
        <td>3,35</td>
      </tr>
      <tr>
        <th>Bitcoin Cash</th>
        <td>600</td>
        <td>10</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>45 614,55</td>
        <td>20 070,40</td>
        <td>76</td>
        <td>33,45</td>
      </tr>
      <tr>
        <th>Bitcoin SV</th>
        <td>600</td>
        <td>32</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>145 966,55</td>
        <td>64 225,28</td>
        <td>243,28</td>
        <td>107,04</td>
      </tr>
      <tr class="highlight">
        <th>DeFi Chain</th>
        <td>30</td>
        <td>16</td>
        <td>98%</td>
        <td>220</td>
        <td>500</td>
        <td>72 983,27</td>
        <td>32 112,64</td>
        <td>2 432,78</td>
        <td>1 070,42</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Cadence du bloc (s)</th>
        <th scope="col">Limite de gas</th>
        <th scope="col">Volume de Tx (% du bloc)</th>
        <th scope="col">Taille Tx min (gas)</th>
        <th scope="col">Taille Tx moy (gas)</th>
        <th scope="col">Txs dans un bloc (max)</th>
        <th scope="col">Txs dans un bloc (moy)</th>
        <th scope="col">Tx par sec (max)</th>
        <th scope="col">Tx par sec (moy)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Ethereum</th>
        <td>13,5</td>
        <td>10m0</td>
        <td>100%</td>
        <td>21k</td>
        <td>60k</td>
        <td>476,19</td>
        <td>166,67</td>
        <td>35,27</td>
        <td>12,35</td>
        </tr>
    </tbody>
  </table>
</div>

#### 3. Mécanisme de consensus décentralisé

Le Bitcoin Core utilise la preuve de travail (Proof-of-Work, ou PoW) comme mécanisme de consensus. DeFiChain exploite les meilleurs aspects de la PoW, c'est-à-dire l'utilisation du hachage de l'ID du nœud de staking pour la création de blocs tout en concentrant la majorité du consensus sur la preuve d'enjeu (Proof-of-Stake, ou PoS). L'amélioration majeure du mécanisme de PoW pour DeFiChain est que les nœuds de staking peuvent fonctionner sans investir dans des serveurs haut de gamme et des connexions à bande passante ultra rapide. Ainsi, DeFiChain crée le potentiel pour une décentralisation plus facile et plus rapide de l'infrastructure.

#### 4. Contrats intelligents non-Turing-complets

Les transactions financières décentralisées sont mises en œuvre par le biais de contrats intelligents (smart contracts). Par exemple, pour s'assurer que les emprunteurs remboursent les prêteurs, les smart contracts mettent en œuvre les conditions de prêt dans le code. Pour le développement de contrats intelligents, DeFiChain ajoutera un support opcode pour les jeux d'instructions financières décentralisées. L'opcode DeFi complète et fonctionne conjointement avec le langage de programmation du protocole Bitcoin Core existant.

Le langage de programmation de DeFiChain est appelé Recipe, ce qui indique le rôle du langage dans la description et l'autorisation des contrats financiers décentralisés.

Les mots d'instruction Bitcoin Script commencent généralement par le préfixe `OP_*`. Les mots d'instruction Recipe portent le préfixe `DF_*`.

#### 5. Immutabilité par l'ancrage des blocs

Alors que le sujet de l'immutabilité est résolument binaire (une blockchain est soit immutable soit non immutable), en fait, l'immutabilité est un curseur. Le niveau d'immutabilité d'une blockchain est lié au coût d'un retour en arrière ou d'un "fork out" de blocs minés, également connu sous le nom d'attaque à 51 %.

Il faut du temps pour amasser un nombre important de mineurs ou de minteurs pour rendre l'attaque à 51 % suffisamment coûteuse pour qu'elle soit généralement considérée comme immutable, ce qui signifie qu'une nouvelle blockchain est automatiquement désavantagée en ce qui concerne l'immutabilité des enregistrements. Certaines blockchains plus récentes ont pris des raccourcis pour augmenter leur niveau d'immutabilité, généralement en faisant des compromis sur la décentralisation. Par exemple, les chaînes peuvent n'autoriser que des acteurs délégués choisis par les fondateurs, ou en gérant des permissions sur la blockchain au lieu de l'avoir en libre accès.

DeFiChain vise à maintenir la qualité de la décentralisation tout en maintenant l'immutabilité. Pour ce faire, DeFiChain ancrera son bloc à la blockchain Bitcoin tous les quelques blocs. Cela renforce encore l'immutabilité de DeFiChain sans compromettre la nature décentralisée de la chaîne.

### Algorithme de consensus

#### Preuve d'enjeu

DeFiChain utilise un algorithme de preuve d'enjeu (PoS) similaire à l'algorithme de minage original de la preuve de travail (PoW) de Bitcoin Core. Bien que DeFiChain choisisse la PoS plutôt que la PoW, la technologie DeFi conserve le meilleur des technologies testées et éprouvées qui ont été développées dans la blockchain Bitcoin Core.

#### Masternodes de staking

Pour faire fonctionner un masternode (nœud de staking), les stakers doivent détenir un montant fixe de 20 000 DFI. Les masternodes de DeFiChain participent aux validations de transactions actives et aux créations de blocs. Le montant du staking est destiné à être réduit avec la stabilité et la maturité de la blockchain pour encourager une plus grande décentralisation.

Chaque nœud de staking ne peut effectuer qu'un seul hachage par seconde, le nonce de l'algorithme Bitcoin Core PoW étant remplacé par l'ID du masternode du staker.
Un nouveau bloc est miné s'il satisfait à la condition suivante :

`SHA256({UTXO du staker}, {horodatage actuel, en secondes}, {modificateur du staker}) < {cible}`

The stakers check this requirement each second. If the block condition is less than the current target, then the stakers assemble and sign a new block.
Staker’s UTXO require 20 confirmations before it can be accepted as a stake.

#### Modificateur de staking

Un modificateur de staking est un générateur collectif et aléatoire d'entropie. Sans un modificateur de staking, le futur noyau de PoS serait complètement prévisible. Un bon modificateur de staking doit être ni prévisible, ni influençable par les stakers.

Le modificateur de staking de DeFiChain est défini comme étant `SHA256({modificateur de staking précédent}, {masternode ID})`.

#### Validation des en-têtes futurs et passés

Contrairement à la PoW, la validation des en-têtes de blocs nécessite une table de staking. Les en-têtes sont vérifiés par lots avant que les blocs complets ne soient téléchargés, donc la table de staking est utilisée pour vérifier les stakings futurs.
Pour être en mesure de vérifier les en-têtes futurs, la blockchain doit appliquer une règle supplémentaire, de sorte que toute modification de la base de données des staking est écrite immédiatement, mais ne prend effet qu'après 300 blocs. Par conséquent, n'importe quel nœud sera en mesure de vérifier n'importe quel en-tête de bloc par rapport au staking actuel, si un en-tête de bloc n'est pas plus loin dans le futur (ou dans le passé) que 300 blocs.

#### Protection contre les conflits de staking

Pour les blockchains PoS, il n'y a pas de limite au nombre de blocs conflictuels qu'un staker peut signer. Par conséquent, les stakers peuvent signer pour chaque fork ou branche possible, ce qui affaiblit la finalité d'une blockchain PoS. Ce problème est connu sous le nom de double signature et n'est pas possible dans les blockchains PoW, où un mineur ne peut pas exploiter toutes les branches possibles sans diviser sa capacité d'exploitation. En PoW, cela représente une pénalité économique intrinsèque. Cependant, les blockchains PoS ne peuvent pas appliquer une pénalité économique intrinsèque pour la signature de blocs conflictuels sur différentes branches.

Par conséquent, afin d'améliorer la finalité de DeFiChain, dans la PoS, il est nécessaire de détecter les doubles-signatures et de les pénaliser par un mécanisme explicite.

#### Détection de la double signature

Chaque en-tête de bloc a un numéro de séquence comme un nombre de blocs qu'un staker particulier a créé avant un bloc particulier. Si deux blocs sont créés avec le même numéro de séquence, cela signifie qu'un staker a doublement signé, même si les blocs ont des ancêtres différents, c'est-à-dire à travers les branches

Pendant la génération d'un bloc, un staker a le droit d'inclure les preuves de double signature dans l'en-tête de son bloc en échange de la moitié seulement de la pénalité.

#### Pénalité pour double signature

Pour pouvoir appliquer une pénalité aux personnes qui signent deux fois, DeFiChain doit interdire le retrait immédiat du staking. Ainsi, lorsqu'une transaction de désactivation est confirmée, DeFiChain a besoin de 3000 blocs pour passer. Avec un temps de bloc de 30 secondes, 3000 blocs équivalent à 25 heures.

La pénalité de double signature est de 10 fois les récompenses de bloc, déduites de la collatéralisation. Cette pénalité disqualifie également le staker de tout autre staking immédiatement. Le staker qui veut revenir au staking doit remettre un nouvel UTXO de 20,000 DFI. L'exécution du nœud officiel de DeFiChain ne cause aucune double-signature involontaire ou accidentelle. La double-signature ne se produit qu'en cas d'intention malveillante.

#### Attaque de type time-drift (dérive temporelle)

La chaîne utilise une prédiction de bloc futur sur 5 secondes environ pour éviter les attaque de type time-drift (dérive temporelle : des décalages d'horloge trop important entre masternodes, ndlr) où les stakers fixent un temps de bloc trop loin dans le futur, pour ensuite réclamer une récompense indue. DeFiChain se synchronise par NTP pour ajuster les horloges au fur et à mesure.

### Ancrage sur Bitcoin

Les stakers de DeFiChain publient périodiquement les hachages de blocs de la blockchain sur la blockchain Bitcoin, fournissant un audit public et un ancrage de DeFiChain à la blockchain la plus forte et la plus sécurisée au monde.

Tous les 60 blocs (environ 30 minutes), un staker obtient le droit d'écrire la racine de Merkle (Merkle root) du bloc précédent sur la blockchain Bitcoin. Les informations écrites sont, plus précisément, le txid de la transaction Bitcoin, l'en-tête du bloc Bitcoin et la preuve de Merkle contenant la racine de Merkle sur le bloc nouvellement miné. Ce faisant, le staker recevra une récompense de bloc supplémentaire en DFI, ce qui incitera les nœuds à ancrer régulièrement tous les enregistrements sur la blockchain Bitcoin.

![Ancrage sur Bitcoin](/img/white-paper/every-60-blocks.png)

Les nœuds de DeFiChain comprendront un client intégré de vérification simplifiée des paiements (SPV) de Bitcoin. Les clients SPV synchronisent la blockchain Bitcoin en téléchargeant uniquement les en-têtes de bloc, ce qui constitue une information suffisante pour que les nœuds puissent ajouter et valider les ancrages.

## Blocs de construction DeFiChain

Pour atteindre nos objectifs de permettre des transactions financières décentralisées sur DeFiChain, les blocs de construction suivants seront inclus comme composants natifs de base sur DeFiChain.

### Tokenisation sous forme de tokens standards (DST)

La mise en œuvre des fonctionnalités décrites dans ce livre blanc est réalisée à l'aide de jetons standards. (JETON ci-après et dans les applications DiFiChain, appelé TOKEN pour éviter toute confusion avec UXTO, NDT). Ce chapitre décrit les mécanismes des tokens, l'interaction avec d'autres cryptoactifs (tokens), et comment ils sont utilisés dans DeFiChain.

### Mécanique des chaînes croisées

DeFiChain utilise des tokens standards pour introduire des tokens externes dans DeFiChain de manière transparente et permettre des contrats financiers et des échanges transparents de tous les principaux cryptoactifs. Les tokens standards sont similaires à ERC20 sur Ethereum et Omni sur la blockchain Bitcoin. Grâce à cette norme, DeFiChain permet la tokenisation de tous les actifs.

Sur DeFiChain, les tokens standards sont appelés DeFi Standard Token (DST). Les DST sont de deux types différents : DCT, créés par les utilisateurs du système, et DAT, qui sont des tokens adossés à des actifs créés avec le soutien de cryptoactifs.

![Illustration des catégories de DST](/img/white-paper/custom-token.png)

### Tokens personnalisés (DCT)

Les DCTs sont des tokens personnalisés qui peuvent être créés par n'importe quel utilisateur pour représenter n'importe quel projet ou ensemble de smart contracts implémentés sur DeFiChain. Tout utilisateur peut créer un tel DCT. Pour éviter les abus, la création de tout DCT propriétaire exige que l'utilisateur verrouille 1,000 DFI pour le temps que les tokens sont émis. Les DFI sont restitués lorsque les tokens sont révoqués et que le DCT est annulé.

Les tokens DCT ne sont pas soutenus intrinsèquement par DeFiChain. Ils peuvent être soutenus par un mécanisme externe, mais il est essentiel de noter que DeFiChain ne les soutient pas intrinsèquement. Un exemple sur la blockchain Ethereum serait DGX, qui est un jeton ERC20 soutenu par de l'or. Ethereum ne soutient pas DGX, bien que le jeton soit créé par ERC20. La Fondation Digix est responsable de la valeur de ce jeton. De même, les DCT sont à la DeFiChain ce que ERC20 est à l'Ethereum. La création et l'émission de tokens sur DeFiChain est simplifiée et le potentiel d'erreurs dans le contrat intelligent est éliminé, parce que les créateurs de DCT peuvent définir uniquement les paramètres ci-dessous, en utilisant une interface de script facile à utiliser.

#### Paramètres des DCT :

- DCT ID: <UDID> Identifiant unique de la blockchain pour le token ;
- Name: <Token name> Nom du token ;
- Symbole : Le symbole des tokens. Le protocole DCT fournira une référence pour garantir que le choix sera un symbole unique ;
- Décimales : Nombre de décimales divisible pour les jetons. Ce nombre ne peut pas être modifié une fois qu'il est fixé ;
- Offre initiale totale : L'émission initiale de tokens pendant l'événement généré ;
- Liste de distribution initiale : Liste d'adresses pour la distribution des tokens ;
- Assistance au minting : oui/non ;
- Limite d'approvisionnement final (facultatif) : Limite d'offre totale immutable. Si le minting est pris en charge, cela définira le plafond du nombre de tokens que le propriétaire du token peut minter au total (certains peuvent être réservés à ce moment-là). Si ce paramètre est laissé vide, il s'agit d'un token à approvisionnement illimité. Ce paramètre ne peut pas être modifié après la définition initiale du token.
- Échangeabilité : oui/non. Il s'agit d'un commutateur à sens unique permettant au propriétaire du token de transférer des tokens pendant la période de distribution initiale et également de décider quand un token est échangeable/transférable. Pour garantir la nature décentralisée des DCT, une fois que l' "échangeabilité" est définie sur oui, le propriétaire ne peut plus inverser l'échangeabilité d'un token. En général, lors de la création d'un token, cette option doit être désactivée jusqu'à ce que la distribution initiale soit confirmée comme exacte.

En utilisant cette interface, il n'est pas nécessaire d'avoir un développeur de contrat intelligent, et il n'y a pas besoin d'un audit de sécurité.

### DeFi Token d'actif (DAT)

Les DeFi Asset Tokens (DATs) sont soutenus d'une manière décentralisée. Les DAT sur DeFiChain sont des tokens et des crypto actifs externes à DeFiChain, tels que :

- dBTC, soutenu par BTC ;
- dETH, soutenu par ETH ;
- dXRP, soutenu par XRP ;
- dUSDT, soutenu par USDT ;
- dBCH, soutenu par BCH, etc.

Les nouveaux DAT sont introduits dans le système par le vote des masternodes. Cela garantit que seuls les actifs qui suscitent le plus d'intérêt parmi les utilisateurs de DeFiChain sont introduits.

### Rattachement des DAT à l'économie

Le but des DAT est qu'il représente l'actif natif sur les autres blockchains, par exemple 1 dBTC devrait représenter 1 BTC.

Il y a deux approches pour cela :

1. L'approche Stablecoin

   - Pour chaque dBTC émis, 1 BTC doit être bloqué dans une adresse ou un contrat intelligent.
   - Bien que cette approche permette d'établir une garantie pour les dBTC, elle introduit d'autres problèmes - les risques de contrepartie et affecte la nature décentralisée de DeFiChain.

2. Rattachement à l'économie
   - En fournissant une garantie forte que le DAT représentant un actif a son prix qui suit de près l'actif natif, c'est-à-dire en détenant le dBTC, on peut avoir une bonne confiance que la valeur du DBTC suivra celle de BTC.

Afin que nous puissions réaliser le rattachement économique, les blocs de construction suivants sont construits nativement sur DeFiChain :

1. Contrat de prêt
2. Bourse décentralisée (DEX)
3. Bourse inter-chaînes (XCX)
4. Oracles de prix

![Aperçu conceptuel des DAT](/img/white-paper/dat-overview.png)

### Contrat de prêt

Le contrat de prêt est conçu pour permettre au propriétaire du contrat de prendre un prêt garanti contre la collatéralisation bloquée dans le contrat. Chaque contrat de prêt est unique pour chaque propriétaire (adresse) sur DeFiChain.

Tout utilisateur peut ouvrir un contrat de prêt sur DeFiChain, gratuitement. L'utilisateur qui ouvre un contrat de prêt est propriétaire du contrat spécifique. Cette propriété, cependant, est transférable.

Une fois qu'un contrat de prêt est ouvert, des DFI peuvent être envoyés pour financer la garantie du prêt. Une fois qu'un contrat de prêt est financé, il permet au propriétaire de contracter un prêt en mintant des DAT jusqu'à un certain ratio de garantie. Le ratio de garantie minimum peut être ajusté par le DAO DeFiChain et commence à 150%. En d'autres termes, une garantie de 1 500 $ (en DFI) permet au propriétaire du contrat de prêt de contracter un prêt de 1 000 $ maximum.

Les DAT sont soumis à un taux d'emprunt variable. Un contrat de prêt n'a pas de date d'expiration. Le propriétaire peut contracter un prêt aussi longtemps qu'il le souhaite, à condition que le ratio de garantie reste supérieur à 150 % à tout moment.

```
Ratio de garantie = Garantie / (Prêt + intérêts courus)
```

Si un contrat de prêt tombe en dessous du ratio de collatéralisation de 150% à un moment donné, sa garantie est liquidée via le Decentralized Exchange (DEX) pour payer les intérêts courus. Une pénalité de liquidation supplémentaire de 15 % sera appliquée afin de dissuader les contrats de prêt d'être liquidés. Il est de la responsabilité des propriétaires de contrats de prêt de surveiller le ratio de garantie afin d'éviter une liquidation non désirée.

Si un contrat de prêt est proche du ratio de garantie minimum, le propriétaire doit prendre l'une des mesures suivantes pour éviter la liquidation et l'imposition d'une pénalité de liquidation de 15 % :

1. Déposer plus de DFI dans le contrat de prêt, augmentant ainsi sa garantie et son ratio de garantie ;
2. Rembourser une partie du prêt (ou des intérêts courus), diminuant ainsi le montant du prêt du contrat et augmentant son ratio de garantie.

La clôture d'un contrat de prêt permet à son propriétaire de récupérer la totalité de sa garantie. Pour clôturer un contrat de prêt, le propriétaire doit rembourser l'intégralité du prêt, plus les intérêts courus dans son entité en DAT (par exemple, dBTC). Lors de la liquidation du prêt, le DAT minté est détruit (burnt), et le DAT initial minté et les intérêts seront convertis en DFI via le DEX décrit dans ce document.

Bien que ce concept ne soit pas nouveau dans la DeFi, ce qui est nouveau est la possibilité de garantir n'importe quel actif en raison de la nature de DeFiChain.

1. Alice ouvre un contrat de prêt et le finance avec 150k DFI ;
2. Avec un DFI valant au comptant 0,10$, le contrat de prêt d'Alice a maintenant 15 000$ de garantie ;
3. Avec un ratio de garantie minimum de 150 %, elle peut emprunter un maximum de 10 000 $ en dBTC, qui est lié au prix au comptant de la BTC ;
4. Étant donné que le prêt dBTC via le contrat de prêt produit des intérêts, et que le prix du dBTC et du DFI fluctue, Alice décide de ne prendre que 5 000 $ de dBTC, soit 0,5 dBTC, ce qui donne à son contrat de prêt un taux de garantie de : 15000/5000 = 300%, bien supérieur à 150% ;
5. Le surdimensionnement permet une certaine marge de manœuvre pour les mouvements de prix du dBTC. Si le prix du BTC passe à 15 000 $, le prêt de 0,5 dBTC d'Alice vaudra désormais 7 500 $. Son contrat de prêt a maintenant un ratio de garantie de : 15000/7500 = 200%, toujours supérieur à 150%, de sorte que la liquidation ne serait pas déclenchée même dans le cas de ce type de changement de prix ;
6. Le taux d'intérêt de chaque prêt DAT est différent. En supposant que le taux d'intérêt des prêts dBTC est de 5% par an, en contractant un prêt pour un an, afin de clôturer son contrat de prêt et de racheter intégralement ses 150k DFI initiaux, Alice doit rembourser 0,5 dBTC \* 1,05 = 0,525 dBTC avant la fin de l'année.

![Contrat de prêt](/img/white-paper/alice-pdc.png)

### Échange décentralisé (DEX, Decentralized Exchange)

Le DEX interne de DeFiChain fournit des échanges décentralisés pour tous les tokens DeFiChain et DFI lui-même, ce qui signifie que tous les tokens DFI et DCT (DAT et DCT) peuvent être listés sur le DEX de DeFiChain. Le DEX sera initialement lancé avec le DFI comme référence de négociation, fournissant des marchés tels que dBTC/DFI, dETH/DFI, dUSDT/DFI, etc. Avec l'augmentation du volume, d'autres référence peuvent être introduites, sous réserve de l'approbation de la DAO, fournissant des marchés tels que dETH/dBTC, DFI/dUSDT, etc.

Le DEX de DeFiChain fonctionne sans avoir besoin de passer la tutelle à un quelconque intermédiaire. Les utilisateurs sont en mesure d'effectuer des transactions de manière autonome et en toute confiance. Une des caractéristiques différenciantes de DeFiChain par rapport à de nombreuses autres solutions financières décentralisées est que DeFiChain n'est pas seulement un protocole de consensus facilitant la DeFi, il est également livré avec une interface utilisateur client (UI) très simple à utiliser qui permet aux utilisateurs d'interagir directement sur la blockchain sans aucun intermédiaire.

### Échange inter-chaînes (XCX)

Un utilisateur détenant des dBTC pourrait être intéressé par la détention de BTC réels au lieu d'un token BTC (dBTC) ancré sur DeFiChain.

L' échange inter-chaînes (Cross-chain Exchange, XCX) de DeFiChain permet à quiconque de faire exactement cela. Le XCX permet de lister les DATs avec leurs tokens natifs, par exemple dBTC pour BTC, dETH pour ETH, dXRP pour XRP. La transaction réelle est effectuée par l'échange sans tiers de confiance des deux tokens, communément appelé échange atomique (atomic swap). L'atomic swap garantit que soit les deux parties reçoivent les tokens échangés, soit aucune transaction n'est effectuée, ce qui constitue une garantie cryptographique solide qu'aucune partie n'est en mesure de tromper l'autre.

Nous utilisons les termes suivants pour décrire les parties dans le XCX :

- Emprunteur : une personne possédant un DAT et souhaitant obtenir un token natif, par exemple, une personne possédant un dBTC et souhaitant obtenir un BTC via le XCX ;
- Prêteur : une personne possédant des BTC et recevant un DAT par le biais du XCX, soit temporairement pour la durée du XCX, soit définitivement, si le XCX expire.

Les ordres XCX contiennent plusieurs paramètres qui peuvent être librement décidés par le marqueur de marché (premier listage d'un ordre). Pour la vente de dBTC contre des BTC (c'est-à-dire quelqu'un qui est intéressé pour recevoir des BTC réels), les paramètres sont :

- Montant : La quantité de tokens/DAT recherchée par le vendeur et la quantité de DAT bloquée ;
- Prime : Montant des frais supplémentaires qu'un vendeur de tokens peut gagner sur cette transaction (la prime est indiquée par montant unitaire, ce qui permet une exécution partielle des ordres de transaction). Avec l'expiration, elle peut également être considérée comme un prêt avec intérêts pour l'acheteur. La prime est payée instantanément dès qu'un XCX est apparié, avant l'expiration du contrat de prêt. La prime peut être positive (+) ou négative (-) selon l'offre et la demande ;
- Garantie : Un montant supplémentaire optionnel en dBTC et/ou DFI qui est verrouillé dans le XCX et qui fournira une incitation supplémentaire pour un prêteur car il se résout dans l'un des deux résultats suivants :
  a. Libéré à l'emprunteur si le montant BTC est payé avant l'expiration ;
  b. Libération au profit du prêteur si le contrat expire sans que l'emprunteur ait effectué un paiement, ce qui constitue une incitation supplémentaire.
- Expiration : Moment où le contrat expire, il peut être défini comme une date dans le passé pour un règlement immédiat, c'est-à-dire pas de prêt, mais un échange pur et simple.
- Adresse du token natif : Adresse à laquelle envoyer les dBTC pour exécuter le contrat.

#### Premier exemple :

Alice a 1 dBTC et veut 1 BTC pour trader sur une bourse centralisée.

Bob a 1 BTC dont il n'a pas besoin pendant 1 mois, et espère générer un intérêt sur prêt pendant cette période.

1. Alice passe l'ordre XCX suivant :

- Montant : 1 dBTC/BTC ;
- Prime : 8 000 DFI ;
- Garantie : 0,1 dBTC ;
- Expiration : 31 décembre 2019 - environ 1 mois.
- Adresse : Alice indique son adresse de dépôt BTC

2. Bob accepte l'offre en envoyant une transaction sur DeFiChain ;
3. Bob reçoit une confirmation sur DeFiChain que sa commande est acceptée, dans le cas où il y a plusieurs transactions d'acceptation de commande.
4. Bob envoie 1 BTC à l'adresse de dépôt BTC d'Alice comme indiqué dans la commande XCX et envoie une transaction sur DeFiChain avec le BTC txid comme reçu. Bob spécifie également une adresse de réception de BTC sur la même transaction pour qu'Alice puisse rembourser les 1 BTC plus tard.
5. De multiples stakers de DeFiChain avec des passerelles BTC confirment que Bob a bien envoyé le montant comme convenu et que le txid est valide.
6. La prime de XCX de 8 000 DFI est instantanément libérée pour Bob. Bob peut faire ce qu'il veut avec les DFI immédiatement, sans aucune condition. C'est à Bob de la garder pour cette transaction.

Maintenant, Alice a 1 BTC et Bob a 8000 DFI. Alice a également 1 dBTC bloqué sur l'ordre XCX et Bob est le bénéficiaire de ce BTC. Notez que le bénéficiaire d'un XCX est transférable, c'est-à-dire que Bob peut vendre le XCX avec Alice à un tiers (cela permet la vente décentralisée de dettes et la tokenisation des créances).

Si Alice souhaite racheter son dBTC du XCX avant la date d'expiration, Alice enverra à Bob le BTC qu'elle a emprunté plus tôt à l'adresse de Bob spécifiée dans le XCX et enverra l'accusé de réception sur DeFiChain. Après confirmation par les stakers avec une passerelle BTC, le contrat XCX se ferme maintenant et Alice récupère son dBTC, ayant payé 8 000 DFIs comme intérêt.

Bob récupère son BTC (en gardant ses 8 000 DFI comme intérêt de prêt).

Si Alice ne souhaite pas racheter le XCX avant l'expiration, Bob conserve le dBTC d'Alice.

Alice garde le BTC (moins les 8 000 DFI d'intérêts) et Bob reçoit maintenant 1 dBTC (plus les 8 000 DFI d'intérêts). De plus, Bob a reçu la garantie de 0,1 dBTC, ce qui lui procure un supplément de 10%.

![XCX](/img/white-paper/alice-bob-xcx.png)

#### Deuxième exemple :

Dans un deuxième scénario, Charlie a 1 dBTC et veut 1 BTC. Il n'a pas l'intention de le rembourser et de récupérer son dBTC. Il ne veut pas non plus inclure une garantie supplémentaire, il ajoute donc une prime plus élevée et une expiration immédiate. Charlie inscrit l'ordre XCX suivant :

- Montant : 1 dBTC/BTC ;
- Prime : 12 000 DFI ;
- Garantie : Aucune ;
- Expiration : Immédiate.

Dave remarque que l'ordre n'a aucune garantie et une expiration immédiate et sait que cet ordre XCX expire instantanément. Il fournit volontiers la contre-opération à Charlie, lui donnant 1 BTC et recevant immédiatement 1 dBTC + 12000 DFI.

Une garantie n'est donc pas une obligation, mais une incitation potentielle pour le prêteur à savoir s'il doit échanger les fonds reçus par la suite ou s'il récupérera les tokens natifs originaux.

### Oracles de tarification

Un oracle est un smart contract sur DeFiChain permettant à plusieurs parties de confiance et désignées de soumettre des flux de prix périodiques de DATs et DFIs.

Plusieurs oracles sont choisis par le DAO de DeFiChain (expliqué dans le chapitre suivant).

### Cas d'usage

Les exemples suivants montrent comment les implémentations techniques de DeFiChain peuvent être utilisées. Il ne s'agit que d'exemples. Beaucoup d'autres applications peuvent être mises en œuvre également.

#### L'effet de levier à long terme

1. Alice a 100k DFI. Elle aime les perspectives de DFI et veut tirer parti de sa position.
2. Alice ouvre un contrat de prêt sur DeFiChain et prend un prêt en dUSDT.
3. Alice vend ses dUSDT pour plus de DFI.

Ainsi, Alice peut obtenir une position longue cumulée en DFI sans investir d'argent supplémentaire.

#### Faire un short / vendre à découvert

1. Bob souhaite vendre à découvert la pièce XXX. Il dispose de DFI.
2. Il ouvre un contrat de prêt sur DeFiChain et contracte un prêt en dXXX.
3. Bob peut maintenant soit vendre des dXXX pour des DFI ou dUSDT sur le DEX, soit convertir des dXXX via le XCX pour vendre XXX sur un marché externe à DeFiChain.
4. Lorsque Bob souhaite clôturer sa position courte, il rachète des XXX (ou des dXXX) sur le marché, si possible à un taux plus bas, clôt son contrat de prêt et termine ainsi sa position courte de XXX.

#### Obtenir un prêt

1. Charlie possède des DFI, mais il a besoin de liquidités à court terme pour une autre pièce XXX. Charlie ne veut pas vendre de DFI pour l'obtenir et ne veut pas non plus dépenser de la monnaie fiduciaire pour acheter cette pièce.
2. Charlie prend un prêt via un contrat de prêt sur DeFiChain pour des dXXX et les convertit en XXX.
3. Lorsqu'il souhaite régler son prêt, Charlie achète simplement XXX/dXXX et clôture son contrat de prêt.

#### Prêter pour générer du cashflow

1. Dave possède des BTC dont il n'a pas besoin à court terme. Il souhaite générer des intérêts (cashflow) en prêtant des BTC.
2. Dave met en vente des BTC sur le XCX en précisant le montant de ses BTC, la prime souhaitée (taux d'intérêt) et l'échéance (période pendant laquelle il n'a pas besoin de ses BTC).
3. Dès qu'une contrepartie accepte l'inscription de Dave, ce dernier reçoit une prime instantanée en DFI.
4. À l'expiration, Dave peut soit récupérer ses BTC, soit recevoir des DFI avec une garantie supplémentaire, ce qui lui rapporte plus que ses BTC initiaux.

---

## Le Coin $DFI

Le $DFI sera l'unité de compte intégrale dans l'écosystème DeFiChain.

La Fondation DeFiChain émettra le token utilitaire DeFi, DFI, plafonné à 1 200 000 000 (1,2 milliards) pendant toute sa durée de vie. Il n'y aura jamais plus que 1,2 milliard de DFI créés.

DFI est divisible jusqu'à 8 décimales.

### Utilité du $DFI

- Le DFI est utilisé pour le paiement des frais pour toutes les transactions et les smart contracts sur DeFiChain.
  - Paiement de frais pour les transactions d'échange décentralisées
  - Paiement de frais pour les transferts de tokens
- Paiement de frais pour les activités de DeFi :
  - Frais DEX
  - Frais XCX
  - Paiement des intérêts des prêts
  - etc.
- Garantie pour l'emprunt d'autres cryptoactifs sur DeFiChain.
- 20.000 DFI est requis pour exécuter un masternode de DeFiChain.
- 1.000 DFI est nécessaire pour créer un DCT. Cette somme est remboursée lors de la destruction du DCT.
- 10 DFI sont nécessaires pour soumettre une proposition de budget de la communauté DFI. Ce montant n'est pas remboursable.
- 50 DFI pour le vote de confiance. Également non remboursable. Les deux sont à payer à l'adresse de brûlage 8defichainBurnAddressXXXXXdRQkSm

### Frais d'activités du DFI

Les frais provenant des activités de DeFi sur DeFiChain sont détruit par le burning et redistribués par le minting de nouveaux tokens sur une période de temps comme indiqué ci-dessous. Cela garantit que les dépositaires de DeFi bénéficient des avantages de gagner des récompenses en facilitant les transactions DeFi sans tiers de confiance sur DeFiChain d'une manière équitable.

**Les récompenses du minage d'un bloc sur DeFiChain sont calculées comme suit :**:

1. Schéma de récompense du bloc sous-jacent (voir le schéma de distribution) +
2. Programme de redistribution des tokens brûlés (burnt)

Le programme de redistribution des tokens brûlés est déterminé automatiquement tous les 259 200 blocs (environ tous les 90 jours) et fonctionne comme suit :

![Programme de redistriution des tokens brûlés ](/img/white-paper/burn.png)

Redistribution des tokens brûlés pour les 259 200 prochains blocs =

1. (Total des tokens brûlés des 259 200 derniers blocs [trimestre -1]) / 4 +
2. (Total des tokens brûlés du bloc courant B - 518 400 au bloc B - 259 200 [trimestre -2]) / 4 +
3. (Total des tokens brûlés du bloc B - 777 600 au bloc B - 518 400 [trimestre 3]) / 4 +
4. (Total des tokens brûlés du bloc B - 1 036 800 au bloc B - 777 600 [trimestre -4]) / 4

### Masternodes

DeFiChain est une blockchain basée sur la preuve d'enjeu. Initialement, posséder 1 000 000 DFI permettait d'avoir un masternode. Aujourd'hui, le montant a été réduit à 20 000 DFI pour la propriété d'un masternode. Le rendement du staking diminuera avec le temps, car le volume et le nombre de transactions compensent la réduction des récompenses de staking par transaction.

Les masternodes ont droit à :

- Des récompenses périodiques de staking comme décrit plus loin dans ce chapitre.
- Soumission de votes pour les décisions clés qui gouvernent DeFiChain dans le système de gouvernance.
- Soumission de votes sur la façon dont le budget de la communauté DFI est alloué et distribué.

### Gouvernance

La Fondation DeFiChain est responsable de l'émission de tokens et est gouvernée par un conseil indépendant. Ce conseil sera gouverné par les masternodes lors de votes par ses membres et aussi en donnant des directives sur les décisions clés.

La Fondation DeFiChain attribue des tokens aux utilisateurs et aux groupes pour accélérer l'adoption (voir la section sur la distribution initiale de tokens et le marketing). La Fondation a pour mission de dynamiser l'écosystème, de faire venir des partenaires dans l'écosystème, de diriger le développement des outils pour les partenaires de l'écosystème et d'autres activités visant à augmenter le nombre de partenaires de l'écosystème.

![Gouvernance de DeFiChain](/img/white-paper/governance.png)

### Fonds de développement de la communauté

La Fondation DeFiChain créera un fonds de développement de la communauté avec une gestion allant jusqu'à 10% des récompenses du bloc. Ce pourcentage peut être mis à jour en soumettant une proposition de DAO qui sera votée par tous les masternodes. Les fonds de développement communautaires ont été popularisés par DASH et sont utilisés aujourd'hui dans certaines DAO sélectives. La communauté déterminera l'utilisation de ces fonds pour le développement, le marketing ou la recherche au profit de la communauté DeFiChain. Les masternodes DFI votent pour les projets qu'ils aiment et les propositions les plus votées chaque mois seront financées.

Il en coûte 10 DFI de soumettre une proposition de budget, et une proposition peut être soumise par n'importe qui. Ces frais sont brûlés et non remboursables, que le budget soit approuvé ou non. Les budgets sont des propositions qui reçoivent un total net de votes positifs égal ou supérieur à 10% du total des votes possibles (par exemple plus de 448 sur 4480). Les budgets peuvent être annulés à tout moment si le total des votes (exprimés ou renouvelés) tombe sous le seuil d'approbation. Les budgets sont traités (financés) dans l'ordre des votes positifs moins les votes négatifs. Les budgets les plus populaires sont financés en priorité. Les votes ont lieu sur une base mensuelle mais peuvent être modifiés par un vote du masternode.

Pour les décisions de gouvernance, seule la Fondation peut soumettre des propositions. Les propositions sont votées de la même manière que les propositions de budget de la DAO, sauf que les décisions seront honorées par un vote à la majorité simple.

[^10]: https://docs.dash.org/en/stable/governance/understanding.html

### Distribution initiale des tokens

Sur les 1.2 milliards de tokens $DFI, 49% seront émis à la Fondation DeFiChain au démarrage. Le reste sera émis aux détenteurs de masternodes au fil du temps.
Des 49% de tokens $DFI initialement émises, 49% seront conservées par la Fondation DeFiChain. Le reste peut être distribué aux investisseurs accrédités, aux grands fonds et aux institutions, collectivement connus comme partenaires externes, pour financer le développement initial de DeFiChain. Afin de décentraliser autant que possible les avoirs de DFI, la Fondation DeFiChain ne peut pas conserver plus de 49% de tous les tokens initialement émis. L'utilisation potentielle des tokens sera décidée par le conseil de la Fondation DeFiChain mais sera exclusivement dirigée vers l'adoption et le développement de DeFiChain.

Pour éviter tout doute, il n'y aura PAS d'ICO publique.

![Schéma de la distribution initiale de tokens](/img/white-paper/initial-token-distribution.png)

D'autres tokens seront uniquement reçus que par le biais du staking, qui est décrit dans le chapitre suivant.

### Calendrier d'émission de jetons par le staking

DeFiChain est initialement lancée avec une récompense de 200 DFI par bloc, dont 10% vont au fonds communautaire. La Fondation s'engage à garantir cette récompense de 200 DFI pour au moins 1 050 000 blocs depuis le premier bloc de genèse, soit environ 1 an.

Par la suite, les récompenses par bloc seront ajustées par un vote de la gouvernance. La Fondation s'engage également à ce qu'il n'y ait jamais plus de 1 200 000 000 (1,2 milliard) de DFI en circulation, à moins que la gouvernance de la DAO ne vote pour modifier cette limite. Par conséquent, le DFI est un token utilitaire déflationniste.

Le programme de staking proposé pour les 10 premières années est conforme au tableau suivant :

<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th scope="col">
          Année
        </th>
        <th scope="col">
          Tokens en circulation au début de l'année
        </th>
        <th scope="col">
          Volume de tokens en staking
        </th>
        <th scope="col">
          Récompense de bloc (DFI)
        </th>
        <th scope="col">
          Objectif de nouveaux tokens
        </th>
        <th scope="col">
          Objectif de nouveaux tokens (nb)
        </th>
        <th scope="col">
          Intérêts de staking
        </th>
        <th scope="col">
          Nouveaux tokens effectifs
        </th>
        <th scope="col">
          Tokens en circulation en fin d'année
        </th>
        <th scope="col">
          % de la capitalisation
        </th>
        <th scope="col">
          Nouveaux tokens sur l'année
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>490 000 000</td>
        <td>95%</td>
        <td>200</td>
        <td>20,00%</td>
        <td>98 000 000</td>
        <td>42,91%</td>
        <td>210 240 000</td>
        <td>700 240 000</td>
        <td>58,35%</td>
        <td>210 240 000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>700 240 000</td>
        <td>85%</td>
        <td>150</td>
        <td>13,33%</td>
        <td>93 365 333</td>
        <td>22,52%</td>
        <td>157 680 000</td>
        <td>857 920 000</td>
        <td>71,49%</td>
        <td>157 680 000</td>
      </tr>
      <tr>
        <td>3</td>
        <td>857 920 000</td>
        <td>75%</td>
        <td>100</td>
        <td>8,89%</td>
        <td>76 259 556</td>
        <td>12,25%</td>
        <td>105 120 000</td>
        <td>963 040 000</td>
        <td>80,25%</td>
        <td>105 120 000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>963 040 000</td>
        <td>70%</td>
        <td>70</td>
        <td>5,93%</td>
        <td>57 069 037</td>
        <td>7,64%</td>
        <td>73 584 000</td>
        <td>1 036 624 000</td>
        <td>86,39%</td>
        <td>73 584 000</td>
      </tr>
      <tr>
        <td>5</td>
        <td>1 036 624 000</td>
        <td>70%</td>
        <td>50</td>
        <td>3,95%</td>
        <td>40 953 047</td>
        <td>5,07%</td>
        <td>52 560 000</td>
        <td>1 089 184 000</td>
        <td>90,77%</td>
        <td>52 560 000</td>
      </tr>
      <tr>
        <td>6</td>
        <td>1 089 184 000</td>
        <td>70%</td>
        <td>40</td>
        <td>2,63%</td>
        <td>28 686 328</td>
        <td>3,86%</td>
        <td>42 048 000</td>
        <td>1 131 232 000</td>
        <td>94,27%</td>
        <td>42 048 000</td>
      </tr>
      <tr>
        <td>7</td>
        <td>1 131 232 000</td>
        <td>70%</td>
        <td>25</td>
        <td>1,76%</td>
        <td>19 862 510</td>
        <td>2,32%</td>
        <td>26 280 000</td>
        <td>1 157 512 000</td>
        <td>96,46%</td>
        <td>26 280 000</td>
      </tr>
      <tr>
        <td>8</td>
        <td>1 157 512 000</td>
        <td>70%</td>
        <td>20</td>
        <td>1,17%</td>
        <td>13 549 295</td>
        <td>1,82%</td>
        <td>21 024 000</td>
        <td>1 178 536 000</td>
        <td>98,21%</td>
        <td>21 024 000</td>
      </tr>
      <tr>
        <td>9</td>
        <td>1 178 536 000</td>
        <td>70%</td>
        <td>10</td>
        <td>0,78%</td>
        <td>9 196 928</td>
        <td>0,89%</td>
        <td>10 512 000</td>
        <td>1 189 048 000</td>
        <td>99,09%</td>
        <td>10 512 000</td>
      </tr>
      <tr>
        <td>10</td>
        <td>1 189 048 000</td>
        <td>70%</td>
        <td>5</td>
        <td>0,52%</td>
        <td>6 185 973</td>
        <td>0,44%</td>
        <td>5 256 000</td>
        <td>1 194 304 000</td>
        <td>99,53%</td>
        <td>5 256 000</td>
      </tr>
    </tbody>
  </table>
</div>

### Acquérir des $DFI

Les coins $DFI seront émis uniquement aux utilisateurs de DeFiChain ou aux partenaires ayant un intérêt à utiliser et à participer à l'écosystème. Il n'y aura PAS de vente publique ou d'offre publique de tokens. Voici les seules façons d'obtenir des $DFI :

- Les investisseurs institutionnels, les investisseurs accrédités et les fonds qui sont intéressés par l'utilisation de DeFiChain peuvent contacter les fondateurs à (partners@defichain.com).
- La Fondation DeFiChain effectuera des airdrop pour les utilisateurs de DeFiChain. (Hodlers et autres faiseurs de marché).
- La Fondation DeFiChain accorde des subventions aux développeurs qui développent des fonctionnalités pour DeFiChain ou des dApps à exécuter sur la blockchain.

---

## La Fondation DeFiChain

La Fondation DeFiChain est une société à responsabilité limitée ("company limited by guarantee" dans l'original), ressemblant à une structure de fondation qui détient les marques commerciales DeFiChain, les domaines et s'assure que les fonds de la fondation DFI sont utilisés selon les instructions des masternodes.

---

## Marketing

### Marché cible

Contrairement à la plupart des autres initiatives axées sur la DeFi, DeFiChain est construite sur le Bitcoin et peut exploiter la quasi-totalité du marché des crypto-monnaies sans être limitée aux chaînes "plus petites" comme Ethereum, etc. Ainsi, au moment de la publication, le marché cible de DeFiChain est de plus de 60-80 millions de propriétaires de crypto-monnaies et nous pouvons nous attendre à ce que des centaines de millions d'autres utilisateurs nous rejoignent dans le futur. Ce groupe d'investisseurs investit et détient des crypto-monnaies en raison des rendements ainsi que de leur croyance dans l'avenir de l'industrie. En tant qu'investisseurs, ils ont largement profité de la hausse de nombreuses crypto-monnaies, mais ils ne sont pas en mesure d'utiliser leurs avoirs pour obtenir de meilleurs rendements. Les services DeFi permettront à ces investisseurs de détenir les tokens auxquels ils croient et d'augmenter leurs avoirs au fil du temps grâce à des investissements qui vont au-delà du simple trading de devises.

### Stratégie de mise sur le marché

L'équipe initiale de DeFiChain est composée de certains des plus grands noms de l'industrie des crypto-monnaies, des personnes qui se sont fait un nom non seulement en tenant leurs promesses, mais aussi en créant une dynamique. L'équipe a mis en place une variété de canaux de marketing et dispose d'un public établi sur les médias sociaux, d'une large distribution de livres dans le domaine de la crypto-monnaie et de contacts robustes dans l'industrie de la crypto-monnaie.

Ayant l'expérience de construire des communautés sur les réseaux sociaux de centaines de milliers d'utilisateurs en quelques années seulement, l'équipe prévoit de tirer parti de ses adeptes actuels et de les amener sur des canaux spécifiques qui seront le domaine de DeFiChain. L'équipe mettra en place une équipe dirigeante de marketing transversal, en utilisant les mêmes compétences éprouvées qu'elle a montrées dans le passé.

Contrairement aux autres blockchains, DeFiChain sera équilibrée entre l'expertise marketing et technologique. Construire le meilleur réseau n'est que la moitié du travail. Les détenteurs de DFI peuvent être assurés que l'équipe de marketing a l'expérience éprouvée dans la construction d'un programme marketing nécessaire au succès du produit et que l'équipe technique sera en mesure de respecter la feuille de route.

### Partenariats

La Fondation DeFiChain sera chargée d'évaluer les demandes des partenaires de l'écosystème et de fournir des subventions de la fondation sous forme de $DFI aux développeurs et aux contributeurs de DeFiChain. De nombreux projets open source et développeurs de blockchain recherchent aujourd'hui le bon projet de blockchain afin de développer leurs applications DeFi, et la perspective d'une DeFiChain dédiée, soutenue par les leaders de l'industrie est séduisante.

La Fondation DeFiChain va entreprendre divers efforts pour choisir les meilleurs projets pour l'expansion de DeFiChain :

- Création d'un processus de demande formel afin que les projets valables puissent demander des subventions pour leur développement (airdrop ou fondation)
- Approcher les développeurs dans l'écosystème qui font des dApps DeFi sur d'autres blockchains, et leur fournir des subventions pour qu'ils développent leurs dApps sur DeFiChain.
- Marketing général pour faire passer le mot sur la disponibilité des subventions de la Fondation DeFiChain pour financer des projets valables.

Chaque projet sur DeFiChain apportera naturellement ses propres utilisateurs et fera des efforts pour le marketing du projet, ajoutant des utilisateurs et des hébergeurs à DeFiChain.

[partners@defichain.com](mailto:partners@defichain.com)

---

## Feuille de route et points d'avancement

![Roadmap](/img/white-paper/roadmap.png)

## Un aperçu de l'avenir

Construire à partir de DeFiChain conduira à certains des avantages les plus excitants, non seulement pour les régions les plus dévelopées, mais aussi pour ceux qui ont le plus besoin de finances décentralisées. Par exemple, imaginez Anna, qui possède une petite entreprise dans une économie en développement, mais qui n'a pas de compte bancaire traditionnel. Elle utilise l'argent mobile et les monnaies numériques pour gérer son entreprise, acceptant les paiements par mobile - ce qui est parfaitement logique, car personne dans sa province n'utilise d'argent liquide ou de cartes de crédit. Anna utilise DeFiChain pour contracter un prêt lorsqu'un de ses fournisseurs paie en retard, sauvant ainsi son entreprise. Autrefois, elle aurait tout simplement fait faillite, car aucune banque ne voulait lui prêter de l'argent. Anna investit également de manière judicieuse. Lorsqu'elle est payée par le fournisseur, elle transfère immédiatement l'argent dans divers actifs symboliques pour éviter l'hyperinflation et l'instabilité de la monnaie de son gouvernement national, et en plus de cela, elle peut gagner des intérêts.

Anna crée un groupe d'entrepreneurs locaux et, ensemble, ils mettent les fonds en commun pour aider d'autres entrepreneurs de leur village. Ils achètent des bureaux, des panneaux solaires et un satellite pour créer un centre d'affaires. Le groupe utilise DeFiChain pour éliminer les frais généraux des contrats juridiques complexes entre eux. Ils reçoivent des dividendes automatiques lorsque le centre d'affaires réalise des bénéfices. Certains d'entre eux réinvestissent dans un drone de livraison qui facture ses services et distribue les revenus aux investisseurs. D'autres investissent dans des équipements de capteurs qui testent les conditions du sol local, et vendent les données aux marchés de matières premières. Tous les capteurs fonctionnent indépendamment et sont facturés indépendamment, et les investisseurs récoltent simplement les bénéfices, tous calculés automatiquement sur DeFiChain.

Aujourd'hui, 5 ans après son utilisation initiale de DeFiChain, Anna est en mesure de contracter un prêt sans garantie, en se basant sur son historique d'investissements intelligents et de remboursements de prêts à temps, ainsi que sur l'évaluation de son secteur par des oracles de confiance. C'est une situation gagnant-gagnant. Les prêteurs viennent du monde entier, qu'il s'agisse de personnes souhaitant diversifier leur portefeuille d'investissements ou d'économies en développement. Les prêteurs n'ont pas à se soucier de la complexité des transactions transfrontalières ou des exigences juridiques. Ils échappent aux systèmes bancaires de leurs propres pays, qui sont passés à des taux d'intérêt nuls ou négatifs sur l'épargne. Maintenant, ces investisseurs réguliers peuvent être assurés de retours sur les investissements basés sur Anna et des personnes comme elle, qui dirigent de grandes entreprises et peuvent fournir des retours sur les investissements des gens.

**C'est la raison d'être de DeFiChain - Faire du monde un meilleur endroit !**
