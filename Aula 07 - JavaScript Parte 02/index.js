import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./Contas/ContaCorrente.js";
import { contaPoupança } from "./Contas/ContaPoupança.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { sistemaAutenticacao } from "./SistemaAutenticacao.js";
import {Convidados} from "./nomes.js";

//const cliente1 = new Cliente("Matheus", "08849710909");
//const ContaCorrente1 = new contaCorrente(cliente1, "001", );
//ContaCorrente1.depositar(500);
//ContaCorrente1.sacar(200);
//
//const contaPoupança1 = new contaPoupança("1000", cliente1, "001",);
//contaPoupança1.sacar(100);

//console.log(contaPoupança1);
//console.log(ContaCorrente1);
//console.log("Número de Contas Correntes:", contaCorrente.numeroDeContasCorrentes)
//console.log("Número de Contas Poupanças", contaPoupança.numeroDeContasPoupança);


const diretor = new Diretor("João", "123456789", 10000);
const gerente = new Gerente("Vitor", "11122279", 5000);

diretor.cadastrarSenha ("12345");

const estarLogado = sistemaAutenticacao.login (diretor, 12345);
console.log(estarLogado);

