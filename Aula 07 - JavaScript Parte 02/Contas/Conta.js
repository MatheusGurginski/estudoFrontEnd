export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;

        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente");
            
        }
    }

    set cliente(novoNome) {
        if (novoNome instanceof Cliente)
            this._cliente = novoNome;
    }

    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this.saldo
    }

    sacar(valor) {
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado); {
            this._saldo -= valorSacado;
            return valorSacado;

        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }


    transferir(valor, Conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}