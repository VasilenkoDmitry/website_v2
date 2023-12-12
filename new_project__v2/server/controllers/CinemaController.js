const {Cinema} =require ('../models/models')
const ApiError = require('../error/ApiError');

class CinemaController{
    async create(req,res){
      const {namecinema, addres, seance_1,seance_2,seance_3} = req.body
      const cinema = await Cinema.create({namecinema, addres, seance_1,seance_2,seance_3})
      return res.json(cinema)
    }

    async getAll(req,res){
      const cinemas = await Cinema.findAll()
      return res.json(cinemas)

    }
  
}

module.exports = new CinemaController()