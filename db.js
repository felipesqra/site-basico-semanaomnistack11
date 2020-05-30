const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./site-basico-semanaomnistack11.db')

db.serialize(function(){
    // criando tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT


        );
    `)

    //inserindo dados na tabela
    // const query = `
    //     INSERT INTO ideas(
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     ) VALUES (?,?,?,?,?);
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "Cursos de Programação",
    //     "estudo",
    //     "a",
    //     "https://google.com", 
    // ]



    // db.run(query, values, function(err){
    //     if(err) return console.log(err)

    //     console.log(this)
    // })

    //consultando os dados
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })

    // //deletando um dado
    // db.run(`DELETE FROM ideas WHERE id =?`, [1], function(err){
    //     if(err) return console.log(err)

    //     console.log("DELETEI", this)
    // })

})


module.exports = db