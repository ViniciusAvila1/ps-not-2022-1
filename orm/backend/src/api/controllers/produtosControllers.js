const Produtos = require('../models/produtosModels')

module.exports = {
    async store(req, res) {
        const produto = await Produtos.create(req.body)
        return res.json(produto)
    },

    async index(req, res) {
        const produtos = await Produtos.findAll();
        return res.json(produtos)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const produto = await Produtos.findByPk(codigo_id)
        return res.json(produto)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { pro_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Produtos.update({
            pro_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Produtos.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
}