const empresaNome = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa: empresaNome,
    totalVoosDomesticos: db.voos
      .count({ "empresa.nome": empresaNome, natureza: "Doméstica" }),
  },
);
db.resumoVoos
  .findOne({ empresa: empresaNome }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });