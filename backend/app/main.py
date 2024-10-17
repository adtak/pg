import sqlite3
from typing import Annotated

from fastapi import Depends, FastAPI

from app.db import Album as AlbumTable
from app.deps import db_conn
from app.models import Album, AlbumAttr

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
