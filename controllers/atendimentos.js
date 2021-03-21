module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimento e está reaflizando um GET'))
}