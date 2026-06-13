class Service {
    Somar(num1, num2) {

        if (
            String(num1).trim() === "" ||
            String(num2).trim() === ""
        ) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }

        return Number(num1) + Number(num2);
    }

    Subtrair(num1, num2) {
        if (
            String(num1).trim() === "" ||
            String(num2).trim() === ""
        ) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (
            String(num1).trim() === "" ||
            String(num2).trim() === ""
        ) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (
            String(num1).trim() === "" ||
            String(num2).trim() === ""
        ) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }

        if (Number(num2) === 0) {
            throw new Error("Não é possível dividir por zero");
        }

        return Number(num1) / Number(num2);
    }

    RaizQuadrada(num) {
        if (String(num).trim() === "") {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num)) {
            throw new Error("Informe somente números");
        }

        if (Number(num) < 0) {
            throw new Error("Informe somente números positivos!");
        }

        return Math.sqrt(Number(num));
    }

    Potencia(num1, num2) {
        if (
            String(num1).trim() === "" ||
            String(num2).trim() === ""
        ) {
            throw new Error("Envie todos os campos!");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Informe somente números");
        }

        return Math.pow(Number(num1), Number(num2));
    }

}

export default new Service()