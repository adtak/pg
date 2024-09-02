import useSWR from "swr";
import type { Photo } from "../models/Photo";
import { fetcher } from "../utils/fetcher";

const usePhoto = (albumId: number | undefined) => {
  const url = albumId
    ? `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    : null;
  const { data, isLoading } = useSWR<Photo[]>(url, fetcher, {});
  return { photos: data, isPhotosLoading: isLoading };
};

export { usePhoto };
