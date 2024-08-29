import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";

type Album = {
  id: number;
  userId: number;
  title: string;
};

export default function Dashboard() {
  const [albums, setAlbums] = useState([
    { id: 0, userId: 0, title: "Unknown" },
  ]);
  const [activeAlbumId, setActiveAlbumId] = useState(0);
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
      <Tabs
        value={activeAlbumId}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
      >
        {albums.map((album) => (
          <Tab key={album.id} value={album.id} label={album.title} />
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
