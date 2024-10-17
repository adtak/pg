import sqlite3
from collections.abc import AsyncGenerator

from app.db import get_db_conn


async def db_conn() -> AsyncGenerator[sqlite3.Connection, None]:
    conn = get_db_conn()
    try:
        yield conn
    finally:
        conn.close()
