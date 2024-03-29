---
title: Paradigmes et Méthodologies
---

Ca va faire un sacré bout de temps que je n'ai rien posté sur mon blog personnel, et pourtant, j'apprends, je bricole et je pratique tous les jours. J'ai bien envie de recommencer à partager un peu mes expériences personnelles et ce que j'en tire, en espérant que cela puisse aider certains à peut-être apprendre quelque-chose :)

Aujourd'hui, alors, je me suis demandé : "Par quel sujet je pourrais commencer ?", puis un m'est venu en tête immédiatement : les paradigmes.

## Un paradigme ? Kézako ?

Pour simplifier, un paradigme est une façon de penser, un groupement de méthodologies, une "vision" générale de la programmation. Par définition, programmer implique forcément d'adhérer à un paradigme, étant donné que les différents langages tendent à implémenter un seul ou plusieurs d'entre eux. C'est d'ailleurs ces deuxièmes que l'on appelle "langages multi-paradigmes" tels qu'OCaml par exemple.

## En quoi est-ce important ?

Un paradigme implique une façon de penser qui va conditionner la façon de penser, concevoir et implémenter d'un développeur. Bien sûr, chacun a ses particularités et interprétera les différentes conventions et usages divers de son paradigme favori d'une façon légèrement différente, mais le fait de connaître, comprendre et identifier celui ayant été favorisé par du code source permet de grandement simplifier un certain nombre de procédés comme le rétro-engineering, le refactoring de code déprécié et bien d'autres choses.

## Alors, on a quoi, en paradigmes ?

Il y a, en programmation, trois paradigmes "majeurs" qui, bien que non-exclusifs, ont tendance à pouvoir prendre une part majoritaire d'un langage.

### Impératif : enchaîner des commandes

La programmation dite "impérative" consiste à lister, de haut en bas, une suite d'opérations strictes effectuant des actions. Il s'agit d'un paradigme que l'on retrouve très fréquemment au sein de langages bas-niveau, étant donné que la plupart des interfaces machine se contentent d'effectuer des opérations impératives elles-mêmes à la suite.

Beaucoup apprécient la programmation impérative lorsqu'il s'agit par exemple de créer une interface en ligne de commandes, où beaucoup d'effets de bord sont attendus, grâce à l'isométrie très forte entre le comportement du CLI et le fait de lister des commandes de haut en bas.

Les langages impératifs ne manquent pas. On peut citer C parmi les plus connus, et Golang pour apporter un exemple plus moderne.

Cependant, cette simplicité presque rudimentaire, bien que redoutablement pratique, ne permet pas confortablement de créer des programmes plus élaborés et peut se montrer fastidieux au sein de langages de plus haut niveau lorsqu'il représente le paradigme majoritaire du langage.

### Fonctionnel : la théorie renforce la pratique

Vient ensuite la programmation dite "fonctionnelle". Il est plus difficile de résumer ce paradigme vu comme une façon de concevoir plus exotique qui part d'un postulat simple : "tout est fonction". Bien que cette définition puisse paraître un peu vague, on reconnait quelques règles déterminantes à la programmation fonctionnelle.

En premier lieu, il y a une volonté d'éliminer l'usage de code effectuant des effets de bord ainsi que de la mutabilité, i.e modifiant directement la valeur de variables pré-déclarées. Ensuite, il y a le fait de s'appuyer sur la théorie mathématique lors de la conception même des langages pour permettre une compréhension optimale entre différents langages fonctionnels grâce à l'utilisation d'un vocabulaire et de concepts communs.

Les avantages de la programmation fonctionnelle sont nombreux, et je mentirais si je prétendais que ce n'était pas mon favori, ainsi je préfère prévenir que je parle avec un léger biais. Cependant, même en mettant ce biais de côté, il faut reconnaître à la programmation fonctionnelle des atouts plus que séduisants. Il y a d'abord la standardisation de la théorie, permettant de passer d'un langage à l'autre sans réellement être perdu, les concepts étant similaires et le vocabulaire l'étant généralement aussi. Et puis il y a le gain de temps croissant, une codebase majoritairement fonctionnelle étant en général bien plus sûre, lisible et aisée à maintenir que la moyenne.

Et comment ne pas mentionner le fait que la plupart des langages fonctionnels "réputés", tels qu'OCaml, Erlang/Elixir, Haskell et bien d'autres semblent parfois plusieurs années en avance sur le standard industriel.

Mais il faut aussi reconnaître quelques couacs à la programmation fonctionnelle : déjà, un langage fonctionnel réellement pur ne permet aucun effet de bord, ce qui peut limiter ou complexifier la résolution de certains problèmes réels et fréquents inutilement. Ainsi, la plupart des langages fonctionnels réellement confortables à utiliser dans un environnement industriel se retrouvent à être multi-paradigmes pour permettre de palier à ce problème. 

Ensuite, il y a la théorie : bien qu'étant un gain de temps inouï une fois assimilée même seulement en partie, elle peut rebuter beaucoup de développeurs. Ainsi, bien que le paradigme fonctionnel apporte son grand lot d'avantages, l'utiliser en entreprise demande une considération sérieuse des implications sur les futurs recrutements, les formations potentielles pour mettre une partie de l'équipe à niveau, et les changements à apporter à la codebase actuelle.

### Orienté objet : personnifier pour mieux représenter

Enfin, il y a l'orienté objet. Il s'agit certainement du paradigme le plus utilisé en programmation haut-niveau, en raison de son apprentissage massif dans les différents établissements d'études supérieures aux quatre coins du monde. Il est statistiquement assez rare de croiser un développeur n'ayant jamais une fois dans sa vie, par préférence ou contrainte, touché à un langage orienté objet (tel Java, pour ne citer que celui-ci).

L'orienté objet consiste à définir ses données sous la forme d'objets instanciables, dans le but de personnifier des concepts potentiellement abstraits dotés d'attributs et fonctions, et ce avec la possibilité de gérer l'état individuel de ces objets. Il est très difficile de résumer ce paradigme, la simple question "Qu'est-ce que la programmation orientée objet ?" pouvant donner des réponses aussi variées qu'opposées chez différents développeurs, ainsi il est important de garder en tête qu'il faut prendre tout ce que j'écrirai sur ce sujet avec un grain de sel et comme étant mon opinion personnelle.

Dans son implémentation, l'orienté objet solutionne beaucoup de problématiques identiques à la programmation fonctionnelle, mais avec des méthodes radicalement différentes. Un langage fonctionnel évitera au maximum la mutabilité, un objet mute fréquemment ses valeurs internes, par exemple. Ainsi, cela peut créer de réels débats théologiques entre programmeurs pro-fonctionnels et pro-objets pouvant parfois être intéressants et constructifs, et relevant parfois plus de la joute verbale cinglante.

L'orienté objet a l'avantage de simplifier pour beaucoup la compréhension de surface de concepts extrêmement complexes sans nécessiter de connaissances théoriques poussées de la programmation fonctionnelle. En effet, le fait de représenter sous la forme "d'objets" possédant propriétés et fonctions chaque composante d'un programme permet de bien plus aisément appréhender des problèmes concrets d'une industrie, contrairement à des concepts bien plus abstraits comme les types structurels, l'application partielle ou l'inférence de type dans un écosystème à typage statique.

Cependant, cette simplification vient avec des inconvénients pouvant parfois se montrer, à long terme, très dommageables. En effet, la conception d'une architecture logicielle saine passe souvent par la connaissance intrinsèque de concepts, patterns et façons de faire misant sur l'optimisation du temps de travail, la maintenabilité et la sécurité du code à un coût aussi minime que possible. Bien que simplifier ne soit pas mauvais en tant que tel, il n'est pas nécessaire de développer ces éléments théoriques pour pouvoir utiliser des langages orienté objet à une échelle industrielle. Ainsi, selon mes observations, beaucoup de développeurs se plaignent souvent de récupérer des codebase orienté objet manquant souvent d'optimisation, de lisibilité, de scalabilité... Problèmes que je n'entends pratiquement jamais au sujet de codebases fonctionnelles (proportionnellement parlant, bien entendu).

## Mais alors, c'est quoi, le mieux ?

Hé oui, une question qui fait grand débat ! Impératif, fonctionnel ou orienté objet ? La réponse, selon moi, c'est "absolument aucun". Ou plus précisément, aucun **exclusivement**. Un langage efficace, à mon avis, est un langage savant tirer le meilleur parti de différents paradigmes, tout en favorisant l'un d'entre eux dans le but de proposer une approche subjective et biaisée, mais polyvalente et adaptée à des cas d'usage variés. Je citais tout à l'heure OCaml, et il s'agit d'un excellent exemple de langage multi-paradigmes tirant intelligemment parti de ces trois paradigmes, tout en proposant une façon de procéder mettant l'accent sur la programmation fonctionnelle.

Bien qu'à titre personnel, comme je l'ai déjà dit, j'ai une préférence très large envers le paradigme fonctionnel, je suis parfois bien plus à l'aise lorsque je peux utiliser des instructions impératives lorsque je dois, par exemple, écrire un script en ligne de commande pour assister à un processus de compilation par exemple. Certes, cela met de côté beaucoup de préoccupations fonctionnelles, mais cela permet de bien plus efficacement aller droit au but et, au final, écrire un code bien plus "adapté" selon moi.

Alors faites-vous plaisir, et n'hésitez pas par curiosité à tout tenter pour votre culture personnelle ! Ca ne peut pas vous faire de mal, et vous ne pourrez qu'en ressortir enrichi, quels que soient vos préjugés sur un paradigme.

## Pour aller plus loin

J'ai ici délibérément simplifié le concept de paradigme. Il existe par exemple les sous-paradigmes (comme la programmation procédurale, par exemple, pour l'impératif) permettant d'affiner la notion et de comprendre un peu mieux les différentes doctrines selon lesquelles on use de diverses méthodologies. Cependant, dans le but de rendre cet article plus accessible, je n'ai parlé que des "principaux" paradigmes majeurs qui sont constatés aujourd'hui dans le monde de la programmation.
