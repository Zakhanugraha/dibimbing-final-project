import express from "express"
import mongoose from "mongoose"
import Movies from "./dbMovie.js"
import Credits from "./dbCredit.js"
import Cors from "cors"

// app config
// express() untuk membuat aplikasi express
const app = express();
const port = process.env.PORT || 9000;

// buat liat urlnya, ke web mongodb, pilih databases di sidebar lalu klik connect, connect tu application
const connection_url = "mongodb+srv://admin:6benynRdrwIObrRG@cluster0.d4mkq.mongodb.net/movies?retryWrites=true&w=majority"

// middleware, 
// agar bisa memproses json
app.use(express.json())
// cors digunakan untuk security
app.use(Cors());

// membuat koneksi ke database, 
// mongoose.connect(param1, param2)
// param1 = urldatabase
// param2 = options dalam bentuk objek
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// membuat route untuk /movies/cast/:id, :id bisa apa saja, 
app.get("/movies/cast/:id",async (req,res)=>{
    // menyimpan :id dari url ke variabel
    const id = req.params.id;

    // mengambill data dari collection credits dimana id sama dengan id dari url
    let movie = await Credits.findOne({ id: id }).exec();

    // jika tidak ada data yang ditemukan kirim pesan error
    if(movie == null)
    res.status(201).send({"success":false,"status_code":34,"status_message":"The resource you requested could not be found."})
    // jika ada kirim data yang ditemukan
    else
    res.status(201).send(movie)
})

// membuat route untuk /movies/get/:id
app.get("/movies/get/:id",async (req,res)=>{
    // menyimpan :id dari url ke variabel
    const id = req.params.id;

    // mengambill data dari collection movies dimana id sama dengan id dari url
    let movie = await Movies.findOne({ id: id }).exec();

    // jika tidak ada data yang ditemukan kirim pesan error
    if(movie == null)
        res.status(201).send({"success":false,"status_code":34,"status_message":"The resource you requested could not be found."})
    // jika ada kirim data yang ditemukan
    else
        res.status(201).send(movie)
})

// membuat route untuk /movies/search
app.get("/movies/search",async(req,res)=>{
    // membuat options untuk dipakai di fungsi paginate
    const options = {
        // req.query.page diambil dari url, misal urlnya /movies/search?key=luca&page=1 maka nilainya 1
        // namun jika kosong, nilai defaultnya 1
        page: req.query.page || 1,
        // per page kita limit data menjadi 20 per page
        limit: 20,
        // sortir data berdasarkan popularitas, descending
        sort: {popularity : -1},
        collation: {
            locale: 'en',
        },
    };

    // req.query.key diambil dari url juga, misal
    const key = req.query.key;


    // mengambill data dari collection movies dimana title cocok dengan keyword pencarian, 
    // disini key dijadikan regex lalu di apply ke title

    // movies.paginate(param1, param2, param3)
    // param1 = kondisi dalam bentuk objek
    // param2 = options dalam bentuk objek
    // param3 = callback, fungsi yang akan jalan setelah proses selesai
    Movies.paginate({ title: new RegExp(key, "i") }, options, function (err, result) {
        // mengformat data sebelum di kirim ke app reactnya, disesuakan dengan api themoviedb
        let data = {
            page : options.page,
            results : result.docs,
            total_pages : result.totalPages,
            total_results : result.totalDocs
        }

        // result kosong, tampilkan pesan error
        if(data.results.length < 1) 
            res.send({"errors":[`page must be less than or equal to ${result.totalPages}`]})
        // jika tidak kosong, kirim data yang sudah diformat
        else 
            res.send(data)
    })

})

// membuat route untuk /movies/popular
app.get("/movies/popular",(req,res)=>{
    // membuat options untuk dipakai di fungsi paginate
    const options = {
        // req.query.page diambil dari url, misal urlnya /movies/popular?page=1 maka nilainya 1
        // namun jika kosong, nilai defaultnya 1
        page: req.query.page || 1,
        // per page kita limit data menjadi 20 per page
        limit: 20,
        // sortir data berdasarkan popularitas, descending
        sort: {popularity : -1},
        collation: {
            locale: 'en',
        },
    };

    // mengambill data dari collection movies, 
    // karena tidak ada kondisi yang ingin kita cari maka parameter pertama kosong 
    Movies.paginate({}, options, function (err, result) {
        let data = {
            page : options.page,
            results : result.docs,
            total_pages : result.totalPages,
            total_results : result.totalDocs
        }
        // result kosong, tampilkan pesan error
        if(data.results.length < 1) 
            res.send({"errors":[`page must be less than or equal to ${result.totalPages}`]})
        // jika tidak kosong, kirim data yang sudah diformat
        else 
            res.send(data)
    })
})


// untuk mengserve api, port adalah variabel yang kita buat di atas tadi (9000)
app.listen(port,()=>{
    console.log(`Listening on port:${port}`)
});
