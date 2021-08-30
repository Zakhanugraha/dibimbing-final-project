import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

// dalam mongodb, ada database, collection, dan document
//  collection ibaratnya seperti table pada mysql,
//  sedangkan document seperti record" dalam tabel
//  data pada document disimpan dalam format sepert JSON, 
//  per document menyimpan 1 object json

// membuat schema untuk menentukan format isi dari tiap document, seperti membuat struktur tabel di mysql
const movieSchema = mongoose.Schema({
    // nama : tipedata
    // nama bebas 
    // tipedata ada berbagai macam, bisa dilihat di https://docs.mongodb.com/manual/reference/bson-types/
    adult: Boolean,
    backdrop_path : String,
    genre_ids : [Number],
    id : Number,
    original_language: String,
    original_title: String,
    overview : String,
    popularity: Number,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
})

// menggunakan plugin mongoosePaginate agar bisa lebih mudah paginasi data (contoh ada 1000 data, bisa dipaginasi menjadi 50 page data, tiap page ada 200 data)
movieSchema.plugin(mongoosePaginate);

// membuat model, model digunakan untuk membaca dan membuat data pada database
// mongoose.model(param1, param2)
// param1 = nama collection,
// param2 = schema yang sudah dibuat,
export default mongoose.model('movies', movieSchema);