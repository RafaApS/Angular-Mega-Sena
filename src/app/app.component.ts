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

  num1s: number = 0;
  num2s: number = 0;
  num3s: number = 0;
  num4s: number = 0;
  num5s: number = 0;
  num6s: number = 0;

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

    const sorteados = [
      this.num1s,
      this.num2s,
      this.num3s,
      this.num4s,
      this.num5s,
      this.num6s,
    ];

    const numsInseridos = nums.filter((num) => num !== 0);
    const numsSorteados = sorteados.filter((sorte) => sorte !== 0);

    if (numsInseridos.length < 6) {
      this.Mensagem = 'Por favor, insira pelo menos 6 números.';
    } else if (
      numsInseridos.some((num) => num > 60) ||
      numsSorteados.some((sorte) => sorte > 60)
    ) {
      this.Mensagem =
        ' Os números não podem ser menores que 1 ou maiores que 60.';
    } else if (
      new Set(numsInseridos).size !== numsInseridos.length ||
      new Set(numsSorteados).size !== numsSorteados.length
    ) {
      this.Mensagem = 'Os números não podem ser iguais.';
    } else {
      const validNums = numsInseridos.filter((num) =>
        numsSorteados.includes(num)
      );

      if (validNums.length === 6) {
        this.Mensagem = `Você acertou todos os números. PARABÉNS!!`;
      } else if (validNums.length === 5) {
        this.Mensagem = `Você acertou a QUINA! PARABÉNS!! ${validNums.join(
          ', '
        )}`;
      } else if (validNums.length === 4) {
        this.Mensagem = `Você acertou a QUADRA! PARABÉNS!! ${validNums.join(
          ', '
        )}`;
      } else if (validNums.length > 0 && validNums.length < 4) {
        this.Mensagem = `Você não acertou números suficientes. Na próxima você consegue! ${validNums.join(
          ', '
        )}`;
      } else {
        this.Mensagem =
          'Infelizmente você não acertou nenhum número. Boa sorte na próxima!';
      }
    }
  }
}
