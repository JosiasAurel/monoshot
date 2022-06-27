from fastapi import FastAPI
import uvicorn
from sqlmodel import create_engine, SQLModel, Session, select
#from shot_repository import select_all_barbers
######
from mono_package.mono_models import Calendar, Barber, Client, ShowCase, rename_


app = FastAPI()

eng = f'database_.db'
sqlite_url = f'sqlite:///{eng}'
engine = create_engine(sqlite_url, echo=True)


@app.get("/barber")
def select_all_barbers():
    with Session(engine) as session:
        statement = select(Barber)
        result = session.exec(statement)
        shot = result.all()
        print()
        print(result.all())
        print()
        return {"barber": shot}


@app.get("/calendar")
def select_all_calendar():
    with Session(engine) as session:
        statement = select(Calendar)
        result = session.exec(statement)
        shot = result.all()
        print()
        print(result.all())
        print()
        return {"barber": shot}


@app.get("/client")
def select_all_client():
    with Session(engine) as session:
        statement = select(Client)
        result = session.exec(statement)
        shot = result.all()
        print()
        print(result.all())
        print()
        return {"barber": shot}


@app.get("/showcase")
def select_all_showcase():
    with Session(engine) as session:
        statement = select(ShowCase)
        result = session.exec(statement)
        shot = result.all()
        print()
        print(result.all())
        print()
        return {"barber": shot}


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    uvicorn.run('main:app', host="localhost", port=8000, reload=True)
    create_db_and_tables()
