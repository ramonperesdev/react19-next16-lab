import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserGreeting from '../UserGreeting';

/**
 * TESTES DE COMPONENTE COM INTERAÇÃO
 * Testam fluxos de usuário mais complexos
 */

describe('UserGreeting Component', () => {
  it('deve renderizar o formulário inicialmente', () => {
    render(<UserGreeting />);
    
    expect(screen.getByLabelText(/digite seu nome/i)).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('deve desabilitar botão de enviar quando input está vazio', () => {
    render(<UserGreeting />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('deve habilitar botão quando usuário digita um nome', async () => {
    const user = userEvent.setup();
    render(<UserGreeting />);
    
    const input = screen.getByTestId('name-input');
    const submitButton = screen.getByTestId('submit-button');
    
    await user.type(input, 'Ramon');
    
    expect(submitButton).not.toBeDisabled();
  });

  it('deve mostrar mensagem de saudação após submissão', async () => {
    const user = userEvent.setup();
    render(<UserGreeting />);
    
    const input = screen.getByTestId('name-input');
    await user.type(input, 'Ramon');
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('greeting-message')).toHaveTextContent('Olá, Ramon!');
  });

  it('deve permitir resetar o formulário', async () => {
    const user = userEvent.setup();
    render(<UserGreeting />);
    
    // Preenche e submete
    const input = screen.getByTestId('name-input');
    await user.type(input, 'Ramon');
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Verifica mensagem
    expect(screen.getByTestId('greeting-message')).toBeInTheDocument();
    
    // Reseta
    fireEvent.click(screen.getByTestId('reset-form-button'));
    
    // Verifica que voltou ao formulário
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toHaveValue('');
  });

  it('não deve submeter formulário com apenas espaços em branco', async () => {
    const user = userEvent.setup();
    render(<UserGreeting />);
    
    const input = screen.getByTestId('name-input');
    await user.type(input, '   ');
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });
});
