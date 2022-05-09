import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
    it('renders details page for Amish Cyborg', async () => {
      render(
        <MemoryRouter initialEntries={['/characters/16']}>
          <App />
        </MemoryRouter>
      );
    
      const img = await screen.findByAltText(/image of amish cyborg from rick and morty/i);
      expect(img).toBeInTheDocument()
      expect(img.src).toEqual('https://rickandmortyapi.com/api/character/avatar/16.jpeg');
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