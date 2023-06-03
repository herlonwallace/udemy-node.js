const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // Uma Categoria tem muitos artigos
Article.belongsTo(Category); // Um Artigo pertence a uma categoria

//Força a criação da tabela no banco de dado, uma vez criado remove
//Article.sync({ force: true })

module.exports = Article;