import {Conta} from "./Conta.js";

export class contaPoupança extends Conta {
static numeroDeContasPoupança =0;
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia);
        contaPoupança.numeroDeContasPoupança += 1;
    }

    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}