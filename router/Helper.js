import { client } from "../index.js";
import { ObjectId } from "mongodb";

export function delMovie(id) {
    return client.db("movies").collection("movies").deleteOne({ id: id });
}
export function insertmovies(data) {
    return client.db("movies").collection("movies").insertMany(data);
}
export function getMoviebyId(id) {
    return client.db("movies").collection("movies").findOne({ _id: ObjectId(id) });
}
export async function getAllmovies(req) {
    return await client.db("movies").collection("movies").find(req.query).toArray();
}
