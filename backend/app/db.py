import sqlite3
from typing import Any


def get_db_conn() -> sqlite3.Connection:
    return sqlite3.connect("database.db")


class Album:
    def __init__(self, conn: sqlite3.Connection) -> None:
        self.conn = conn
        self.cursor = conn.cursor()
        self.init_table()

    def init_table(self) -> None:
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS album("
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
            "name TEXT,"
            "desc TEXT NULL)",
        )

    def create(self, name: str, desc: str | None) -> None:
        self.cursor.execute(
            "INSERT INTO album(id,name,desc) VALUES (?,?,?)",
            (name, desc),
        )
        self.conn.commit()

    def read(self, _id: int) -> list[Any]:
        if _id:
            self.cursor.execute(
                "SELECT * FROM album WHERE id = ?",
                (_id),
            )
        else:
            self.cursor.execute(
                "SELECT * FROM album",
            )
        return self.cursor.fetchall()
