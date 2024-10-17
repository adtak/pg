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
        self.cursor.execute("PRAGMA foreign_keys = true;")
        self.init_table()

    def init_table(self) -> None:
        self.cursor.execute(
            "CREATE TABLE IF NOT EXISTS photo("
            "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
            "url TEXT,"
            "comment TEXT NULL,"
            "foreign key(album_id) references album(id))",
        )

    def create(
        self, url: str, comment: str | None, album_id: int,
    ) -> Any:  # noqa: ANN401
        self.cursor.execute(
            "INSERT INTO photo(url,comment,album_id) VALUES (?,?,?)",
            (url, comment, album_id),
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
