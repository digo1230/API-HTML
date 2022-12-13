const express = require ('express')
const app = express()

app.use(express.static(__dirname + '/'))

app.get('/', function(req,res){
    res.render('./index')
})    

app.listen(22222, function(){
    console.log('server iniciando')
})