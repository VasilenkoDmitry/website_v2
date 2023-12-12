const uuid = require('uuid')
const path = require('path')
const {Movie} =require ('../models/models')
const ApiError = require('../error/ApiError');


class MovieController{
    async create(req,res, next){
      try{
      
      const {namemovie,defaultprice} = req.body
      const{img} = req.files
      let fileName = uuid.v4()+ ".jpg"
      img.mv(path.resolve(__dirname, '..','static',fileName))
      const movie = await Movie.create({namemovie,defaultprice,img: fileName})
      return res.json(movie) 
      }
      catch(e){
        next(ApiError.badRequest(e.message))
      }    
    }

    async getAll(req,res){
        const movies = await Movie.findAll()
        return res.json(movies)
    }
  
}

module.exports = new MovieController()