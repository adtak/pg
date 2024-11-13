from app.db.core import Session
from app.db.tables import Album, Photo


class CreateAlbum:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, name: str, desc: str) -> Album:
        with self.session.begin() as session:
            return Album.create(session, name, desc)


class CreatePhoto:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, url: str, comment: str, album_id: int) -> Album:
        with self.session.begin() as session:
            return Photo.create(session, url, comment, album_id)
