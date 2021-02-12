const fs = require("fs");

const electron = require('electron'); 
const dir = 'nettoyage';
const brw = 'C:\Users\youcode\AppData\Local\Mozilla\Firefox\Profiles';
var historique = [];
const getSize = require('get-folder-size');
const btnHistorique = document.getElementById('historique');

const btnDelete = document.getElementById('nettoyer');
const btnAnalyser = document.getElementById('analyser');

btnDelete.addEventListener('click', ()=>{
    fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw err;

        }
        alert(`${dir} est terminer!`);
    });
    fs.rmdir(brw, { recursive: true }, (err) => {
        if (err) {
            throw err;

        }
        alert( `${brw} est nettoyer!`);
    });

})



btnAnalyser.addEventListener('click', ()=>{
    fs.readdir(dir, (err, files) => {

        // alert('le nembre des fichies est ' + files.length);
        historique.push(files.length)
        

    });
    getSize(dir, (err, size) => {
        if (err) { throw err; }
       
        alert( " la taille de votre dossier est " + size + ' bytes');
        alert((size / 1024 / 1024).toFixed(2) + ' MB');
        historique.push(size);
      });
    // fs.stat(dir, (err, file) => {
    //     if (err) {
    //       alert(err)
    //     } else {
    //       alert('size de dossier est ' + file.size)
    //     }
    //   })

});

btnHistorique.addEventListener('click', ()=>{

    let click = historique.join(" / ");
    alert(click.toString())







});

