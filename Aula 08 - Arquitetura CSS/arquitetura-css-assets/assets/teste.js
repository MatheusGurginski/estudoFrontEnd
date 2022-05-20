class teste{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome
    
    }
}

const t1 = new teste("matheus", "volpato");

console.log(t1.nomeCompleto);

class array{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const array1 = new array('1', '2', '3');

console.log(array1);