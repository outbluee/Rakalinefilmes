const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get ('/', (req,res)=>{
    console.log("entrou aqui")
    res.sendFile(path.join(__dirname, '../index.html'));

});

app.use(express.static(path.join(__dirname, '../imagens')));

    app.listen (PORT, ()=>{
    console.log(`App online na porta ${PORT}`);
})




//const express = require('express');
//const server = express();
//const app = (express,json())
//const PORT = 3000

//app.get('/', (req, res)=>{
  //console.log("ENTROU AQUI")
  //res.send(index.html)
//})

//app.listen (PORT, () =>{
  //console.log(`App online na porta ${PORT}`)
//})









//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
