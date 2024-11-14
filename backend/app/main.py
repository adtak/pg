from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI

from app.db.core import init_db
from app.deps import (
    CreateAlbum,
    CreatePhoto,
    ReadAlbum,
    ReadAlbums,
    ReadPhoto,
    ReadPhotos,
)
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
def post_albums(
    album: AlbumAttr,
    service: CreateAlbum = Depends(CreateAlbum),
) -> Album:
    return service.run(album.name, album.desc)


@app.get("/albums")
def get_albums(
    service: ReadAlbums = Depends(ReadAlbums),
) -> list[Album]:
    return service.run()


@app.get("/albums/{album_id}")
def get_album(
    album_id: int,
    service: ReadAlbum = Depends(ReadAlbum),
) -> Album:
    return service.run(album_id)


@app.post("/photos")
def post_photos(
    photo: PhotoAttr,
    service: CreatePhoto = Depends(CreatePhoto),
) -> Photo:
    return service.run(photo.url, photo.comment, photo.album_id)


@app.get("/photos")
def get_photos(
    service: ReadPhotos = Depends(ReadPhotos),
) -> Photo:
    return service.run()


@app.get("/photos/{photo_id}")
def get_photo(
    photo_id: int,
    service: ReadPhoto = Depends(ReadPhoto),
) -> Photo:
    return service.run(photo_id)
