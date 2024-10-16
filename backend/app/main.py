from fastapi import FastAPI

from app.models import Album

app = FastAPI()


@app.get("/")
async def root() -> dict:
    return {"message": "Hello World."}


@app.get("/albums")
async def get_albums(album_id: int | None = None) -> list[Album]:
    return [Album(id=album_id, name="First Album")]
