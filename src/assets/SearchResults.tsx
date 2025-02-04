import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MangaCard from './MangaCard'; // Import MangaCard

function SearchResults({ mangadata, onClickManga, searching, error }) {
  if (searching) {
    
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {mangadata.map(manga => (
        <Grid item xs={12} sm={6} md={2.4} key={manga.mal_id}>
          <MangaCard manga={manga} onClick={onClickManga} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SearchResults;
