<<<<<<< HEAD
const Categorias = require('../models/categoriasModels')

module.exports = {
    async store(req, res) {
        const categoria = await Categorias.create(req.body)
        return res.json(categoria)
    },

    async index(req, res) {
        const categorias = await Categorias.findAll();
        return res.json(categorias)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const categoria = await Categorias.findByPk(codigo_id)
        return res.json(categoria)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cat_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Categorias.update({
            cat_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Categorias.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
=======
const Categorias = require('../models/categoriasModels')

module.exports = {
    async store(req, res) {
        const categoria = await Categorias.create(req.body)
        return res.json(categoria)
    },

    async index(req, res) {
        const categorias = await Categorias.findAll();
        return res.json(categorias)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const categoria = await Categorias.findByPk(codigo_id)
        return res.json(categoria)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cat_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Categorias.update({
            cat_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Categorias.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
>>>>>>> 3cf89df4c684e2e335dc1ad467e24191dc014868
}