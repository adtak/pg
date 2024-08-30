import { useEffect, useState } from "react";
import type { Album } from "../models/Album";

const defaultAlbum: Album = { id: 0, userId: 0, title: "Unknown" };

const useAlbums = () => {
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
  return { albums, activeAlbumId, handleChange };
};

export { useAlbums };
