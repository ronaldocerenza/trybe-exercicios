// Pilares da POO

// Abstração: é a capacidade de abstrair um objeto do mundo real e transformá-lo em um objeto de software
// Encapsulamento: é a capacidade de esconder os detalhes de implementação de um objeto
// Herança: é a capacidade de herdar atributos e métodos de uma classe pai
// Polimorfismo: é a capacidade de redefinir métodos herdados de uma classe pai

class Email {
  // criação da classe Email
  private _from: string;
  // atributo privado _from
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    // o constructor é um método especial que é executado no momento da criação do objeto
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    // this é uma referência ao objeto que está sendo criado
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    // set é um método especial que permite que o atributo seja alterado
    if (newSubject.length <= 40) this._subject = newSubject;
    // o atributo só será alterado se o novo valor tiver menos de 40 caracteres
  }

  get subject(): string {
    // get é um método especial que permite que o atributo seja acessado
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    // podemos criar métodos dentro da classe
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
  constructor(private mailList: Email[] = []) { }
  // o atributo `mailList` é um array de objetos do tipo `Email`

  get all(): Email[] { return this.mailList; }
  // get é um método especial que permite que o atributo seja acessado

  getEmailsBySender(mailAddress: string): Email[] {
    // getEmailsBySender é um método que retorna um array de objetos do tipo `Email`
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getEmailsTo(mailAddress: string): Email[] {
    // getEmailsTo é um método que retorna um array de objetos do tipo `Email`
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    // getEmailsBySubject é um método que retorna um array de objetos do tipo `Email`
    return this.mailList
      .filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  addEmail(newMail: Email): void { this.mailList.push(newMail); }
  // addEmail é um método que não retorna nada, mas adiciona um objeto do tipo `Email` ao array `mailList`

  removeEmail(mailToRemove: Email): void {
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}