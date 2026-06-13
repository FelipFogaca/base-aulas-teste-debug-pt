import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe('Testes para Função Somar', () => {

    it('#CT01 - Deve somar dois números positivos 2 e 95, retornar 97', () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    });

    it('#CT02 - Deve somar o primeiro número negativo -5 e o segundo número positivo 10, retornar 5', () => {
        const result = Service.Somar(-5, 10);
        expect(result).toBe(5);
    });

    it('#CT03 - Deve somar o primeiro número positivo 10 e o segundo número negativo -5, retornar 5', () => {
        const result = Service.Somar(10, -5);
        expect(result).toBe(5);
    });

    it('#CT04 - Deve somar dois números negativos, primeiro -5 e o segundo -10, retornar -15', () => {
        const result = Service.Somar(-5, -10);
        expect(result).toBe(-15);
    });

    it('#CT05 - Deve somar dois números posistivos decimais 0.5 e 1.7, retornar 2.2', () => {
        const result = Service.Somar(0.5, 1.7);
        expect(result).toBe(2.2);
    });

    it('#CT06 - Deve somar um número e uma letra, com o primeiro parâmetro "a" e o segundo 1, retornar erro', () => {
        const result = () => Service.Somar('a', 1);
        expect(result).toThrow('Informe somente números');
    });

    it('#CT07 - Deve somar um número e uma letra, com o primeiro parâmetro 1 e o segundo "a", retornar erro', () => {
        const result = () => Service.Somar(1, 'a');
        expect(result).toThrow('Informe somente números');
    });

    it('#CT08 - Deve somar o primeiro parâmetro 0 e o segundo parâmetro 1, retornar 1', () => {
        const result = Service.Somar(0, 1);
        expect(result).toBe(1);
    });

    it('#CT09 - Deve somar o primeiro parâmetro 1 e o segundo parâmetro 0, retornar 1', () => {
        const result = Service.Somar(1, 0);
        expect(result).toBe(1);
    });

    it('#CT10 - Deve retornar erro quando o primeiro parâmetro estiver vazio', () => {
        expect(() => Service.Somar(" ", 1))
            .toThrow('Envie todos os campos!');
    });

    it('#CT11 - Deve retornar erro quando o segundo parâmetro estiver vazio', () => {
        expect(() => Service.Somar(1, " "))
            .toThrow('Envie todos os campos!');
    });

    it('#CT12 - Deve retornar erro quando ambos os parâmetros estiverem vazios', () => {
        expect(() => Service.Somar(" ", " "))
            .toThrow('Envie todos os campos!');
    });

})


describe("Teste para função Subtrair", () => {

    it('#CT13 - Deve subtrair dois números positivos, primeiro parâmetro 2 e segundo parâmetro 95, retornar -93', () => {
        const result = Service.Subtrair(2, 95);
        expect(result).toBe(-93);
    });

    it('#CT14 - Deve subtrair dois números, primeiro parâmetro -5 e segundo parâmetro 10, retornar -15', () => {
        const result = Service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    });

    it('#CT15 - Deve subtrair dois números, primeiro parâmetro 10 e segundo parâmetro -5, retornar 15', () => {
        const result = Service.Subtrair(10, -5);
        expect(result).toBe(15);
    });

    it('#CT16 - Deve subtrair dois números negativos, primeiro parâmetro -5 e segundo parâmetro -10, retornar 5', () => {
        const result = Service.Subtrair(-5, -10);
        expect(result).toBe(5);
    });

    it('#CT17 - Deve subtrair dois números positivos decimais, primeiro parâmetro 0.5 e segundo parâmetro 1.7, retornar -1.2', () => {
        const result = Service.Subtrair(0.5, 1.7);
        expect(result).toBe(-1.2);
    });

    it('#CT18 - Deve subtrair um número e uma letra, com o primeiro parâmetro "a" e o segundo 1, retornar erro', () => {
        const result = () => Service.Subtrair('a', 1);
    expect(result).toThrow('Informe somente números');
    });

    it('#CT19 - Deve subtrair um número e uma letra, com o primeiro parâmetro 1 e o segundo "a", retornar erro', () => {
        const result = () => Service.Subtrair(1, 'a');
        expect(result).toThrow('Informe somente números');
    });

    it('#CT20 - Deve subtrair dois números, primeiro parâmetro 0 e segundo parâmetro 1, retornar -1', () => {
        const result = Service.Subtrair(0, 1);
        expect(result).toBe(-1);
    });

    it('#CT21 - Deve subtrair dois números, primeiro parâmetro 1 e segundo parâmetro 0, retornar 1', () => {
        const result = Service.Subtrair(1, 0);
        expect(result).toBe(1);
    });

    it('#CT22 - Deve retornar erro quando o primeiro parâmetro estiver vazio', () => {
        expect(() => Service.Subtrair(" ", 1))
            .toThrow('Envie todos os campos!');
    });

    it('#CT23 - Deve retornar erro quando o segundo parâmetro estiver vazio', () => {
        expect(() => Service.Subtrair(1, " "))
            .toThrow('Envie todos os campos!');
    });

    it('#CT24 - Deve retornar erro quando ambos os parâmetros estiverem vazios', () => {
        expect(() => Service.Subtrair(" ", " "))
            .toThrow('Envie todos os campos!');
    });

})

describe("Teste para função a Multiplicação", () => {

    it('#CT25 - Deve multiplicar dois números positivos, primeiro parâmetro 2 e segundo parâmetro 95, retornar 190', () => {
        const result = Service.Multiplicar(2, 95);
        expect(result).toBe(190);
    });

    it('#CT26 - Deve multiplicar dois números, primeiro parâmetro -5 e segundo parâmetro 10, retornar -50', () => {
        const result = Service.Multiplicar(-5, 10);
        expect(result).toBe(-50);
    });

    it('#CT27 - Deve multiplicar dois números, primeiro parâmetro 10 e segundo parâmetro -5, retornar -50', () => {
        const result = Service.Multiplicar(10, -5);
        expect(result).toBe(-50);
    });

    it('#CT28 - Deve multiplicar dois números negativos, primeiro parâmetro -5 e segundo parâmetro -10, retornar 50', () => {
        const result = Service.Multiplicar(-5, -10);
        expect(result).toBe(50);
    });

    it('#CT29 - Deve multiplicar dois números decimais, primeiro parâmetro 0.5 e segundo parâmetro 1.7, retornar 0.85', () => {
        const result = Service.Multiplicar(0.5, 1.7);
        expect(result).toBe(0.85);
    });

    it('#CT30 - Deve multiplicar um número e uma letra, com o primeiro parâmetro "a" e o segundo 1, retornar erro', () => {
        const result = () => Service.Multiplicar('a', 1);
        expect(result).toThrow('Informe somente números');
    });

    it('#CT31 - Deve multiplicar um número e uma letra, com o primeiro parâmetro 1 e o segundo "a", retornar erro', () => {
        const result = () => Service.Multiplicar(1, 'a');
        expect(result).toThrow('Informe somente números');
    });

    it('#CT32 - Deve multiplicar dois números, primeiro parâmetro 0 e segundo parâmetro 1, retornar 0', () => {
        const result = Service.Multiplicar(0, 1);
        expect(result).toBe(0);
    });

    it('#CT33 - Deve multiplicar dois números, primeiro parâmetro 1 e segundo parâmetro 0, retornar 0', () => {
        const result = Service.Multiplicar(1, 0);
        expect(result).toBe(0);
    });

    it('#CT34 - Deve retornar erro quando o primeiro parâmetro estiver vazio', () => {
        expect(() => Service.Multiplicar(" ", 1))
            .toThrow('Envie todos os campos!');
    });

    it('#CT35 - Deve retornar erro quando o segundo parâmetro estiver vazio', () => {
        expect(() => Service.Multiplicar(1, " "))
            .toThrow('Envie todos os campos!');
    });

    it('#CT36 - Deve retornar erro quando ambos os parâmetros estiverem vazios', () => {
        expect(() => Service.Multiplicar(" ", " "))
            .toThrow('Envie todos os campos!');
    });
})

describe("Teste para função a Divisão", () => {

    it('#CT37 - Deve dividir dois números positivos, primeiro parâmetro 7 e segundo parâmetro 2, retornar 3.5', () => {
        const result = Service.Dividir(7, 2);
        expect(result).toBe(3.5);
    });

    it('#CT38 - Deve dividir dois números, sendo o primeiro parâmetro -5 e segundo parâmetro 10, retornar -0.5', () => {
        const result = Service.Dividir(-5, 10);
        expect(result).toBe(-0.5);
    });

    it('#CT39 - Deve dividir dois números, sendo o primeiro parâmetro 10 e segundo parâmetro -5, retornar -2', () => {
        const result = Service.Dividir(10, -5);
        expect(result).toBe(-2);
    });

    it('#CT40 - Deve dividir dois números, sendo o primeiro parâmnetro -5 e segundo parâmetro -10, retornar 0.5', () => {
        const result = Service.Dividir(-5, -10);
        expect(result).toBe(0.5);
    });

    it('#CT41 - Deve dividir dois números positivos decimais, sendo o primeiro parâmetro 0.5 e segundo parâmetro 1.7, retornar 0.29411764705882354', () => {
        const result = Service.Dividir(0.5, 1.7);
        expect(result).toBe(0.29411764705882354);
    });

    it('#CT42 - Deve dividir um número e uma letra, sendo o primeiro parâmetro "a" e o segundo 1, retornar erro', () => {
        const result = () => Service.Dividir('a', 1);
        expect(result).toThrow('Informe somente números');
    });

    it('#CT43 - Deve dividir um número e uma letra, sendo o primeiro parâmetro 1 e o segundo "a", retornar erro', () => {
        const result = () => Service.Dividir(1, 'a');
        expect(result).toThrow('Informe somente números');
    });

    it('#CT44 - Deve dividir dois números, sendo o primeiro parâmetro 0 e o segundo 1, retornar 0', () => {
        const result = Service.Dividir(0, 1);
        expect(result).toBe(0);
    });

    it('#CT45 - Deve dividir dois números, sendo o primeiro parâmetro 1 e o segundo 0, retornar erro', () => {
        const result = () => Service.Dividir(1, 0);
        expect(result).toThrow('Não é possível dividir por zero');
    });

    it('#CT46 - Deve retornar erro quando o primeiro parâmetro estiver vazio', () => {
        expect(() => Service.Dividir(" ", 1))
            .toThrow('Envie todos os campos!');
    });

    it('#CT47 - Deve retornar erro quando o segundo parâmetro estiver vazio', () => {
        expect(() => Service.Dividir(1, " "))
            .toThrow('Envie todos os campos!');
    });

    it('#CT48 - Deve retornar erro quando ambos os parâmetros estiverem vazios', () => {
        expect(() => Service.Dividir(" ", " "))
            .toThrow('Envie todos os campos!');
    });
})

describe("Teste para função Raiz Quadrada", () => {

    it('#CT49 - Deve retornar erro quando o parâmetro estiver vazio', () => {
        expect(() => Service.RaizQuadrada(" "))
            .toThrow('Envie todos os campos!');
    });

    it('#CT50 - Deve acusar erro ao enviar um parâmetro negativo, por exemplo, -2', () => {
        expect(() => Service.RaizQuadrada(-2))
            .toThrow('Informe somente números positivos!');
    });

    it('#CT51 - Chamar a função e enviar como parâmetro o número 0, o resultado deve ser 0', () => {
        const result = Service.RaizQuadrada(0);
        expect(result).toBe(0);
    });

    it('#CT52 - Chamar a função e enviar como parâmetro uma letra, "a", deve retornar erro', () => {
        expect(() => Service.RaizQuadrada("a"))
            .toThrow('Informe somente números');
    });

    it('#CT53 - Chamar a função e enviar como parâmetro o número decimal, 0.16, o resultado deve ser 0.4', () => {
        const result = Service.RaizQuadrada(0.16);
        expect(result).toBe(0.4);
    });

    it('#CT54 - Chamar a função e enviar como parâmetro o número 4, o resultado deve ser 2', () => {
        const result = Service.RaizQuadrada(4);
        expect(result).toBe(2);
    });
})

describe("Teste para função Potência", () => {

    it('#CT55 - Deve retornar erro quando ambos os parâmetros estiverem vazios', () => {
        expect(() => Service.Potencia(" ", " "))
            .toThrow('Envie todos os campos!');
    });

     it('#CT56 - Deve retornar erro quando o primeiro parâmetro estiver vazio', () => {
        expect(() => Service.Potencia(" ", 1))
            .toThrow('Envie todos os campos!');
    });

     it('#CT57 - Deve retornar erro quando o segundo parâmetro estiver vazio', () => {
        expect(() => Service.Potencia(1, " "))
            .toThrow('Envie todos os campos!');
     });

     it('#CT58 - Deve retornar erro quando o primeiro parâmetro for uma letra e o segundo for um número', () => {
        const result = () => Service.Potencia('a', 1);
        expect(result).toThrow('Informe somente números');
    });

     it('#CT59 - Deve retornar erro quando o primeiro parâmetro for um número e o segundo for uma letra', () => {
        const result = () => Service.Potencia(1, 'a');
        expect(result).toThrow('Informe somente números');
    });

     it('#CT60 - Ao realizar a potência de dois números, sendo o primeiro parâmetro 2 e o segundo 2, o resultado deve ser 4', () => {
        const result = Service.Potencia(2, 2);
        expect(result).toBe(4);
    });

     it('#CT61 - Ao realizar a potência de dois números, sendo o primeiro parâmetro 2 e o segundo -2, o resultado deve ser 0.25', () => {
        const result = Service.Potencia(2, -2);
        expect(result).toBe(0.25);
    });

     it('#CT62 - Ao realizar a potência de dois números, sendo o primeiro parâmetro -2 e o segundo 2, o resultado deve ser 4', () => {
        const result = Service.Potencia(-2, 2);
        expect(result).toBe(4);
    });

     it('#CT63 - Ao realizar a potência de dois números, sendo o primeiro parâmetro 2 e o segundo 0, o resultado deve ser 1', () => {
        const result = Service.Potencia(2, 0);
        expect(result).toBe(1);
    });

     it('#CT64 - Ao realizar a potência de dois números, sendo o primeiro parâmetro 0 e o segundo 2, o resultado deve ser 0', () => {
        const result = Service.Potencia(0, 2);
        expect(result).toBe(0);
    });

})