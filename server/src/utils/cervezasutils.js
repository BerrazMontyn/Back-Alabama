const { Cervezas, Carta } = require("../db");
const cargaCerveza = require("../json/preCervezas.json");

//------------------------------------------------
//PreCARGA JSON

// const preload_cervezas = async () => {
//   try {
//     let data = cargaCerveza.map((cerveza) => {
//       return {
//         name: cerveza.name,
//         img: cerveza.img,
//         ibu: cerveza.ibu,
//         abv: cerveza.abv,
//         cerveceria: cerveza.cerveceria,
//       };
//     });

//     for (const cerveza of data) {
//       create_cerveza(cerveza);
//     }
//     return data;
//   } catch (error) {
//     console.log("Rompo en la preCarga", error);
//   }
// };

//------------------------------------------------
//CREA PRODUCTO

const create_cerveza = async (data) => {
  try {
    let { name, img, ibu, abv } = data;

    let new_cerveza = await Cervezas.create({
      name,
      img,
      ibu,
      abv,
    });
    return new_cerveza;
  } catch (error) {
    console.log("Rompo en CREATEPRODUC", error);
  }
};

//------------------------------------------------------------
//OBTENER CERVEZAS

const cerveza_load = async () => {
  try {
    return await Cervezas.findAll();
  } catch (error) {
    console.log("Rompo en CERVEZA_LOAD ;)", error);
  }
};
module.exports = {
  create_cerveza,
  cerveza_load,
};
