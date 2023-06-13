import logements from "./logements.json";

function getAllLogements() {
  return logements;
}

function oneLogement(id) {
  return logements.find((logement) => logement.id === id);
}

export { getAllLogements, oneLogement };
