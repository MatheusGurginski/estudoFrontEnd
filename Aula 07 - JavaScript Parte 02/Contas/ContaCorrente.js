import { Conta } from "./Conta.js";

export class contaCorrente extends Conta {
    static numeroDeContasCorrentes = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        contaCorrente.numeroDeContasCorrentes += 1;

    }


    //sobrescrevendo o método sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);

    }
}

