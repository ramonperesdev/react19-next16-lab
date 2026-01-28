import { add, subtract, multiply, divide, formatCurrency } from '../calculator';

/**
 * TESTES UNITÁRIOS
 * Testam funções isoladas sem dependências externas
 */

describe('Calculator Utils', () => {
  describe('add', () => {
    it('deve somar dois números positivos', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('deve somar números negativos', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('deve somar zero corretamente', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('deve subtrair dois números', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('deve retornar negativo quando segundo número é maior', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('deve multiplicar dois números', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('deve retornar zero quando multiplicado por zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('deve dividir dois números', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('deve lançar erro ao dividir por zero', () => {
      expect(() => divide(10, 0)).toThrow('Divisão por zero não permitida');
    });

    it('deve lidar com divisão que resulta em decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });
  });

  describe('formatCurrency', () => {
    it('deve formatar número como moeda brasileira', () => {
      expect(formatCurrency(1000)).toBe('R$\xa01.000,00');
    });

    it('deve formatar valores decimais', () => {
      expect(formatCurrency(99.99)).toBe('R$\xa099,99');
    });

    it('deve formatar zero', () => {
      expect(formatCurrency(0)).toBe('R$\xa00,00');
    });
  });
});
