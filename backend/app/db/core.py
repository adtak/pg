from collections.abc import Generator
from typing import Annotated

from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.db.tables import Base

engine = create_engine("sqlite:///database.db", echo=True, pool_pre_ping=True)
session_maker = sessionmaker(engine)


def get_session() -> Generator[sessionmaker, None, None]:
    yield session_maker


Session = Annotated[sessionmaker, Depends(get_session)]


def init_db() -> None:
    Base.metadata.create_all(engine)
