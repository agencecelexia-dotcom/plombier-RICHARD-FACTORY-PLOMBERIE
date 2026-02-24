/**
 * Mapping des images du site — 33 images uniques pour 46 emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** #3 — 16:9 — hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** #4 — 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-vizille-after */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** #15 — 4:3 — page douche-italienne + realisation douche-seyssins-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** #16 — 4:3 — page PMR + realisation sdb-pmr-fontaine-after */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** #17 — 3:2 — page chaudiere-gaz + realisation chaudiere-saint-egreve-after */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** #19 — 3:2 — page plancher-chauffant + realisation plancher-claix-after */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** #8 — 4:3 — section urgence-card + realisation depannage-grenoble-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "chauffage":            "/images/heroes/chauffage.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 10 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/plomberie-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/plomberie-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/plomberie-mise-aux-normes.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres — les nouvelles clés pointent vers les fichiers existants
// ============================================================
export const realisationImages: Record<string, string> = {
  // Salle de bain Seyssinet-Pariset
  "sdb-seyssinet-before":             "/images/realisations/sdb-villeurbanne-before.jpeg",
  "sdb-seyssinet-after":              "/images/realisations/sdb-villeurbanne-after.png",
  // Cuisine Grenoble
  "cuisine-grenoble-before":          "/images/realisations/cuisine-lyon3-before.png",
  "cuisine-grenoble-after":           "/images/realisations/cuisine-lyon3-after.jpeg",
  // Chauffe-eau Échirolles
  "chauffe-eau-echirolles-before":    "/images/realisations/chauffe-eau-caluire-before.png",
  "chauffe-eau-echirolles-after":     "/images/realisations/chauffe-eau-caluire-after.png",
  // PAC Meylan
  "pac-meylan-before":                "/images/realisations/pac-bron-before.jpeg",
  "pac-meylan-after":                 "/images/realisations/pac-bron-after.png",
  // Salle de bain PMR Fontaine
  "sdb-pmr-fontaine-before":          "/images/realisations/sdb-pmr-lyon6-before.jpeg",
  "sdb-pmr-fontaine-after":           IMG_SDB_PMR,
  // Chaudière Saint-Égrève
  "chaudiere-saint-egreve-before":    "/images/realisations/chaudiere-tassin-before.png",
  "chaudiere-saint-egreve-after":     IMG_CHAUDIERE_GAZ,
  // Douche Seyssins
  "douche-seyssins-before":           "/images/realisations/douche-lyon7-before.png",
  "douche-seyssins-after":            IMG_DOUCHE_ITALIENNE,
  // Plancher chauffant Claix
  "plancher-chauffant-claix-before":  "/images/realisations/plancher-chauffant-ecully-before.png",
  "plancher-chauffant-claix-after":   IMG_PLANCHER_CHAUFFANT,
  // Dépannage Grenoble
  "depannage-grenoble-before":        IMG_FUITE_EAU,
  "depannage-grenoble-after":         "/images/realisations/depannage-lyon2-after.png",
  // Salle de bain complète Vizille
  "sdb-complete-vizille-before":      "/images/realisations/sdb-complete-oullins-before.png",
  "sdb-complete-vizille-after":       IMG_RENOVATION_SDB,
};
