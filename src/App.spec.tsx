import { render, waitFor } from '@testing-library/react'

import App from './App';

describe('test get all products from api', () => {
    it('render products', async () => {
        const { findByText } = render(<App />);
        
        await waitFor(() => {
            expect(findByText("Adicionar ao Carrinho")).toBeInTheDocument();
        })
           

        
    })
})