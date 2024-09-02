import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import type { Album } from "../models/Album";
import { fetcher } from "../utils/fetcher";

const useAlbums = () => {
  const [searchParams, _] = useSearchParams();
  const userId = searchParams.get("userId") ?? "1";
  const url = `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`;
  const { data, isLoading } = useSWRImmutable<Album[]>(url, fetcher, {
    revalidateOnMount: true,
    onSuccess: (data) => setActiveAlbumId(data[0].id),
  });
  const [activeAlbumId, setActiveAlbumId] = useState<number | undefined>(
    undefined,
  );
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveAlbumId(newValue);
  };

  return { data, isLoading, activeAlbumId, handleChange };
};

export { useAlbums };
