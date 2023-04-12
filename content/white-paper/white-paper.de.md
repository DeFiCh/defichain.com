---
subtitle: Whitepaper
title: DOCUMENTATION FOR DEFICHAIN ECOSYSTEM
description: Last updated mm/dd/yyyy
---

<h2
      id="Übersicht"
      title="Übersicht"
      className=
        "text-[24px] leading-8 scroll-mt-40 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      1. Übersicht
    </h2>
    <div className="mt-4 text-dark-800">
        Die DeFiChain Foundation entwickelt DeFiChain, eine Blockchain, die speziell für dezentrale Finanzanwendungen entwickelt wurde. DeFiChain konzentriert sich auf die Funktionalität der Blockchain und entwickelt sie speziell für dezentrale Finanzanwendungen. Dadurch bietet DeFiChain einen beispiellos hohen Transaktionsdurchsatz, ein geringeres Fehlerrisiko und intelligente Funktionen, die speziell für die Erbringung von Finanzdienstleistungen auf der Blockchain entwickelt wurden.
    </div>

<div className="mt-6 font-bold font-sans text-xl md:mt-8 lg:mt-12 lg:text-2xl">Dieses Dokument ist kein Verkaufsprospekt</div>

<div className="mt-4 text-dark-800 ">
Dieses Dokument stellt weder einen Prospekt dar noch beinhaltet es einen solchen. Keine der hierin enthaltenen Formulierungen sollte als Aufforderung zur Investition verstanden werden. Dementsprechend bezieht sich dieses Whitepaper in keiner Weise auf ein Angebot von Wertpapieren in irgendeiner Rechtsordnung weltweit. Vielmehr stellt dieses Whitepaper eine technische Beschreibung der Funktionsweise der Cake-Produkte und der Entwicklung und der Verbreitung von DeFiChain dar.
</div>

<div className="mt-6 font-bold font-sans text-xl md:mt-8 lg:mt-12 lg:text-2xl">
Dieses Dokument ist keine vollständige technische Dokumentation
</div>

<div className="mt-4 text-dark-800 ">
Dieses Dokument stellt keine vollständige technische Dokumentation von DeFiChain dar und ist auch nicht als solche zu verstehen. Die in diesem Whitepaper enthaltenen technischen oder sonstigen Informationen sollen einen Überblick über DeFiChain, ihr Design und ihre Anwendungsfälle geben und können sich mit oder ohne vorherige Ankündigung ändern. Die neuesten technischen Informationen finden Sie in den Updates und Dokumentationen auf der offiziellen Website.
</div>

<h2 id="executive-summary"
      title="Zusammenfassung"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 font-sans tracking-normal lg:text-[32px] lg:leading-[40px]">
        2. Zusammenfassung
</h2>

<div className="mt-4 text-dark-800">
      Die Kryptowährungsbranche basiert auf einer einfachen Prämisse: Die Menschen sollten die volle Kontrolle über ihre Finanzen haben. Auch wenn dies eine einfache und selbstverständliche Aussage zu sein scheint, sind die derzeitigen Systeme weit davon entfernt, Finanzdienstleistungen anzubieten, die wirklich unter der Kontrolle der Menschen stehen, die sie nutzen. DeFiChain hat es sich zur Aufgabe gemacht, Menschen (und in Zukunft auch Maschinen und Geräten) einen nahtlosen Zugang zu dezentralen Finanzdienstleistungen zu ermöglichen.
</div>

<div className="mt-5 text-dark-800">
Zu diesem Zweck entwickeln wir DeFiChain, eine Blockchain speziell für dezentrale Finanzsysteme (DeFi) 
<a className="text-electric" href="https://defichain.com/" target="_blank">https://defichain.com</a>.
</div>

<div className="mt-5 text-dark-800">
Indem sie die Funktionalität einer Blockchain speziell für dezentrale Finanzsysteme entwickelt, bietet DeFiChain einen hohen Transaktionsdurchsatz, ein geringeres Fehlerrisiko und intelligente Funktionen, die speziell für die Umsetzung der ursprünglichen Absicht von Satoshi entwickelt wurden: Die Schaffung einer zuverlässigen alternativen Form von Finanzdienstleistungen, die auf Bitcoin aufbaut.
</div>

<div className="mt-5 text-dark-800">
Bitcoin ist, wie im ursprünglichen Whitepaper von Satoshi beschrieben, als eine Form von digitalem Bargeld, als Speicher und Tauschmittel für Werte gedacht. Die Entwicklung hin zu Ethereum und intelligenten Verträgen, den Smart Contracts, hat es ermöglicht, enorme neue Funktionen auf einer Blockchain aufzubauen, doch diese Entwicklung hat ihren Preis. Das Konzept eines globalen Betriebssystems für alles hat ein System geschaffen, das eine komplexe Codebasis für Smart Contracts, einen langsamen Durchsatz und Schwierigkeiten bei der Steuerung des Systems mit sich bringt.
</div>

<div className="mt-5 text-dark-800">
DeFiChain geht das dezentrale Finanzsystem als ein spezifisches und wichtiges Segment der Blockchain-Community an. DeFiChain ist eine eigens entwickelte Blockchain, die speziell für DeFi-Anwendungen optimiert ist. DeFiChain ist absichtlich nicht Turing-complete und unterstützt keine anderen Funktionen als die, die für das dezentrale Finanzsystem benötigt werden. Das Ergebnis ist eine Blockchain, die einen höheren Durchsatz und bessere Funktionen speziell für dApps im Finanzbereich bietet. Der Vorteil eines nicht Turing-completen Befehlssatzes ist, dass die Gefahr von Programmierfehlern, wie sie bei Ethereum Smart Contracts (z. B. DAO-Hack) oder bei Parity (gesperrte Gelder) aufgetreten sind, deutlich geringer ist. Es ist zwar wichtig, dass wir einige Smart-Contract-Sprachen haben, die Turing-complete sind, aber im Finanzbereich ist es angebracht, die Möglichkeiten der Programmiersprache zu Gunsten eines sichereren Systems mit stark reduzierten Angriffsvektoren einzuschränken.
</div>

<h3 id="the-problem" title="Die Problematik" className="mt-6 font-bold font-sans scroll-mt-40 text-xl md:mt-8 lg:mt-12 lg:text-2xl">
Die Problematik
</h3>

<div className="mt-5 text-dark-800">
Heutzutage werden fast alle Finanzdienstleistungen von Banken erbracht. Investitionen zum Beispiel sind per Definition der Einsatz von Kapital, um mehr Kapital zu verdienen. Anleger/innen nutzen eine Bank, um ihr Geld in zins- oder dividendenbringende Instrumente zu investieren und so ihr Vermögen zu vermehren. Die Probleme mit Finanzdienstleistungen werden immer deutlicher: erhöhte Kosten durch Zwischenhändler, langsame Transaktionen, Verzögerungen bei grenzüberschreitenden Geschäften und die fehlende Zugangsmöglichkeit für viele Bevölkerungsschichten. Unzählige Fintech-Lösungen wurden eingeführt, um das System zu verbessern, aber im Großen und Ganzen kontrolliert das zugrundeliegende Bankensystem immer noch das Geschehen, sodass Fintech nur begrenzte Verbesserungen gebracht hat.
</div>

<div className="mt-5 text-dark-800">
Kryptowährungen und dezentrale Finanzsysteme (DeFi) bieten eine Möglichkeit, mit einem neuen System zu beginnen und die Herausforderungen bei der Veränderung der Finanzindustrie zu meistern. Während Kryptowährungen Milliarden an Investitionen angezogen haben, hinken dezentrale Finanzdienstleistungen hinterher. Wenn es um Investitionen in Kryptowährungen geht, können Krypto-Investoren zwar kaufen und verkaufen, aber das war's auch schon. Die Kryptowährung selbst kann nicht auf die gleiche Weise investiert werden wie Fiat-Währungen. Die ersten Versuche, Peer-to-Peer-Kredite und die Tokenisierung von Vermögenswerten zu schaffen, haben sich bisher als unvollständig und unzuverlässig erwiesen, so dass Investoren nur sehr begrenzte Möglichkeiten haben, wenn es um die Anlage ihrer Krypto-Assets geht. Das Potenzial ist enorm, Finanzdienstleistungen in Kryptowährungen anzubieten, so wie sie auch in Fiat-Währungen angeboten werden.
</div>

<h3 id="the-solution" title="Die Lösung" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Die Lösung
</h3>

<div className="mt-5 text-dark-800">
DeFiChain wurde für Investoren auf dem Kryptowährungsmarkt entwickelt, die ihre Kryptowährung wie jede andere Form von Kapital einsetzen wollen, damit sie auf allen Märkten eine Rendite erzielen können. DeFiChain ist eine dedizierte, nicht Turing-complete Blockchain, die speziell für das dezentrale Finanzsystem (DeFi) entwickelt wurde. DeFi bietet die volle Funktionalität für dieses spezielle Segment der DLT-Community und opfert andere Funktionen zugunsten von Einfachheit, schnellem Durchsatz und Sicherheit.
</div>

<div className="mt-5 text-dark-800">
Der Funktionsumfang umfasst unter anderem:
<div className="grid grid-rows-3 grid-flow-col list-disc">

  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Dezentrale Darlehen</li>
    <li>Dezentrales Wrapping von Token</li>
    <li>Dezentrale Preisorakel</li>
    <li>Dezentrale Tauschgeschäfte</li>
    <li>Übertragbare Schulden und Forderungen</li>
    <li>Dezentrale nicht besicherte Darlehen</li>
    <li>Tokenisierung von Vermögenswerten</li>
    <li>Ausschüttung von Dividenden</li>
  </ul>
</div>
</div>

<h3 id="timeline" title="Timeline" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Timeline
</h3>
<div className="mt-5">

![Roadmap](/img/white-paper/roadmap.png)

</div>

<h2 id="background"
  title="Hintergrund"
  className="text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]">
  3. Hintergrund/Branche
</h2>

<h3 id="promises" title="Die Möglichkeiten und Herausforderungen des DeFi-Systems" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:text-2xl">
Die Möglichkeiten und Herausforderungen des DeFi-Systems
</h3>

<div className="mt-5 text-dark-800">
Das dezentrale Finanzsystem verspricht, eine Vielzahl von Finanzinstrumenten anzubieten, ohne dass Mittelsmänner dafür sorgen müssen, dass die Dienstleistungen verlässlich sind. Nach Angaben der OECD machen Finanzdienstleistungen in <a className="text-electric" href="https://www.investopedia.com/terms/d/developed-economy.asp" target="_blank">entwickelten Volkswirtschaften<sup>1</sup></a> 20-30% des gesamten Dienstleistungsumsatzes und etwa 20% des gesamten <a className="text-electric" href="https://www.investopedia.com/terms/g/gdp.asp" target="_blank">Bruttoinlandsprodukts</a> aus. Das ist ein riesiger Wirtschaftszweig, der sich nur auf eines konzentriert: sicherzustellen, dass Finanztransaktionen verlässlich sind. Mit dem Aufkommen der Blockchain können vertrauensunabhängige Systeme und intelligente Verträge einen Großteil der Funktionen dieser Branche ersetzen, wodurch die Rendite für den einzelnen Anleger drastisch steigt.
</div>

<div className="mt-5 text-dark-800">
Finanzdienstleistungen leisten heute einen wichtigen Dienst, aber zu sehr hohen Kosten, und trotz vieler Fintech-Entwicklungen bleiben die folgenden grundlegenden Probleme bestehen:
</div>
<div className="mt-8 font-bold font-sans text-xl">
Hohe Transaktionskosten.
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
Aufgrund regulatorischer Anforderungen, veralteter Systeme mit komplexen Interoperabilitätsproblemen und der Kontrolle durch große Institutionen sind die Transaktionsgebühren für den durchschnittlichen Nutzer von Bank- und Finanzdienstleistungen hoch. Dienstleistungen, die einen Broker erfordern, sind sogar noch teurer, da Agenten und andere Zwischenhändler beteiligt sind.
</div>
<div className="mt-6 font-bold font-sans text-xl">
Langsame Transaktionen, insbesondere bei internationalen Transaktionen.
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
Obwohl es theoretisch nur Minuten dauern sollte, bis ein Computer eine Transaktion durchführt, kann es innerhalb eines Landes Stunden dauern, Geld von einer Institution zu einer anderen zu transferieren, und zwischen Ländern kann es Tage dauern.
 </div>
<div className="mt-6 font-bold font-sans text-xl">
Mangelnde Transparenz und unfaire Vorteile für große Akteure.
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
Finanzinstrumente sind komplex und die meisten Menschen haben keinen Zugang zu den Informationen, die es ihnen ermöglichen würden, optimale Entscheidungen zu treffen. Mangelnde Transparenz ist einer der Hauptfaktoren, die zur Finanzkrise 2008 geführt haben, und auf kurze Sicht sind kleinere Anleger (die Durchschnittsperson) gegenüber institutionellen Anlegern immer im Nachteil.
</div>
<div className="mt-6 font-bold font-sans text-xl">
Unzugänglichkeit und/oder höhere Kosten für einkommensschwache Menschen.
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
Finanzdienstleistungen sind in vielen Gegenden einfach nicht verfügbar, und wenn doch, müssen Menschen mit geringem Einkommen prozentual sogar höhere Gebühren zahlen als der Durchschnitt.
</div>
<div className="mt-6 font-bold font-sans text-xl">
Wirkung auf verbundene Straftaten beschränkt
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
Trotz der Gesetzgebung zur Eindämmung von Geldwäsche und damit zusammenhängenden Straftaten gibt es so gut wie keine Anhaltspunkte dafür, dass das derzeitige System oder AML die Geldwäsche tatsächlich eindämmt.
</div>

[^1]: https://www.investopedia.com/ask/answers/030515/what-percentage-global-economy-comprised-financial-services-sector.asp

<div className="mt-5 text-dark-800">
Fintech hat versucht, diese Probleme zu lösen, mit einigem Erfolg. Fintech-Lösungen wie internationale Online-Überweisungsdienste, Spar- und Anlage-Apps und mobiles Geld für unterversorgte Märkte verbessern die Situation allmählich. Die Veränderungen sind jedoch schrittweise und basieren immer noch auf einem System, das grundsätzlich den Einsatz von Finanzdienstleistern erfordert, um Vertrauen zu schaffen. Auch wenn die Kosten teilweise gesenkt werden können, kann Fintech das grundlegende Problem der mangelnden Transparenz nicht lösen, weil es mit denselben Finanzinstrumenten arbeitet und dieselben großen Institutionen wie das traditionelle Finanzwesen nutzt.
</div>

<div className="mt-12">

![2019: DeFi](/img/white-paper/2019-defi.png)

</div>

<div className="mt-12 text-dark-800">
Aus diesem Grund haben viele Investoren begonnen, Teile ihrer Investitionen in Kryptowährungen zu verlagern. Kryptowährungen bieten per Definition eine vollständige Transparenz, die traditionelle Systeme einfach nicht bieten können. Außerdem ist der Verwaltungs- und Bürokratieaufwand minimal. Die meisten Tätigkeiten, die früher von Bediensteten ausgeführt wurden, können in den Code dezentraler Finanzsysteme geschrieben werden. Natürlich gibt es immer noch einen gewissen Aufwand für die Erstellung und Pflege des Codes sowie für die Wartung der Netzwerke, aber der bürokratische Aufwand ist minimal, wodurch ein Großteil der Kosten für Transaktionen in diesen Systemen entfällt.
</div>
<div className="mt-5 text-dark-800">
Trotz der vielversprechenden Möglichkeiten des dezentralen Finanzsystems steckt die Technologie noch in den Kinderschuhen, und es gibt viele Möglichkeiten, ein reichhaltigeres und robusteres dezentrales Finanzumfeld zu schaffen. Bislang haben Investoren in Kryptowährungen nur sehr begrenzte Investitionsmöglichkeiten. Versprechungen von Peer-to-Peer-Kreditplattformen, Tokenisierung von Vermögenswerten und anderen Arten von Blockchains haben sich entweder nicht erfüllt, wurden gehackt oder es wurde nur eine reduzierte Version des ursprünglichen Versprechens umgesetzt.
</div>
<div className="mt-5 text-dark-800">
Heutzutage gibt es für Anleger in Kryptowährungen fast durchgängig nur eine Möglichkeit, Geld mit ihrem Kapital zu verdienen: der Anstieg des Kryptowährungswertes. Kurzfristig mag dies eine gute Investition sein, aber so ist die Währung nicht konzipiert. Die Investition von Kapital sollte eine Rendite abwerfen, und Kryptowährungen sind so konzipiert, dass sie wie jede andere Form von Währung funktionieren. Investoren wollen heute die Möglichkeit haben, Geld zu leihen, zu investieren und Renditen auf ihre Kryptowährungsinvestitionen zu erhalten. Gut konzipierte DeFi-Plattformen sollten die Entwicklung einer Vielzahl von sicheren Finanzinstrumenten für die Anlage von Kryptowährung ermöglichen.
</div>

<div className="mt-12">

![Be your own bank](/img/white-paper/be-your-own-bank.png)

</div>

<h3 id="stateOfDefi" title="DeFi Stand heute" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
DeFi Stand heute
</h3>
<div className="mt-5 text-dark-800">
Der aktuelle Stand des dezentralen Finanzsystems (DeFi) ist geprägt von Allzweck-Blockchains, von denen die meisten Turing-Complete Befehlssätze für die Entwicklung von Smart Contracts auf der Chain anbieten. Dieses starre Streben nach Turing-completen Smart-Contracts-Sprachen ist zwar für viele Programmiersprachen geeignet, hat aber zu einer Vielzahl von Problemen geführt, wenn es um die Skalierbarkeit, Sicherheit und Robustheit der Blockchains geht.

<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
<li class="mt-5">Die schiere Masse an dApps in Netzwerken wie Ethereum, EOS und TRON hat potenzielle (oder erwiesene) Auswirkungen auf andere dApps im Netzwerk. Das offensichtlichste Beispiel war, als CryptoKitties das Ethereum-Netzwerk praktisch zum Stillstand brachte. Während einige der Netzwerke mit schnellerem Durchsatz sagen, dass dies nicht passieren kann, wird es einige Zeit dauern, bis ein anderes Netzwerk die kritische Masse an Apps auf Ethereum erreicht, so dass wir beweisen können, ob dies der Fall ist oder nicht.</li>
<li class="mt-5">Bei seriösen Finanz-dApps ist es wichtig zu sehen, dass das Netzwerk auf eine verantwortungsvolle und sichere Weise gepflegt und verwaltet wird. Eine Blockchain, die mit Spielen, Glücksspielen und anderen weniger "unternehmenskritischen" Anwendungen überschwemmt ist, wird letztlich die Entwicklung und Ausrichtung der Blockchains beeinflussen. Mit Governance-Modellen, die die Macht an Masternodes, Entwicklergruppen und Token-Inhaber vergeben, wird das Kernentwicklungsteam letztlich von den größten Akteuren beeinflusst. Dezentrale Finanz-Apps können es sich nicht leisten, die Blockchain mit jedem zu teilen, der sich entscheidet, dieses Betriebssystem zu verwenden.</li>
<li class="mt-5">Bei der Verwendung von Turing-completen Befehlssätzen müssen Programmierer komplexe Programme erstellen, um jede Art von Anwendung zu entwickeln. Um beispielsweise einen Peer-to-Peer-Darlehensvertrag auf der Grundlage von MakerDAO zu erstellen, benötigt ein Programmierer etwa 2000 Zeilen Code. Jeder Fehler in diesem Code kann zum Verlust des Kapitals oder zu anderen Konsequenzen führen. Die Pflege einer so großen Codebasis bedeutet zwangsläufig eine größere Fehleranfälligkeit und eine große Angriffsfläche selbst für einfache Anwendungen.</li>
</ul>
</div>
<div className="mt-5 text-dark-800">
Die Einschränkungen von Allzweck-Blockchains für DeFi-Anwendungen haben eine Marktchance eröffnet, um diesen Markt zu bedienen. Während die Dynamik der Kryptowährungen weiter zugenommen hat, laufen die meisten aktuellen Anwendungen noch auf Ethereum. Bedenken bezüglich des Netzwerks haben bereits dazu geführt, dass einige der wichtigsten Projekte eine Portierung oder die Arbeit mit alternativen oder zusätzlichen Blockchains in Betracht ziehen.
</div>

<h3 id="currentProblems" title="Aktuelle Probleme von DeFi" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Aktuelle Probleme von DeFi
</h3>
<div className="mt-5 text-dark-800">
<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
<li class="mt-5">Finanz-dApps setzen Zuverlässigkeit voraus und wollen nicht mit Blockchains assoziiert werden, die Apps wie Wetten, Unterhaltung oder andere Apps hosten, die den Ruf einer Blockchain jederzeit trüben können.</li>
<li class="mt-5">Ein plötzliches Ansteigen des Volumens einer dApp auf einer Blockchain kann sich potenziell auf alle anderen dApps auf dieser Blockchain auswirken, entweder in Bezug auf den Durchsatz, den Transaktionspreis oder zusätzliche Auswirkungen, wie bei CryptoKitties auf Ethereum zu sehen.</li>
<li class="mt-5">Allzweck-Blockchains erfordern einen hohen Programmieraufwand für die Bereitstellung von Finanzdienstleistungen, wodurch das Risiko der Hackbarkeit oder von Fehlern im Code steigt.
  Funktionalitäten, die Grundvoraussetzungen für Finanzdienstleistungen sind, wie z.B. Multisig, sind oft schwer zu implementieren oder fehlen bei universellen Blockchains.</li>
<li class="mt-5">Die Pflege einer Turing-completen Blockchain bedeutet, dass sich die Ressourcen nicht auf die Bereiche konzentrieren, die für DeFi-Apps von Bedeutung sind.</li>
<li class="mt-5">Die Governance-Modelle der meisten heutigen Blockchains sind unreif und zeigen Anzeichen von Politisierung, Zentralisierung und Unsicherheit. Ohne formale Governance-Strukturen ist die Zukunft dieser Blockchains ungewiss. Die jüngsten Diskussionen über Upgrades und Forks sowohl bei Ethereum als auch bei Bitcoin haben die Unausgereiftheit dieser Systeme offenbart, und selbst der Marktführer in Sachen Governance, Aragon, hat die Anfälligkeit seines On-Chain-Governance-Systems bei der Abstimmung im Sommer 2019 gezeigt, bei der ein großer "Wal"-Token-Inhaber das Ergebnis mehrerer Proposal-Abstimmungen in letzter Minute verändert hat. Solche Schwachstellen sind bei Blockchains, die sich mit Finanzen befassen, inakzeptabel.</li>
<li class="mt-5">Regulierungsstandards und Regulierungsbehörden, die den Bedürfnissen von nativ grenzüberschreitenden Währungen und Finanzinstrumenten gerecht werden. Rechtsprechungsbasierte Regulierung und Regulierung, die auf veralteter Technologie basiert, wird den Bedürfnissen der DeFi-Branche nicht gerecht. Es ist klar, dass ein neuer rechtlicher und regulatorischer Rahmen notwendig ist, um die Rechte der Menschen zu schützen, die diese Systeme nutzen.</li>
<li class="mt-5">Die Blockchain-Branche selbst hat noch nicht die Reife gezeigt, um eigene Standardisierungsgremien einzurichten, die Best Practices oder Selbstregulierung in einer Weise bereitstellen, die die Zuverlässigkeit der Branche für dezentrale Finanzanwendungen unter Beweis stellen würde. Bislang waren die Versuche, Interoperabilität oder Selbstregulierung zu schaffen, unausgereift und haben nicht zu einer Leitlinie oder zu Standards geführt, die von internationalen Gremien oder seriösen Regulierungsbehörden akzeptiert werden könnten. Das Fehlen einer Selbstregulierung macht die Branche noch anfälliger für eine Regulierung von außen und macht das Umfeld für seriöse Investoren riskant.</li>
</ul>
</div>

<h3 id="consequences" title="Konsequenzen für den DeFi-Markt" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Konsequenzen für den DeFi-Markt
</h3>
<div className="mt-5 text-dark-800">
<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
<li class="mt-5">Multisig-Wallets sind das Beste, was die Branche zu bieten hat, wenn es um die gemeinsame Verwaltung von Geldern geht, und die Lösungen für Multisig sind bis zu einem gewissen Grad unausgereift, teils geradezu als Murks zu bezeichnen. Multisig ist tendenziell gerätespezifisch und nicht flexibel für verschiedene Szenarien. Im traditionellen Finanzwesen können Konten mit mehreren Unterschriften beispielsweise den Unterzeichnern unterschiedliche Berechtigungsstufen zuweisen oder unterschiedliche Unterschriften für verschiedene Transaktionsarten und -ebenen erfordern. Verschiedene Chains verfolgen unterschiedliche Ansätze, um ihre bestehenden Blockchains um Multisig-Funktionen zu erweitern.
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li class="mt-5 ml-4">
    Das BIP 11: M-of-N Standard Transactions ist ein Bitcoin Improvement Proposal (BIP), mit dem die Bitcoin-Blockchain um Multisig-Unterstützung erweitert werden soll.</li>
    <li class="mt-5 ml-4">Ethereum bietet einen Turing-completen Befehlssatz für die Entwicklung von Multisig auf einer Chain, was dazu führt, dass mehrere Entitäten Multisig Smart Contracts anbieten. Fehler wie die in der Parity-Multisig (siehe unten) haben zu ungeahnten Summen an verlorenen Guthaben geführt.</li>
  </ul>
</li>
<li class="mt-5">Aufgrund der Komplexität des Codes, der für Multisig erforderlich ist, gingen 2017 durch einen Fehler im Code<a className="text-electric" href="#user-content-fn-2"><sup>2</sup></a> mehr als 150.000 ETH durch einen Hack in der Parity Multisig Wallet verloren. In dem zitierten Artikel werden Möglichkeiten aufgezeigt, wie dieser Code-Fehler hätte vermieden werden können, aber es wird auch betont, dass diese Komplexität der Codierung viele verschiedene Angriffsmöglichkeiten bietet. Eine ganze Branche hat sich um die Prüfung von Smart Contracts gebildet, weil die Anfälligkeit der Materie so groß ist.</li>
<li class="mt-5">Beim größten Hack der Branche (oder einem Bug?!) wurden der DAO 3,6 Millionen ETH entwendet, und zwar aufgrund eines Codierungsfehlers in dem Smart Contract, der alle Gelder der DAO enthielt.</li>
</ul>
</div>
<div className="mt-5 text-dark-800">
Eines der vielen Ergebnisse ist, dass die hohen Risiken in die zugrundeliegenden Verträge eingepreist werden, was zu überhöhten Kosten für die Nutzer führt, wie ein Vergleich der Kurse von DeFi- und Nicht-DeFi-Beispielen zeigt. (Zum Beispiel 8 % bei dezentralem DAI zu 1,75 % bei zentralem USDC (Stand Anfang Oktober 2019): <a className="text-electric" href="https://deficompare.com/" target="_blank">https://deficompare.com/</a>) Beide Token stehen für 1 USD, aber die dezentrale Version ist 6,25 % teurer, weil das Risiko im Ethereum-Contract eingepreist ist.
</div>
<div className="mt-5 text-dark-800">
Die oben beschriebenen Punkte sind für jede Art von Finanztransaktion und jeden Anleger einfach inakzeptabel. Aus diesem Grund ist es wichtig, spezielle Dienste zu entwickeln, die solche Verstöße verhindern und die Risiken und damit die Kosten senken. In der Blockchain-Welt werden diese Art von Angriffen durch geeignete Programmierregeln und die Reduzierung von Angriffsvektoren verhindert.
</div>

[^2]: [https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7](https://blog.zeppelin.solutions/on-the-parity-wallet-multisig-hack-405a8c12e8f7)

<h2 id="alternatives"
      title="Vergleich der bestehenden Alternativen"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]">
        4. Vergleich der bestehenden DeFi-Alternativen
</h2>

<h3 id="bitcoinWhyNot" title="Bitcoin: Warum nicht?" className="mt-6 font-bold font-sans text-xl md:mt-8 scroll-mt-40 lg:text-2xl">
Bitcoin: Warum nicht?
</h3>
<div className="mt-5 text-dark-800">
Angesichts unseres Optimismus in Bezug auf Bitcoin stellt sich zunächst die Frage, warum DeFi nicht mit der Bitcoin-Blockchain entwickelt wird. Obwohl Bitcoin nur einfache Smart Contracts zulässt, haben einige Projekte begonnen, Workarounds zu entwickeln. Allerdings sind die Transaktionskosten auf der Bitcoin Chain zu hoch und wir glauben nicht, dass sie für die Geschwindigkeit, die für Finanztransaktionen erforderlich ist, geeignet ist. Die Bitcoin Chain funktioniert derzeit wie vorgesehen als Wertaufbewahrungsmittel. Unserer Meinung nach ist die Beibehaltung dieses einzigen Zwecks die beste Nutzung der Chain, und das hat sich in den letzten zehn Jahren bewährt. Die Aufnahme von Finanzdienstleistungen in die Main Chain führt zu unnötiger Komplexität und kann sowohl für DeFi als auch für Bitcoin unerwünschte Nebeneffekte haben. Außerdem glauben wir nicht, dass die Bitcoin-Governance dazu in der Lage ist. Wenn die Anforderungen der DeFiChain von denen der Miner oder Entwickler auf der Bitcoin Chain abweichen, wären wir irgendwann ihren Entscheidungen unterworfen.
</div>

<h3 id="turingComplete" title="Turing-complete Lösungen" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Turing-complete Lösungen: Ethereum, EOS, Tron...
</h3>
<div className="mt-4 text-dark-800">
Bis heute wurden eine Reihe von DeFi-Anwendungen auf Ethereum, Tron, EOS und vielen anderen Turing-complete Chains entwickelt. Da Ethereum die größte Verbreitung hat, konnten die Probleme, die mit der Verwendung einer Turing-complete Blockchain für DeFi-Anwendungen einhergehen, am schnellsten aufgedeckt werden. Der DAO-Hack war eine der ersten und dramatischsten Enthüllungen über die Anfälligkeit der Verwendung einer so komplexen Programmiersprache. Jeder, der einen Token über das Netzwerk ausgibt, weiß, wie schwierig das ist. Allein die Erstellung und Ausgabe eines ERC20-Tokens kann leicht über 100.000 USD kosten, wenn man die Kosten für die Prüfung von Smart Contracts berücksichtigt, die für innovative Lösungen notwendig sind. Allein die Tatsache, dass es eine ganze Branche gibt, die sich mit der Prüfung von Smart Contracts beschäftigt, sollte ausreichen, um das Problem zu verdeutlichen. Obwohl ERC20 der Industriestandard ist, ist er immer noch so leicht zu hacken, dass es unmöglich ist, auch nur einen einfachen Token herauszugeben, ohne einen teuren professionellen Prüfer oder Programmierer zu engagieren.
</div>
<div className="mt-5 text-dark-800">
Noch gravierender ist, dass es inzwischen möglich ist, automatisiert nach angreifbarem Code zu suchen. Eine Studie aus dem Jahr 2018 hat eine Million Smart Contracts gescannt und dabei über 34.000 hackbare Smart Contracts gefunden<a className="text-electric" href="#user-content-fn-3"><sup>3</sup></a>. Es ist unvorstellbar, dass 3,4 % der Finanztransaktionen angreifbar sind. Im Moment scheint sich dieses Problem vor allem auf Ethereum zu konzentrieren, aber wir glauben, dass die meisten anderen Turing-Complete Chains die gleichen Probleme haben werden, sobald mehr Anwendungsfälle auf ihnen laufen.
</div>
<div className="mt-5 text-dark-800">
Das zweite Problem liegt vor allem in Ethereum selbst: Das Netzwerk ist bereits an der Kapazitätsgrenze angelangt. Es scheint einfach nicht machbar zu sein, das Netzwerk für alle dezentralen Finanzanwendungen zu nutzen. Die Marktkapitalisierung von Ethereum beträgt nur ein Zehntel von der von Bitcoin. Wenn das System bereits nahe an der Kapazitätsgrenze ist, ist es schwer vorstellbar, wie es die Kapazität eines echten DeFi-Netzwerks für den Rest des Ökosystems schaffen kann. Das hat Vitalik Buterin in einem Interview eingeräumt: <a className="text-electric" href="https://beincrypto.com/ethereum-founders-admit-never-designed-scalability/" target="_blank">https://beincrypto.com/ethereum-founders-admit-never-designed-scalability/</a>.
</div>

[^3]: https://arxiv.org/pdf/1802.06038.pdf

<div className="mt-12">

![Be your own bank](/img/white-paper/graph.png)

</div>

<h2 id="solution"
      title="Die DeFiChain Lösung"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]">
        5. Die DeFiChain Lösung
</h2>
<h3 id="ecosystem" title="Verbleib im Bitcoin-Ökosystem" className="mt-6 font-bold font-sans scroll-mt-40 text-xl md:mt-8 lg:text-2xl">
Verbleib im Bitcoin-Ökosystem
</h3>
<div className="mt-5 text-dark-800">
Der Kryptowährungsmarkt als Ganzes ist schwer vorherzusagen. Die meisten Coins sind wertlos geworden, und es bleibt abzuwarten, wie sich das System selbst erhalten wird, wenn das Geld der großen ICOs ausgeht.
</div>
<div className="mt-5 text-dark-800">
Trotzdem ist unser Ausblick auf Bitcoin extrem optimistisch. Im Laufe des letzten Jahres hat Bitcoin trotz der Marktvolatilität, einschließlich der Instabilität der traditionellen Finanzmärkte, seinen Wert beibehalten, seine Robustheit gegenüber Angriffen und Hackern unter Beweis gestellt und sich zunehmenden Respekt bei den traditionellen Finanzakteuren verschafft.
</div>
<div className="mt-5 text-dark-800">
Bitcoin wird zunehmend als Wertaufbewahrungsmittel angesehen und gilt als Standard, an dem andere Kryptowährungen gemessen werden. Auch wenn die Portfolios der Menschen sehr unterschiedlich sind, bleibt Bitcoin die Standardwährung, die fast jeder Krypto-Investor als Hauptbestandteil seines Portfolios hält. Die riesige Gemeinschaft und das Ökosystem rund um Bitcoin sind ein gutes Zeichen für seine langfristige Überlebensfähigkeit als Wertaufbewahrungsmittel.
</div>
<div className="mt-5 text-dark-800">
Aus diesem Grund stellt die Entwicklung dezentraler Finanzdienstleistungen rund um Bitcoin eine enorme Chance dar, die bisher nicht genutzt wurde. Das liegt zum einen an der Schwierigkeit, Smart Contracts zu erstellen, die mit dem Bitcoin-Netzwerk funktionieren, und zum anderen an der Aufsplitterung der Entwicklergemeinschaft in viele Nebenprojekte. Wir glauben, dass diese Tendenz der Entwicklergemeinschaft, sich auf die neuesten Entwicklungen zu stürzen, die Aufmerksamkeit vom eigentlichen Thema ablenkt: Bitcoin ist hier, um zu bleiben.
Daher glauben wir, dass der Aufbau einer DeFi Blockchain auf Bitcoin das Beste aus beiden Welten bringen würde: die Stabilität und Unveränderlichkeit von Bitcoin und die Skalierbarkeit und Funktionalität der DeFi-Chain.
</div>

<h3 id="building" title="Auf Bitcoin bauen" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Auf Bitcoin bauen
</h3>

<div className="mt-4 text-dark-800">
Eine der größten Herausforderungen bei neuen Blockchains ist es, eine robuste Unveränderlichkeit zu schaffen, nachdem eine kritische Masse an Nutzern und Blöcken die Chain gesichert hat. Um sofortige Sicherheit und Unveränderlichkeit der Blockchain zu gewährleisten, wird sich DeFiChain an der Bitcoin-Blockchain verankern. Alle paar Minuten speichert DeFiChain seinen neuesten Merkle-Tree in der Bitcoin-Blockchain, ähnlich wie Rootstock (Turing-complete Smart Contracts, gesichert durch Bitcoin <a className="text-electric" href="https://www.rsk.co/" target="_blank">https://www.rsk.co/</a>) eine Verbindung zu Bitcoin plant. Auf diese Weise ist die neueste Chain immer vollständig sicher und unabänderbar und kann mit dem letzten in Bitcoin verankerten Datensatz abgeglichen werden. Mit der Zeit wird DeFiChain die Verankerungen in größeren Abständen verteilen. Dieser Verankerungsmechanismus gewährleistet vom ersten Tag an nachweislich unveränderliche Aufzeichnungen und schützt vor Angriffen, Hackern und Schwachstellen, die bei entstehenden Chains Anlass zur Sorge geben können.

  <div className="mt-5">
  Gleichzeitig behält DeFiChain seinen eigenen Konsens-Mechanismus und Funktionsumfang bei und ermöglicht so all die Eigenschaften, die Bitcoin von Natur aus nicht hat. Dies wird dadurch erreicht, dass DeFiChain eine dedizierte, nicht Turing-complete Blockchain ist, die speziell für das dezentrale Finanzsystem (DeFi) entwickelt wurde, das auf Bitcoin aufbaut. DeFiChain bietet die volle Funktionalität für dieses spezielle Segment der DLT-Community und verzichtet zugunsten von Einfachheit, schnellem Durchsatz und Sicherheit auf andere Funktionen.
  DeFiChain nutzt einen vollständig dezentralen Proof of Stake-Mechanismus, der Folgendes ermöglicht:
  </div>
  <div className="mt-5">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Einen massiv skalierbaren und energiesparenden Konsens</li>
    <li>Schnelle Transaktionen und hohe Sicherheit</li>
    <li>Die Fähigkeit, eine Vielzahl von DeFi-Apps auf Basis einer Chain schnell und mit sehr geringer Angriffsfläche zu erstellen</li>
    <li>Unterstützung mehrerer Token auf einer Chain durch dezentrale Wrapped-Token-Technologie.</li>
    <li>Dezentralisierte Verwaltung, Governance genannt</li>
    <li>Unabhängigkeit von anderen Finanzsystemen und Finanzinstrumenten</li>
    <li>Vollständig liquide Investitionen ohne Mindestgröße und ohne Mindestlaufzeiten</li>
  </ul>
  </div>
  <div className="mt-5">
  Im Gegensatz zu Ethereum oder anderen Turing-completen Blockchains ist DeFiChain keine Allzweck-Blockchain und Befehle, die über den grundlegenden Funktionssatz hinausgehen, sind nicht erlaubt. Durch die absichtliche Beschränkung der erlaubten Befehle wird die Angriffsfläche für Smart Contracts drastisch reduziert und die offensichtlichen Sicherheitslücken werden vermieden, die entstehen, wenn Programmierer komplexe Codes für diese Funktionen entwickeln müssen. Die Details dazu werden im nächsten Abschnitt beschrieben.
  </div>
</div>

<h3 id="benefits" title="Vorteile von DeFiChain" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Vorteile von DeFiChain: Zusammenfassung
</h3>
<div className="mt-4 text-dark-800">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Entwicklung einer Vielzahl von Finanzoperationen und -instrumenten für die Kryptowährungswirtschaft</li>
    <li>Hoher Durchsatz für alle Transaktionen</li>
    <li>Sichere Blockchain speziell für dezentrale Finanzsysteme</li>
    <li>Schnelle Entwicklung von dApps für dezentrale Finanzsysteme</li>
    <li>Die Gewissheit, dass die Blockchain nicht für dApps verwendet wird, die nicht dem Finanzbereich zuzuordnen sind. Daher konzentrieren sich die Entscheidungen der Foundation und der Kernentwickler (Core developers) zu 100 % auf dezentrale finanzielle Anwendungsfälle und nichts anderes.</li>
    <li>Schnelle Entwicklung von dApps mit eigenen Funktionen speziell für Finanzanwendungen</li>
    <li>Minimale Angriffsfläche der auf der Plattform entwickelten Finanz-Smart Contracts</li>
    <li>Verlässliche Governance (off-chain und on-chain)</li>
    <li>Höchste Unveränderlichkeit - durch periodische Verankerung in der Bitcoin-Blockchain.</li>
  </ul>
</div>

<h3 id="dAppSets" title="Erste dApp-Sets" className="mt-6 font-bold font-sans text-xl md:mt-8 scroll-mt-40 lg:mt-12 lg:text-2xl">
Erste dApp-Sets
</h3>
<div className="mt-4 text-dark-800">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Das anfängliche Funktionsset umfasst:</li>
    <li>Dezentrale Darlehen</li>
    <li>Dezentrales Wrapping von Token</li>
    <li>Dezentrale Preisorakel</li>
    <li>Dezentrale Tauschgeschäfte</li>
    <li>Übertragbare Schulden und Forderungen</li>
    <li>Dezentrale nicht besicherte Darlehen</li>
    <li>Tokenisierung von Assets</li>
    <li>Ausschüttung von Dividenden</li>
  </ul>
<div className="mt-5">
Dieses Kapitel gibt einen Überblick über jede dieser Funktionen und das folgende Kapitel behandelt die technischen Details, wie dies umgesetzt wird.
</div>

</div>

<h3 id="lending" title="Dezentrale Darlehensvergabe" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Dezentrale Darlehensvergabe
</h3>
<div className="mt-4 text-dark-800">
  Die dezentrale Darleh`ensvergabe ermöglicht es Einzelpersonen und Gruppen, ohne die Beteiligung einer Bank Kredite aufzunehmen und zu vergeben. Durch besicherte Systeme erreichte die dezentrale Darlehensvergabe auf Ethereum im Jahr 2018 mehr als eine Viertelmilliarde Dollar.
  <div className="mt-5">
  Alle diese Systeme basieren auf Ethereum, was bedeutet, dass sie nur 15% des Marktes, gemessen an der Marktkapitalisierung, abdecken. Die DeFi-Plattform wird die gesamten 100% des Marktes ansprechen, indem sie mit Bitcoin führend ist, aber auch den gesamten Markt durch Wrapping und Pooling einbezieht, wie unten beschrieben.
  </div>
  <div className="mt-5">
  Die großen dezentralen Darlehensvergabe-Plattformen (Compound, Dharma, dYdX und Maker) bieten Kredite zu Zinssätzen zwischen 0,5 und 6 % an. Da alles über Smart Contracts verwaltet wird, entfällt der Verwaltungsaufwand der Banken, und die Plattformen sind in der Lage, viel bessere Zinssätze als Banken anzubieten. Da diese Art der dezentralen Darlehensvergabe immer sicherer wird, ist es wahrscheinlich, dass auch die Möglichkeiten der Peer-to-Peer-Kreditvergabe durch eigens entwickelte Anwendungen steigen werden.
  </div>
  <div className="mt-5">
  Die Stärke der dezentralen Darlehensvergabe liegt in der Markteffizienz, die durch den Wegfall von Zwischenhändlern und Verwaltungsaufwand bei der Darlehensvergabe entsteht. Darüber hinaus schützt die dezentrale Darlehensvergabe die Investoren vor der Gefahr minimaler oder sogar negativer Zinsen, indem sie ihnen marktübliche Zinsen bietet, während sie den Kreditnehmern bessere Konditionen einräumt, als sie auf den bestehenden Finanzmärkten erhalten können. Angesichts des Umfangs von Krediten und der Rolle, die sie in der Wirtschaft insgesamt spielen, bietet die dezentrale Darlehensvergabe das Potenzial für viel mehr Vorhaben, sich auf der Grundlage offener Märkte und günstiger Bedingungen Geld zu leihen. Ein leichterer Zugang zu Krediten führt zu einer schneller wachsenden Wirtschaft.
  </div>
  <div className="mt-5">
  Die ersten Implementierungen der dezentralen Darlehensvergabe sind vollständig besichert, und aufgrund der Volatilität von Kryptowährungen verlangen die meisten Plattformen doppelte oder mehr Sicherheiten für Darlehen. Dies ermöglicht es den Menschen, Darlehen auf der Grundlage der von ihnen gehaltenen Kryptowährung aufzunehmen. Sie können ihre Cashflow-Probleme in den Griff bekommen, ohne ihre Kryptobestände verkaufen zu müssen, und erha`lten gleichzeitig günstige Konditionen für das Darlehen.
  </div>
</div>

<h3 id="tokenWrapping" title="Dezentrales Wrapping von Token" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Dezentrales Wrapping von Token
</h3>
<div className="mt-4 text-dark-800">
  Ein wichtiges Element bei DeFi ist die Fähigkeit, mit einer Vielzahl von Kryptoassets direkt auf der Chain zu arbeiten. Während die Transaktion auf der Chain über den nativen $DFI-Coin erfolgt, kann DeFiChain Bitcoin, Ethereum, ERC-20 oder jedes andere Kryptoasset durch Wrapping verwenden.
  <div className="mt-5">
  Wrapping erlaubt die Nutzung eines beliebigen digitalen Vermögenswerts, so dass der zugrunde liegende Vermögenswert beibehalten wird, aber auf eine andere Blockchain übertragen werden kann. DeFiChain bietet einen dezentralen Wrapping-Mechanismus, der es dem Eigentümer des Kryptoassets ermöglicht, die Bindung an den Vermögenswert aufrechtzuerhalten und einen vertrauenfreien Wrapping-Mechanismus zu nutzen, der sich nicht auf eine dritte Partei als Garant für das Wrapping oder den Vermögenswert verlässt. Die gewrappten Token können auf der jeweiligen Blockchain einfach gegen ihren ursprünglichen Wert getauscht werden.
  Die Erstellung eines gewrappten Token auf der DeFiChain ist eine Aktivität, die belohnt wird, so dass es für Inhaber von Kryptowährungen einen Anreiz gibt, gewrappte Token auf dem DeFi-Netzwerk als eine Form der honorierten dezentralen Finanzanlage zu erstellen.
  </div>
  <div className="mt-5">
  Wrapping ist eine Schlüsselfunktion von DeFi, da die Interoperabilität verschiedener Formen von Kryptowährungen und Assets sichergestellt werden muss. Bis heute gibt es keine Interoperabilitätsstandards zwischen verschiedenen Währungen und die einzige Möglichkeit der Interoperabilität zwischen Währungen ist die Verwendung von Wrapping oder Sicherheiten, die von einer dritten Partei bereitgestellt werden müssen. Der ganze Sinn der Dezentralisierung besteht darin, dass die Menschen keiner Autorität vertrauen müssen. Dennoch ist dies heute die wichtigste Option für Investoren, zwischen Bitcoin und Ethereum zu interagieren, ohne von einem Token zum anderen zu wechseln. Das Polkadot-Protokoll bietet eine Plattform für die Entwicklung interoperabler Apps, aber nicht speziell für DeFi. Da es sich um ein neues Protokoll handelt, bleibt abzuwarten, wie es genutzt werden wird.
  </div>
  <div className="mt-5">
  Ohne Wrapping müssten die Inhaber ihr Krypto-Asset in die DeFi-Währung umwandeln, um die angebotenen Dienste nutzen zu können. Für die meisten Anleger ist das natürlich inakzeptabel. Der Anleger hat sein Geld in Bitcoin oder Ethereum oder was auch immer investiert, weil das die Währung ist, die er halten möchte. Der Hauptzweck von DeFiChain besteht darin, Finanztransaktionen in jeder Art von Krypto-Asset zu ermöglichen, so dass die Menschen die Assets und Token, die sie halten, als Währung für Investitionen in andere Arten von Finanzinstrumenten verwenden können.
  Die dezentrale Wrapping-Funktion ist von entscheidender Bedeutung, da sie es den Menschen ermöglicht, jeden beliebigen Vermögenswert zu halten und Investitionen in eine andere Währung zu tätigen. So könnte zum Beispiel jemand, der Bitcoin besitzt, ein Darlehen an jemanden vergeben, der sich ETH leihen möchte, oder jemand, der sich gegen die Kryptowährung, die er besitzt, absichern möchte, könnte dies mithilfe einer Wrapping-Funktion tun, um einen Teil seines Vermögens zum Kauf von Optionen auf andere Arten von Vermögenswerten zu verwenden.
  </div>
</div>

<h3 id="pricingOracles" title="Dezentrale Preisorakel" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Dezentrale Preisorakel
</h3>
<div className="mt-4 text-dark-800">
  DeFiChain wird Preisorakel enthalten, um Daten von außerhalb der Blockchains zu sammeln. Preisorakel werden verwendet, um Daten wie die Preise anderer Kryptoassets zu sammeln<a className="text-electric" href="#user-content-fn-4"><sup>4</sup></a>. Preisorakel sind eine wichtige Möglichkeit für Blockchains, genaue Informationen sowohl von anderen Blockchains als auch von Nicht-Kryptomärkten zu sammeln<a className="text-electric" href="#user-content-fn-5"><sup>5</sup></a>.
  <div className="mt-5">
  Die Teilnahme als Preisorakel ermöglicht es, Token zu verdienen, die von der Genauigkeit der Preisorakel abhängen. Mit der eingebauten Orakelfunktion können Smart Contracts die Anzahl der Preisorakel, den Konsensprozentsatz und die Parameter für die Honorierung von Orakeln für die von ihnen gelieferten Daten festlegen.
  </div>
  <div className="mt-5">
  Preisorakel sollen letztendlich dezentral sein. DeFiChain wird jedoch mit einigen wenigen vertrauenswürdigen Preisorakeln gestartet, die regelmäßig Preisdaten aus vertrauenswürdigen Quellen an DeFiChain übermitteln.
  </div>
</div>

<h3 id="dex" title="Die dezentrale Tauschfunktion" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Die dezentrale Tauschfunktion
</h3>
<div className="mt-4 text-dark-800">
  Die dezentrale Tauschfunktion wird den Atomic Swap-Tausch von Kryptowährungen auf Peer-to-Peer-Basis ermöglichen<a className="text-electric" href="#user-content-fn-6"><sup>6</sup></a>. Die dezentrale Tauschfunktion bringt Menschen für den direkten Handel zusammen, ohne dass der Kauf und Verkauf von Währungen über eine Börse abgewickelt werden muss. Die dezentrale Tauschfunktion verringert die Risiken, die mit der Nutzung von Börsen verbunden sind, und stellt sicher, dass die Kryptowährung nicht aus der Verfügungsgewalt der Token-Inhaber/innen gerät. Außerdem wird das Risiko der Verwahrung von der Börse selbst genommen, da der Mechanismus Peer-to-Peer ist und auf einem vereinbarten Preis oder dem Marktpreis zum Zeitpunkt des Tauschs basiert.
  <div className="mt-5">
  Während es heute eine Reihe dezentraler Börsen auf dem Markt gibt<a className="text-electric" href="#user-content-fn-7"><sup>7</sup></a>, ermöglicht die DeFiChain-Lösung die Integration von Atomic-Swap-Funktionen in Anwendungen von Drittanbietern, indem sie eine dezentrale Börse als Service schafft.
  </div>
</div>

[^4]: https://cointelegraph.com/explained/blockchain-oracles-explained
[^5]: https://hackernoon.com/oracles-help-smart-contracts-resolve-subjective-events-d81639d8291c
[^6]: https://en.wikipedia.org/wiki/Decentralized_exchange
[^7]: https://coinsutra.com/best-decentralized-exchanges-dex/

<h3 id="transferrableDebts" title="Übertragbare Schulden und Forderungen" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Übertragbare Schulden und Forderungen
</h3>

<div className="mt-4 text-dark-800">
  DeFiChain wird eine Reihe von Angeboten machen, um mit übertragbaren Schulden und Forderungen zu arbeiten. In der zentralisierten Finanzwelt können Schulden und Forderungen nur über Finanzinstitute verwaltet werden, die Darlehen verwalten. Die mangelnde Transparenz dieser übertragbaren Schulden war einer der Faktoren, die zur Finanzkrise von 2008 führten.
  <div className="mt-5">
  Für kleine und mittlere Unternehmen kann dies ein besonders mächtiges Instrument sein. Zum Beispiel liefert Janes Widgets-Fabrik die Teile an einen großen Autohersteller, aber der Autohersteller zahlt für diese Teile auf der Rechnungsbasis Zahlung nach 60 Tagen. In der Zwischenzeit muss Jane die Materialien für die Herstellung der Ware und natürlich die regelmäßigen Löhne für ihre Beschäftigten auf monatlicher oder wöchentlicher Basis bezahlen. Der Autohersteller wird die Rechnung bezahlen, aber nicht so rechtzeitig, dass Jane alle ihre Ausgaben begleichen kann. Ohne Defi muss Jane zur Bank gehen und die Zinsen zahlen, die sie verlangt, weil sie keine Alternativen hat. Die Funktion der übertragbaren Forderungen würde es jedem ermöglichen, Jane ein Darlehen auf der Grundlage der Forderungen anzubieten. Da viele Leute sehen können, dass der Autohersteller ein Kunde mit geringem Risiko ist und dass er seine Rechnungen bezahlen wird, kann jeder, der will, Jane ein Angebot zu einem besseren Zinssatz als die Bank machen. So entsteht ein wettbewerbsfähiger Markt für Schulden und Forderungen, der auf dem tatsächlichen Risiko und der Risikobewertung des Marktes basiert. Jane kann nun ein Darlehen zu günstigen Konditionen erhalten, und die Kreditgeber erzielen ebenfalls hervorragende Renditen für ihre Darlehen, obwohl sie das Geld nur für 30-60 Tage ausleihen.
  </div>
  <div className="mt-5">
  Blockchain schafft Transparenz beim Austausch von Schulden und Darlehen, die auf Forderungen oder anderen finanziellen Zusicherungen basieren. DeFiChain wird Organisationen die Möglichkeit geben, Smart Contracts zu erstellen, die eine unkomplizierte Investition in solche Vermögenswerte ermöglichen, so dass Peer-to-Peer-Darlehen vergeben werden können, ohne dass ein Finanzinstitut für diese Art von finanziellen Vermögenswerten garantieren muss.
  </div>
</div>

<h3 id="noncollateralizedDebt" title="Dezentrale nicht besicherte Darlehen" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Dezentrale nicht besicherte Darlehen
</h3>
<div className="mt-4 text-dark-800">
  In Zukunft wird es möglich sein, nicht besicherte Kredite zu vergeben, die auf dem Ruf und anderen Faktoren der Kreditnehmer/innen basieren. Durch verschiedene Formen von überprüfbaren Referenzen und Aufzeichnungen über die Kreditaufnahme und Rückzahlung einer Person können ungesicherte Systeme entwickelt werden. Viele der Identitätslösungen, die heute entwickelt werden, befassen sich mit anonymen und pseudonymen Reputationsmeldesystemen, die auf einem dezentralen Identifikator (DID) basieren, der von der Person selbst ausgestellt wird, sowie auf überprüfbaren Berechtigungsnachweisen (VC), die von bekannten Behörden ausgestellt werden, die seriös sind und Informationen über die Kreditvergangenheit der Person liefern.
  <div className="mt-5">
  Die entsprechenden reputationsbasierten Systeme und Risikobewertungssysteme müssen erst noch entwickelt werden. Das wird zwar einige Zeit dauern, vielleicht sogar Jahre, aber es ist absehbar, dass diese Art von System die heutigen Kreditwürdigkeitsprüfungen ergänzen oder ersetzen könnte.
  </div>
  <div className="mt-5">
  Eine weitere mögliche Anwendung dieser Funktion wäre die Möglichkeit, nicht besicherte dezentrale Stablecoins zu schaffen. Der Erfolg von DAI und MakerDAO zeigt, wie wünschenswert Stablecoins sind, doch der hohe Grad der Besicherung schreckt von der Schaffung weiterer solcher Projekte ab. Es ist denkbar, dass durch Marktmechanismen und Einsätze dezentralisierte, nicht besicherte Stablecoins geschaffen werden können.
  </div>
</div>

<h3 id="assetTokenization" title="Tokenisierung von Aktiva" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Tokenisierung von Aktiva
</h3>
<div className="mt-4 text-dark-800">
  Die Tokenisierung von Aktiva ist die Darstellung eines Vermögenswerts, z. B. einer Immobilie oder eines Firmenkapitals, in unveränderliche Token auf der Blockchain. Dieser Bereich des dezentralen Finanzwesens hat ein enormes Potenzial und ist einer der spannendsten Investitionsbereiche für Inhaber/innen von Kryptowährungen<a className="text-electric" href="#user-content-fn-8"><sup>8</sup></a>.
  <div className="mt-5">
  Es gab zwar mehrere Versuche zur Tokenisierung von Vermögenswerten im Blockchain-Bereich, aber die meisten von ihnen haben sich umorientiert und bieten jetzt Dienstleistungen an, die nicht direkt mit der Tokenisierung von Vermögenswerten zu tun haben (LAtoken, Etherparty). Tokeny und Tokenize-IT werben damit, Tokenisierungsplattformen zu sein, aber zum Zeitpunkt des Verfassens dieses Papiers sind ihre Prozesse immer noch ziemlich manuell und hängen stark von den jeweiligen lokalen Gegebenheiten und den regulatorischen Anforderungen dieser Länder ab. Andere Blockchains, wie z. B. Tezos, wurden als gute Plattformen für die Tokenisierung von Vermögenswerten erwähnt, aber wie bei anderen Blockchains mit mehreren Verwendungsmöglichkeiten wird der Turing-complete Befehlssatz komplexe Smart Contracts erzeugen, die bei DeFiChain überflüssig sind.
  DeFiChain wird ein Modul anbieten, das speziell für die Tokenisierung von Vermögenswerten entwickelt wurde und besonders einfach zu verwenden ist, um Vermögenswerte wie Unternehmensanteile, Immobilien und andere werthaltige Besitztümer zu tokenisieren.
  </div>
  <div className="mt-5">
  Kürzlich (Oktober 2019) wurde mit dem Lichtensteiner Blockchain-Gesetz die rechtliche Grundlage geschaffen, auf der jeder Vermögenswert tokenisiert und rechtlich an Token oder "Container" gebunden werden kann, die das Recht auf den Vermögenswert repräsentieren. Das Gesetz ist präzise formuliert und beschreibt, wie ein Container, der von einer vertrauenswürdigen Partei ausgegeben wird, nun das Recht auf die Verfügung über den Vermögenswert beinhalten kann. Die Verfügungsgewalt über den Vermögenswert unterscheidet sich vom Eigentum oder den Rechten an dem Vermögenswert oder sogar von der Kontrolle als spezifischem Konzept. Die sorgfältige Formulierung dieses Gesetzes ist ein Durchbruch für alle in der Welt der Tokenisierung von Vermögenswerten, denn nun kann jemand mit einem Token vor Gericht gehen und erwarten, dass er rechtlich legitimiert ist (solange die Instanz, die den Token ausgibt, als vertrauenswürdige Instanz anerkannt ist). Außerdem eröffnet es DeFiChain die Möglichkeit, diesen vertrauenswürdigen Status zu beantragen, sodass die hier beschriebene Funktion zur Tokenisierung von Vermögenswerten als eine dezentrale, legale und autorisierte Funktion angeboten werden kann, der die Menschen vertrauen können, ohne von einer zentralen Instanz abhängig zu sein.
</div>

[^8]: https://www2.deloitte.com/lu/en/pages/technology/articles/tokenization-assets-disrupting-financial-industry.html
[^9]: https://www.forbes.com/sites/laurencoleman/2019/04/25/heres-why-interest-in-tokenizing-assets-is-starting-to-surge/#2ddeec4640a5

<div className="mt-5">
  Weitere Informationen zu diesem Gesetz findest du auf der Website Liechtensteins unter <a className="text-electric" href="https://liechtensteinusa.org/article/liechtensteins-parliament-approves-blockchain-act-unanimously" target="_blank">https://liechtensteinusa.org/article/liechtensteins-parliament-approves-blockchain-act-unanimously</a>
</div>
<div className="mt-5">
Beispiele für Vermögenswerte, die mit der Blockchain in Token umgewandelt werden können:
</div>
<div className="mt-5">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Wertpapiere, wie z.B. ETF-Investitionen, Aktien und Anteile</li>
    <li>Anteile an Privatunternehmen</li>
    <li>Energie- und einkommenserzeugende Anlagen wie Windturbinen, Solarparks und Satelliten.</li>
    <li>Eigentum an den Produktionsmitteln für Lebensmittel (neue Formen genossenschaftlicher Betriebe, in denen Nicht-Landwirte Eigentümer von Lebensmitteln sein können, statt von Waren, die an der Börse gehandelt werden)</li>
    <li>Autonome Fahrzeuge, Verkaufsautomaten, Geldautomaten, Flipperautomaten und andere Arten von umsatzsteigernden, sich selbst steuernden Geräten</li>
    <li>DAOs (Decentralized Autonomous Organizations), zu Deutsch: Dezentrale autonome Organisationen)</li>
    <li>Kleine Immobilieninvestitionen (Timesharing, kurzfristige Mietwohnungen usw.)</li>
    <li>Große Immobilieninvestitionen (Flughäfen, Vergnügungsparks, Apartmentkomplexe, Gewerbegebiete)</li>
  </ul>
</div>
</div>

<h3 id="dividendsDist" title="Ausschüttung von Dividenden" className="mt-6 font-bold font-sans scroll-mt-40 text-xl md:mt-8 lg:mt-12 lg:text-2xl">
Ausschüttung von Dividenden
</h3>
<div className="mt-4 text-dark-800">
  Jedes tokenisierte Asset mit Rendite kann das Dividendenausschüttungsmodul nutzen, um Smart Contracts zu erstellen, die automatisch Renditen auf die Investition auszahlen. Die Verwendung von DeFiChain wird einen Sprung in der Funktionalität der Dividendenausschüttung ermöglichen. Es wird möglich sein, ähnliche Modelle wie heute zu implementieren, bei denen die Auszahlungen auf wöchentlicher, monatlicher oder vierteljährlicher Basis erfolgen, oder Modelle, bei denen die Auszahlungen auf täglicher, stündlicher oder sogar minütlicher Basis erfolgen.
  <div className="mt-5">
  Jedes tokenisierte Asset mit Investmentrendite kann das Dividendenausschüttungsmodul nutzen, um Smart Contracts zu erstellen, die automatisch Renditen auf das Investment ausschütten. Die Verwendung von DeFiChain wird einen Sprung in der Funktionalität der Dividendenausschüttung ermöglichen. Es wird möglich sein, ähnliche Modelle wie heute zu implementieren, bei denen die Auszahlungen auf wöchentlicher, monatlicher oder vierteljährlicher Basis erfolgen, oder Modelle, bei denen die Auszahlungen auf täglicher, stündlicher oder sogar minütlicher Basis erfolgen.
  </div>
  <div className="mt-5">
  Jede private Investition könnte auf diese Weise betrieben werden: ein Flipperautomat, ein autonomes Taxi, eine Immobilieninvestition, usw. Die automatische Ausschüttung von Dividenden reduziert den administrativen Aufwand und die Gemeinkosten. Außerdem entfällt die Unsicherheit über die Auszahlungen und die Kontrolle durch eine zentrale Stelle.
  </div>
  <div className="mt-5">
  Die Notwendigkeit, gemeinsam in Dividenden zu investieren, wird mit dem IoT immer wichtiger. Geräte sind in der Lage, enorme Werte zu schaffen. Ein autonomes Fahrzeug wird Taxidienste anbieten können. Verkaufsautomaten, Sensoren, Satelliten usw. sind allesamt potenziell gewinnbringende Geräte, die Menschen gemeinsam besitzen und an deren Gewinn sie gemeinsam teilhaben können, doch bisher war die rechtliche und finanzielle Komplexität eines solchen Vorgehens abschreckend. DeFi kann diese Prozesse vereinfachen.
  </div>
  <div className="mt-5">
  In ähnlicher Weise lässt sich auch die Gewinnbeteiligung für ein Privatunternehmen realisieren. Eines der ersten Experimente in diesem Bereich ist eine DAO ( Dezentrale Autonome Organisation) namens dOrg. dOrg ist eine Ansammlung von Programmierern (sowie einem Vertriebs-/Operations-Team), die ihr Softwareunternehmen gemeinsam betreiben. Die Verteilung der Gehälter erfolgt über eine DAO, die als Multisig funktioniert, so dass alle 2 Wochen die gesamte Organisation ihre Zahlungsanträge für die in Auftrag gegebene Arbeit einreicht und das Team über die Gehaltsanträge der anderen abstimmt. Innerhalb von dOrg besitzt jede Person eine "Reputation", die den prozentualen Anteil an der Beteiligung darstellt, den jede Person verdient hat (die Beteiligung richtet sich nach dem Umfang der geleisteten Arbeit seit der Gründung des Unternehmens). Aber was passiert mit dem Gewinn am Ende des Jahres? Vermutlich muss jeder Einzelne einen Antrag auf seinen prozentualen Anteil an den Gewinnen stellen, und auch darüber müssen alle abstimmen, denn die DAO erlaubt keine automatische Verteilung der Gewinne. Mit DeFiChain könnte das Team leicht eine vierteljährliche oder jährliche Funktion implementieren, die die Gewinne des Unternehmens automatisch an jede Person entsprechend ihrer Beteiligung am Unternehmen verteilt. Dieses System würde sogar für Personen funktionieren, die in der Vergangenheit aktiv waren, aber nicht mehr aktiv sind, also nicht mehr in der DAO sind, aber immer noch einen Prozentsatz basierend auf ihren früheren Beiträgen halten. Andere Beitragszahler könnten Investoren sein, die Geld in das Unternehmen einbringen, sich aber nicht beteiligen.
  </div>
  <div className="mt-5">
  Die obigen Beispiele scheinen logisch und einfach zu sein, sind aber heutzutage noch extrem zeitaufwendig und komplex. Menschen, die gemeinsam in Unternehmen, Immobilien oder andere ertragsbringende Anlagen investieren möchten, müssen heute eine komplexe Dividendenausschüttung vornehmen, die viele manuelle Berechnungen erfordert. Mit der DeFi-Funktionalität Dividendenausschüttung wird die Ausschüttung von Dividenden an die Anteilseigner für Unternehmen nicht nur einfach, sondern auch automatisiert.
  </div>
</div>

<h2
      id="design"
      title="DeFiChain Design"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      6. DeFiChain Design
    </h2>

<h3 id="param" title="Design-Parameter" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Design-Parameter
</h3>
<div className="mt-4 text-dark-800">
Mit Blick auf die fachlichen Anforderungen aus dem vorherigen Kapitel muss DeFiChain die folgenden Anforderungen erfüllen:
<div className="mt-5">
<ol>
    <li>1. Robust und sicher: auf einer bewährten und sicheren Blockchain aufgebaut</li>
    <li>2. Schnell und skalierbar</li>
    <li>3. Enthält einen dezentralen Konsensmechanismus</li>
    <li>4. Bietet erweiterbare Smart-Contract-Unterstützung, ohne einen Turing-completen Befehlssatz</li>
    <li>5. So unveränderlich wie möglich (Blockverankerung aktiviert)</li>
  </ol>
  </div>
  <div className="mt-5">
  Jedes dieser Gestaltungsprinzipien wird im Folgenden ausführlich beschrieben.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
1. Robust und sicher
</div>
<div className="mt-2 text-dark-800">
  Bitcoin Core ist die robusteste und am längsten laufende Blockchain der Welt. Seit dem Genesis-Block im Januar 2009 ist sie ohne Unterbrechungen in Betrieb. Darüber hinaus hat sich Bitcoin Core als die sicherste Blockchain ohne Sicherheitszwischenfälle erwiesen und sichert gleichzeitig den am höchsten bewerteten Kryptowert der Welt, nämlich Bitcoin (BTC). Zum jetzigen Zeitpunkt sichert Bitcoin Core erfolgreich Kryptowährungen im Wert von 150 Mrd. US-Dollar oder 68 % der Marktkapitalisierung von Kryptowährungen.
  <div className="mt-5">
  Die bewährte Sicherheit und Robustheit des Bitcoin Core machte ihn zur Blockchain der Wahl für die Erweiterung der DeFiChain-Basis. DeFiChain basiert auf einem Fork von Bitcoin Core 0.18, genauer gesagt v0.18.1.
  </div>
  <div className="mt-5">
  DeFiChain wird in C++ geschrieben, und es ist geplant, in Zukunft auch andere Sprachen, wie z.B. Rust, zu verwenden.
  </div>
  <div className="mt-5">
  DeFiChain ist zwar eine neue Blockchain, aber da sie auf einer Bitcoin Core Fork basiert, ergibt sich eine Chain, die für Börsen und Apps, die Bitcoin unterstützen, leicht zu integrieren ist.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
2. Schnell und skalierbar
</div>
<div className="mt-2 text-dark-800">
Einer der erwiesenen Nachteile der Bitcoin-Blockchain ist die Langsamkeit der Transaktionen auf der Chain. Außerdem ist die Skalierbarkeit ein Problem, je mehr Blöcke zur Chain hinzukommen.
<div className="mt-5">
Um eine Blockchain mit der erforderlichen Geschwindigkeit und Skalierbarkeit zu implementieren, wird die DeFiChain-Fork von Bitcoin Core die folgenden Verbesserungen beinhalten:
</div>
<div className="mt-5">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Blockzeit: <span className="font-bold font-sans text-dark-1000">30 Sekunden</span></li>
    <li>Blockgröße: <span className="font-bold font-sans text-dark-1000">16 MB</span></li>
  </ul>
</div>
<div className="mt-5">
Diese Verbesserungen ermöglichen eine Transaktionsrate von über 2.200 Transaktionen pro Sekunde (tps) bei gleichzeitig überschaubaren Rechen- und Bandbreitenanforderungen, die den dezentralen Betrieb von DeFiChain ermöglichen.
</div>
<div className="mt-5">
Die folgende Tabelle vergleicht Bitcoin und seine Forks sowie Ethereum mit der Performance von DeFiChain:
  </div>
</div>

<div className="table-responsive table-auto text-base text-left border-solid border-2 border-dark-1000 no-scrollbar mt-7" style="overflow: scroll;">
  <table>
    <thead>
      <tr style="border-bottom: 1px solid #dddddd;">
        <th style="border: 1px solid #dddddd;" scope="col"></th>
        <th style="border: 1px solid #dddddd;" scope="col">Blockzeit (s)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Blockgröße (MB)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans.-Blockgröße (% d. Blocks)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Mind. Trans.-Größe (B)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Ø Trans.-Größe (B)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans. in 1 Block (max)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans. in 1 Block (Ø)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Max. Tps</th>
        <th style="border: 1px solid #dddddd;" scope="col">Ø Tps</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #dddddd;">
        <th style="border: 1px solid #dddddd;">Bitcoin Core</th>
        <td style="border: 1px solid #dddddd;">600</td>
        <td style="border: 1px solid #dddddd;">1</td>
        <td style="border: 1px solid #dddddd;">98%</td>
        <td style="border: 1px solid #dddddd;">220</td>
        <td style="border: 1px solid #dddddd;">500</td>
        <td style="border: 1px solid #dddddd;">4 561,45</td>
        <td style="border: 1px solid #dddddd;">2 007,04</td>
        <td style="border: 1px solid #dddddd;">7,6</td>
        <td style="border: 1px solid #dddddd;">3,35</td>
      </tr>
      <tr style="border-bottom: 1px solid #dddddd;">
        <th style="border: 1px solid #dddddd;">Bitcoin Cash</th>
        <td style="border: 1px solid #dddddd;">600</td>
        <td style="border: 1px solid #dddddd;">10</td>
        <td style="border: 1px solid #dddddd;">98%</td>
        <td style="border: 1px solid #dddddd;">220</td>
        <td style="border: 1px solid #dddddd;">500</td>
        <td style="border: 1px solid #dddddd;">45 614,55</td>
        <td style="border: 1px solid #dddddd;">20 070,40</td>
        <td style="border: 1px solid #dddddd;">76</td>
        <td style="border: 1px solid #dddddd;">33,45</td>
      </tr>
      <tr>
        <th style="border: 1px solid #dddddd;">Bitcoin SV</th>
        <td style="border: 1px solid #dddddd;">600</td>
        <td style="border: 1px solid #dddddd;">32</td>
        <td style="border: 1px solid #dddddd;">98%</td>
        <td style="border: 1px solid #dddddd;">220</td>
        <td style="border: 1px solid #dddddd;">500</td>
        <td style="border: 1px solid #dddddd;">145 966,55</td>
        <td style="border: 1px solid #dddddd;">64 225,28</td>
        <td style="border: 1px solid #dddddd;">243,28</td>
        <td style="border: 1px solid #dddddd;">107,04</td>
      </tr>
      <tr class="highlight">
        <th style="border: 1px solid #dddddd;">DeFi Chain</th>
        <td style="border: 1px solid #dddddd;">30</td>
        <td style="border: 1px solid #dddddd;">16</td>
        <td style="border: 1px solid #dddddd;">98%</td>
        <td style="border: 1px solid #dddddd;">220</td>
        <td style="border: 1px solid #dddddd;">500</td>
        <td style="border: 1px solid #dddddd;">72 983,27</td>
        <td style="border: 1px solid #dddddd;">32 112,64</td>
        <td style="border: 1px solid #dddddd;">2 432,78</td>
        <td style="border: 1px solid #dddddd;">1 070,42</td>
      </tr>
    </tbody>
    <thead>
      <tr style="border: 1px solid #dddddd;">
        <th style="border: 1px solid #dddddd;" scope="col"></th>
        <th style="border: 1px solid #dddddd;" scope="col">Blockzeit (s)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Gas Limit</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans.-Blockgröße (% d. Blockgröße)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Mind. Trans.-Größe (gas)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Ø Trans.-Größe (gas)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans. in 1 Block (max)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Trans. in 1 Block (Ø)</th>
        <th style="border: 1px solid #dddddd;" scope="col">Max Tps</th>
        <th style="border: 1px solid #dddddd;" scope="col">Ø Tps</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="border: 1px solid #dddddd;">Ethereum</th>
        <td style="border: 1px solid #dddddd;">13,5</td>
        <td style="border: 1px solid #dddddd;">10m0</td>
        <td style="border: 1px solid #dddddd;">100%</td>
        <td style="border: 1px solid #dddddd;">21k</td>
        <td style="border: 1px solid #dddddd;">60k</td>
        <td style="border: 1px solid #dddddd;">476,19</td>
        <td style="border: 1px solid #dddddd;">166,67</td>
        <td style="border: 1px solid #dddddd;">35,27</td>
        <td style="border: 1px solid #dddddd;">12,35</td>
        </tr>
    </tbody>
  </table>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
3. Dezentraler Konsensmechanismus
</div>
<div className="mt-2 text-dark-800">
Bitcoin Core verwendet Proof of Work (PoW) als Konsensmechanismus. DeFiChain nutzt die besten Aspekte von PoW, d.h. die Hashing-Funktion der Node-ID für die Blockerstellung, während der Großteil des Konsens auf Proof of Stake (PoS) basiert. Die größte Verbesserung des PoW-Mechanismus von DeFiChain besteht darin, dass die Staking Nodes ohne Investitionen in High-End-Server und ultraschnelle Breitbandverbindungen arbeiten können. So ermöglicht DeFiChain eine einfachere und schnellere Dezentralisierung, was Eigentum und Infrastruktur anbelangt.
</div>
<div className="mt-6 font-bold font-sans lg:text-xl">
4. Nicht-Turing-complete Smart Contracts
</div>
<div className="mt-2 text-dark-800">
  Dezentrale Finanztransaktionen werden durch Smart Contracts umgesetzt. Um z.B. sicherzustellen, dass Kreditnehmer ihre Kredite zurückzahlen, implementieren Smart Contracts die Bedingungen für die Kreditvergabe in den Code. Für die Entwicklung von Smart Contracts wird DeFiChain Opcode-Unterstützung für dezentrale Finanzbefehle bereitstellen. Der DeFi-Opcode ergänzt die Skriptsprache Script des bestehenden Bitcoin Core-Protokolls und arbeitet tangential dazu.
  <div className="mt-5">
  Die DeFi-Skriptsprache heißt Recipe, was die Rolle der Sprache bei der Beschreibung und Ermöglichung dezentraler Finanzverträge bezeichnet.
  </div>
  <div className="mt-5">
  Bitcoin Script-Befehlswörter beginnen normalerweise mit dem Präfix `OP_*`. Recipe-Befehlswörter tragen das Präfix `DF_*`.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
5. Unveränderlich durch Blockverankerung
</div>
<div className="mt-2 text-dark-800">
  Während die gängige Diskussion über Unveränderlichkeit ein binäres Gespräch ist (eine Blockchain ist entweder unabänderbar oder nicht), erstreckt sich die Unveränderlichkeit in Wirklichkeit über ein Spektrum. Der Grad der Unveränderlichkeit einer Blockchain hängt mit den Kosten für einen Rollback oder ein "Fork out" von geminten Blöcken zusammen, auch bekannt als 51%-Angriff.
  <div className="mt-5">
  Es dauert seine Zeit, bis sich genügend Miner oder Minter zusammengefunden haben, um einen 51%-Angriff so kostspielig zu machen, dass er im Allgemeinen als unveränderlich gilt, was bedeutet, dass eine neue Blockchain automatisch im Nachteil ist, wenn es um die Unveränderlichkeit der Aufzeichnungen geht. Einige neuere Blockchains haben Abkürzungen genommen, um ihre Unveränderlichkeit zu steigern, indem sie Kompromisse bei der Dezentralität eingegangen sind. So können die Chains zum Beispiel nur von den Gründern delegierte Staker zulassen oder die Blockchain mit statt ohne Berechtigungen ausstatten.
  </div>
  <div className="mt-5">
  DeFiChain zielt darauf ab, die Qualität der Dezentralität zu erhalten und gleichzeitig die Unveränderlichkeit zu bewahren. Um dies zu erreichen, verankert DeFiChain seine Blöcke alle paar Blöcke in der Bitcoin-Blockchain. Dadurch wird die Unveränderlichkeit von DeFiChain weiter erhöht, ohne die dezentrale Natur der Chain zu beeinträchtigen.
  </div>
</div>

<h3 id="consensus" title="Konsens-Algorithmus" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Konsens-Algorithmus
</h3>

<div className="mt-6 font-bold font-sans lg:text-xl">
Proof-of-Stake
</div>
<div className="mt-2 text-dark-800">
DeFiChain verwendet einen Proof of Stake (PoS)-Algorithmus, der dem ursprünglichen Proof of Work (PoW)-Mining-Algorithmus von Bitcoin Core ähnelt. Während DeFiChain PoS dem PoW-Algorithmus vorzieht, behält die DeFi-Technologie gleichzeitig die besten der getesteten und bewährten Technologien bei, die in der Bitcoin Core-Blockchain entwickelt wurden.
</div>
<div className="mt-6 font-bold font-sans lg:text-xl">
Masternodes zum Staking
</div>
<div className="mt-2 text-dark-800">
  Um einen Masternode (Staking Node) zu betreiben, müssen Staker einen festen Betrag von 20.000 DFI halten. Masternodes auf DeFiChain nehmen aktiv an Transaktionsüberprüfungen und Blockerstellungen teil. Der Mindestbetrag fürs Staking soll mit zunehmender Stabilität und Entwicklungsstufe der Blockchain gesenkt werden, um eine weitere Dezentralisierung zu fördern.
  <div className="mt-5">
  Jeder Staking Node kann nur 1 Hash pro Sekunde durchführen, wobei die Nonce aus dem Bitcoin Core PoW Algorithmus durch die Masternode ID eines Stakers ersetzt wird.
  Ein neuer Block wird gemint, wenn er die folgende Bedingung erfüllt:
  </div>
  <div className="mt-6 p-6 bg-dark-100 rounded-[5px]">
    <div className="font-code text-dark-900 text-base leading-6">
    `SHA256({staker’s UTXO}, {current timestamp, in seconds}, {stake modifier}) < {target}`
    </div>
  </div>
  <div className="mt-5">
  Die Staker überprüfen diese Bedingung jede Sekunde. Wenn die Blockvoraussetzung geringer ist als das aktuelle Ziel, dann setzen die Staker einen neuen Block zusammen und signieren ihn.
  Die UTXO der Staker benötigen 20 Bestätigungen, bevor sie als Stake akzeptiert werden können.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
Stake Modifier
</div>
<div className="mt-2 text-dark-800">
  Ein Stake-Modifier ist eine kollektiver Erzeuger von zufälliger Entropie. Ohne einen Stake-Modifier wäre der zukünftige PoS-Kernel völlig vorhersehbar. Ein guter Stake-Modifier darf weder vorhersehbar sein noch von den Stakern beeinflusst werden können.
  <div className="mt-5">
  Der Staker-Modifier von DeFiChain ist eingestellt auf 
  </div>
  <div className="mt-6 p-6 bg-dark-100 rounded-[5px]">
      <div className="font-code text-dark-900 text-base leading-6">
      `SHA256({previous stake modifier}, {masternode ID})`.
      </div>
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
Validierung von zukünftigen und vergangenen Kopfzeilen
</div>
<div className="mt-2 text-dark-800">
Im Gegensatz zu PoW wird für die Validierung der Kopfzeilen von Blöcken eine Staking-Tabelle benötigt. Die Kopfzeilen werden in Batches überprüft, bevor die vollständigen Blöcke heruntergeladen werden, daher wird die Staking-Tabelle verwendet, um zukünftige Stakings zu überprüfen.
Um zukünftige Kopfzeilen überprüfen zu können, muss die Blockchain eine zusätzliche Regel anwenden, damit jede Änderung in der Stakes-Datenbank sofort geschrieben wird, aber erst nach 300 Blöcken wirksam wird. So kann jeder Node jeden Block-Header mit seinem aktuellen Einsatz verifizieren, wenn der Block-Header nicht weiter in der Zukunft (oder Vergangenheit) liegt als 300 Blöcke.
</div>
<div className="mt-6 font-bold font-sans lg:text-xl">
Schutz vor Stakingkonflikten
</div>
<div className="mt-2 text-dark-800">
  Bei PoS-Blockchains gibt es keine Begrenzung dafür, wie viele widersprüchliche Blöcke ein Staker signieren kann. Daher kann ein Staker für jede mögliche Fork oder Branch signieren, was die Endgültigkeit einer PoS-Blockchain schwächt. Dieses Problem wird als Doppelsignatur bezeichnet und ist bei PoW-Blockchains nicht möglich, da ein Miner nicht alle möglichen Branches minen kann, ohne seine Mining-Kapazität zu teilen. Bei PoW stellt dies einen wirtschaftlichen Nachteil dar. Bei PoS-Blockchains gibt es jedoch keine inhärente wirtschaftliche Strafe für das Signieren widersprüchlicher Blöcke auf verschiedenen Branches.
  <div className="mt-5">
  Um die Zuverlässigkeit der DeFiChain zu erhöhen, ist es daher notwendig, Doppelsignaturen im PoS zu erkennen und sie durch einen expliziten Mechanismus zu bestrafen.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
Identifizierung einer Doppelsignatur
</div>
<div className="mt-2 text-dark-800">
  Jeder Block-Header hat eine Sequenznummer, die die Anzahl der Blöcke angibt, die ein bestimmter Staker vor einem bestimmten Block gemint hat. Wenn zwei Blöcke mit der gleichen Sequenznummer gemint werden, bedeutet das, dass ein Staker doppelt signiert hat, auch wenn die Blöcke unterschiedliche Vorgänger haben, d.h. über Branches hinweg.
  <div className="mt-5">
  Während der Generierung eines Blocks hat ein Staker das Recht, die doppelt signierten Proofs in seinen Block-Header aufzunehmen und dafür nur die Hälfte der Strafe zu zahlen.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
Strafe für Doppelsignatur
</div>
<div className="mt-2 text-dark-800">
  Um Staker, die doppelt signieren, bestrafen zu können, muss DeFiChain das sofortige Abheben des Stakes verbieten. Wenn also eine Deaktivierungstransaktion bestätigt wird, benötigt DeFiChain 3000 Blöcke, um sie abzuschließen. Bei einer Blockzeit von 30 Sekunden entsprechen 3000 Blöcke 25 Stunden.
  <div className="mt-5">
  Die Strafe für das Doppelsignieren beträgt das 10-fache der Blockprämie, die von der Sicherheit abgezogen wird. Das schließt die Staker auch sofort von weiteren Einsätzen aus. Der Staker, der seinen Einsatz wieder aufnehmen möchte, muss erneut UTXO in der Höhe von 20.000 DFI fürs Staking einsetzen. Wenn man den offiziellen DeFiChain-Node betreibt, kommt es nicht zu einem unbeabsichtigten oder versehentlichen Doppelsignieren. Doppeltes Signieren geschieht nur in böser Absicht.
  </div>
</div>

<div className="mt-6 font-bold font-sans lg:text-xl">
Zeitdrift Angriff
</div>
<div className="mt-2 text-dark-800">
Die Chain verwendet eine maximale zukünftige Blockzeit von nur ca. 5 Sekunden, um die Chain vor Zeitdrift-Angriffen (Time Drift Attacks) zu schützen, bei denen Staker eine Blockzeit zu weit in die Zukunft setzen, um einen Reward für sich zu beanspruchen. DeFi nutzt außerdem die NTP-Zeitsynchronisation, um eine ständige Anpassung der Blockzeit zu ermöglichen.
</div>

<h3 id="bitcoinAnchoring" title="Bitcoin-Verankerung" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Bitcoin-Verankerung
</h3>

<div className="mt-4 text-dark-800">
  DeFiChain-Staker veröffentlichen regelmäßig Blockchain-Blockhashes auf der Bitcoin-Blockchain und sorgen so für eine öffentliche Prüfung und Blockverankerung von DeFiChain auf der stärksten und sichersten Blockchain der Welt.
  <div className="mt-5">
  Alle 60 Blöcke (etwa 30 Minuten) erhält ein Staker das Recht, die Merkle-Root des vorherigen Blocks in die Bitcoin-Blockchain zu schreiben. Dabei handelt es sich um die Transaktions-ID der Bitcoin-Transaktion, den Bitcoin-Block-Header und den Merkle-Proof, der die Merkle-Root enthält, die in den neu geminten Block geschrieben wird. Auf diese Weise wird der Staker mit einem zusätzlichen Block-Reward in DFI belohnt, was für die Nodes einen Anreiz darstellt, regelmäßig alle Datensätze in der Bitcoin-Blockchain zu verankern.
  </div>
  <div className="mt-12">

![Bitcoin-Verankerung](/img/white-paper/every-60-blocks.png)

  </div>
  <div className="mt-12">
  DeFiChain-Nodes enthalten einen integrierten Bitcoin Simplified Payment Verification (SPV) Client. SPV-Clients synchronisieren die Bitcoin-Blockchain, indem sie nur die Block-Header herunterladen. Diese Informationen reichen den Nodes aus, um die Anker hinzuzufügen und zu validieren.
  </div>
</div>

<h2
      id="buildingBlocks"
      title="Bausteine"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      7. DeFi-Bausteine
    </h2>

<div className="mt-4 text-dark-800">
Um unser Ziel, dezentrale Finanztransaktionen auf DeFiChain zu ermöglichen, zu erreichen, werden die folgenden Bausteine als native Basiskomponenten in DeFiChain enthalten sein.
</div>

<h3 id="dst" title="Tokenisierung als DeFi Standard Token (DST)" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Tokenisierung als DeFi Standard Token (DST)
</h3>
<div className="mt-4 text-dark-800">
Die Umsetzung der in diesem Whitepaper beschriebenen Funktionen erfolgt mit Hilfe von standardisierten Token. Dieses Kapitel beschreibt die Funktionsweise der Token, die Interaktion mit anderen Kryptowährungen (Token) und wie sie bei DeFiChain verwendet werden.
</div>

<h3 id="crossChain" title="Chainübergreifende Mechanismen" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Chainübergreifende Mechanismen
</h3>
<div className="mt-4 text-dark-800">
  DeFiChain nutzt Token-Standards, um externe Token vertrauensunabhängig in DeFiChain einzubringen und vertrauensunabhängige Finanzkontrakte und den Handel mit allen wichtigen Kryptoasset-Token zu ermöglichen. Die Token-Standards sind vergleichbar mit ERC20 auf Ethereum und Omni auf der Bitcoin-Blockchain. Durch diesen Standard ermöglicht DeFiChain die Tokenisierung beliebiger Vermögenswerte.
  <div className="mt-5">
  Auf der DeFiChain werden die standardisierten Token als DeFi Standard Token (DST) bezeichnet. Bei den DST Token gibt es zwei verschiedene Arten: DCT, die von den Nutzern des Systems erstellt werden, und DAT, bei denen es sich um durch Vermögenswerte besicherte Token handelt, die mit Hilfe von Kryptowährungen erstellt werden.
  </div>
</div>
<div className="mt-6">

![Benutzerdefinierter Token](/img/white-paper/custom-token.png)

</div>

<h3 id="dct" title="DeFi Custom Token (DCT)" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
DeFi Custom Token (DCT)
</h3>
<div className="mt-4 text-dark-800">
  DCTs sind benutzerdefinierte Token, die von jedem Nutzer erstellt werden können, um ein beliebiges Projekt oder eine Reihe von Smart-Contracts zu repräsentieren, die auf DeFiChain implementiert sind. Jeder Nutzer kann einen solchen DCT erstellen. Um Missbrauch vorzubeugen, muss der Nutzer bei der Erstellung eines eigenen DCTs 1.000 DFI für die Zeit der Ausgabe der Token sperren. Die DFI erhält man zurück, wenn die Token zurückgezogen werden und der DCT aufgelöst wird.
  <div className="mt-5">
  DCT-Token werden nicht von DeFiChain selbst unterstützt. Sie können über einen externen Mechanismus gesichert werden, aber es ist wichtig zu wissen, dass DeFiChain sie nicht selbst sichert. Ein Beispiel auf der Ethereum-Blockchain wäre DGX, ein ERC20 Token, der mit Gold hinterlegt ist. Ethereum unterstützt DGX nicht, obwohl der Token über ERC20 erstellt wird. Die Digix Foundation ist für den Wert dieses Tokens verantwortlich. In ähnlicher Weise ist DCT die DeFi-Parallele zu ERC20 auf Ethereum. Die Erstellung und Ausgabe von Token auf DeFi wird vereinfacht und die Möglichkeit von Fehlern im Smart-Contract wird ausgeschlossen, da die Ersteller von DCT nur die unten aufgeführten Parameter über eine einfach zu bedienende Skriptschnittstelle festlegen können.
  </div>
</div>

<div className="mt-6 font-bold font-sans text-xl md:mt-8 lg:mt-12 lg:text-2xl">
DCT Parameter:
</div>
<div className="mt-3 text-dark-800">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li><span className="font-bold font-sans text-dark-1000">DCT ID:</span>  Eindeutige Blockchain-Kennung des Tokens</li>
    <li><span className="font-bold font-sans text-dark-1000">Name:</span>  Name des Tokens</li>
    <li><span className="font-bold font-sans text-dark-1000">Symbol:</span> Das Tickersymbol für den Token. Das DCT-Protokoll stellt eine Referenz zur Verfügung, um sicherzustellen, dass die Wahl auf ein eindeutiges Symbol fällt</li>
    <li><span className="font-bold font-sans text-dark-1000">Dezimalstellen:</span> Teilbare Anzahl von Nachkommastellen für den Token. Sie kann nicht mehr geändert werden, wenn sie einmal festgelegt wurde.</li>
    <li><span className="font-bold font-sans text-dark-1000">Gesamter Anfangsbestand:</span> Die Erstausgabe an Token, die im Zuge des Ereignisses generiert wird</li>
    <li><span className="font-bold font-sans text-dark-1000">Initiale Verteilungsliste:</span> Adressenliste für die Verteilung von Token</li>
    <li><span className="font-bold font-sans text-dark-1000">Minting-Unterstützung:</span> ja/nein</li>
    <li><span className="font-bold font-sans text-dark-1000">Obergrenze des Gesamtangebots (optional):</span> Unveränderliche Obergrenze für das Gesamtangebot. Wenn das Minting unterstützt wird, legt diese Option fest, wie viele Token der Token-Besitzer insgesamt minten kann (einige können zu diesem Zeitpunkt reserviert sein). Wenn dieser Parameter leer gelassen wird, ist der Token unbegrenzt verfügbar. Dieser Parameter kann nach der ersten Definition des Tokens nicht mehr geändert werden.</li>
    <li><span className="font-bold font-sans text-dark-1000">Handelbar? :</span> ja/nein. Dies ist ein Einwegschalter, der es dem Token-Besitzer ermöglicht, Token während der anfänglichen Verteilungsphase zu transferieren und auch zu entscheiden, wann ein Token handelbar oder verschiebbar ist. Um den dezentralen Charakter von DCT zu gewährleisten, kann der Eigentümer die Handelbarkeit eines Tokens nicht mehr rückgängig machen, sobald "Handelbar?" auf ja gesetzt ist. In der Regel sollte dies bei der Erstellung eines Tokens auf "nein" gesetzt werden, bis die ursprüngliche Verteilung als korrekt bestätigt wurde.</li>
  </ul>
  <div className="mt-5">
  Wenn du diese Schnittstelle verwendest, brauchst du keinen Smart-Contract-Entwickler und auch keine Sicherheitsaudits.
  </div>
</div>

<h3 id="dat" title="DeFi Asset Token (DAT)" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
DeFi Asset Token (DAT)
</h3>

<div className="mt-4 text-dark-800">
DeFi Asset Token (DATs) sind dezentral abgesichert. DATs auf DeFiChain sind Token und Krypto-Vermögenswerte außerhalb von DeFiChain, wie z.B.:
<div className="mt-5">
  <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>DBTC, hinterlegt mit BTC</li>
    <li>DETH, hinterlegt mit ETH</li>
    <li>DXRP, hinterlegt mit XRP</li>
    <li>DUSDT, hinterlegt mit USDT</li>
    <li>DBCH, hinterlegt mit BCH, usw.</li>
  </ul>
  </div>
  <div className="mt-5">
  Neue DATs werden durch Abstimmungen der Masternodes in das System eingeführt. So wird sichergestellt, dass nur Vermögenswerte eingeführt werden, die bei den DeFiChain-Nutzern auf das größte Interesse stoßen.
  </div>
</div>

<h3 id="economicPegging" title="Wirtschaftliche Anbindung von DATs" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Wirtschaftliche Anbindung von DATs
</h3>

<div className="mt-4 text-dark-800">
Das Ziel von DAT ist es, dass es den nativen Vermögenswert auf den anderen Blockchains repräsentiert, z.B. sollte 1 DBTC 1 BTC repräsentieren.
<div className="mt-5">
Hier gibt es zwei Ansätze:
</div>
  <div className="mt-5">
    <span className="font-bold font-sans text-dark-1000">1. Stablecoin-Ansatz</span> 
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
      <li style="margin-left:20px">Für jeden ausgegebenen 1 DBTC muss 1 BTC in einer Adresse oder einem Smart Contract hinterlegt werden.</li>
      <li style="margin-left:20px">Dies würde zwar helfen, eine Garantie für DBTC aufzubauen, bringt aber auch einige andere Probleme mit sich - Gegenparteirisiken und Auswirkungen auf den dezentralen Charakter von DeFi.</li>
    </ul>
  </div>
  <div className="mt-5">
    <span className="font-bold font-sans text-dark-1000">2. Ökonomische Ankopplung</span> 
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
      <li style="margin-left:20px">Durch eine starke Garantie, dass der Preis des DAT, der einen Vermögenswert repräsentiert, sich eng an den entsprechenden Vermögenswert anlehnt, d.h. wenn man DBTC hält, kann man darauf vertrauen, dass sich der Wert von DBTC an den von BTC anpasst.</li>
    </ul>
  </div>
  <div className="mt-5">
  Damit wir eine ökonomische Ankopplung erreichen können, werden die folgenden Bausteine direkt auf DeFiChain aufgesetzt:
</div>
  <div className="mt-5">
    <div>1. Darlehensvertrag</div>
    <div>2. Dezentrale Börse (DEX)</div>
    <div>3. Chainübergreifende Tauschgeschäfte (XCX)</div>
    <div>4. Preisorakel</div>
  </div>
  <div className="mt-6">

![DAT Übersicht](/img/white-paper/dat-overview.png)

  </div>
</div>

<h3 id="loanContract" title="Darlehensvertrag" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Darlehensvertrag
</h3>
<div className="mt-5 text-dark-800">
Der Darlehensvertrag dient dazu, dass der Eigentümer des Vertrags ein besichertes Darlehen gegen die im Vertrag festgelegten Sicherheiten aufnehmen kann. Jeder Darlehensvertrag ist für jeden Eigentümer (Adresse) auf DeFiChain einzigartig.
<div className="mt-5">
Jeder Nutzer kann auf DeFiChain kostenlos einen Darlehensvertrag eröffnen. Der Nutzer, der einen Darlehensvertrag eröffnet, ist Eigentümer des jeweiligen Vertrags. Dieses Eigentum ist jedoch übertragbar.
</div>
<div className="mt-5">
Sobald ein Darlehensvertrag eröffnet ist, können DFI gesendet werden, um die Besicherung des Darlehens zu finanzieren. Sobald ein Darlehensvertrag finanziert ist, kann der Eigentümer ein Darlehen aufnehmen, indem er DATs bis zu einem bestimmten Besicherungsgrad mintet. Der Mindestbesicherungsgrad kann von der DeFiChain DAO angepasst werden und beginnt bei 150%. Mit anderen Worten: Für 1.500 US-Dollar an Sicherheiten (in DFI) kann der Inhaber des Darlehensvertrags maximal 1.000 US-Dollar an Darlehen aufnehmen.
</div>
<div className="mt-5">
Für gemintete DAT gilt ein variabler Sollzinssatz. Ein Darlehensvertrag hat kein Verfallsdatum. Der/die Eigentümer/in kann ein Darlehen so lange aufnehmen, wie er/sie möchte, solange die Besicherungsquote stets über 150 % liegt.
</div>
  <div className="mt-12 p-6 bg-dark-100 rounded-[5px]">
    <div className="font-code text-dark-900 text-base leading-6">
    Besicherungsgrad = Sicherheiten / (Darlehen + aufgelaufene Zinsen)
    </div>
  </div>
<div className="mt-12">
Fällt ein Darlehensvertrag zu irgendeinem Zeitpunkt unter die Besicherungsquote von 150%, werden seine Sicherheiten über die dezentrale Börse (DEX) liquidiert, um die aufgelaufenen Zinsen zu begleichen. Um die Zahl der Auflösungen von Darlehensverträgen zu verringern, wird eine zusätzliche Liquidationsstrafe von 15% erhoben. Es liegt in der Verantwortung der Inhaber/innen von Darlehen, den Besicherungsgrad zu überwachen, um eine ungewollte Liquidation zu verhindern.
</div>
<div className="mt-5">
Wenn ein Darlehensvertrag nahe an der Mindestbesicherungsquote liegt, muss der/die Eigentümer/in eine der folgenden Maßnahmen ergreifen, um zu verhindern, dass er/sie liquidiert wird und eine 15%ige Liquidationsstrafe zahlen muss:
</div>
<div className="mt-5">
<div>1. Mehr DFI in den Darlehensvertrag einzahlen, wodurch die Sicherheiten und der Besicherungsgrad steigen.</div>
<div>2. Einen Teil des Darlehens (oder der aufgelaufenen Zinsen) zurückzahlen, wodurch sich der Darlehensbetrag des Darlehensvertrags verringert und die Besicherungsquote steigt.</div>
</div>
<div className="mt-5">
Der Abschluss eines Darlehensvertrags gibt dem Eigentümer das Recht, die gesamten 100% seiner Sicherheiten zurückzuerhalten. Um einen Darlehensvertrag zu schließen, muss der Eigentümer das Darlehen vollständig zurückzahlen und zusätzlich die aufgelaufenen Zinsen für seine Entität im DAT (z. B. DBTC). Nach der Abwicklung des Darlehens wird der gemintete DAT verbrannt, und der ursprüngliche gemintete DAT und die Zinsen werden über den in diesem Papier beschriebenen DeFi DEX in DFI umgewandelt.
</div>
<div className="mt-5">
Dieses Konzept ist zwar nicht neu für das DeFi-System, neu ist jedoch die Möglichkeit, jedes beliebige Asset zu besichern, als Charakteristikum von DeFiChain.
</div>
<div className="mt-5">
<div>1. Alice eröffnet einen Darlehensvertrag und finanziert ihn mit 150k DFI.</div>
<div>2. Bei einem Spotkurs von DFI von 0,10 $ hat Alices Darlehensvertrag jetzt einen Wert von 15.000 $.</div>
<div>3. Bei einer Mindestbesicherung von 150% kann sie maximal DBTC im Wert von 10.000 Dollar aufnehmen, die an den Spotpreis von BTC gekoppelt sind.</div>
<div>4. Da das DBTC-Darlehen über den Darlehensvertrag verzinst wird und der DBTC- und der DFI-Preis schwanken, beschließt Alice, nur DBTC im Wert von $5.000 aufzunehmen, also 0,5 DBTC, was ihrem Darlehensvertrag eine Besicherungsquote von: 15000/5000 = 300% verleiht, also deutlich über 150%.</div>
<div>5. Die Übersicherung lässt einen gewissen Spielraum für Preisschwankungen von DBTC. Wenn der BTC-Preis auf 15.000 USD steigt, wäre Alices Darlehen von 0,5 DBTC jetzt 7.500 USD wert. Ihr Darlehensvertrag hat jetzt einen Besicherungsgrad von: 15000/7500 = 200%, also immer noch über 150%, so dass eine Liquidation auch bei einer solchen Preisveränderung nicht ausgelöst würde.</div>
<div>6. Der Zinssatz für jedes DAT-Darlehen ist unterschiedlich. Angenommen, der Zinssatz für ein DAT-Darlehen beträgt 5 % pro Jahr und Alice nimmt ein Darlehen für ein Jahr auf. Um ihren Darlehensvertrag zu erfüllen und ihre anfänglichen 150k DFI vollständig zurückzuzahlen, muss Alice bis zum Ende des Jahres 0,5 DBTC \* 1,05 = 0,525 DBTC zurückzahlen.</div>
</div>

<div className="mt-12">

![Darlehensvertrag](/img/white-paper/alice-pdc.png)

</div>

</div>

<h3 id="dex" title="Dezentrale Börse (DEX)" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Dezentrale Börse (DEX)
</h3>
<div className="mt-4 text-dark-800">
  Die DeFi interne DEX bietet dezentralen Handel für alle DeFi-Token und DFI selbst, was bedeutet, dass alle Token: DFI und DCT (DAT und DCT) auf der DeFiChain-DEX gehandelt werden können. Die DEX wird zunächst mit DFI als Basis-Handelspaar starten und Märkte wie DBTC/DFI, DETH/DFI, DUSDT/DFI, etc. anbieten. Mit steigendem Volumen können weitere Basis-Handelspaare eingeführt werden, sofern die DAO dies genehmigt, z. B. DETH/DBTC, DFI/DUSDT usw.
  <div className="mt-5">
  Die DEX auf DeFiChain funktioniert ohne die Notwendigkeit, die Verwahrung an einen Broker zu übergeben. Die Nutzer können auf vertrauensunabhängige Weise selbst handeln. Eines der wichtigsten Unterscheidungsmerkmale von DeFiChain im Vergleich zu vielen anderen dezentralen Finanzlösungen ist, dass DeFiChain nicht nur ein Konsensprotokoll ist, das DeFi ermöglicht, sondern auch eine sehr einfach zu bedienende Client-Benutzeroberfläche (UI) hat, die es den Nutzern ermöglicht, direkt auf der Blockchain zu interagieren, ohne dass es einen Vermittler gibt.
  </div>
</div>

<h3 id="xcx" title="Chainübergreifende Tauschgeschäfte (XCX)" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Chainübergreifende Tauschgeschäfte (XCX)
</h3>
<div className="mt-4 text-dark-800">
Ein Nutzer, der DBTC hält, könnte daran interessiert sein, echte BTC anstelle eines an DeFi gekoppelten BTC-Tokens (DBTC) zu halten.
<div className="mt-5">
Mit dem chainübergreifenden Tauschgeschäft - DeFi Cross-Chain Exchange (XCX) kann jeder genau das tun. XCX ermöglicht die Notierung von DATs mit den dazugehörigen Token, z.B. DBTC für BTC, DETH für ETH, DXRP für XRP. Die eigentliche Transaktion wird durch den vertrauensunabhängigen Tausch der beiden Token durchgeführt, der auch als Atomic Swap bekannt ist. Atomic Swap garantiert, dass entweder beide Parteien ihre getauschten Token erhalten oder keine der Transaktionen durchgeführt wird - eine starke kryptografische Garantie, dass keine Partei die andere betrügen kann.
</div>
<div className="mt-5">
Wir verwenden die folgenden Begriffe, um die Akteure beim XCX zu beschreiben:
</div>
<div className="mt-5">
<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li><span className="font-bold font-sans text-dark-1000">Darlehensnehmer:</span> eine Person, die einen DAT besitzt und einen nativen Token erhalten möchte, z.B. eine Person, die DBTC besitzt und BTC über XCX erhalten möchte.</li>
    <li><span className="font-bold font-sans text-dark-1000">Darlehensgeber:</span> eine Person, die BTC besitzt und über XCX einen DAT erhält, entweder vorübergehend für die Dauer des XCX oder dauerhaft, wenn das XCX ausläuft.</li>
</ul>
</div>
<div className="mt-5">
XCX-Aufträge enthalten mehrere Parameter, die vom Market Marker (Erstanbieter eines Auftrags) frei gewählt werden können. Für den Verkauf von DBTC gegen BTC (d.h. jemand, der daran interessiert ist, tatsächliche BTC zu erhalten), sind die Parameter:
</div>
  <div className="mt-5">
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li><span className="font-bold font-sans text-dark-1000">Betrag:</span> Die Summe an Token/DAT, die ein Verkäufer sucht, und wie viel DAT er unter Verschluss hat.</li>
      <li><span className="font-bold font-sans text-dark-1000">Prämie:</span> Höhe der zusätzlichen Gebühr, die ein Token-Verkäufer bei diesem Handel einnimmt (die Prämie wird pro Einheit angegeben, so dass eine Teilerfüllung von Handelsaufträgen möglich ist). Zusammen mit dem Verfall kann sie auch als Leihzins für den Käufer betrachtet werden. Die Prämie wird sofort gezahlt, sobald ein XCX erfüllt ist, bevor der Leihvertrag abläuft. Die Prämie kann je nach Angebot und Nachfrage positiv (+) oder negativ (-) sein.</li>
      <li><span className="font-bold font-sans text-dark-1000">Garantie:</span> Ein optionaler zusätzlicher Betrag in DBTC und/oder DFI, der im XCX festgeschrieben ist und einen zusätzlichen Anreiz für den Darlehensgeber darstellt, wenn er eine der beiden folgenden Möglichkeiten wählt:
        a. Wird an den/die Darlehensnehmer/in zurückerstattet, wenn der BTC-Betrag vor Ablauf der Frist zurückgezahlt wird.
        b. Freigabe an den Darlehensgeber, wenn der Vertrag ausläuft, ohne dass der Darlehensnehmer eine Zahlung leistet, was einen zusätzlichen Anreiz darstellt.</li>
      <li><span className="font-bold font-sans text-dark-1000">Verfall:</span> Der Zeitpunkt, an dem der Kontrakt abläuft. Er kann als Datum in der Vergangenheit für eine sofortige Abrechnung festgelegt werden, d.h. kein Darlehen, sondern ein direkter Tausch.</li>
      <li><span className="font-bold font-sans text-dark-1000">Native Token-Adresse:</span> Die Adresse, an die BTC für die Ausführung des Vertrags gesendet werden.</li>
    </ul>
  </div>
</div>

<div className="mt-12 font-bold font-sans lg:text-xl">
Erstes Beispiel:
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
  Alice hat 1 DBTC und möchte 1 BTC, damit sie an einer zentralen Börse handeln kann
  <div className="mt-7">
  Bob hat 1 BTC, den er einen Monat lang nicht braucht, und hofft, in dieser Zeit einige Zinseinnahmen zu erzielen.
  </div>
  <div className="mt-7">
  Alice listet die folgenden XCX-Order:
  </div>
  <div className="mt-7">
  <div>Betrag: 1 DBTC/BTC</div>
  <div>Prämie: 8.000 DFI</div>
  <div>Garantie: 0,1 DBTC</div>
  <div>Verfall: 31. Dezember 2019 - ca. 1 Monat.</div>
  <div>Adresse: Alice gibt ihre BTC-Einzahlungsadresse an</div>
  </div>
  <div className="mt-7">
  Bob nimmt das Angebot an, indem er eine Transaktion an DeFiChain sendet.
  </div>
  <div className="mt-7">
  3. Bob erhält eine Bestätigung auf DeFiChain, dass seine Order angenommen wurde. Falls es mehrere Transaktionen zur Orderannahme gibt.
  </div>
  <div className="mt-7">
  4. Bob schickt 1 BTC an die im XCX-Auftrag angegebene BTC-Einzahlungsadresse von Alice und sendet eine Transaktion auf DeFiChain mit dem BTC txid als Quittung. In der gleichen Transaktion gibt Bob auch eine BTC-Empfangsadresse an, an die Alice den 1 BTC später zurückzahlen kann.
  </div>
  <div className="mt-7">
  5. Mehrere DeFiChain-Staker mit BTC-Bridges bestätigen, dass Bob den Betrag tatsächlich wie vereinbart gesendet hat und dass die Txid gültig ist.
  6. Die XCX-Prämie in Höhe von 8000 DFI wird sofort an Bob freigegeben. Bob kann mit den DFI sofort machen, was er will, ohne dass es an Bedingungen geknüpft ist. Bob kann sie für diesen Handel behalten.
  </div>
  <div className="mt-7">
  Jetzt hat Alice 1 BTC und Bob hat 8000 DFI. Alice hat außerdem 1 DBTC in einer XCX-Order gebunden und Bob ist der Begünstigte dieser BTC. Beachte, dass der Begünstigte eines XCX übertragbar ist, d.h. Bob kann das XCX mit Alice an einen Dritten verkaufen (dies ermöglicht einen dezentralen Verkauf von Schuldtiteln und eine Tokenisierung von Forderungen).
  </div>
  <div className="mt-7">
  Wenn Alice ihren 1 DBTC aus dem XCX vor Ablauf der Zeit einlösen möchte, schickt sie Bob den 1 BTC, die sie sich zuvor geliehen hat, an Bobs im XCX angegebene Adresse und sendet die Bestätigung auf DeFiChain. Nach der Bestätigung durch Staker mit einer BTC-Bridge wird der XCX-Vertrag nun geschlossen und Alice erhält ihren 1 DBTC zurück, nachdem sie 8.000 DFI als Zinsen gezahlt hat.
  </div>
  <div className="mt-7">
  Bob bekommt seinen 1 BTC zurück (und behält seine 8000 DFI als Darlehenszinsen).
  </div>
  <div className="mt-7">
  Sollte Alice das XCX nicht vor Ablauf der Frist einlösen wollen, darf Bob den 1 DBTC von Alice behalten.
  </div>
  <div className="mt-7">
  Alice darf den 1 BTC (abzüglich 8000 DFI-Zinsen) behalten und Bob erhält nun 1 DBTC (plus 8000 DFI-Zinsen). Zusätzlich hat Bob die Garantie von 0,1 DBTC erhalten, was ihm zusätzliche 10 % einbringt.
  </div>
  <div className="mt-6">

![XCX](/img/white-paper/alice-bob-xcx.png)

  </div>
</div>

<div className="mt-12 font-bold font-sans lg:text-xl">
Zweites Beispiel:
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
  In einem zweiten Szenario hat Charlie 1 DBTC und will 1 BTC. Er hat nicht die Absicht, zu tilgen und seinen DBTC zurückzubekommen. Er möchte auch keine zusätzliche Garantie einschließen, also fügt er eine höhere Prämie und einen sofortigen Verfall hinzu. Charlie würde den folgenden XCX-Auftrag aufgeben:
  <div className="mt-7">
      <div>Betrag: 1 DBTC/BTC</div>
      <div>Prämie: 12000 DFI</div>
      <div>Garantie: Keine</div>
      <div>Verfall: Sofort</div>
    </div>
    <div className="mt-7">
  Dave bemerkt, dass die Order keine Garantie und einen sofortigen Verfall hat und weiß, dass diese XCX-Order sofort verfällt. Er bietet Charlie gerne den Gegenhandel an, indem er ihm 1 BTC gibt und sofort 1 DBTC + 12000 DFI erhält.
  </div>
  <div className="mt-7">
  Eine Garantie ist also kein Muss, sondern ein möglicher Anreiz für den Darlehensgeber, um zu wissen, ob er/sie die erhaltenen Gelder im Nachhinein umtauschen muss oder ob er/sie die ursprünglichen nativen Coins zurückbekommt.
  </div>
</div>

<h3 id="pricingOracles" title="Preisorakel" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Preisorakel
</h3>
<div className="mt-4 text-dark-800">
  in Preiskontrakt ist ein Smart-Contract auf der DeFiChain, der es mehreren vertrauenswürdigen und benannten Parteien ermöglicht, regelmäßige Preisfeeds von DATs und DFI zu übermitteln.
  <div className="mt-5">
  Die DeFi-DAO wählt mehrere Preiskontrakt-Orakel aus (wird im nächsten Kapitel erklärt).
  </div>
</div>

<h3 id="useCases" title="Anwendungsbeispiele" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Anwendungsbeispiele
</h3>
<div className="mt-4 text-dark-800">
Im Folgenden findest du Beispiele dafür, wie die technischen Implementierungen von DeFiChain genutzt werden können. Dies ist nur eine Liste von Beispielen. Viele andere Anwendungen können ebenfalls implementiert werden.

<div className="mt-8 font-bold font-sans lg:text-xl">
Hebeln einer Long-Position
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
  <div>1. Alice hat 100k DFI. Sie mag die Aussichten von DFI und möchte ihre Position als Hebel nutzen.</div>
  <div>2. Alice eröffnet einen Darlehensvertrag auf DeFiChain und nimmt ein Darlehen in DUSDT auf.</div>
  <div>3. Alice verkauft DUSDT für mehr DFI.</div>
  <div className="mt-5">
  So kann Alice eine zusammengesetzte Long-Position auf DFI erwerben, ohne zusätzliches Kapital zu investieren.
  </div>
</div>

<div className="mt-8 font-bold font-sans lg:text-xl">
Leerverkauf eines Tokens
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
  <div>1. Bob möchte den Coin XXX shorten. Bob hat DFI.</div>
  <div>2. Bob eröffnet einen Darlehensvertrag auf DeFiChain und nimmt ein Darlehen in DXXX auf.</div>
  <div>3. Bob kann nun entweder DXXX für DFI oder DUSDT auf der DeFi-DEX verkaufen oder DXXX über XCX umwandeln, um XXX auf einer nicht-DeFi-internen Börse zu verkaufen.</div>
  <div>4. Sobald Bob seine Short-Position schließen möchte, kauft er XXX (oder DXXX) vom Markt zurück, hoffentlich zu einem niedrigeren Kurs, schließt seinen Darlehensvertrag und beendet damit seinen Short von XXX.</div>
</div>

<div className="mt-8 font-bold font-sans lg:text-xl">
Ein Darlehen erhalten (Kreditaufnahme)
</div>

<div className="mt-2 text-dark-800 text-base leading-7">
  <div>1. Charlie hat DFI, aber er braucht kurzfristig den Cashflow eines anderen Coins XXX. Charlies will weder DFI dafür verkaufen noch will er Fiatgeld ausgeben, um diesen Coin zu kaufen.</div>
  <div>2. Charlie nimmt ein Darlehen über einen Darlehensvertrag auf DeFiChain für DXXX auf und wandelt es in XXX um.</div>
  <div>3. Sobald er sein Darlehen begleichen möchte, kauft Charlie einfach XXX/DXXX und löst seinen Darlehensvertrag auf.</div>
</div>

<div className="mt-8 font-bold font-sans lg:text-xl">
Einen Coin verleihen und dadurch Cashflow generieren
</div>
<div className="mt-2 text-dark-800 text-base leading-7">
  <div>1. Dave hat BTC, die er kurzfristig nicht braucht. Dave möchte durch das Verleihen von BTC einen gewissen Zins (Cashflow) erzielen.</div>
  <div>2. Dave listet BTC auf XCX und gibt dabei seinen BTC-Betrag, die gewünschte Prämie (Zinssatz) und den Verfallstermin (Zeitraum, in dem er seine BTC nicht benötigt) an.</div>
  <div>3. Sobald eine Gegenpartei Daves Angebot annimmt, erhält Dave sofort eine Prämie in DFI.</div>
  <div>4. Nach Ablauf der Frist bekommt Dave entweder seine BTC zurück oder er erhält DFI über die zusätzliche Garantie, wodurch er mehr als seine ursprünglichen BTC erhalten würde.</div>
</div>
</div>

<h2
      id="dfiCoin"
      title="Der $DFI-Coin"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      8. Der $DFI-Coin
    </h2>

<div className="mt-4 text-dark-800">
Der $DFI-Coin wird die integrale Rechnungseinheit im DeFiChain-Ökosystem sein.

Die DeFiChain Foundation wird den DeFi Utility Token DFI ausgeben, der auf eine Gesamtmenge von 1.200.000.000 (1,2 Milliarden) begrenzt ist. Es werden niemals mehr als 1,2 Milliarden DFIs ausgegeben.

DFI ist bis zu 8 Dezimalstellen teilbar.

</div>

<h3 id="utility" title="Der Nutzwert des $DFI-Coins" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Der Nutzwert des $DFI-Coins

</h3>

<div className="mt-4 text-dark-800">
<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
  <li>DFI wird für die Zahlung von Gebühren für alle Transaktionen und Smart Contracts auf DeFiChain verwendet.
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
      <li class="ml-5">
      Gebührenzahlung für dezentrale Börsengeschäfte</li>
      <li class="ml-5">Gebühren für Token-Transfers</li>
    </ul>
  </li>
  <li class="mt-7">Bezahlung der Gebühren für die DeFi-Aktionen:
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
      <li class="ml-5">DEX-Gebühren</li>
      <li class="ml-5">XCX-Gebühren</li>
      <li class="ml-5">Zahlung von Darlehenszinsen</li>
      <li class="ml-5">usw.</li>
    </ul>
  </li>
  <li class="mt-7">Sicherheiten für die Beleihung anderer Kryptoassets auf DeFiChain.</li>
  <li class="mt-7">20.000 DFI sind erforderlich, um einen Staking Node auf der DeFiChain zu betreiben.</li>
  <li class="mt-7">Für die Erstellung eines DCT sind 1.000 DFI erforderlich. Dieser Betrag wird bei der Zerstörung des DCT zurückerstattet.</li>
  <li class="mt-7">10 DFI ist erforderlich, um einen Vorschlag für den Community Fund einzureichen. Dieser Betrag ist nicht erstattungsfähig.</li>
  <li class="mt-7">50 DFI für das Einreichen eines Vertrauensvotums. Ebenfalls nicht erstattungsfähig. Beides ist an die Burn-Adresse 8defichainBurnAddressXXXXXXXdRQkSm zu zahlen.</li>
</ul>
</div>

<div className="mt-6 font-bold font-sans text-xl md:mt-8 lg:mt-12 lg:text-2xl">
Gebühren aus DeFi-Geschäften
</div>
<div className="mt-4 text-dark-800">
Die Gebühren aus den DeFi-Geschäften auf DeFiChain werden verbrannt und durch das Minting neuer Token über einen bestimmten Zeitraum umverteilt, wie unten beschrieben. So wird sichergestellt, dass die DeFi-Staker in den Genuss der Vorteile kommen, die sich aus der Ermöglichung des vertrauensunabhängigen DeFi-Handels auf der DeFiChain ergeben, und zwar auf faire Art und Weise.
</div>

<div className="mt-6 font-bold font-sans text-xl md:mt-8 lg:mt-12 lg:text-2xl">
Die Rewards für das Minen eines Blocks auf DeFiChain werden wie folgt berechnet:
</div>
<div className="mt-4 text-dark-800">
  <div>1. Zugrunde liegender Block Reward Schedule (siehe Distributionsplan) +</div>
  <div>2. Zeitplan für die Umverteilung der geburnten Token</div>
  <div className="mt-5">
  Der Zeitplan für die Umverteilung der verbrannten Token wird automatisch alle 259.200 Blöcke (ca. alle 90 Tage) festgelegt und funktioniert wie folgt:

![Umverteilung verbrannter Token](/img/white-paper/burn.png)

  </div>
  <div className="mt-5">
  Umverteilung der verbrannten Token für die nächsten 259.200 Blöcke =
  </div>
  <div className="mt-5">
    <div>1. (Insgesamt verbrannte Token aus den letzten 259.200 Blöcken [Quartal -1]) / 4 +</div>
    <div>2. (Insgesamt verbrannte Token von Block -518.400. bis -259.200. Block [Quartal -2]) / 4 +</div>
    <div>3. (Insgesamt verbrannte Token von Block -777.600. bis -518.400. Block [Quartal -3]) / 4 +</div>
    <div>4. (Insgesamt verbrannte Token von Block -1.036.800. bis -777.600. Block [Quartal -4]) / 4</div>
  </div>
</div>

<h3 id="masternodes" title="Masternodes" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Masternodes
</h3>
<div className="mt-4 text-dark-800">
DeFi ist eine Proof of Stake-Blockchain. Ursprünglich konnte man mit 1.000.000 DFI einen Masternode betreiben. Heute ist der Betrag auf 20.000 DFI für das Betreiben eines Masternodes reduziert worden. Die Rendite für das Staking sinkt mit der Zeit, da das Volumen und die Anzahl der Transaktionen die geringeren Rewards für das Staking pro Transaktion ausgleichen.
<div className="mt-5">
Diese Nodes haben Anspruch auf:
<ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li>Regelmäßige Staking Rewards , wie später in diesem Kapitel beschrieben.</li>
    <li>Abgabe von Stimmen zu wichtigen Entscheidungen, die DeFiChain im Governance-System verwalten.</li>
    <li>Einreichung von Abstimmungen über die Zuweisung und Verteilung des DFI-Gemeinschaftsbudgets (Community Fund).</li>
  </ul>
  </div>
</div>

<h3 id="governance" title="Governance" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Governance / Verwaltung
</h3>
<div className="mt-4 text-dark-800">
  Die DeFiChain Foundation ist für die Ausgabe der Token verantwortlich und wird von einem unabhängigen Vorstand geleitet. Dieser Vorstand wird von den DeFi Masternodes beaufsichtigt, die über seine Mitglieder abstimmen und auch Richtlinien für wichtige Entscheidungen geben.
  <div className="mt-5">
  Die DeFiChain Foundation vergibt Token an Nutzer und Gruppen, um die Akzeptanz zu beschleunigen (siehe den Abschnitt über die anfängliche Verteilung und Vermarktung von Token). Die Foundation hat die Aufgabe, das Ökosystem anzukurbeln, Ökosystempartner einzubinden, die Entwicklung von Tools für Ökosystempartner zu leiten und andere Aktivitäten durchzuführen, um die Zahl der Ökosystempartner zu steigen.
  </div>
  <div className="mt-5">

![Governance](/img/white-paper/governance.png)

</div>
  <div className="mt-5">
  Zur Klarstellung und Transparenz: Cake Pte Ltd ist ein privates Unternehmen mit Sitz in Singapur. Cake Pte Ltd ist einer der ersten Partner des Ökosystems, der Dienste auf DeFiChain entwickelt.
  </div>
</div>

<h3 id="cdf" title="Community Development Fund" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Community Development Fund
</h3>
<div className="mt-4 text-dark-800">
Die DeFiChain Foundation wird einen gemeinschaftlichen Entwicklungsfonds einrichten, der bis zu 10 % der Block-Belohnungen verwaltet. Dieser Prozentsatz kann aktualisiert werden, indem ein DAO-Vorschlag eingereicht wird, über den alle Masternodes abstimmen. Community Development Funds wurden von DASH<a className="text-electric" href="#user-content-fn-9"><sup>9</sup></a> populär gemacht und werden heute in einigen ausgewählten DAOs eingesetzt. Die Community entscheidet über die Verwendung dieser Mittel für Entwicklung, Marketing oder Forschung, die der DeFi-Community zugute kommt. DFI Masternodes stimmen über Projekte ab, die ihnen gefallen, und die Vorschläge mit den meisten Stimmen werden jeden Monat finanziert.
<div className="mt-5">
Die Einreichung eines Budgetvorschlags kostet 10 DFI und kann von jedem erfolgen. Diese Gebühr wird verbrannt und ist nicht erstattungsfähig, unabhängig davon, ob der Haushalt genehmigt wird. Budgets sind Vorschläge, die eine Nettosumme von Ja-Stimmen erhalten, die mindestens 10% der möglichen Gesamtstimmen ausmacht (z.B. mehr als 448 von 4480). Budgets können jederzeit annulliert werden, wenn die Gesamtzahl der Stimmen (abgegebene oder neu abgegebene) unter die Genehmigungsschwelle fällt. Die Budgets werden in der Reihenfolge der Ja- minus der Nein-Stimmen bearbeitet (bezahlt). Beliebtere Budgets werden vorrangig ausgezahlt. Die Abstimmung findet monatlich statt, kann aber durch eine Abstimmung auf dem Masternode geändert werden.
</div>
<div className="mt-5">
Für Governance-Entscheidungen kann nur die Foundation Vorschläge einreichen. Die Abstimmung über Vorschläge erfolgt ähnlich wie bei den Haushaltsvorschlägen der DAO, mit dem Unterschied, dass die Entscheidungen mit einfacher Mehrheit getroffen werden.
</div>

[^10]: https://docs.dash.org/en/stable/governance/understanding.html

<h3 id="initial-token" title="Anfängliche Verteilung der Token" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Anfängliche Verteilung der Token
</h3>
<div className="mt-4 text-dark-800">
  Von den rund 1,2 Milliarden $DFI-Coins werden zu Beginn 49% an die DeFiChain Foundation ausgegeben. Der Rest wird im Laufe der Zeit an Masternode-Inhaber ausgegeben.
  Von den 49% der anfänglich ausgegebenen $DFI-Coins werden 49% bei der DeFiChain Foundation verbleiben. Der Rest kann an akkreditierte Investoren, große Fonds und Institutionen, zusammenfassend als externe Partner bezeichnet, verteilt werden, um die anfängliche Entwicklung von DeFiChain zu finanzieren. Um die Bestände der DFI so weit wie möglich zu dezentralisieren, darf die DeFiChain Foundation nicht mehr als 49% aller ursprünglich ausgegebenen Token behalten. Über die Verwendung möglicher Einnahmen aus den Token entscheidet der Vorstand der DeFiChain Foundation, aber sie werden ausschließlich für die Einführung und Entwicklung von DeFiChain verwendet.
  <div className="mt-5">
  Um jeden Zweifel auszuschließen: Es wird KEIN öffentliches ICO (Unregulierte Emission von Utility Token zur Finanzierung) geben.
  </div>
  <div className="mt-4">

![Anfängliche Verteilung der Token](/img/white-paper/initial-token-distribution.png)

  </div>
  <div className="mt-4">
  Weitere Token erhält man nur durch Staking, das im nächsten Kapitel beschrieben wird.
  </div>
</div>

<h3 id="token-issuance" title="Zeitplan für die Ausgabe von Token über Staking" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Zeitplan für die Ausgabe von Token über Staking
</h3>
<div className="mt-4 text-dark-800">
DeFiChain wird zunächst mit einem Block Reward von 200 DFI gestartet, von denen 10% an den Community Fund gehen. Die Foundation verpflichtet sich, diese 200 DFI Blockbelohnung für mindestens 1.050.000 Blöcke ab dem ersten Genesis-Block, also etwa 1 Jahr, zu garantieren.
<div className="mt-5">
Später werden die Blockbelohnungen durch eine Governance-Abstimmung angepasst. Die Foundation verpflichtet sich außerdem, dass nie mehr als 1.200.000.000 (1,2 Milliarden) DFI im Umlauf sein werden, es sei denn, die DAO-Governance stimmt über eine Änderung dieser Grenze ab. DFI ist also ein deflationärer Utility-Token.
</div>
<div className="mt-5">
Der vorgeschlagene Staking-Zeitrahmen für die ersten 10 Jahre ist in der folgenden Tabelle dargestellt:
</div>
  <div className="table-responsive table-auto text-base text-left border-solid border-2 border-dark-1000 no-scrollbar mt-7" style="overflow: scroll;">
  <table>
    <thead>
      <tr style="border: 1px solid #dddddd;">
        <th style="border: 1px solid #dddddd;" scope="col">
          Jahr
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Token im Umlauf zu Jahresbeginn
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          % des Bestands gestaked
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Blockbelohnung
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Angestrebte neue Token %
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Angestrebte neue Token
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Staking Rendite %
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Tatsächliche neue Token
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Token im Umlauf zum Jahresende
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          % der Kapitalisierung
        </th>
        <th style="border: 1px solid #dddddd;" scope="col">
          Neue Token im Jahr
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">1</td>
        <td style="border: 1px solid #dddddd;">490 000 000</td>
        <td style="border: 1px solid #dddddd;">95%</td>
        <td style="border: 1px solid #dddddd;">200</td>
        <td style="border: 1px solid #dddddd;">20,00%</td>
        <td style="border: 1px solid #dddddd;">98 000 000</td>
        <td style="border: 1px solid #dddddd;">42,91%</td>
        <td style="border: 1px solid #dddddd;">210 240 000</td>
        <td style="border: 1px solid #dddddd;">700 240 000</td>
        <td style="border: 1px solid #dddddd;">58,35%</td>
        <td style="border: 1px solid #dddddd;">210 240 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">2</td>
        <td style="border: 1px solid #dddddd;">700 240 000</td>
        <td style="border: 1px solid #dddddd;">85%</td>
        <td style="border: 1px solid #dddddd;">150</td>
        <td style="border: 1px solid #dddddd;">13,33%</td>
        <td style="border: 1px solid #dddddd;">93 365 333</td>
        <td style="border: 1px solid #dddddd;">22,52%</td>
        <td style="border: 1px solid #dddddd;">157 680 000</td>
        <td style="border: 1px solid #dddddd;">857 920 000</td>
        <td style="border: 1px solid #dddddd;">71,49%</td>
        <td style="border: 1px solid #dddddd;">157 680 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">3</td>
        <td style="border: 1px solid #dddddd;">857 920 000</td>
        <td style="border: 1px solid #dddddd;">75%</td>
        <td style="border: 1px solid #dddddd;">100</td>
        <td style="border: 1px solid #dddddd;">8,89%</td>
        <td style="border: 1px solid #dddddd;">76 259 556</td>
        <td style="border: 1px solid #dddddd;">12,25%</td>
        <td style="border: 1px solid #dddddd;">105 120 000</td>
        <td style="border: 1px solid #dddddd;">963 040 000</td>
        <td style="border: 1px solid #dddddd;">80,25%</td>
        <td style="border: 1px solid #dddddd;">105 120 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">4</td>
        <td style="border: 1px solid #dddddd;">963 040 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">70</td>
        <td style="border: 1px solid #dddddd;">5,93%</td>
        <td style="border: 1px solid #dddddd;">57 069 037</td>
        <td style="border: 1px solid #dddddd;">7,64%</td>
        <td style="border: 1px solid #dddddd;">73 584 000</td>
        <td style="border: 1px solid #dddddd;">1 036 624 000</td>
        <td style="border: 1px solid #dddddd;">86,39%</td>
        <td style="border: 1px solid #dddddd;">73 584 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">5</td>
        <td style="border: 1px solid #dddddd;">1 036 624 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">50</td>
        <td style="border: 1px solid #dddddd;">3,95%</td>
        <td style="border: 1px solid #dddddd;">40 953 047</td>
        <td style="border: 1px solid #dddddd;">5,07%</td>
        <td style="border: 1px solid #dddddd;">52 560 000</td>
        <td style="border: 1px solid #dddddd;">1 089 184 000</td>
        <td style="border: 1px solid #dddddd;">90,77%</td>
        <td style="border: 1px solid #dddddd;">52 560 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">6</td>
        <td style="border: 1px solid #dddddd;">1 089 184 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">40</td>
        <td style="border: 1px solid #dddddd;">2,63%</td>
        <td style="border: 1px solid #dddddd;">28 686 328</td>
        <td style="border: 1px solid #dddddd;">3,86%</td>
        <td style="border: 1px solid #dddddd;">42 048 000</td>
        <td style="border: 1px solid #dddddd;">1 131 232 000</td>
        <td style="border: 1px solid #dddddd;">94,27%</td>
        <td style="border: 1px solid #dddddd;">42 048 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">7</td>
        <td style="border: 1px solid #dddddd;">1 131 232 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">25</td>
        <td style="border: 1px solid #dddddd;">1,76%</td>
        <td style="border: 1px solid #dddddd;">19 862 510</td>
        <td style="border: 1px solid #dddddd;">2,32%</td>
        <td style="border: 1px solid #dddddd;">26 280 000</td>
        <td style="border: 1px solid #dddddd;">1 157 512 000</td>
        <td style="border: 1px solid #dddddd;">96,46%</td>
        <td style="border: 1px solid #dddddd;">26 280 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">8</td>
        <td style="border: 1px solid #dddddd;">1 157 512 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">20</td>
        <td style="border: 1px solid #dddddd;">1,17%</td>
        <td style="border: 1px solid #dddddd;">13 549 295</td>
        <td style="border: 1px solid #dddddd;">1,82%</td>
        <td style="border: 1px solid #dddddd;">21 024 000</td>
        <td style="border: 1px solid #dddddd;">1 178 536 000</td>
        <td style="border: 1px solid #dddddd;">98,21%</td>
        <td style="border: 1px solid #dddddd;">21 024 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">9</td>
        <td style="border: 1px solid #dddddd;">1 178 536 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">10</td>
        <td style="border: 1px solid #dddddd;">0,78%</td>
        <td style="border: 1px solid #dddddd;">9 196 928</td>
        <td style="border: 1px solid #dddddd;">0,89%</td>
        <td style="border: 1px solid #dddddd;">10 512 000</td>
        <td style="border: 1px solid #dddddd;">1 189 048 000</td>
        <td style="border: 1px solid #dddddd;">99,09%</td>
        <td style="border: 1px solid #dddddd;">10 512 000</td>
      </tr>
      <tr style="border: 1px solid #dddddd;">
        <td style="border: 1px solid #dddddd;">10</td>
        <td style="border: 1px solid #dddddd;">1 189 048 000</td>
        <td style="border: 1px solid #dddddd;">70%</td>
        <td style="border: 1px solid #dddddd;">5</td>
        <td style="border: 1px solid #dddddd;">0,52%</td>
        <td style="border: 1px solid #dddddd;">6 185 973</td>
        <td style="border: 1px solid #dddddd;">0,44%</td>
        <td style="border: 1px solid #dddddd;">5 256 000</td>
        <td style="border: 1px solid #dddddd;">1 194 304 000</td>
        <td style="border: 1px solid #dddddd;">99,53%</td>
        <td style="border: 1px solid #dddddd;">5 256 000</td>
      </tr>
    </tbody>
  </table>
</div>

<h3 id="acquiring-DFI" title="Erwerb von $DFI-Coins" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Erwerb von $DFI-Coins
</h3>
<div className="mt-4 text-dark-800">
  $DFI-Coins werden nur an die Nutzer von DeFiChain oder Partner ausgegeben, die ein Interesse daran haben, das Ökosystem zu nutzen und daran teilzunehmen. Es wird KEIN öffentlicher Verkauf oder ein öffentliches Token-Angebot geben. Dies sind die einzigen Möglichkeiten, $DFI-Coins zu erhalten:
  <div className="mt-5">
  - Institutionelle Investoren, zugelassene Investoren und Fonds, die an der Nutzung von DeFiChain interessiert sind, können die DeFi-Gründer unter (<a className="text-electric" href = "mailto: partners@defichain.com">partners@defichain.com</a>) kontaktieren.
  - Im Laufe der Zeit wird DFI auf Staking-Plattformen (wie <a className="text-electric" href ="https://www.CakeDeFi.com" target="_blank">www.CakeDeFi.com</a>) und an ausgewählten Börsen verfügbar sein.
  - Die DeFiChain Foundation wird Airdrop-Token für die Nutzer von DeFiChain ausgeben. (Hodler und andere Akteure auf dem Markt).
  - Die DeFiChain Foundation vergibt Fördermittel an Entwickler, die Funktionen für DeFiChain oder dApps entwickeln, die auf der Blockchain laufen sollen.
  </div>
</div>

<h2
      id="defichain-foundation"
      title="DeFiChain Foundation (Stiftung)"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      9. DeFiChain Foundation (Stiftung)
    </h2>
<div className="mt-5 text-dark-800">
Die DeFiChain Foundation ist als Gesellschaft mit beschränkter Haftung gegründet worden und ähnelt einer Stiftungsstruktur, die die DeFiChain-Marken und -Domains hält und sicherstellt, dass die DFI-Stiftungsgelder wie von den Masternodes angewiesen verwendet werden.
</div>

<h2
      id="marketing"
      title="Marketing"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      10. Marketing
    </h2>

<h3 id="target-market" title="Zielmarkt" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Zielmarkt
</h3>
<div className="mt-4 text-dark-800">
Im Gegensatz zu den meisten anderen auf DeFi-fokussierten Projekten kann die DeFiChain, die auf Bitcoin aufbaut, fast den gesamten Kryptomarkt nutzen, ohne auf "kleinere" Chains wie Ethereum usw. beschränkt zu sein. Zum Zeitpunkt der Veröffentlichung sind mehr als 60-80 Millionen Kryptowährungsbesitzer der Zielmarkt für DeFiChain und wir können davon ausgehen, dass sich in Zukunft Hunderte von Millionen weiterer Nutzer anschließen werden. Diese Gruppe von Anlegern investiert und hält Kryptowährungen aufgrund der Rendite und ihres Glaubens an die Zukunft der Branche. Als Anleger haben sie mit dem Anstieg vieler Kryptowährungen weitgehend gut verdient, sind aber nicht in der Lage, ihre Bestände zu nutzen, um bessere Renditen zu erzielen. Die Bereitstellung von DeFi-Diensten ermöglicht es diesen Anlegern, die Coins oder Token zu halten, an die sie glauben, und ihre Bestände im Laufe der Zeit auf der Grundlage von Investitionen zu steigern, die über den reinen Währungshandel hinausgehen.
</div>

<h3 id="go-to-market-strat" title="Markteinführungsstrategie" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Markteinführungsstrategie
</h3>
<div className="mt-4 text-dark-800">
  Das anfängliche DeFiChain-Team besteht aus einigen der größten Namen in der Kryptowährungsbranche, die sich nicht nur durch die Einhaltung ihrer Versprechen, sondern auch durch den Aufbau einer Anhängerschaft einen Namen gemacht haben. Das Team hat eine Vielzahl von Marketingkanälen aufgebaut und verfügt über eine etablierte Fangemeinde in den sozialen Medien, eine weite Verbreitung von Büchern im Bereich der Kryptowährungen und weitreichende Kontakte innerhalb der Kryptowährungsbranche.
  <div className="mt-5">
  Mit der Erfahrung, in nur wenigen Jahren eine Fangemeinde von Hunderttausenden von Nutzern in den sozialen Medien aufgebaut zu haben, plant das Team, seine derzeitigen Follower zu nutzen und sie auf spezielle Kanäle zu bringen, die die Domäne von DeFiChain sein werden. Das Team wird eine komplette Marketing-Engine und einen Mitarbeiterstab aufbauen und dabei die gleiche bewährte Kompetenz einsetzen, die es in der Vergangenheit bewiesen hat.
  </div>
  <div className="mt-5">
  Im Gegensatz zu anderen Blockchains wird DeFiChain ein ausgewogenes Verhältnis zwischen Marketing- und Technologiekompetenz aufweisen. Der Aufbau des besten Netzwerks ist nur die Hälfte der Arbeit. Die Eigentümer von DFI können sich darauf verlassen, dass das Marketingteam über die für den Erfolg des Produkts erforderliche Erfahrung beim Aufbau eines Marketingmotors verfügt und dass das Technikteam in der Lage sein wird, den Fahrplan einzuhalten.
  </div>
</div>

<h3 id="partnership" title="Partnerschaften" className="mt-6 font-bold font-sans text-xl scroll-mt-40 md:mt-8 lg:mt-12 lg:text-2xl">
Partnerschaften
</h3>
<div className="mt-4 text-dark-800">
Die DeFiChain Foundation wird die Aufgabe haben, Anträge von Partnern aus dem Ökosystem zu bewerten und Fördermittel in Form von $DFI-Tokens an Entwickler und Mitwirkende von DeFiChain zu vergeben. Viele Open-Source-Projekte und Blockchain-Entwickler sind heute auf der Suche nach dem richtigen Blockchain-Projekt, um ihre DeFi-Anwendungen zu entwickeln, und die Aussicht auf eine eigene DeFiChain, die von Branchenführern unterstützt wird, ist verlockend.
<div className="mt-5">
Die DeFiChain Foundation wird eine Reihe von Maßnahmen ergreifen, um die besten Projekte für die Erweiterung von DeFiChain auszuwählen:
</div>
  <div className="mt-5">
    <ul class="list-inside list-disc" style="list-style-type: disc;list-style-position: inside; text-indent: -1.4em; margin-left: 2rem;">
    <li className="ml-4">Schaffung eines formellen Bewerbungsverfahrens, damit sich förderungswürdige Projekte um Airdrop- oder Fördermittel für ihre Entwicklung bewerben können.</li>
      <li className="ml-4">Kontaktaufnahme mit Entwicklern im Ökosystem, die DeFi-dApps auf anderen Blockchains entwickeln, und Bereitstellung von Zuschüssen für die Entwicklung ihrer dApps für DeFi.</li>
      <li className="ml-4">Allgemeines Marketing, um die Verfügbarkeit von Fördermitteln der DeFiChain Foundation zur Finanzierung lohnender Projekte bekannt zu machen.</li>
    </ul>
  </div>
  <div className="mt-5">
  Jedes Projekt aufbauend auf der DeFiChain wird natürlich seine eigenen Nutzer mitbringen und sich um die Vermarktung des Projekts bemühen, um Nutzer und Hodler für DeFiChain zu gewinnen.
  </div>
  <div className="mt-5">

[partners@defichain.com](mailto:partners@defichain.com)

  </div>
</div>

<h2
      id="roadmap"
      title="Roadmap"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      11. Roadmap und Zwischenziele
    </h2>
<div className="mt-8">

![Roadmap](/img/white-paper/roadmap.png)

</div>

<h2
      id="future"
      title="Ein Blick in die Zukunft"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      12. Ein Blick in die Zukunft
    </h2>
<div className="mt-4 text-dark-800">
  Wenn wir auf DeFiChain aufbauen, wird das nicht nur für Gebiete in der ersten Welt von großem Nutzen sein, sondern auch für all diejenigen, die dezentrale Finanzen am dringendsten benötigen. Stell dir zum Beispiel Anna vor, die ein kleines Unternehmen in einem Entwicklungsland besitzt, aber kein traditionelles Bankkonto hat. Sie nutzt mobiles Geld und digitale Währungen, um ihr Geschäft zu betreiben, und akzeptiert Zahlungen über das Handy - was absolut sinnvoll ist, denn in ihrer Provinz benutzt niemand Bargeld oder Kreditkarten. Anna nutzt DeFiChain, um ein Darlehen aufzunehmen, wenn einer ihrer Lieferanten zu spät zahlt, und rettet so ihr Geschäft. Früher wäre sie einfach in Konkurs gegangen, weil ihr keine Bank ein Darlehen geben wollte. Anna investiert auch klug. Wenn sie von ihrem Lieferanten bezahlt wird, investiert sie das Geld sofort in verschiedene Token-Anlagen, um die Hyperinflation und die Instabilität der Währung ihres Landes zu vermeiden, und kann obendrein noch Zinsen verdienen.
  <div className="mt-5">
  Anna gründet eine Gruppe lokaler Geschäftsleute, die gemeinsam Mittel bereitstellen, um anderen Unternehmern in ihrem Dorf zu helfen. Sie kaufen Büroräume, Sonnenkollektoren und einen Satellitenempfänger, um ein Geschäftszentrum einzurichten. Die Gruppe nutzt DeFi, um den Aufwand für komplexe juristische Verträge untereinander zu vermeiden. Sie erhalten automatisch Dividenden, wenn das Geschäftszentrum Gewinne macht. Einige von ihnen reinvestieren in eine Lieferdrohne, die für ihre Dienste Gebühren erhebt und die Einnahmen an die Investoren ausschüttet. Andere investieren in eine Sensorausrüstung, die die örtlichen Bodenbedingungen prüft und die Daten an die Rohstoffmärkte verkauft. Alle Sensoren arbeiten unabhängig und berechnen unabhängig, und die Investoren profitieren einfach von den Gewinnen, die alle automatisch auf DeFiChain berechnet werden.
  </div>
  <div className="mt-5">
  Jetzt, 5 Jahre nach ihrer ersten Nutzung von DeFi, kann Anna ein Darlehen ohne Sicherheiten aufnehmen, weil sie seit Jahren klug investiert und ihre Darlehen pünktlich zurückgezahlt hat und weil ihre Branche von vertrauenswürdigen Preisorakeln bewertet wurde. Das ist eine Win-Win-Situation. Die Kreditgeber kommen aus der ganzen Welt, von Menschen, die ihr Investitionsportfolio diversifizieren wollen, bis hin zu Entwicklungsländern. Die Kreditgeber müssen sich nicht um die Komplexität grenzüberschreitender Transaktionen oder rechtliche Anforderungen kümmern. Sie vermeiden die Bankensysteme ihrer eigenen Länder, die zu Null- und Negativzinsen auf Spareinlagen übergegangen sind. Jetzt können diese regulären Investoren sicher sein, dass ihre Investitionen Renditen abwerfen, die auf Anna und Menschen wie ihr beruhen, die großartige Unternehmen führen und Renditen für die Geldanlagen der Gläubiger erwirtschaften können.
  </div>
  <div className="mt-5">
  Darum geht es bei DeFiChain - die Welt zu einem besseren Ort zu machen!
  </div>
</div>

<h2
      id="footnotes"
      title="Footnotes"
      className=
        "text-[24px] leading-8 scroll-mt-40 mt-12 tracking-normal font-sans lg:text-[32px] lg:leading-[40px]"
    >
      13. Footnotes
    </h2>

<div className="mt-5 text-dark-800">
  <div className="scroll-mt-40" id="user-content-fn-1">1. <a className="underline " href="https://www.investopedia.com/ask/answers/030515/what-percentage-global-economy-comprised-financial-services-sector.asp" target="_blank">https://www.investopedia.com/ask/answers/030515/what-percentage-global-economy-comprised-financial-services-sector.asp</a></div>

  <div className="scroll-mt-40" id="user-content-fn-2">2. <a className="underline" href="https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7/" target="_blank">https://blog.openzeppelin.com/on-the-parity-wallet-multisig-hack-405a8c12e8f7/</a></div>

  <div className="scroll-mt-40" id="user-content-fn-3">3. <a className="underline" href="https://arxiv.org/pdf/1802.06038.pdf" target="_blank">https://arxiv.org/pdf/1802.06038.pdf</a></div>

  <div className="scroll-mt-40" id="user-content-fn-4">4. <a className="underline" href="https://cointelegraph.com/explained/blockchain-oracles-explained" target="_blank">https://cointelegraph.com/explained/blockchain-oracles-explained</a></div>

  <div className="scroll-mt-40" id="user-content-fn-5">5. <a className="underline" href="https://hackernoon.com/oracles-help-smart-contracts-resolve-subjective-events-d81639d8291c" target="_blank">https://hackernoon.com/oracles-help-smart-contracts-resolve-subjective-events-d81639d8291c</a></div>

  <div className="scroll-mt-40" id="user-content-fn-6">6. <a className="underline" href="https://en.wikipedia.org/wiki/Decentralized_exchange" target="_blank">https://en.wikipedia.org/wiki/Decentralized_exchange</a></div>

  <div className="scroll-mt-40" id="user-content-fn-7">7. <a className="underline" href="https://coinsutra.com/best-decentralized-exchanges-dex/" target="_blank">https://coinsutra.com/best-decentralized-exchanges-dex/</a></div>

  <div className="scroll-mt-40" id="user-content-fn-8">8. <a className="underline" href="https://www.forbes.com/sites/laurencoleman/2019/04/25/heres-why-interest-in-tokenizing-assets-is-starting-to-surge/#2ddeec4640a5" target="_blank">https://www.forbes.com/sites/laurencoleman/2019/04/25/heres-why-interest-in-tokenizing-assets-is-starting-to-surge/#2ddeec4640a5</a></div>

  <div className="scroll-mt-40" id="user-content-fn-9">9. <a className="underline" href="https://docs.dash.org/en/stable/governance/understanding.html" target="_blank">https://docs.dash.org/en/stable/governance/understanding.html</a></div>

</div>
