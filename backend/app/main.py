import sqlite3
from typing import Annotated

from fastapi import Depends, FastAPI

from app.db import Album as AlbumTable
from app.db import Photo as PhotoTable
from app.deps import db_conn
from app.models import Album, AlbumAttr, Photo, PhotoAttr

app = FastAPI()


@app.get("/")
async def root() -> dict:
    return {"message": "Hello World."}


@app.get("/albums")
async def get_albums(
    db_conn: Annotated[sqlite3.Connection, Depends(db_conn)],
    album_id: int | None = None,
) -> list[Album]:
    album_table = AlbumTable(db_conn)
    res = album_table.read(_id=album_id)
    return [Album(id=r["id"], name=r["name"], desc=r["desc"]) for r in res]


@app.post("/albums")
async def post_albums(
    db_conn: Annotated[sqlite3.Connection, Depends(db_conn)],
    album: AlbumAttr,
) -> Album:
    album_table = AlbumTable(db_conn)
    res = album_table.create(album.name, album.desc)
    return Album(id=res["id"], name=res["name"], desc=res["desc"])


@app.get("/photos")
async def get_photos(
    db_conn: Annotated[sqlite3.Connection, Depends(db_conn)],
    photo_id: int | None = None,
) -> list[Photo]:
    photo_table = PhotoTable(db_conn)
    res = photo_table.read(_id=photo_id)
    return [
        Photo(id=r["id"], url=r["url"], comment=r["comment"], album_id=r["album_id"])
        for r in res
    ]


@app.post("/photos")
async def post_photos(
    db_conn: Annotated[sqlite3.Connection, Depends(db_conn)],
    photo: PhotoAttr,
) -> Photo:
    photo_table = PhotoTable(db_conn)
    res = photo_table.create(photo.url, photo.comment, photo.album_id)
    return Photo(
        id=res["id"],
        url=res["url"],
        comment=res["comment"],
        album_id=res["album_id"],
    )
