import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function MangaCard({ manga, onClick }) {
  return (
    <Card
      raised={true}
      sx={{
        maxWidth: 220,
        maxHeight: 600,
        margin: "0 auto",
        marginTop: 1,
        color:"slate-gray",
        background:" #bdc3c7",
        background:"#eeeeee",
      }}
    >
      <CardActionArea onClick={() => onClick(manga)}>
        <CardMedia
          component="img"
          image={manga.images?.jpg?.image_url || 'src/assets/default.jpg'} // Fallback image
          title={manga.title}
          sx={{
            marginTop: 1,
            maxHeight: 300,
            borderRadius: 3,
            objectFit: "fill",
            padding: 1
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {manga.title.slice(0, 31) + '...'}
          </Typography>
          <Typography variant="h7">Rating: {manga.score || "N/A"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MangaCard;
