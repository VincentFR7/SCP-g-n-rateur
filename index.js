// Générateur d'Expériences SCP - Fichier unique
// Développé par Vincent O'Bryan - Membre des Scientifiques

// Protection contre l'inspection du code
document.addEventListener('keydown', function(e) {
  // Empêcher Ctrl+U (voir le code source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    return false;
  }
  // Empêcher F12 (outils de développement)
  if (e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  // Empêcher Ctrl+Shift+I (outils de développement)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
    return false;
  }
  // Empêcher Ctrl+Shift+C (sélecteur d'élément)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
    e.preventDefault();
    return false;
  }
});

// Désactiver le clic droit
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Base de données des expériences
const baseExperiences = [
  {
    titre: "Test de Résistance Psychologique",
    description: "Évaluer la stabilité mentale des sujets exposés à l'anomalie pendant des périodes prolongées",
    classeD: 3,
    objets: ["Caméras de surveillance", "Équipement médical", "Dispositifs de mesure neurologique"],
    risque: 25,
    duree: "6 heures",
    objectif: "Déterminer les effets psychologiques à long terme",
    precautions: ["Personnel médical en standby", "Protocole d'extraction d'urgence", "Surveillance continue"],
    resultatsAttendus: "Données sur la résistance mentale humaine",
    autorisationRequise: "Niveau 3",
    materiels: ["Casques EEG", "Moniteurs cardiaques", "Sédatifs d'urgence"],
    zone: "Chambre d'observation sécurisée"
  },
  {
    titre: "Interaction avec Matériaux Organiques",
    description: "Observer les réactions de l'entité en présence de différents tissus biologiques",
    classeD: 2,
    objets: ["Échantillons de tissus", "Microscopes", "Équipement de protection"],
    risque: 40,
    duree: "2 heures",
    objectif: "Comprendre les préférences biologiques de l'entité",
    precautions: ["Chambre hermétique", "Décontamination complète", "Personnel en combinaison"],
    resultatsAttendus: "Catalogue des réactions biologiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Pinces stérilisées", "Plateaux d'échantillons", "Solution de décontamination"],
    zone: "Laboratoire de biologie sécurisé"
  },
  {
    titre: "Test de Propagation Environnementale",
    description: "Mesurer la capacité de l'anomalie à se propager dans différents environnements contrôlés",
    classeD: 5,
    objets: ["Chambres environnementales", "Capteurs atmosphériques", "Matériaux de test"],
    risque: 60,
    duree: "24 heures",
    objectif: "Évaluer les risques de propagation",
    precautions: ["Confinement hermétique", "Système de purification d'air", "Évacuation d'urgence"],
    resultatsAttendus: "Modèle de propagation et vitesse de diffusion",
    autorisationRequise: "Niveau 4",
    materiels: ["Détecteurs de particules", "Ventilation forcée", "Matériaux de confinement"],
    zone: "Chambre de confinement atmosphérique"
  },
  {
    titre: "Analyse des Fréquences Sonores",
    description: "Étudier l'impact des différentes fréquences audio sur le comportement de l'entité",
    classeD: 1,
    objets: ["Équipement audio", "Analyseurs de fréquence", "Protection auditive"],
    risque: 15,
    duree: "4 heures",
    objectif: "Identifier les fréquences de résonance",
    precautions: ["Protection auditive obligatoire", "Limitation du volume", "Surveillance médicale"],
    resultatsAttendus: "Spectre des fréquences actives",
    autorisationRequise: "Niveau 2",
    materiels: ["Haut-parleurs directionnels", "Sonomètres", "Casques anti-bruit"],
    zone: "Chambre anéchoïque"
  },
  {
    titre: "Interaction avec Intelligence Artificielle",
    description: "Tester les réactions de l'anomalie face à des systèmes d'IA de différentes complexités",
    classeD: 0,
    objets: ["Ordinateurs", "IA expérimentales", "Interfaces de communication"],
    risque: 35,
    duree: "8 heures",
    objectif: "Évaluer la reconnaissance de l'intelligence artificielle",
    precautions: ["Isolation des systèmes", "Coupe-circuits d'urgence", "Surveillance informatique"],
    resultatsAttendus: "Protocoles d'interaction IA-anomalie",
    autorisationRequise: "Niveau 3",
    materiels: ["Serveurs sécurisés", "Interfaces tactiles", "Systèmes de sauvegarde"],
    zone: "Laboratoire informatique blindé"
  },
  {
    titre: "Résistance aux Températures Extrêmes",
    description: "Exposer l'entité à des conditions thermiques extrêmes pour tester sa résistance",
    classeD: 2,
    objets: ["Chambres thermiques", "Thermomètres industriels", "Équipement cryogénique"],
    risque: 50,
    duree: "12 heures",
    objectif: "Déterminer les limites thermiques",
    precautions: ["Combinaisons thermiques", "Surveillance médicale", "Protocoles de réchauffement"],
    resultatsAttendus: "Plage de tolérance thermique",
    autorisationRequise: "Niveau 3",
    materiels: ["Azote liquide", "Chauffages industriels", "Sondes de température"],
    zone: "Chambre thermique contrôlée"
  },
  {
    titre: "Exposition à Radiations Contrôlées",
    description: "Mesurer l'effet des radiations ionisantes sur la structure de l'anomalie",
    classeD: 3,
    objets: ["Sources radioactives", "Détecteurs de radiation", "Blindage de plomb"],
    risque: 75,
    duree: "6 heures",
    objectif: "Analyser la résistance aux radiations",
    precautions: ["Combinaisons de protection", "Dosimètres personnels", "Zone d'exclusion"],
    resultatsAttendus: "Seuils de tolérance radiologique",
    autorisationRequise: "Niveau 4",
    materiels: ["Compteurs Geiger", "Plaques de blindage", "Dosimètres"],
    zone: "Chambre de radiation sécurisée"
  },
  {
    titre: "Test de Communication Linguistique",
    description: "Tenter d'établir une communication avec l'entité à travers différents langages",
    classeD: 1,
    objets: ["Systèmes de traduction", "Interfaces de communication", "Linguistes"],
    risque: 20,
    duree: "10 heures",
    objectif: "Établir un protocole de communication",
    precautions: ["Barrière de sécurité", "Personnel linguistique formé", "Enregistrement complet"],
    resultatsAttendus: "Protocoles de communication établis",
    autorisationRequise: "Niveau 2",
    materiels: ["Micros directionnels", "Systèmes d'enregistrement", "Dictionnaires spécialisés"],
    zone: "Chambre de communication isolée"
  },
  {
    titre: "Réaction aux Champs Électromagnétiques",
    description: "Analyser l'impact des champs électromagnétiques de différentes intensités",
    classeD: 2,
    objets: ["Générateurs EM", "Bobines Tesla", "Détecteurs de champ"],
    risque: 45,
    duree: "5 heures",
    objectif: "Cartographier la sensibilité électromagnétique",
    precautions: ["Cage de Faraday", "Équipement isolé", "Surveillance cardiaque"],
    resultatsAttendus: "Spectre de sensibilité électromagnétique",
    autorisationRequise: "Niveau 3",
    materiels: ["Oscilloscopes", "Antennes directionnelles", "Blindage électromagnétique"],
    zone: "Laboratoire électromagnétique"
  },
  {
    titre: "Interaction avec Phéromones Humaines",
    description: "Étudier les réactions de l'entité aux différentes phéromones et odeurs humaines",
    classeD: 4,
    objets: ["Échantillons de phéromones", "Analyseurs chimiques", "Systèmes de diffusion"],
    risque: 30,
    duree: "8 heures",
    objectif: "Comprendre les mécanismes de détection chimique",
    precautions: ["Ventilation contrôlée", "Masques filtrants", "Surveillance médicale"],
    resultatsAttendus: "Catalogue des réactions chimiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Diffuseurs d'arômes", "Spectromètres", "Filtres à air"],
    zone: "Chambre de diffusion chimique"
  }
];

// 75 nouvelles expériences spécialisées
const specializedExperiences = [
  {
    titre: "Test de Résistance aux Acides",
    description: "Exposer l'entité à différents types d'acides pour mesurer sa résistance chimique",
    classeD: 2,
    objets: ["Solutions acides", "Équipement de protection", "Neutralisants"],
    risque: 55,
    duree: "3 heures",
    objectif: "Déterminer la résistance aux substances corrosives",
    precautions: ["Combinaisons anti-acide", "Douches de décontamination", "Ventilation forcée"],
    resultatsAttendus: "Seuils de résistance chimique",
    autorisationRequise: "Niveau 3",
    materiels: ["pH-mètres", "Solutions tampons", "Équipement de neutralisation"],
    zone: "Laboratoire de chimie sécurisé"
  },
  {
    titre: "Analyse des Réactions aux Métaux Lourds",
    description: "Tester l'impact de différents métaux lourds sur l'anomalie",
    classeD: 1,
    objets: ["Échantillons métalliques", "Spectromètres", "Détecteurs de toxicité"],
    risque: 40,
    duree: "4 heures",
    objectif: "Identifier les métaux ayant un effet sur l'entité",
    precautions: ["Masques filtrants", "Gants de protection", "Surveillance toxicologique"],
    resultatsAttendus: "Catalogue des interactions métalliques",
    autorisationRequise: "Niveau 2",
    materiels: ["Plaques métalliques", "Analyseurs XRF", "Détecteurs de vapeurs"],
    zone: "Laboratoire de métallurgie"
  },
  {
    titre: "Test de Sensibilité Lumineuse Ultraviolette",
    description: "Exposer l'entité à différentes longueurs d'onde UV",
    classeD: 1,
    objets: ["Lampes UV", "Filtres optiques", "Photomètres"],
    risque: 25,
    duree: "2 heures",
    objectif: "Mesurer la sensibilité aux rayonnements UV",
    precautions: ["Protection oculaire", "Crème solaire", "Limitation d'exposition"],
    resultatsAttendus: "Spectre de sensibilité UV",
    autorisationRequise: "Niveau 2",
    materiels: ["Spectromètres UV", "Dosimètres UV", "Écrans de protection"],
    zone: "Chambre d'exposition lumineuse"
  },
  {
    titre: "Interaction avec Champs Gravitationnels",
    description: "Tester les réactions de l'anomalie dans des conditions de gravité modifiée",
    classeD: 3,
    objets: ["Centrifugeuse", "Simulateur de microgravité", "Accéléromètres"],
    risque: 60,
    duree: "6 heures",
    objectif: "Analyser l'impact de la gravité sur l'entité",
    precautions: ["Harnais de sécurité", "Surveillance médicale", "Arrêt d'urgence"],
    resultatsAttendus: "Données sur la sensibilité gravitationnelle",
    autorisationRequise: "Niveau 3",
    materiels: ["Capteurs d'accélération", "Systèmes gyroscopiques", "Moniteurs physiologiques"],
    zone: "Laboratoire de physique gravitationnelle"
  },
  {
    titre: "Test de Résistance aux Ondes de Choc",
    description: "Mesurer la résistance de l'entité aux ondes de pression",
    classeD: 2,
    objets: ["Générateurs d'ondes", "Capteurs de pression", "Matériaux amortissants"],
    risque: 70,
    duree: "1 heure",
    objectif: "Évaluer la résistance aux impacts soniques",
    precautions: ["Bunker renforcé", "Protection auditive", "Distance de sécurité"],
    resultatsAttendus: "Seuils de résistance aux ondes de choc",
    autorisationRequise: "Niveau 4",
    materiels: ["Manomètres", "Oscilloscopes", "Matériaux de blindage"],
    zone: "Chambre d'essais balistiques"
  },
  {
    titre: "Analyse des Réactions aux Gaz Nobles",
    description: "Exposer l'anomalie à différents gaz nobles pour observer les réactions",
    classeD: 1,
    objets: ["Bouteilles de gaz", "Analyseurs atmosphériques", "Systèmes de ventilation"],
    risque: 20,
    duree: "4 heures",
    objectif: "Déterminer l'impact des gaz inertes",
    precautions: ["Masques respiratoires", "Détecteurs d'oxygène", "Ventilation d'urgence"],
    resultatsAttendus: "Réactions aux atmosphères inertes",
    autorisationRequise: "Niveau 2",
    materiels: ["Chromatographes", "Capteurs de gaz", "Régulateurs de débit"],
    zone: "Chambre atmosphérique contrôlée"
  },
  {
    titre: "Test de Sensibilité aux Vibrations",
    description: "Analyser les réactions de l'entité à différentes fréquences vibratoires",
    classeD: 2,
    objets: ["Générateurs de vibrations", "Accéléromètres", "Tables vibrantes"],
    risque: 35,
    duree: "3 heures",
    objectif: "Cartographier la sensibilité vibratoire",
    precautions: ["Fixations de sécurité", "Surveillance structurelle", "Arrêt automatique"],
    resultatsAttendus: "Spectre de résonance vibratoire",
    autorisationRequise: "Niveau 2",
    materiels: ["Analyseurs de fréquence", "Capteurs sismiques", "Amortisseurs"],
    zone: "Laboratoire de mécanique vibratoire"
  },
  {
    titre: "Interaction avec Matériaux Supraconducteurs",
    description: "Tester les réactions de l'anomalie en présence de supraconducteurs",
    classeD: 1,
    objets: ["Supraconducteurs", "Système de refroidissement", "Champs magnétiques"],
    risque: 45,
    duree: "5 heures",
    objectif: "Analyser l'interaction avec les propriétés quantiques",
    precautions: ["Isolation thermique", "Champs magnétiques contrôlés", "Équipement cryogénique"],
    resultatsAttendus: "Données sur les interactions quantiques",
    autorisationRequise: "Niveau 3",
    materiels: ["Cryostats", "Magnétomètres", "Thermomètres cryogéniques"],
    zone: "Laboratoire de physique quantique"
  },
  {
    titre: "Test de Résistance aux Enzymes",
    description: "Exposer l'entité à différentes enzymes pour mesurer les réactions biologiques",
    classeD: 2,
    objets: ["Solutions enzymatiques", "Incubateurs", "Microscopes"],
    risque: 30,
    duree: "8 heures",
    objectif: "Comprendre les interactions enzymatiques",
    precautions: ["Stérilisation complète", "Contrôle de température", "Surveillance biologique"],
    resultatsAttendus: "Profil de résistance enzymatique",
    autorisationRequise: "Niveau 2",
    materiels: ["Spectrophotomètres", "Plaques de culture", "Solutions tampons"],
    zone: "Laboratoire de biochimie"
  },
  {
    titre: "Analyse des Réactions aux Isotopes Radioactifs",
    description: "Tester l'impact de différents isotopes sur l'anomalie",
    classeD: 3,
    objets: ["Sources isotopiques", "Détecteurs gamma", "Blindage spécialisé"],
    risque: 80,
    duree: "4 heures",
    objectif: "Mesurer la sensibilité aux différents rayonnements",
    precautions: ["Combinaisons plombées", "Dosimètres individuels", "Zone d'exclusion étendue"],
    resultatsAttendus: "Spectre de sensibilité isotopique",
    autorisationRequise: "Niveau 4",
    materiels: ["Spectromètres gamma", "Chambres d'ionisation", "Blindages modulaires"],
    zone: "Bunker de radioprotection"
  },
  {
    titre: "Test de Sensibilité aux Champs Électriques",
    description: "Analyser les réactions de l'entité à différentes intensités électriques",
    classeD: 2,
    objets: ["Générateurs haute tension", "Électrodes", "Isolants"],
    risque: 65,
    duree: "2 heures",
    objectif: "Déterminer la sensibilité électrique",
    precautions: ["Isolation électrique", "Disjoncteurs de sécurité", "Équipement isolant"],
    resultatsAttendus: "Seuils de sensibilité électrique",
    autorisationRequise: "Niveau 3",
    materiels: ["Voltmètres", "Ampèremètres", "Transformateurs"],
    zone: "Laboratoire haute tension"
  },
  {
    titre: "Interaction avec Cristaux Piézoélectriques",
    description: "Tester les réactions de l'anomalie aux propriétés piézoélectriques",
    classeD: 1,
    objets: ["Cristaux de quartz", "Générateurs de pression", "Oscilloscopes"],
    risque: 25,
    duree: "3 heures",
    objectif: "Analyser l'interaction avec les propriétés cristallines",
    precautions: ["Manipulation délicate", "Contrôle de pression", "Protection contre les éclats"],
    resultatsAttendus: "Données sur les interactions cristallines",
    autorisationRequise: "Niveau 2",
    materiels: ["Analyseurs de fréquence", "Capteurs de contrainte", "Microscopes polarisants"],
    zone: "Laboratoire de cristallographie"
  },
  {
    titre: "Test de Résistance aux Ultrasons Focalisés",
    description: "Exposer l'entité à des ultrasons de haute intensité",
    classeD: 2,
    objets: ["Transducteurs ultrasoniques", "Amplificateurs", "Hydrophones"],
    risque: 50,
    duree: "1 heure",
    objectif: "Mesurer l'impact des ultrasons focalisés",
    precautions: ["Protection auditive renforcée", "Limitation de puissance", "Surveillance médicale"],
    resultatsAttendus: "Seuils de tolérance ultrasonique",
    autorisationRequise: "Niveau 3",
    materiels: ["Générateurs d'ultrasons", "Analyseurs spectraux", "Dosimètres acoustiques"],
    zone: "Chambre anéchoïque renforcée"
  },
  {
    titre: "Analyse des Réactions aux Polymères",
    description: "Tester l'interaction de l'anomalie avec différents polymères synthétiques",
    classeD: 1,
    objets: ["Échantillons polymères", "Analyseurs thermiques", "Microscopes électroniques"],
    risque: 20,
    duree: "6 heures",
    objectif: "Comprendre les interactions avec les matériaux synthétiques",
    precautions: ["Ventilation chimique", "Équipement anti-statique", "Contrôle de température"],
    resultatsAttendus: "Catalogue des interactions polymères",
    autorisationRequise: "Niveau 2",
    materiels: ["Spectromètres IR", "Analyseurs DSC", "Microscopes AFM"],
    zone: "Laboratoire de science des matériaux"
  },
  {
    titre: "Test de Sensibilité aux Rayons Cosmiques",
    description: "Exposer l'entité à des particules cosmiques simulées",
    classeD: 2,
    objets: ["Accélérateur de particules", "Détecteurs de rayonnement", "Chambres à brouillard"],
    risque: 75,
    duree: "8 heures",
    objectif: "Analyser l'impact des rayonnements cosmiques",
    precautions: ["Blindage renforcé", "Surveillance radiologique", "Protocoles d'urgence"],
    resultatsAttendus: "Sensibilité aux particules de haute énergie",
    autorisationRequise: "Niveau 4",
    materiels: ["Détecteurs de particules", "Calorimètres", "Systèmes de déclenchement"],
    zone: "Facility d'accélération de particules"
  },
  {
    titre: "Interaction avec Champs Magnétiques Pulsés",
    description: "Tester les réactions de l'anomalie aux impulsions magnétiques",
    classeD: 2,
    objets: ["Bobines pulsées", "Condensateurs", "Blindage magnétique"],
    risque: 55,
    duree: "2 heures",
    objectif: "Mesurer l'impact des champs magnétiques variables",
    precautions: ["Isolation magnétique", "Surveillance cardiaque", "Équipement non-magnétique"],
    resultatsAttendus: "Réponse aux variations magnétiques",
    autorisationRequise: "Niveau 3",
    materiels: ["Gaussmètres", "Oscilloscopes", "Bobines de Helmholtz"],
    zone: "Laboratoire de magnétisme"
  },
  {
    titre: "Test de Résistance aux Micro-ondes",
    description: "Exposer l'entité à différentes fréquences micro-ondes",
    classeD: 1,
    objets: ["Générateurs micro-ondes", "Guides d'ondes", "Absorbants RF"],
    risque: 40,
    duree: "3 heures",
    objectif: "Analyser la sensibilité aux micro-ondes",
    precautions: ["Cage de Faraday", "Dosimètres RF", "Surveillance thermique"],
    resultatsAttendus: "Spectre de sensibilité micro-ondes",
    autorisationRequise: "Niveau 2",
    materiels: ["Analyseurs de spectre", "Wattmètres RF", "Thermomètres IR"],
    zone: "Chambre RF blindée"
  },
  {
    titre: "Analyse des Réactions aux Nanomatériaux",
    description: "Tester l'interaction de l'anomalie avec des nanoparticules",
    classeD: 2,
    objets: ["Nanoparticules", "Microscopes électroniques", "Analyseurs de taille"],
    risque: 35,
    duree: "5 heures",
    objectif: "Comprendre les interactions à l'échelle nanométrique",
    precautions: ["Confinement nano", "Masques HEPA", "Surveillance particulaire"],
    resultatsAttendus: "Interactions avec les nanomatériaux",
    autorisationRequise: "Niveau 2",
    materiels: ["Microscopes TEM", "Analyseurs DLS", "Compteurs de particules"],
    zone: "Laboratoire de nanotechnologie"
  },
  {
    titre: "Test de Sensibilité aux Plasmas",
    description: "Exposer l'entité à différents types de plasmas",
    classeD: 3,
    objets: ["Générateurs de plasma", "Électrodes", "Gaz ionisés"],
    risque: 70,
    duree: "2 heures",
    objectif: "Analyser l'interaction avec la matière ionisée",
    precautions: ["Confinement magnétique", "Refroidissement", "Surveillance des gaz"],
    resultatsAttendus: "Réactions aux états plasma",
    autorisationRequise: "Niveau 4",
    materiels: ["Spectromètres plasma", "Sondes de Langmuir", "Systèmes de confinement"],
    zone: "Laboratoire de physique des plasmas"
  },
  {
    titre: "Interaction avec Matériaux Biomimétiques",
    description: "Tester les réactions de l'anomalie aux matériaux imitant la nature",
    classeD: 1,
    objets: ["Matériaux biomimétiques", "Analyseurs de surface", "Microscopes"],
    risque: 25,
    duree: "4 heures",
    objectif: "Comprendre les interactions avec les structures naturelles",
    precautions: ["Manipulation stérile", "Contrôle d'humidité", "Surveillance biologique"],
    resultatsAttendus: "Réponses aux structures biomimétiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Microscopes confocaux", "Analyseurs de texture", "Capteurs biologiques"],
    zone: "Laboratoire de biomimétique"
  },
  {
    titre: "Test de Résistance aux Rayons Gamma Pulsés",
    description: "Exposer l'entité à des impulsions gamma de haute intensité",
    classeD: 3,
    objets: ["Sources gamma pulsées", "Détecteurs rapides", "Blindage modulaire"],
    risque: 85,
    duree: "1 heure",
    objectif: "Mesurer la résistance aux rayonnements pulsés",
    precautions: ["Bunker blindé", "Dosimètres électroniques", "Évacuation automatique"],
    resultatsAttendus: "Seuils de tolérance gamma pulsée",
    autorisationRequise: "Niveau 4",
    materiels: ["Détecteurs scintillants", "Oscilloscopes rapides", "Systèmes de déclenchement"],
    zone: "Bunker gamma sécurisé"
  },
  {
    titre: "Analyse des Réactions aux Fluides Non-Newtoniens",
    description: "Tester l'interaction de l'anomalie avec des fluides aux propriétés spéciales",
    classeD: 2,
    objets: ["Fluides non-newtoniens", "Rhéomètres", "Systèmes de contrainte"],
    risque: 30,
    duree: "3 heures",
    objectif: "Comprendre les interactions avec les fluides complexes",
    precautions: ["Confinement étanche", "Nettoyage spécialisé", "Surveillance de viscosité"],
    resultatsAttendus: "Comportement dans les fluides complexes",
    autorisationRequise: "Niveau 2",
    materiels: ["Viscosimètres", "Capteurs de contrainte", "Systèmes de mélange"],
    zone: "Laboratoire de rhéologie"
  },
  {
    titre: "Test de Sensibilité aux Ondes Térahertz",
    description: "Exposer l'entité aux rayonnements térahertz",
    classeD: 1,
    objets: ["Sources THz", "Détecteurs térahertz", "Optiques spécialisées"],
    risque: 20,
    duree: "4 heures",
    objectif: "Analyser la sensibilité aux fréquences térahertz",
    precautions: ["Protection oculaire", "Contrôle de puissance", "Surveillance thermique"],
    resultatsAttendus: "Spectre de sensibilité térahertz",
    autorisationRequise: "Niveau 2",
    materiels: ["Spectromètres THz", "Bolomètres", "Systèmes optiques"],
    zone: "Laboratoire d'optique térahertz"
  },
  {
    titre: "Interaction avec Matériaux à Mémoire de Forme",
    description: "Tester les réactions de l'anomalie aux alliages à mémoire de forme",
    classeD: 1,
    objets: ["Alliages SMA", "Systèmes de chauffage", "Capteurs de déformation"],
    risque: 25,
    duree: "5 heures",
    objectif: "Comprendre les interactions avec les matériaux adaptatifs",
    precautions: ["Contrôle thermique", "Surveillance mécanique", "Limitation de contrainte"],
    resultatsAttendus: "Réactions aux transformations de phase",
    autorisationRequise: "Niveau 2",
    materiels: ["Extensomètres", "Thermocouples", "Systèmes de charge"],
    zone: "Laboratoire de matériaux intelligents"
  },
  {
    titre: "Test de Résistance aux Neutrons Thermiques",
    description: "Exposer l'entité à un flux de neutrons thermiques",
    classeD: 3,
    objets: ["Source de neutrons", "Modérateurs", "Détecteurs neutroniques"],
    risque: 75,
    duree: "6 heures",
    objectif: "Mesurer l'impact des neutrons de basse énergie",
    precautions: ["Blindage neutronique", "Surveillance d'activation", "Contrôle de criticité"],
    resultatsAttendus: "Sensibilité aux neutrons thermiques",
    autorisationRequise: "Niveau 4",
    materiels: ["Compteurs BF3", "Détecteurs He-3", "Moniteurs de flux"],
    zone: "Facility neutronique"
  },
  {
    titre: "Analyse des Réactions aux Aérogels",
    description: "Tester l'interaction de l'anomalie avec des matériaux ultra-légers",
    classeD: 1,
    objets: ["Aérogels", "Microscopes haute résolution", "Analyseurs de porosité"],
    risque: 15,
    duree: "3 heures",
    objectif: "Comprendre les interactions avec les structures poreuses",
    precautions: ["Manipulation délicate", "Contrôle d'humidité", "Protection contre la poussière"],
    resultatsAttendus: "Comportement avec les matériaux poreux",
    autorisationRequise: "Niveau 2",
    materiels: ["Porosimètres", "Microscopes SEM", "Analyseurs BET"],
    zone: "Laboratoire de matériaux poreux"
  },
  {
    titre: "Test de Sensibilité aux Champs Électrostatiques",
    description: "Analyser les réactions de l'anomalie aux charges électrostatiques",
    classeD: 2,
    objets: ["Générateurs Van de Graaff", "Électromètres", "Matériaux isolants"],
    risque: 40,
    duree: "2 heures",
    objectif: "Mesurer la sensibilité aux charges statiques",
    precautions: ["Mise à la terre", "Contrôle d'humidité", "Équipement antistatique"],
    resultatsAttendus: "Seuils de sensibilité électrostatique",
    autorisationRequise: "Niveau 2",
    materiels: ["Électromètres", "Générateurs de charges", "Cages de Faraday"],
    zone: "Laboratoire d'électrostatique"
  },
  {
    titre: "Interaction avec Cristaux Liquides",
    description: "Tester les réactions de l'anomalie aux phases mésomorphes",
    classeD: 1,
    objets: ["Cristaux liquides", "Microscopes polarisants", "Contrôleurs de température"],
    risque: 20,
    duree: "4 heures",
    objectif: "Analyser l'interaction avec les phases intermédiaires",
    precautions: ["Contrôle thermique précis", "Manipulation délicate", "Protection optique"],
    resultatsAttendus: "Réactions aux transitions de phase",
    autorisationRequise: "Niveau 2",
    materiels: ["Platines chauffantes", "Analyseurs d'image", "Capteurs optiques"],
    zone: "Laboratoire de cristaux liquides"
  },
  {
    titre: "Test de Résistance aux Ondes de Surface",
    description: "Exposer l'entité aux ondes acoustiques de surface",
    classeD: 2,
    objets: ["Transducteurs SAW", "Substrats piézoélectriques", "Analyseurs de réseau"],
    risque: 30,
    duree: "3 heures",
    objectif: "Mesurer l'impact des ondes de surface",
    precautions: ["Isolation vibratoire", "Contrôle de fréquence", "Protection acoustique"],
    resultatsAttendus: "Sensibilité aux ondes de surface",
    autorisationRequise: "Niveau 2",
    materiels: ["Générateurs RF", "Oscilloscopes", "Analyseurs spectraux"],
    zone: "Laboratoire d'acoustique de surface"
  },
  {
    titre: "Analyse des Réactions aux Métamatériaux",
    description: "Tester l'interaction de l'anomalie avec des matériaux aux propriétés exotiques",
    classeD: 1,
    objets: ["Métamatériaux", "Sources électromagnétiques", "Analyseurs de champ"],
    risque: 35,
    duree: "5 heures",
    objectif: "Comprendre les interactions avec les propriétés artificielles",
    precautions: ["Blindage EM", "Contrôle de puissance", "Surveillance des champs"],
    resultatsAttendus: "Réactions aux propriétés exotiques",
    autorisationRequise: "Niveau 3",
    materiels: ["Analyseurs vectoriels", "Sondes de champ", "Systèmes de mesure"],
    zone: "Laboratoire de métamatériaux"
  },
  {
    titre: "Test de Sensibilité aux Phonons",
    description: "Analyser les réactions de l'anomalie aux vibrations quantiques",
    classeD: 2,
    objets: ["Générateurs de phonons", "Détecteurs quantiques", "Systèmes cryogéniques"],
    risque: 45,
    duree: "6 heures",
    objectif: "Mesurer l'interaction avec les excitations quantiques",
    precautions: ["Refroidissement extrême", "Isolation vibratoire", "Contrôle quantique"],
    resultatsAttendus: "Sensibilité aux excitations quantiques",
    autorisationRequise: "Niveau 3",
    materiels: ["Cryostats dilution", "Détecteurs TES", "Systèmes de contrôle"],
    zone: "Laboratoire de physique quantique"
  },
  {
    titre: "Interaction avec Matériaux Photoniques",
    description: "Tester les réactions de l'anomalie aux cristaux photoniques",
    classeD: 1,
    objets: ["Cristaux photoniques", "Sources laser", "Spectromètres optiques"],
    risque: 25,
    duree: "4 heures",
    objectif: "Analyser l'interaction avec les structures photoniques",
    precautions: ["Protection laser", "Contrôle optique", "Surveillance thermique"],
    resultatsAttendus: "Réponse aux bandes interdites photoniques",
    autorisationRequise: "Niveau 2",
    materiels: ["Lasers accordables", "Monochromateurs", "Détecteurs optiques"],
    zone: "Laboratoire de photonique"
  },
  {
    titre: "Test de Résistance aux Impulsions Laser",
    description: "Exposer l'entité à des impulsions laser de haute puissance",
    classeD: 2,
    objets: ["Lasers pulsés", "Optiques de focalisation", "Calorimètres"],
    risque: 60,
    duree: "1 heure",
    objectif: "Mesurer la résistance aux impulsions de haute énergie",
    precautions: ["Protection laser classe 4", "Confinement optique", "Surveillance thermique"],
    resultatsAttendus: "Seuils de dommage laser",
    autorisationRequise: "Niveau 3",
    materiels: ["Puissancemètres", "Caméras thermiques", "Systèmes de sécurité"],
    zone: "Laboratoire laser haute puissance"
  },
  {
    titre: "Analyse des Réactions aux Ferrofluides",
    description: "Tester l'interaction de l'anomalie avec des fluides magnétiques",
    classeD: 2,
    objets: ["Ferrofluides", "Aimants permanents", "Microscopes magnétiques"],
    risque: 30,
    duree: "3 heures",
    objectif: "Comprendre les interactions magnéto-fluidiques",
    precautions: ["Confinement magnétique", "Nettoyage spécialisé", "Surveillance de dispersion"],
    resultatsAttendus: "Comportement dans les fluides magnétiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Magnétomètres", "Rhéomètres magnétiques", "Systèmes d'imagerie"],
    zone: "Laboratoire de fluides magnétiques"
  },
  {
    titre: "Test de Sensibilité aux Ondes Gravitationnelles",
    description: "Analyser les réactions de l'anomalie aux perturbations gravitationnelles",
    classeD: 3,
    objets: ["Détecteurs gravitationnels", "Interféromètres", "Systèmes d'isolation"],
    risque: 50,
    duree: "12 heures",
    objectif: "Mesurer la sensibilité aux ondes gravitationnelles",
    precautions: ["Isolation sismique", "Contrôle environnemental", "Surveillance continue"],
    resultatsAttendus: "Sensibilité aux perturbations de l'espace-temps",
    autorisationRequise: "Niveau 4",
    materiels: ["Interféromètres Michelson", "Systèmes de suspension", "Lasers stabilisés"],
    zone: "Observatoire gravitationnel"
  },
  {
    titre: "Interaction avec Matériaux Thermoélectriques",
    description: "Tester les réactions de l'anomalie aux effets thermoélectriques",
    classeD: 1,
    objets: ["Matériaux thermoélectriques", "Gradients thermiques", "Voltmètres"],
    risque: 25,
    duree: "4 heures",
    objectif: "Analyser l'interaction avec les effets Seebeck et Peltier",
    precautions: ["Contrôle thermique", "Isolation électrique", "Surveillance de température"],
    resultatsAttendus: "Réactions aux effets thermoélectriques",
    autorisationRequise: "Niveau 2",
    materiels: ["Thermocouples", "Sources de courant", "Calorimètres"],
    zone: "Laboratoire de thermoélectricité"
  },
  {
    titre: "Test de Résistance aux Rayons X Mous",
    description: "Exposer l'entité aux rayonnements X de basse énergie",
    classeD: 2,
    objets: ["Sources X molles", "Détecteurs proportionnels", "Filtres X"],
    risque: 55,
    duree: "3 heures",
    objectif: "Mesurer la sensibilité aux rayons X de basse énergie",
    precautions: ["Blindage plombé", "Dosimètres personnels", "Surveillance médicale"],
    resultatsAttendus: "Spectre de sensibilité X molle",
    autorisationRequise: "Niveau 3",
    materiels: ["Spectromètres X", "Chambres d'ionisation", "Moniteurs de dose"],
    zone: "Laboratoire de rayons X"
  },
  {
    titre: "Analyse des Réactions aux Matériaux Piézorésistifs",
    description: "Tester l'interaction de l'anomalie avec les capteurs de contrainte",
    classeD: 1,
    objets: ["Capteurs piézorésistifs", "Systèmes de charge", "Ponts de Wheatstone"],
    risque: 20,
    duree: "3 heures",
    objectif: "Comprendre les interactions avec les capteurs de pression",
    precautions: ["Calibration précise", "Protection contre les surcharges", "Isolation électrique"],
    resultatsAttendus: "Réponse aux variations de résistance",
    autorisationRequise: "Niveau 2",
    materiels: ["Multimètres de précision", "Systèmes de charge", "Amplificateurs"],
    zone: "Laboratoire de capteurs"
  },
  {
    titre: "Test de Sensibilité aux Champs Hyperfréquences",
    description: "Analyser les réactions de l'anomalie aux fréquences millimétriques",
    classeD: 2,
    objets: ["Sources millimétriques", "Guides d'ondes", "Détecteurs Schottky"],
    risque: 35,
    duree: "2 heures",
    objectif: "Mesurer la sensibilité aux ondes millimétriques",
    precautions: ["Blindage RF", "Contrôle de puissance", "Protection oculaire"],
    resultatsAttendus: "Spectre de sensibilité millimétrique",
    autorisationRequise: "Niveau 2",
    materiels: ["Analyseurs de spectre", "Puissancemètres", "Atténuateurs"],
    zone: "Laboratoire hyperfréquences"
  },
  {
    titre: "Interaction avec Matériaux Électrorhéologiques",
    description: "Tester les réactions de l'anomalie aux fluides contrôlés électriquement",
    classeD: 2,
    objets: ["Fluides ER", "Électrodes", "Sources haute tension"],
    risque: 40,
    duree: "3 heures",
    objectif: "Comprendre les interactions électrorhéologiques",
    precautions: ["Isolation électrique", "Confinement étanche", "Surveillance de viscosité"],
    resultatsAttendus: "Comportement dans les fluides ER",
    autorisationRequise: "Niveau 2",
    materiels: ["Rhéomètres", "Sources HT", "Capteurs de viscosité"],
    zone: "Laboratoire de fluides intelligents"
  },
  {
    titre: "Test de Résistance aux Particules Alpha",
    description: "Exposer l'entité aux rayonnements alpha de différentes énergies",
    classeD: 3,
    objets: ["Sources alpha", "Détecteurs silicium", "Chambres à vide"],
    risque: 65,
    duree: "4 heures",
    objectif: "Mesurer la résistance aux particules chargées",
    precautions: ["Confinement étanche", "Surveillance d'air", "Équipement de décontamination"],
    resultatsAttendus: "Seuils de résistance alpha",
    autorisationRequise: "Niveau 3",
    materiels: ["Spectromètres alpha", "Pompes à vide", "Moniteurs de contamination"],
    zone: "Laboratoire de particules alpha"
  },
  {
    titre: "Analyse des Réactions aux Matériaux Magnétostrictifs",
    description: "Tester l'interaction de l'anomalie avec les matériaux magnétostrictifs",
    classeD: 1,
    objets: ["Alliages magnétostrictifs", "Bobines d'excitation", "Extensomètres"],
    risque: 30,
    duree: "4 heures",
    objectif: "Comprendre les interactions magnéto-mécaniques",
    precautions: ["Contrôle magnétique", "Surveillance mécanique", "Isolation vibratoire"],
    resultatsAttendus: "Réponse aux déformations magnétiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Gaussmètres", "Capteurs de déformation", "Générateurs de champ"],
    zone: "Laboratoire de magnétostriction"
  },
  {
    titre: "Test de Sensibilité aux Ondes Évanescentes",
    description: "Analyser les réactions de l'anomalie aux champs évanescents",
    classeD: 1,
    objets: ["Prismes optiques", "Sources laser", "Détecteurs de champ proche"],
    risque: 25,
    duree: "3 heures",
    objectif: "Mesurer la sensibilité aux champs évanescents",
    precautions: ["Alignement optique précis", "Protection laser", "Contrôle de distance"],
    resultatsAttendus: "Sensibilité aux champs évanescents",
    autorisationRequise: "Niveau 2",
    materiels: ["Microscopes SNOM", "Positionneurs nanométriques", "Détecteurs APD"],
    zone: "Laboratoire d'optique de champ proche"
  },
  {
    titre: "Interaction avec Matériaux Électrochromes",
    description: "Tester les réactions de l'anomalie aux changements de couleur électriques",
    classeD: 1,
    objets: ["Matériaux électrochromes", "Sources de tension", "Spectromètres"],
    risque: 20,
    duree: "3 heures",
    objectif: "Analyser l'interaction avec les changements optiques",
    precautions: ["Contrôle électrique", "Surveillance optique", "Protection UV"],
    resultatsAttendus: "Réactions aux transitions électrochromes",
    autorisationRequise: "Niveau 2",
    materiels: ["Colorimètres", "Sources de tension", "Analyseurs spectraux"],
    zone: "Laboratoire d'électrochromisme"
  },
  {
    titre: "Test de Résistance aux Faisceaux d'Électrons",
    description: "Exposer l'entité à des faisceaux d'électrons de haute énergie",
    classeD: 3,
    objets: ["Accélérateur d'électrons", "Détecteurs de dose", "Blindage électronique"],
    risque: 70,
    duree: "2 heures",
    objectif: "Mesurer la résistance aux électrons énergétiques",
    precautions: ["Blindage X", "Surveillance de dose", "Confinement du faisceau"],
    resultatsAttendus: "Seuils de résistance électronique",
    autorisationRequise: "Niveau 4",
    materiels: ["Moniteurs de faisceau", "Dosimètres électroniques", "Cages de Faraday"],
    zone: "Facility d'irradiation électronique"
  },
  {
    titre: "Analyse des Réactions aux Matériaux Photochromes",
    description: "Tester l'interaction de l'anomalie avec les matériaux photosensibles",
    classeD: 1,
    objets: ["Matériaux photochromes", "Sources UV", "Spectromètres optiques"],
    risque: 15,
    duree: "4 heures",
    objectif: "Comprendre les interactions photochimiques",
    precautions: ["Protection UV", "Contrôle d'exposition", "Surveillance optique"],
    resultatsAttendus: "Réactions aux transitions photochromes",
    autorisationRequise: "Niveau 2",
    materiels: ["Sources UV calibrées", "Spectrophotomètres", "Dosimètres UV"],
    zone: "Laboratoire de photochimie"
  },
  {
    titre: "Test de Sensibilité aux Ondes de Spin",
    description: "Analyser les réactions de l'anomalie aux excitations magnétiques",
    classeD: 2,
    objets: ["Générateurs d'ondes de spin", "Détecteurs magnétiques", "Guides d'ondes magnétiques"],
    risque: 40,
    duree: "5 heures",
    objectif: "Mesurer l'interaction avec les ondes de spin",
    precautions: ["Contrôle magnétique", "Blindage RF", "Surveillance des champs"],
    resultatsAttendus: "Sensibilité aux excitations de spin",
    autorisationRequise: "Niveau 3",
    materiels: ["Analyseurs de réseau", "Magnétomètres", "Sources micro-ondes"],
    zone: "Laboratoire de spintronique"
  },
  {
    titre: "Interaction avec Matériaux Multiferroïques",
    description: "Tester les réactions de l'anomalie aux matériaux multifonctionnels",
    classeD: 1,
    objets: ["Matériaux multiferroïques", "Champs électriques et magnétiques", "Capteurs multiples"],
    risque: 35,
    duree: "6 heures",
    objectif: "Analyser les interactions multiferroïques",
    precautions: ["Contrôle des champs croisés", "Isolation multiple", "Surveillance complexe"],
    resultatsAttendus: "Réponse aux couplages multiferroïques",
    autorisationRequise: "Niveau 3",
    materiels: ["Systèmes de champs croisés", "Capteurs multiaxes", "Analyseurs de couplage"],
    zone: "Laboratoire de matériaux multiferroïques"
  },
  {
    titre: "Test de Résistance aux Rayonnements Synchrotron",
    description: "Exposer l'entité aux rayonnements synchrotron de haute brillance",
    classeD: 3,
    objets: ["Faisceau synchrotron", "Monochromateurs", "Détecteurs 2D"],
    risque: 80,
    duree: "4 heures",
    objectif: "Mesurer la résistance aux rayonnements intenses",
    precautions: ["Blindage renforcé", "Surveillance de dose", "Contrôle de faisceau"],
    resultatsAttendus: "Seuils de résistance synchrotron",
    autorisationRequise: "Niveau 4",
    materiels: ["Moniteurs de faisceau", "Détecteurs pixellisés", "Systèmes de sécurité"],
    zone: "Ligne de lumière synchrotron"
  },
  {
    titre: "Analyse des Réactions aux Matériaux Auxétiques",
    description: "Tester l'interaction de l'anomalie avec les matériaux à coefficient de Poisson négatif",
    classeD: 1,
    objets: ["Matériaux auxétiques", "Systèmes de traction", "Capteurs de déformation"],
    risque: 20,
    duree: "3 heures",
    objectif: "Comprendre les interactions avec les déformations anormales",
    precautions: ["Contrôle de charge", "Surveillance de déformation", "Protection mécanique"],
    resultatsAttendus: "Réponse aux déformations auxétiques",
    autorisationRequise: "Niveau 2",
    materiels: ["Machines de traction", "Extensomètres 2D", "Systèmes d'imagerie"],
    zone: "Laboratoire de mécanique des matériaux"
  },
  {
    titre: "Test de Sensibilité aux Plasmons de Surface",
    description: "Analyser les réactions de l'anomalie aux excitations plasmoniques",
    classeD: 1,
    objets: ["Structures plasmoniques", "Sources laser", "Spectromètres de surface"],
    risque: 25,
    duree: "4 heures",
    objectif: "Mesurer l'interaction avec les plasmons de surface",
    precautions: ["Protection laser", "Contrôle de surface", "Surveillance optique"],
    resultatsAttendus: "Sensibilité aux excitations plasmoniques",
    autorisationRequise: "Niveau 2",
    materiels: ["Spectromètres Raman", "Microscopes optiques", "Sources accordables"],
    zone: "Laboratoire de plasmonique"
  },
  {
    titre: "Interaction avec Matériaux Piézoélectriques Flexibles",
    description: "Tester les réactions de l'anomalie aux piézoélectriques déformables",
    classeD: 1,
    objets: ["Polymères piézoélectriques", "Systèmes de flexion", "Capteurs de charge"],
    risque: 15,
    duree: "3 heures",
    objectif: "Analyser l'interaction avec les piézoélectriques flexibles",
    precautions: ["Contrôle de déformation", "Protection contre les déchirures", "Surveillance électrique"],
    resultatsAttendus: "Réponse aux piézoélectriques flexibles",
    autorisationRequise: "Niveau 2",
    materiels: ["Amplificateurs de charge", "Systèmes de flexion", "Oscilloscopes"],
    zone: "Laboratoire d'électronique flexible"
  },
  {
    titre: "Test de Résistance aux Rayons Cosmiques Secondaires",
    description: "Exposer l'entité aux particules secondaires des rayons cosmiques",
    classeD: 2,
    objets: ["Détecteurs de muons", "Chambres à étincelles", "Systèmes de coïncidence"],
    risque: 45,
    duree: "8 heures",
    objectif: "Mesurer l'impact des particules cosmiques secondaires",
    precautions: ["Blindage sélectif", "Surveillance de flux", "Détection multiple"],
    resultatsAttendus: "Sensibilité aux particules secondaires",
    autorisationRequise: "Niveau 3",
    materiels: ["Détecteurs de muons", "Systèmes de déclenchement", "Analyseurs de traces"],
    zone: "Observatoire de rayons cosmiques"
  },
  {
    titre: "Analyse des Réactions aux Matériaux Thermochromes",
    description: "Tester l'interaction de l'anomalie avec les matériaux sensibles à la température",
    classeD: 1,
    objets: ["Matériaux thermochromes", "Sources de chaleur", "Caméras thermiques"],
    risque: 20,
    duree: "3 heures",
    objectif: "Comprendre les interactions thermochromes",
    precautions: ["Contrôle thermique", "Surveillance de température", "Protection contre la surchauffe"],
    resultatsAttendus: "Réactions aux transitions thermochromes",
    autorisationRequise: "Niveau 2",
    materiels: ["Thermomètres IR", "Sources de chaleur contrôlées", "Spectromètres"],
    zone: "Laboratoire de thermochromisme"
  }
];

// Génération d'expériences supplémentaires
function generateMoreExperiences() {
  const variations = [
    "Analyse Comportementale Approfondie",
    "Test de Stress Environnemental",
    "Évaluation des Capacités Sensorielles",
    "Protocole d'Adaptation Évolutive",
    "Mesure de Résistance Structurelle",
    "Analyse des Patterns Temporels",
    "Test d'Interaction Sociale",
    "Évaluation Cognitive Avancée",
    "Protocole de Stress Thermique",
    "Analyse des Réflexes Primaires",
    "Test de Mémoire à Long Terme",
    "Évaluation de l'Instinct de Survie",
    "Protocole d'Exposition Lumineuse",
    "Analyse des Capacités Régénératrices",
    "Test de Reconnaissance Faciale",
    "Évaluation des Mécanismes de Défense",
    "Protocole d'Isolation Sensorielle",
    "Analyse des Cycles Biologiques",
    "Test de Coordination Motrice",
    "Évaluation des Réponses Émotionnelles",
    "Protocole de Stimulation Tactile",
    "Analyse des Habitudes Alimentaires",
    "Test de Perception Spatiale",
    "Évaluation des Capacités d'Apprentissage"
  ];

  const environments = [
    "sous pression atmosphérique modifiée",
    "en présence de gaz inertes",
    "avec éclairage stroboscopique",
    "en gravité simulée réduite",
    "sous champs magnétiques intenses",
    "avec exposition à ultrasons",
    "en atmosphère humidifiée",
    "sous contrainte temporelle",
    "avec interférences électriques",
    "en environnement aseptisé"
  ];

  const objectives = [
    "cartographier les réponses neurologiques",
    "identifier les seuils de tolérance",
    "évaluer les mécanismes d'adaptation",
    "mesurer les capacités de récupération",
    "analyser les patterns comportementaux",
    "déterminer les facteurs déclencheurs",
    "quantifier les réactions physiologiques",
    "établir des protocoles de contrôle",
    "créer des modèles prédictifs",
    "développer des contre-mesures"
  ];

  const additionalExperiences = [];

  variations.forEach((variation, i) => {
    for (let j = 0; j < 10; j++) {
      const envIndex = (i + j) % environments.length;
      const objIndex = (i + j) % objectives.length;
      const risk = Math.floor(Math.random() * 80) + 10;
      const duration = [
        "30 minutes", "1 heure", "2 heures", "4 heures", "6 heures", 
        "8 heures", "12 heures", "24 heures", "48 heures", "72 heures"
      ][j % 10];
      const classDCount = Math.floor(Math.random() * 8) + 1;

      additionalExperiences.push({
        titre: `${variation} ${environments[envIndex]}`,
        description: `Expérience visant à ${objectives[objIndex]} ${environments[envIndex]}`,
        classeD: classDCount,
        objets: [
          "Équipement de surveillance avancé",
          "Capteurs spécialisés",
          "Dispositifs de mesure",
          "Matériel de sécurité"
        ],
        risque: risk,
        duree: duration,
        objectif: objectives[objIndex].charAt(0).toUpperCase() + objectives[objIndex].slice(1),
        precautions: [
          "Personnel qualifié requis",
          "Protocoles de sécurité standard",
          "Surveillance continue",
          "Plan d'évacuation préparé"
        ],
        resultatsAttendus: `Données quantifiées sur ${objectives[objIndex]}`,
        autorisationRequise: risk > 50 ? "Niveau 4" : risk > 30 ? "Niveau 3" : "Niveau 2",
        materiels: [
          "Instruments de mesure",
          "Équipement de protection",
          "Systèmes d'enregistrement",
          "Matériel d'urgence"
        ],
        zone: "Zone de test sécurisée adaptée"
      });
    }
  });

  return additionalExperiences;
}

// Variables globales
let allExperiences = [...baseExperiences, ...specializedExperiences, ...generateMoreExperiences()];
let generatedExperiences = [];
let isLoading = false;

// Fonctions utilitaires
function getRiskColor(risk) {
  if (risk < 25) return '#10b981';
  if (risk < 50) return '#f59e0b';
  if (risk < 75) return '#f97316';
  return '#ef4444';
}

function getRiskBg(risk) {
  if (risk < 25) return 'rgba(16, 185, 129, 0.1)';
  if (risk < 50) return 'rgba(245, 158, 11, 0.1)';
  if (risk < 75) return 'rgba(249, 115, 22, 0.1)';
  return 'rgba(239, 68, 68, 0.1)';
}

function getRiskBorder(risk) {
  if (risk < 25) return 'rgba(16, 185, 129, 0.3)';
  if (risk < 50) return 'rgba(245, 158, 11, 0.3)';
  if (risk < 75) return 'rgba(249, 115, 22, 0.3)';
  return 'rgba(239, 68, 68, 0.3)';
}

// Fonction de génération d'expériences
function generateExperiences() {
  const scpInput = document.getElementById('scpInput');
  const scpName = scpInput.value.trim();
  
  if (!scpName) return;

  isLoading = true;
  updateLoadingState();
  
  setTimeout(() => {
    const shuffled = [...allExperiences].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5).map((exp, index) => ({
      ...exp,
      id: `${Date.now()}-${index}`,
      titre: `${exp.titre} - SCP-${scpName}`,
      description: `${exp.description} spécifiquement adaptée pour SCP-${scpName}.`
    }));
    
    generatedExperiences = selected;
    isLoading = false;
    updateLoadingState();
    renderResults(scpName);
  }, 1500);
}

// Mise à jour de l'état de chargement
function updateLoadingState() {
  const generateBtn = document.getElementById('generateBtn');
  const btnContent = generateBtn.querySelector('.btn-content');
  
  if (isLoading) {
    btnContent.innerHTML = `
      <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
    `;
    generateBtn.disabled = true;
  } else {
    btnContent.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
      Générer
    `;
    generateBtn.disabled = false;
  }
}

// Rendu des résultats
function renderResults(scpName) {
  const resultsContainer = document.getElementById('results');
  
  if (generatedExperiences.length === 0) {
    resultsContainer.innerHTML = '';
    return;
  }

  const resultsHTML = `
    <div class="results-section">
      <div class="results-header">
        <h2>Idées d'Expériences pour SCP-${scpName}</h2>
        <p>${generatedExperiences.length} expériences générées • Plus de ${allExperiences.length} variations disponibles</p>
      </div>

      <div class="experiments-grid">
        ${generatedExperiences.map(exp => `
          <div class="experiment-card">
            <div class="experiment-header">
              <h3>${exp.titre}</h3>
              <p>${exp.description}</p>
            </div>

            <div class="experiment-details">
              <div class="detail-card risk-card" style="background: ${getRiskBg(exp.risque)}; border-color: ${getRiskBorder(exp.risque)}">
                <div class="detail-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${getRiskColor(exp.risque)}" stroke-width="2">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <path d="M12 9v4"/>
                    <path d="m12 17 .01 0"/>
                  </svg>
                  <span>Niveau de Risque</span>
                </div>
                <div class="risk-value" style="color: ${getRiskColor(exp.risque)}">${exp.risque}%</div>
                <div class="detail-sub">Autorisation: <span>${exp.autorisationRequise}</span></div>
              </div>

              <div class="detail-card personnel-card">
                <div class="detail-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z"/>
                  </svg>
                  <span>Personnel</span>
                </div>
                <div class="personnel-value">${exp.classeD} Classe-D</div>
                <div class="detail-sub">Durée: <span>${exp.duree}</span></div>
              </div>

              <div class="detail-card zone-card">
                <div class="detail-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                  <span>Zone</span>
                </div>
                <div class="zone-value">${exp.zone}</div>
              </div>
            </div>

            <div class="experiment-info">
              <div class="info-section">
                <h4>🎯 OBJECTIF</h4>
                <p>${exp.objectif}</p>
              </div>

              <div class="info-section">
                <h4>🔬 MATÉRIELS REQUIS</h4>
                <div class="info-grid">
                  ${exp.materiels.map(materiel => `
                    <div class="info-item">
                      <div class="info-dot" style="background: #60a5fa"></div>
                      ${materiel}
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="info-section">
                <h4>⚠️ PRÉCAUTIONS</h4>
                <div class="info-grid">
                  ${exp.precautions.map(precaution => `
                    <div class="info-item">
                      <div class="info-dot" style="background: #fbbf24"></div>
                      ${precaution}
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="info-section">
                <h4>📊 RÉSULTATS ATTENDUS</h4>
                <p>${exp.resultatsAttendus}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="regenerate-section">
        <button onclick="generateExperiences()" class="regenerate-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 11-6.219-8.56"/>
          </svg>
          Générer Nouvelles Idées
        </button>
        <p>Générez autant d'idées que nécessaire • Système infini</p>
      </div>
    </div>
  `;

  resultsContainer.innerHTML = resultsHTML;
}

// Initialisation de l'application
function initApp() {
  document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Générateur d'Expériences SCP - Fondation SCP</title>
        <meta name="description" content="Générateur d'idées d'expériences pour les anomalies SCP - Développé par Vincent O'Bryan">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: url('https://i.imgur.com/XOO9bZQ.jpeg') center/cover fixed;
                color: white;
                min-height: 100vh;
            }

            .overlay {
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(2px);
                min-height: 100vh;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }

            .header {
                text-align: center;
                margin-bottom: 3rem;
            }

            .header-title {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .header h1 {
                font-size: 2.5rem;
                font-weight: bold;
                color: white;
            }

            .header-icon {
                width: 2rem;
                height: 2rem;
                color: #f97316;
            }

            .header-subtitle {
                font-size: 1.125rem;
                color: #d1d5db;
                margin-bottom: 0.5rem;
            }

            .header-credit {
                font-size: 0.875rem;
                color: #9ca3af;
                font-style: italic;
            }

            .header-credit .author {
                color: #f97316;
                font-weight: 600;
            }

            .search-section {
                max-width: 600px;
                margin: 0 auto 3rem;
            }

            .search-card {
                background: rgba(31, 41, 55, 0.9);
                backdrop-filter: blur(4px);
                border: 1px solid #374151;
                border-radius: 0.5rem;
                padding: 1.5rem;
            }

            .search-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .input-group {
                flex: 1;
            }

            .input-label {
                display: block;
                font-size: 0.875rem;
                font-weight: 500;
                color: #d1d5db;
                margin-bottom: 0.5rem;
            }

            .input-container {
                position: relative;
            }

            .search-input {
                width: 100%;
                padding: 0.75rem 3rem 0.75rem 1rem;
                background: rgba(17, 24, 39, 0.8);
                border: 1px solid #4b5563;
                border-radius: 0.5rem;
                color: white;
                font-size: 1rem;
            }

            .search-input::placeholder {
                color: #9ca3af;
            }

            .search-input:focus {
                outline: none;
                border-color: #f97316;
                box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
            }

            .search-icon {
                position: absolute;
                right: 0.75rem;
                top: 0.75rem;
                width: 1.25rem;
                height: 1.25rem;
                color: #9ca3af;
            }

            .generate-btn {
                padding: 0.75rem 2rem;
                background: #ea580c;
                color: white;
                border: none;
                border-radius: 0.5rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                min-width: 140px;
            }

            .generate-btn:hover:not(:disabled) {
                background: #c2410c;
            }

            .generate-btn:disabled {
                background: #4b5563;
                cursor: not-allowed;
            }

            .btn-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .animate-spin {
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            .results-section {
                margin-top: 2rem;
            }

            .results-header {
                text-align: center;
                margin-bottom: 2rem;
            }

            .results-header h2 {
                font-size: 1.875rem;
                font-weight: bold;
                color: white;
                margin-bottom: 0.5rem;
            }

            .results-header p {
                color: #9ca3af;
            }

            .experiments-grid {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .experiment-card {
                background: rgba(31, 41, 55, 0.9);
                backdrop-filter: blur(4px);
                border: 1px solid #374151;
                border-radius: 0.5rem;
                overflow: hidden;
            }

            .experiment-header {
                padding: 1.5rem;
                border-bottom: 1px solid #374151;
            }

            .experiment-header h3 {
                font-size: 1.25rem;
                font-weight: bold;
                color: white;
                margin-bottom: 0.5rem;
            }

            .experiment-header p {
                color: #d1d5db;
                line-height: 1.6;
            }

            .experiment-details {
                padding: 1.5rem;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }

            .detail-card {
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid;
            }

            .detail-header {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .detail-header span {
                font-weight: 600;
                color: white;
            }

            .risk-value, .personnel-value {
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 0.25rem;
            }

            .personnel-value {
                color: #60a5fa;
            }

            .zone-value {
                font-size: 0.875rem;
                color: #a78bfa;
                font-weight: 500;
            }

            .detail-sub {
                font-size: 0.875rem;
                color: #9ca3af;
            }

            .detail-sub span {
                color: white;
            }

            .experiment-info {
                padding: 1.5rem;
                background: rgba(17, 24, 39, 0.5);
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .info-section h4 {
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #f97316;
            }

            .info-section p {
                color: #d1d5db;
            }

            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 0.5rem;
            }

            .info-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #d1d5db;
            }

            .info-dot {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
            }

            .regenerate-section {
                text-align: center;
                padding: 2rem 0;
            }

            .regenerate-btn {
                padding: 0.75rem 2rem;
                background: #ea580c;
                color: white;
                border: none;
                border-radius: 0.5rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .regenerate-btn:hover {
                background: #c2410c;
            }

            .regenerate-section p {
                color: #9ca3af;
                font-size: 0.875rem;
            }

            .footer {
                text-align: center;
                margin-top: 4rem;
                padding: 2rem 0;
                border-top: 1px solid #374151;
            }

            .footer p {
                color: #9ca3af;
                font-size: 0.875rem;
                margin-bottom: 0.25rem;
            }

            .footer p:last-child {
                color: #6b7280;
                font-size: 0.75rem;
            }

            @media (min-width: 640px) {
                .search-form {
                    flex-direction: row;
                    align-items: end;
                }
            }

            @media (max-width: 768px) {
                .container {
                    padding: 1rem;
                }

                .header h1 {
                    font-size: 2rem;
                }

                .experiment-details {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <div class="overlay">
            <div class="container">
                <div class="header">
                    <div class="header-title">
                        <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                        <h1>GÉNÉRATEUR D'EXPÉRIENCES SCP</h1>
                        <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                    </div>
                    <p class="header-subtitle">Système Avancé de Génération d'Idées Expérimentales</p>
                    <p class="header-credit">
                        Développé par <span class="author">Vincent O'Bryan</span> - Chercheur Novice
                    </p>
                </div>

                <div class="search-section">
                    <div class="search-card">
                        <div class="search-form">
                            <div class="input-group">
                                <label class="input-label">Numéro SCP à étudier</label>
                                <div class="input-container">
                                    <input 
                                        type="text" 
                                        id="scpInput"
                                        class="search-input"
                                        placeholder="Ex: 173, 096, 999..."
                                    >
                                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"/>
                                        <path d="m21 21-4.35-4.35"/>
                                    </svg>
                                </div>
                            </div>
                            <button id="generateBtn" class="generate-btn">
                                <div class="btn-content">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                    Générer
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="results"></div>

                <div class="footer">
                    <p>© COSMOS SCP • Générateur d'Expériences • Base de données: ${allExperiences.length} variations</p>
                    <p>Classification: RESTREINT • Usage autorisé pour personnel de recherche uniquement</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;

  // Event listeners
  const scpInput = document.getElementById('scpInput');
  const generateBtn = document.getElementById('generateBtn');

  scpInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      generateExperiences();
    }
  });

  generateBtn.addEventListener('click', generateExperiences);
}

// Démarrage de l'application
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
} else {
  // Pour Node.js
  console.log('Générateur d\'Expériences SCP - Plus de ' + allExperiences.length + ' variations disponibles');
  console.log('Développé par Vincent O\'Bryan - Chercheur Novice');
}
