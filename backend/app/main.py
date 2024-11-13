from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI

from app.db.core import init_db
from app.deps import CreateAlbum, CreatePhoto, ReadAlbum, ReadPhoto
from app.models import Album, AlbumAttr, Photo, PhotoAttr


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncGenerator[None, None]:
    init_db()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def root() -> dict:
    return {"message": "Hello World."}


@app.post("/albums")
async def post_albums(
    album: AlbumAttr,
    service: CreateAlbum = Depends(CreateAlbum),
) -> Album:
    return service.run(album.name, album.desc)


@app.get("/albums/{album_id}")
async def get_albums(
    album_id: int,
    service: ReadAlbum = Depends(ReadAlbum),
) -> Album:
    return service.run(album_id)


@app.post("/photos")
async def post_photos(
    photo: PhotoAttr,
    service: CreatePhoto = Depends(CreatePhoto),
) -> Photo:
    return service.run(photo.url, photo.comment, photo.album_id)


@app.get("/photos/{photo_id}")
async def get_photos(
    photo_id: int,
    service: ReadPhoto = Depends(ReadPhoto),
) -> Photo:
    return service.run(photo_id)
