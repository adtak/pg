from collections.abc import AsyncGenerator

from app.db import Album, get_db_conn


async def album() -> AsyncGenerator[Album, None]:
    db = Album(get_db_conn())
    try:
        yield db
    finally:
        db.conn.close()
