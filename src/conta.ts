export default class Conta {
  private _saldo: number;

  constructor(s: number) {
    this._saldo = s;
  };

  get saldo() {// pegar o saldo
    return this._saldo;
  }

  set saldo(s: number) {// setar o saldo
    this._saldo = s;
  }
  // s é o valor que vem do saldo que eu criei no index.ts
  // this._saldo é o atributo do objeto, para acessar o atributo do objeto eu uso o this 
}
