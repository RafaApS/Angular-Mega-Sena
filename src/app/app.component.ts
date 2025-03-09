import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CalcSena';

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;
  num6: number = 0;
  num7: number = 0;
  num8: number = 0;
  num9: number = 0;
  num10: number = 0;

  Mensagem: string = '';

  onClickComparar() {
    const nums = [
      this.num1,
      this.num2,
      this.num3,
      this.num4,
      this.num5,
      this.num6,
      this.num7,
      this.num8,
      this.num9,
      this.num10,
    ];

    const filteredNums = nums.filter((num) => num !== 0);

    if (filteredNums.length < 6) {
      this.Mensagem = 'Por favor, insira pelo menos 6 números.';
    } else if (filteredNums.some((num) => num > 60)) {
      this.Mensagem =
        ' Os números não podem ser menores que 1 ou maiores que 60.';
    } else if (new Set(filteredNums).size !== filteredNums.length) {
      this.Mensagem = 'Os números não podem ser iguais.';
    } else {
      const validNumbers = [1, 6, 10, 30, 42, 50];
      const validNums = filteredNums.filter((num) =>
        validNumbers.includes(num)
      );

      if (validNums.length > 0) {
        this.Mensagem = `Você acertou esses números: ${validNums.join(', ')}`;
      } else {
        this.Mensagem = 'Não acertou nenhum número. Boa sorte na próxima!';
      }
    }
  }
}
