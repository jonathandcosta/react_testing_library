import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve adicionar dois comentarios', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Primeiro comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Segundo comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Primeiro comentario')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentario')).toBeInTheDocument()
    })
});