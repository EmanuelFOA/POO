//Numero 3
class fatura{
    private _numero:number;
    private _descricao:string;
    private _quantia:number;
    private _preco:number;

    constructor(numero:number, descricao:string,quantia:number,preco:number){
        this._numero=numero;
        this._descricao=descricao;
        this._quantia=quantia;
        this._preco=preco;
    }


    public valorfatura (){
        return this._quantia * this._preco;
    }
}

const fatur = new fatura(20000, 'Marcenaria', 150,88)
const valorfatura = fatur.valorfatura()


console.log(valorfatura)
console.log(fatur)