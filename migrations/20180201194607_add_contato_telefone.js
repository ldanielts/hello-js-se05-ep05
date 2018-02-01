
exports.up = knex => knex.schema.table("contato", function(t) {
    t.text("telefone");
});

exports.down = knex => knex.schema.table("contato", function(t) {
    t.dropColumn("telefone");
});