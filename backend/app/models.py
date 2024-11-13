from pydantic import BaseModel

import app.db.tables as db


class AlbumAttr(BaseModel):
    name: str
    desc: str | None = None


class Album(AlbumAttr):
    id: int

    @classmethod
    def from_db(cls, album: db.Album) -> "Album":
        return cls(id=album.id, name=album.name, desc=album.desc)


class PhotoAttr(BaseModel):
    url: str
    comment: str | None = None
    album_id: int


class Photo(PhotoAttr):
    id: int

    @classmethod
    def from_db(cls, photo: db.Photo) -> "Photo":
        return cls(
            id=photo.id, url=photo.url, comment=photo.comment, album_id=photo.album_id,
        )
