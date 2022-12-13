const axios = require('axios').default
const fs = require('fs');



    const listaItens = (async()=>{
        const { data } = await axios(`https://api.kleiloes.com.br/tipo-bem/ativos`)
    
        fs.writeFile('lista.json', JSON.stringify(data,null, 2),err =>{
            if(err) throw new Error('algo está errado')
            console.log('tudo certo')
        })
    
    })();

