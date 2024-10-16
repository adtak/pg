from typing import Annotated

from fastapi import Depends, FastAPI

from app.db import Album as AlbumTable
from app.deps import album
from app.models import Album, AlbumAttr

app = FastAPI()


@app.get("/")
async def root() -> dict:
    return {"message": "Hello World."}


@app.get("/albums")
async def get_albums(
    album_table: Annotated[AlbumTable, Depends(album)],
    album_id: int | None = None,
) -> list[Album]:
    res = album_table.read(_id=album_id)
    return [Album(id=r["id"], name=r["name"], desc=r["desc"]) for r in res]


@app.post("/albums")
async def post_albums(
    album_table: Annotated[AlbumTable, Depends(album)],
    album: AlbumAttr,
) -> Album:
    res = album_table.create(album.name, album.desc)
    return Album(id=res["id"], name=res["name"], desc=res["desc"])
