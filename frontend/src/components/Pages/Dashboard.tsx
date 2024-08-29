import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";

type Album = {
  id: number;
  userId: number;
  title: string;
};

const defaultAlbum: Album = { id: 0, userId: 0, title: "Unknown" };

export default function Dashboard() {
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [activeAlbumId, setActiveAlbumId] = useState(defaultAlbum.id);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveAlbumId(newValue);
  };
  useEffect(() => {
    const fetchAlbums = async () => {
      const url = "https://jsonplaceholder.typicode.com/albums/?userId=1";
      const response = await fetch(url);
      const albums: Album[] = await response.json();
      setAlbums(albums);
    };
    fetchAlbums();
  });
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Please select album
      </Typography>
      <Tabs
        value={activeAlbumId}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
      >
        {albums.map((album) => (
          <Tab
            key={album.id}
            value={album.id}
            label={album.title.split(" ")[0]}
          />
        ))}
      </Tabs>
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" component="div">
              This album id is {activeAlbumId}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
