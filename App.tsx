import React, { useState, useEffect } from 'react';
import { Search, AlertTriangle, Users, Package, FileText, RefreshCw, Zap } from 'lucide-react';

interface ExperienceIdea {
  id: string;
  titre: string;
  description: string;
  classeD: number;
  objets: string[];
  risque: number;
  duree: string;
  objectif: string;
  precautions: string[];
  resultatsAttendus: string;
  autorisationRequise: string;
  materiels: string[];
  zone: string;
}

const baseExperiences: Omit<ExperienceIdea, 'id'>[] = [
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

// Génération de 240 expériences supplémentaires par combinaison et variation
const generateMoreExperiences = (): Omit<ExperienceIdea, 'id'>[] => {
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

  const additionalExperiences: Omit<ExperienceIdea, 'id'>[] = [];

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
};

const App: React.FC = () => {
  const [scpName, setScpName] = useState('');
  const [generatedExperiences, setGeneratedExperiences] = useState<ExperienceIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allExperiences] = useState<Omit<ExperienceIdea, 'id'>[]>([
    ...baseExperiences,
    ...generateMoreExperiences()
  ]);

  const generateExperiences = () => {
    if (!scpName.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const shuffled = [...allExperiences].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 5).map((exp, index) => ({
        ...exp,
        id: `${Date.now()}-${index}`,
        titre: `${exp.titre} - SCP-${scpName}`,
        description: `${exp.description} spécifiquement adaptée pour SCP-${scpName}.`
      }));
      
      setGeneratedExperiences(selected);
      setIsLoading(false);
    }, 1500);
  };

  const getRiskColor = (risk: number) => {
    if (risk < 25) return 'text-green-400';
    if (risk < 50) return 'text-yellow-400';
    if (risk < 75) return 'text-orange-400';
    return 'text-red-400';
  };

  const getRiskBg = (risk: number) => {
    if (risk < 25) return 'bg-green-900/20 border-green-500/30';
    if (risk < 50) return 'bg-yellow-900/20 border-yellow-500/30';
    if (risk < 75) return 'bg-orange-900/20 border-orange-500/30';
    return 'bg-red-900/20 border-red-500/30';
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white"
      style={{
        backgroundImage: 'url(https://i.imgur.com/9Qx8vZy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="min-h-screen bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">
                GÉNÉRATEUR D'EXPÉRIENCES SCP
              </h1>
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-gray-300 text-lg mb-2">
              Système Avancé de Génération d'Idées Expérimentales
            </p>
            <p className="text-sm text-gray-400 italic">
              Développé par <span className="text-orange-400 font-semibold">Vincent O'Bryan</span> - Chercheur Novice
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Numéro SCP à étudier
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={scpName}
                      onChange={(e) => setScpName(e.target.value)}
                      placeholder="Ex: 173, 096, 999..."
                      className="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                      onKeyPress={(e) => e.key === 'Enter' && generateExperiences()}
                    />
                    <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <button
                  onClick={generateExperiences}
                  disabled={!scpName.trim() || isLoading}
                  className="px-8 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isLoading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      Générer
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          {generatedExperiences.length > 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Idées d'Expériences pour SCP-{scpName}
                </h2>
                <p className="text-gray-400">
                  {generatedExperiences.length} expériences générées • Plus de 250 variations disponibles
                </p>
              </div>

              <div className="grid gap-8">
                {generatedExperiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.titre}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Risk Level */}
                      <div className={`p-4 rounded-lg border ${getRiskBg(exp.risque)}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className={`w-5 h-5 ${getRiskColor(exp.risque)}`} />
                          <span className="font-semibold text-white">Niveau de Risque</span>
                        </div>
                        <div className={`text-2xl font-bold ${getRiskColor(exp.risque)}`}>
                          {exp.risque}%
                        </div>
                        <div className="text-sm text-gray-400">
                          Autorisation: <span className="text-white">{exp.autorisationRequise}</span>
                        </div>
                      </div>

                      {/* Personnel */}
                      <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="font-semibold text-white">Personnel</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">
                          {exp.classeD} Classe-D
                        </div>
                        <div className="text-sm text-gray-400">
                          Durée: <span className="text-white">{exp.duree}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="w-5 h-5 text-purple-400" />
                          <span className="font-semibold text-white">Zone</span>
                        </div>
                        <div className="text-sm text-purple-400 font-medium">
                          {exp.zone}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="p-6 space-y-6 bg-gray-900/50">
                      <div>
                        <h4 className="font-semibold text-orange-400 mb-2">🎯 OBJECTIF</h4>
                        <p className="text-gray-300">{exp.objectif}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">🔬 MATÉRIELS REQUIS</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {exp.materiels.map((materiel, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              {materiel}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-yellow-400 mb-2">⚠️ PRÉCAUTIONS</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {exp.precautions.map((precaution, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              {precaution}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">📊 RÉSULTATS ATTENDUS</h4>
                        <p className="text-gray-300">{exp.resultatsAttendus}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center py-8">
                <button
                  onClick={generateExperiences}
                  className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-5 h-5" />
                  Générer Nouvelles Idées
                </button>
                <p className="text-gray-400 text-sm mt-2">
                  Générez autant d'idées que nécessaire • Système infini
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16 py-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © Fondation SCP • Générateur d'Expériences • Base de données: {allExperiences.length} variations
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Classification: RESTREINT • Usage autorisé pour personnel de recherche uniquement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
