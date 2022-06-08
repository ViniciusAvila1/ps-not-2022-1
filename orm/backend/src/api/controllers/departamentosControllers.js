const Departamentos = require('../models/departamentosModels')

module.exports = {
    async store(req, res) {
        const departamento = await Departamentos.create(req.body)
        return res.json(departamento)
    },

    async index(req, res) {
        const departamentos = await Departamentos.findAll();
        return res.json(departamentos)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const departamento = await Departamentos.findByPk(codigo_id)
        return res.json(departamento)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { dep_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Departamentos.update({
            dep_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Departamentos.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },

}