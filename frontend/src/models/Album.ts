type Album = {
  id: number;
  userId: number;
  title: string;
};

const unknownAlbum = { id: 0, userId: 0, title: "Unk" };

const getAlbums = (albums: Album[]) => {
  if (albums.length === 0) {
    return [unknownAlbum];
  }
  return albums;
};

const getFirstAlbum = (albums: Album[]) => {
  return getAlbums(albums)[0];
};

export type { Album };
export { getAlbums, getFirstAlbum };
