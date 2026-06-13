import Service from "../services/exercicios.js"

class Controller {
    Somar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Somar(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }
    }

    Subtrair(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Subtrair(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }
    }

    Multiplicar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Multiplicar(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }
    }

    Dividir(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Dividir(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }

    }

    RaizQuadrada(req, res) {
        try {
            const { num } = req.body
            const resultado = Service.RaizQuadrada(num)
            
            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }
    }

    Potencia(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Potencia(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: error.message })
        }
    }
}


export default new Controller()