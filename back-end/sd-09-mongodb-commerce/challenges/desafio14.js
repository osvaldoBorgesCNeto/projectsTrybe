db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 } },
  {
    $push: {
      tags: "contém sódio",
    },
  },
  { upsert: true },
);

db.produtos.find(
  {},
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);
