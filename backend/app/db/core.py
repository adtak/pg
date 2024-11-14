import os
from collections.abc import Generator
from typing import Annotated

import dotenv
from fastapi import Depends
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.db.tables import Base


def get_url() -> str:
    dotenv.load_dotenv()
    username = os.getenv("DB_USER")
    password = os.getenv("DB_PASSWORD")
    host = os.getenv("DB_HOST")
    port = os.getenv("DB_PORT")
    database = os.getenv("DB_NAME")
    return f"postgresql+psycopg2://{username}:{password}@{host}:{port}/{database}"


engine = create_engine(get_url(), echo=True, pool_pre_ping=True)
session_maker = sessionmaker(engine)


def get_session() -> Generator[sessionmaker, None, None]:
    yield session_maker


Session = Annotated[sessionmaker, Depends(get_session)]


def init_db() -> None:
    Base.metadata.create_all(engine)
