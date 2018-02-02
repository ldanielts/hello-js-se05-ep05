
exports.up = knex =>  knex.schema.createTable("produto", tb => {
    tb.increments("idproduto")
    tb.string("nameproduto")
})

exports.down = knex => knex.schema.dropTable("produto")
