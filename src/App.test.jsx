import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
    it('renders a list of characters', async () => {
      render(
        <MemoryRouter initialEntries={['/characters']}>
          <App />
        </MemoryRouter>
      );
    
      const link = await screen.findByText('Antenna Morty');
  
      expect(link).toBeInTheDocument();
    });

    it('clicks a character and loads a details page', async () => {
      render(
        <MemoryRouter initialEntries={['/characters']}>
          <App />
        </MemoryRouter>
      );
    
      const link = await screen.findByText('Antenna Morty');
      userEvent.click(link);
  
      await screen.findByAltText(/image of antenna morty from rick and morty/i);
    });
  });