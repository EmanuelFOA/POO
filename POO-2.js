//numero 2
var veiculos = /** @class */ (function () {
    function veiculos(modelo, marca, ano, valorlocacao, qtd) {
        this._modelo = modelo;
        this._marca = marca;
        this._ano = ano;
        this._valorlocacao = valorlocacao;
        this._qtd = qtd;
    }
    Object.defineProperty(veiculos.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            validadata(modelo, "modelo");
            if (modelo === "")
                throw new Error("Por favor preencha com um modelo");
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            validadata(marca, "marca");
            if (marca === "")
                throw new Error("Por favor preencha com uma modelo");
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            validadata(ano, "ano");
            if (ano === 0)
                throw new Error("Por favor preencha com um ano");
            this._marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "valorlocaca", {
        get: function () {
            return this._valorlocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "qtdo", {
        get: function () {
            return this._qtd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "valorlocacao", {
        set: function (valorlocacao) {
            validadata(valorlocacao, "valorlocacao");
            if (valorlocacao === 0)
                throw new Error("Por favor preencha com um ano");
            this._valorlocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(veiculos.prototype, "qtd", {
        set: function (qtd) {
            validadata(qtd, "qtd");
            if (qtd === 0)
                throw new Error("Por favor preencha com o dia correro");
            this._qtd;
        },
        enumerable: false,
        configurable: true
    });
    veiculos.prototype.trip = function (dias, valorlocaca) {
        return dias * valorlocaca;
    };
    return veiculos;
}());
function validadata(data, mensagem) {
    if (data == "" || data <= 0) {
        throw new Error('${menssage} invalido.');
    }
}
var newcarro = new veiculos("compass", "ford", 2018, 9000, 4);
try {
    newcarro.modelo = "compass";
    newcarro.marca = "ford";
    newcarro.ano = 2018;
    newcarro.valorlocacao = 9000;
    newcarro.qtd = 4;
    console.log(newcarro.modelo);
    console.log(newcarro.marca);
    console.log(newcarro.ano);
    console.log(newcarro.valorlocaca);
    console.log(newcarro.qtd);
    console.log(newcarro.trip(newcarro.qtd, newcarro.valorlocacao));
}
catch (erro) {
    console.log(erro.mensagem);
}
console.log(newcarro.trip(newcarro.qtd, newcarro.valorlocaca));
