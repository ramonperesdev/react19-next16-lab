import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

/**
 * TESTES DE COMPONENTE
 * Testam componentes React de forma isolada
 */

describe('Counter Component', () => {
  it('deve renderizar com contagem inicial de 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  it('deve incrementar a contagem ao clicar no botão incrementar', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
    
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });

  it('deve decrementar a contagem ao clicar no botão decrementar', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('-1');
  });

  it('deve resetar a contagem ao clicar no botão resetar', () => {
    render(<Counter />);
    
    // Incrementa algumas vezes
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('3');
    
    // Reseta
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  it('deve renderizar todos os botões', () => {
    render(<Counter />);
    
    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
    expect(screen.getByTestId('reset-button')).toBeInTheDocument();
  });
});
