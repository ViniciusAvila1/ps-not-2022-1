const Candidatos = require('../models/candidatosModels')

module.exports = {
    async store(req, res) {
        const candidato = await Candidatos.create(req.body)
        return res.json(candidato)
    },

    async index(req, res) {
        const candidatos = await Candidatos.findAll();
        return res.json(candidatos)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const candidato = await Candidatos.findByPk(codigo_id)
        return res.json(candidato)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { can_nome, can_apelido, can_sexo, can_partido } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Candidatos.update({
            can_nome,
            can_apelido,
            can_sexo,
            can_partido
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Candidatos.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
}