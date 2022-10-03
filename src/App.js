import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing.js';
import DeckLists from './components/deck-list';
import ViewSingleDeck from './view-single-deck';
import CreateDeck from './create-a-deck-pg';
import ViewAllCards from './cards-page';
import UpdateDeckName from './update-deck-name-pg';
import ViewCard from './card-view';
import AddCard from './add-card';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="deck-lists" element={<DeckLists />} />
          <Route path="view-single-deck" element={<ViewSingleDeck />} />
          <Route path="create-deck" element={<CreateDeck />} />
          <Route path="view-all-cards" element={<ViewAllCards />} />
          <Route path="update-deck-name" element={<UpdateDeckName />} />
          <Route path="view-card" element={<ViewCard />} />
          <Route path="add-card" element={<AddCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App