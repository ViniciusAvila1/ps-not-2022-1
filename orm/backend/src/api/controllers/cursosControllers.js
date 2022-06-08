const Cursos = require('../models/cursosModels')

module.exports = {
    async store(req, res) {
        const curso = await Cursos.create(req.body)
        return res.json(curso)
    },

    async index(req, res) {
        const cursos = await Cursos.findAll();
        return res.json(cursos)
    },

    async indexId(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        const curso = await Cursos.findByPk(codigo_id)
        return res.json(curso)
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cur_descricao } = req.body
        console.log('Parâmetro esperado ' + codigo_id)

        await Cursos.update({
            cur_descricao
        }, {
            where: { id: codigo_id}
        })

        return res.json({message:'Registro atualizado com sucesso'})
    },

    async delete(req, res) {
        const { codigo_id } = req.params
        console.log('Parâmetro esperado ' + codigo_id)

        await Cursos.destroy({
            where: {
                id: codigo_id
            }
        })
        return res.json({message: 'Registro deletado'})
    },
}