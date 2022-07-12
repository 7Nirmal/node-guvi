import express from "express";
import {client} from "../index.js";
import { getAllmovies, getMoviebyId, insertmovies, delMovie } from "./Helper.js";
const router = express.Router();


router.get('/', async function (req, res) {

if(req.query.rating){
req.query.rating = +req.query.rating;
}

const movies = await getAllmovies(req); //toArray - to convert pagination to array
res.send(movies)
})
router.get("/:id",async  function (request, response) {
const {id} = request.params;
//db operation -> db.movies.findone({id})
//console.log(request.params,id);
//const movie = movies.find((mv)=>mv.id===id)

const movie = await getMoviebyId(id) // connecting from mongoDB
movie ? response.send(movie) : response.status(404).send({msg:"movie not found"})
})

router.post("/",async function(request,response) {
const data = request.body;
console.log(data);
const result = await insertmovies(data);
response.send(result);
})
//delete API
router.delete("/:id", async function(request,response) {
const {id} = request.params;
//db operation => db.deleteOne({id});

const delmovie =  await delMovie(id);
delmovie.deletedCount > 0 ? response.send(delmovie) : response.status(404).send({msg:"movie not found"})
})

//Update API

router.put("/:id", async function(request,response){
const {id} = request.params;
const data = request.body;
const edited = await client.db("movies").collection("movies").updateOne({id:id},{$set:data});
response.send(edited) 
})

export const moviesRouter = router;


