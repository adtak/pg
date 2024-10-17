from pydantic import BaseModel


class AlbumAttr(BaseModel):
    name: str
    desc: str | None = None


class Album(AlbumAttr):
    id: int


class PhotoAttr(BaseModel):
    url: str
    comment: str | None = None


class Photo(PhotoAttr):
    id: int
