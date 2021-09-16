//Numero 3
var fatura = /** @class */ (function () {
    function fatura(numero, descricao, quantia, preco) {
        this._numero = numero;
        this._descricao = descricao;
        this._quantia = quantia;
        this._preco = preco;
    }
    fatura.prototype.valorfatura = function () {
        return this._quantia * this._preco;
    };
    return fatura;
}());
var fatur = new fatura(20000, 'Marcenaria', 150, 88);
var valorfatura = fatur.valorfatura();
console.log(valorfatura);
console.log(fatur);
