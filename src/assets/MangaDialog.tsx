import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function MangaDialog({ open, selectedManga, onClose }) {
  if (!selectedManga) return null; // If no manga is selected, return null
  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{selectedManga.title}</DialogTitle>
      <DialogContent>
        {/* Genres */}
        {selectedManga.genres && selectedManga.genres.length > 0 && (
          <Typography variant="body1">
            Genres: {selectedManga.genres.map(genre => genre.name).join(', ')}
          </Typography>
        )}

        {/* Author */}
        {selectedManga.authors && selectedManga.authors.length > 0 && (
          <Typography variant="body1">Author: {selectedManga.authors[0]?.name}</Typography>
        )}

        {/* Status */}
        <Typography variant="body1">Status: {selectedManga.status}</Typography>

        {/* Type */}
        {selectedManga.type && (
          <Typography variant="body1">Type: {selectedManga.type}</Typography>
        )}

        {/* Published Date */}
        {selectedManga.published && selectedManga.published.from && (
          <Typography variant="body1">
            Published: {new Date(selectedManga.published.from).toLocaleDateString()}
          </Typography>
        )}

        <Typography variant="body2">
          {selectedManga.synopsis || 'Loading manga details...'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
