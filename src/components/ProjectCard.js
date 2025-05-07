import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProjectCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
