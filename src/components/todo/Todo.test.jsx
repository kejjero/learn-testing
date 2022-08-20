import {render, screen} from '@testing-library/react';
import Todo from '../todo/Todo';


describe('Todo компонент', () => {

    const todos = ['todo one', 'todo two', 'todo three']

    it('Создание компонента Todo с данными', () => {

        render(<Todo todos={todos}/>);

        const todoGetRole = screen.queryByRole('list');
        const todoGetText = screen.getByText(/todo three/i);

        expect(todoGetRole).toMatchSnapshot()
        expect(todoGetRole).toBeInTheDocument();
        expect(todoGetText).toBeInTheDocument();
    });

    it('Создание компонента без данных', () => {

        render(<Todo/>);

        const todoGetRole = screen.queryByRole('list');

        expect(todoGetRole).toBeNull()
    });

});