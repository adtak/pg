import sqlite3
from typing import Any


def get_db_conn() -> sqlite3.Connection:
    return sqlite3.connect("database.db")


class Album:
    def __init__(self, conn: sqlite3.Connection) -> None:
        self.conn = conn
        self.conn.row_factory = sqlite3.Row
        self.cursor = conn.cursor()
        self.init_table()

    def init_table(self) -> None:
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS album("
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
            "name TEXT,"
            "desc TEXT NULL)",
        )

    def create(self, name: str, desc: str | None) -> Any:  # noqa: ANN401
        self.cursor.execute(
            "INSERT INTO album(name,desc) VALUES (?,?)",
            (name, desc),
        )
        self.conn.commit()
        self.cursor.execute(
            "SELECT * FROM album WHERE id = ?",
            (self.cursor.lastrowid,),
        )
        return self.cursor.fetchone()

    def read(self, _id: int | None) -> list[Any]:
        if _id:
            self.cursor.execute(
                "SELECT * FROM album WHERE id = ?",
                (_id,),
            )
        else:
            self.cursor.execute(
                "SELECT * FROM album",
            )
        return self.cursor.fetchall()


class Photo:
    def __init__(self, conn: sqlite3.Connection) -> None:
        self.conn = conn
        self.conn.row_factory = sqlite3.Row
        self.cursor = conn.cursor()
        self.init_table()

    def init_table(self) -> None:
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS photo("
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
            "url TEXT,"
            "comment TEXT NULL)",
        )

    def create(self, url: str, comment: str | None) -> Any:  # noqa: ANN401
        self.cursor.execute(
            "INSERT INTO photo(url,comment) VALUES (?,?)",
            (url, comment),
        )
        self.conn.commit()
        self.cursor.execute(
            "SELECT * FROM photo WHERE id = ?",
            (self.cursor.lastrowid,),
        )
        return self.cursor.fetchone()

    def read(self, _id: int | None) -> list[Any]:
        if _id:
            self.cursor.execute(
                "SELECT * FROM photo WHERE id = ?",
                (_id,),
            )
        else:
            self.cursor.execute(
                "SELECT * FROM photo",
            )
        return self.cursor.fetchall()
