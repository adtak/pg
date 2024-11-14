import datetime as dt

from sqlalchemy import DateTime, ForeignKey, String, func, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column


class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(
        "id",
        autoincrement=True,
        nullable=False,
        unique=True,
        primary_key=True,
    )
    created_at: Mapped[dt.datetime] = mapped_column(
        "created_at",
        DateTime,
        nullable=False,
        server_default=func.current_timestamp(),
    )
    updated_at: Mapped[dt.datetime] = mapped_column(
        "updated_at",
        DateTime,
        nullable=False,
        server_default=func.current_timestamp(),
        server_onupdate=func.current_timestamp(),
    )


class Album(Base):
    __tablename__ = "album"

    name: Mapped[str] = mapped_column("name", String, nullable=False)
    desc: Mapped[str] = mapped_column("desc", String, nullable=False)

    @classmethod
    def create(cls, session: Session, name: str, desc: str) -> "Album":
        album = cls(name=name, desc=desc)
        session.add(album)
        session.flush()
        return cls.read_by_id(session, album.id)

    @classmethod
    def read_all(
        cls,
        session: Session,
    ) -> list["Album"]:
        stmt = select(cls)
        result = session.scalars(stmt)
        return list(result.all())

    @classmethod
    def read_by_id(
        cls,
        session: Session,
        _id: int,
    ) -> "Album":
        stmt = select(cls).where(cls.id == _id)
        result = session.scalars(stmt)
        return result.one()

    def update(self, session: Session, name: str, desc: str) -> None:
        self.name = name
        self.desc = desc
        session.flush()

    def delete(self, session: Session) -> None:
        session.delete(self)
        session.flush()


class Photo(Base):
    __tablename__ = "photo"

    url: Mapped[str] = mapped_column("url", String, nullable=False)
    comment: Mapped[str] = mapped_column("comment", String, nullable=False)
    album_id: Mapped[int] = mapped_column(
        "album_id",
        ForeignKey("album.id"),
        nullable=False,
    )

    @classmethod
    def create(cls, session: Session, url: str, comment: str, album_id: int) -> "Photo":
        album = cls(url=url, comment=comment, album_id=album_id)
        session.add(album)
        session.flush()
        return cls.read(session, album.id)

    @classmethod
    def read(
        cls,
        session: Session,
        _id: int,
    ) -> "Photo":
        stmt = select(cls).where(cls.id == _id)
        result = session.scalars(stmt)
        return result.one()

    def update(self, session: Session, url: str, comment: str) -> None:
        self.ur = url
        self.comment = comment
        session.flush()

    def delete(self, session: Session) -> None:
        session.delete(self)
        session.flush()
