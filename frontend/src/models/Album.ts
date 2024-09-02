type Album = {
  id: number;
  userId: number;
  title: string;
};

const getDefaultAlbum = () => {
  return { id: 0, userId: 0, title: "Unknown" };
};

const getFirstAlbum = (albums: Album[]) => {
  return albums[0] ?? getDefaultAlbum();
};

export type { Album };
export { getDefaultAlbum, getFirstAlbum };
