const { Router } = require("express");
const {
  create_cerveza,
  cerveza_load,
  preload_cervezas,
} = require("../utils/cervezasutils");
const { Cervezas } = require("../db");

const router = Router();

//-------------------------------------------------------------
//POST CERVEAZAS

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // const data_cervezas = await Cervezas.findAll();

    if (!data) {
      return res.status(400).send("Faltan campos");
    } else {
      create_cerveza(data);
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log("Rompo en routerPOOST", error);
  }
});

//------------------------------------------------------------------------
//GET CERVEZAS

router.get("/", async (req, res) => {
  // let { name } = req.query;
  try {
    const data = await Cervezas.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: "No se encontró sub categoria" });
  }
});

//------------------------------------------------------------------------
// GET/cervezas/:id

router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    if (id) {
      let data = await Cervezas.findByPk(id);

      data
        ? res.status(200).send(data)
        : res.status(404).send("No hay cervezas con ese id");
    }
  } catch (error) {
    console.log("Error en ruta getCERVEZASID", error);
  }
});

//-------------------------------------------------------------------------
//PUT Cervezas

router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let edit = req.body;

    if (id) {
      let data = await Cervezas.update(edit, { where: { id } });
      return res.status(200).send("Cerveza editada con exito");
    } else {
      return res.status(400).send("No se pudo editar la Cerveza");
    }
  } catch (error) {
    console.log("EL error esta en putCERVEZAS", error);
  }
});

module.exports = router;
