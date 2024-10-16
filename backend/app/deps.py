from app.db import Album, get_db_conn


async def album_conn() -> Album:
    return Album(get_db_conn())
