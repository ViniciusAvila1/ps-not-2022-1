const Telefones = require('../models/telefonesModels')

module.exports = {
    async store(req, res) {
        const telefone = await Telefones.create(req.body)
        return res.json(telefone)
    },

    async index(req, res) {
        const telefones = await Telefones.findAll();
        return res.json(telefones)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const telefone = await Telefones.findByPk(codigo_id)
        return res.json(telefone)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { tel_proprietario, tel_ddd, tel_numero, tel_tipo } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Telefones.update({
            tel_proprietario, 
            tel_ddd, 
            tel_numero, 
            tel_tipo
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Telefones.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
}