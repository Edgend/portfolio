export default function data_comp() {
  const comp_BA_1 = {
    titre: "Innovation",
    color: "bg-upjv-2",
    competences: [
      "Envisage des solutions créatives pour élaborer de nouveaux concepts.",
      "Fait preuve d'un mode de pensée ouvert et innovant",
      "Sait tirer parti des avancées technologiques pour répondre aux besoins de l'entreprise",
    ],
  };
  const comp_BA_2 = {
    titre: "Conception et développement d'applications",
    color: "bg-upjv-2",
    competences: [
      "Interprète les techniques de conception pour développer une application adaptée aux besoins du client.",
      "Adapte les solutions existantes en procédant au portage d'une application vers un autre système d'exploitation.",
      "Valide les résultats avec les représentants des utilisateurs, intègre et met en service la solution dans son ensemble.",
    ],
  };
  const comp_BA_3 = {
    titre: "Tests",
    color: "bg-upjv-2",
    competences: [
      "Met au point et exécute des procédures d'essai systématiquespour les systèmes informatiques ou les exigences d'utilisabilitédu client afin d'établir" +
      " la conformité avec les spécifications deconception.",
      "S'assure que les composants ou systèmes, nouveauxou mis à jour, fonctionnent comme prévu.",
      "Produit des documents et des rapports mettant en évidence les exigences de certification.",
    ],
  };

  const comp_BA_4 = {
    titre: "Science des données et analyse",
    color: "bg-upjv-2",
    competences: [
      "Identifie, extrait et intègre les données",
      "Conçoit et réalise des outils d'analyse des données",
      "Vérifie la véracité des données",
      "Visualise les résultats de l'analyse des données",
    ],
  };

  const comp_BA_5 = {
    titre: "Gestion de l'information et de la connaissance",
    color: "bg-upjv-2",
    competences: [
      "Identifie les informations et les connaissances clés",
      "Intègre et synthétise les informations",
      "Créé une structure d'information pour permettre l'exploitation et le partage des informations",
    ],
  };

  const comp_BA_6 = {
    titre: "Identification des besoins",
    color: "bg-upjv-2",
    competences: [
      "Écoute attentivement les clients internes et externes, formule et clarifie leurs besoins.",
      "Gère les relations avec toutes les parties prenantes pour garantir que les solutions et les services sont conformes aux exigences métier.",
      "Propose différentes solutions en effectuant des analyses contextuelles favorisant la conception de systèmes centrés sur l'utilisateur.",
      "Conseille le client pour le choix d'une solution appropriée",
      "Agit comme un défenseur de la solution choisie et s'engage dans sa mise en œuvre ou son processus de configuration"
    ],
  };

  const comp_BA_7 = {
    titre: "Gestion de la relation client",
    color: "bg-upjv-2",
    competences: [
      "Met en place de bonnes relations au travail",
      "Entretien une communication régulière avec les collègues, clients, partenaires et fournisseurs.",
      "Garantit que les besoins, les préoccupations et les réclamations des différentes parties prenantes sont bien compris et traités.",
    ],
  };


  return [
    {
      poste: "Data Analyst",
      color: "bg-upjv-2",
      comp: [comp_BA_1, comp_BA_2, comp_BA_3, comp_BA_4, comp_BA_5, comp_BA_6, comp_BA_7],
    },
  ];
}
