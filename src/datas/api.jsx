import logements from "./logements.json";

function getAllLogements() {
  return logements;
}

const oneLogement = async (id) => {
  return await logements.find((logement) => logement.id === id);
};

export { getAllLogements, oneLogement };
