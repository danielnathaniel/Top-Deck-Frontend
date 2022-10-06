import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing.js';
import List from './view-my-decks';
import ViewSingleDeck from './view-single-deck';
import Cards from './cards-page';
import UpdatePg from './update-deck-name-pg'
import ViewCard from './card-view';
//import Delete from './components/delete-card';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/deck-lists" element={<List />} />
        <Route path="/view-single-deck" element={<ViewSingleDeck />} />
        <Route path="/view-all-cards" element={<Cards />} />
        <Route path="/update-deck-name" element={<UpdatePg />} />
        <Route path="/view-card" element={<ViewCard />} />
        {/* <Route path="/add-card" element={<AddCardToDeck />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App