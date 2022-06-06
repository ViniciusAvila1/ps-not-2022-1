const Cidades = require('../models/cidadesModels')

module.exports = {
    async store(req, res) {
        const cidade = await Cidades.create(req.body)
        return res.json(cidade)
    },

    async index(req, res) {
        const cidades = await Cidades.findAll();
        return res.json(cidades)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const cidade = await Cidades.findByPk(codigo_id)
        return res.json(cidade)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cid_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Cidades.update({
            cid_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Cidades.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
}