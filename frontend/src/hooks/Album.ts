import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Album } from "../models/Album";
import { getDefaultAlbum, getFirstAlbum } from "../models/Album";

const useAlbums = () => {
  const [searchParams, _] = useSearchParams();
  const userId = searchParams.get("userId") ?? "1";
  const defaultAlbum = getDefaultAlbum();
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [activeAlbumId, setActiveAlbumId] = useState(defaultAlbum.id);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveAlbumId(newValue);
  };
  useEffect(() => {
    const fetchAlbums = async () => {
      const url = `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`;
      const response = await fetch(url);
      const albums: Album[] = await response.json();
      setAlbums(albums);
      setActiveAlbumId(getFirstAlbum(albums).id);
    };
    fetchAlbums();
  }, [userId]);
  return { albums, activeAlbumId, handleChange };
};

export { useAlbums };
