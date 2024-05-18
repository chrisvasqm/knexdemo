exports.up = function (knex) {
    return knex.schema.table('products', function (table) {
        table.integer('category_id').unsigned().references('id').inTable('category').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.table('products', function (table) {
        table.dropColumn('category_id');
    });
};
