export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-seyssinet",
    slug: "renovation-sdb-seyssinet",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    location: "Seyssinet-Pariset",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "cuisine-grenoble",
    slug: "refection-plomberie-cuisine-grenoble",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    shortDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré.",
    fullDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    location: "Grenoble",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chauffe-eau-echirolles",
    slug: "remplacement-chauffe-eau-echirolles",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    shortDescription: "Remplacement d'un vieux chauffe-eau par un ballon thermodynamique classe A.",
    fullDescription: "Remplacement d'un vieux chauffe-eau rouillé par un ballon thermodynamique classe A.",
    location: "Échirolles",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "pac-meylan",
    slug: "installation-pac-meylan",
    title: "Installation pompe à chaleur",
    category: "Chauffage",
    shortDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau.",
    fullDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau compacte.",
    location: "Meylan",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "sdb-pmr-fontaine",
    slug: "salle-de-bain-pmr-fontaine",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    shortDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite.",
    fullDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    location: "Fontaine",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chaudiere-saint-egreve",
    slug: "remplacement-chaudiere-saint-egreve",
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    shortDescription: "Installation d'une chaudière gaz à condensation dernière génération.",
    fullDescription: "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle de 20 ans.",
    location: "Saint-Égrève",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
