const express = require('express');
const fs = require('fs');
const app = express ();
//middleware
app.use(express.json());
//constante de mi puerto
const port = 3000;

//listen
app.listen(port,()=>{
    console.log("Server is running on port 3000");
    console.log(port)
});
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/canciones',(req,res) => {
   const songs = fs.readFileSync('./canciones.json', 'utf-8');
   res.json(JSON.parse(songs));
})

app.post('/canciones',(req,res) => {
    const nuevaCancion = req.body;
    const songs = JSON.parse(fs.readFileSync('./canciones.json', 'utf-8'));
    songs.push(nuevaCancion);
    fs.writeFileSync('./canciones.json', JSON.stringify(songs));
    res.status(201).send('Canción agregada exitosamente')
})

app.delete('/canciones/:id',(req,res) => {

    const {id} = req.params;
    const songs = JSON.parse(fs.readFileSync('./canciones.json', 'utf-8'));
    const index = songs.findIndex(cancion => cancion.id == id);
    songs.splice(index,1);
    fs.writeFileSync('./canciones.json', JSON.stringify(songs));
    res.status(200).send('Canción eliminada exitosamente')
})

app.put('/canciones/:id',(req,res) => {
    const {id} = req.params;
    const song = req.body;
    const songs = JSON.parse(fs.readFileSync('./canciones.json', 'utf-8'));
    const index = songs.findIndex(cancion => cancion.id == id);
    songs[index] = song;
    fs.writeFileSync('./canciones.json', JSON.stringify(songs));
    res.status(200).send('Canción actualizada exitosamente')
})



