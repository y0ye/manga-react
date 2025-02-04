import React, { useEffect, useState } from 'react';
import Navbar from './assets/Navbar'; // Import Navbar component
import {MangaDialog} from './assets/MangaDialog'; // Import MangaDialog component
import SearchResults from './assets/SearchResults'; // Import SearchResults component
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [searching, setSearchLoading] = useState(false);
  const [mangadata, setMangaData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedManga, setSelectedManga] = useState(null);

  const handleInputChange = (event) => setQuery(event.target.value);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      setSearchLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}&order_by=popularity&sfw=true`);
        const data = await response.json();
        setMangaData(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setSearchLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchMangaData = async () => {
      setSearchLoading(true);
      setError(null);
      
      try {
        const response = await fetch('https://api.jikan.moe/v4/manga?q=&order_by=popularity&sfw=true');
        const data = await response.json();
        setMangaData(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setSearchLoading(false);
      }
    };

    fetchMangaData();
  }, []);

  const handleOpen = (manga) => {
    setSelectedManga(manga);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className='container'>
      <Navbar query={query} onQueryChange={handleInputChange} onKeyDown={handleKeyDown} />
      <div className="mainContent">
        <SearchResults
          mangadata={mangadata}
          onClickManga={handleOpen}
          searching={searching}
          error={error}
        />
      </div>
      <MangaDialog open={open} selectedManga={selectedManga} onClose={handleClose} />
    </div>
  );
}

export default App;
