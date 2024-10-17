import sqlite3
from typing import Annotated

from fastapi import Depends, FastAPI

from app.db import Photo as PhotoTable
from app.deps import db_conn
from app.models import Photo, PhotoAttr

app = FastAPI()


@app.get("/")
async def root() -> dict:
    return {"message": "Hello World."}


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
    res = photo_table.create(photo.name, photo.desc)
    return Photo(
        id=res["id"], url=res["url"], comment=res["comment"], album_id=res["album_id"],
    )
