import app.models as response
from app.db.core import Session
from app.db.tables import Album, Photo


class CreateAlbum:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, name: str, desc: str) -> response.Album:
        with self.session.begin() as session:
            result = Album.create(session, name, desc)
            return response.Album.from_db(result)


class ReadAlbums:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self) -> response.Album:
        with self.session.begin() as session:
            results = Album.read_all(session)
            return [response.Album.from_db(result) for result in results]


class ReadAlbum:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, _id: int) -> response.Album:
        with self.session.begin() as session:
            result = Album.read_by_id(session, _id)
            return response.Album.from_db(result)


class CreatePhoto:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, url: str, comment: str, album_id: int) -> response.Photo:
        with self.session.begin() as session:
            result = Photo.create(session, url, comment, album_id)
            return response.Photo.from_db(result)


class ReadPhoto:
    def __init__(self, session: Session) -> None:
        self.session = session

    def run(self, _id: int) -> response.Photo:
        with self.session.begin() as session:
            result = Photo.read(session, _id)
            return response.Photo.from_db(result)
