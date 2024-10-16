from pydantic import BaseModel


class AlbumAttr(BaseModel):
    name: str
    desc: str | None = None


class Album(AlbumAttr):
    id: int
