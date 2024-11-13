from sqlalchemy import create_engine

engine = create_engine("sqlite:///database.db", echo=True, pool_pre_ping=True)
