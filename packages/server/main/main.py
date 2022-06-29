from fastapi import FastAPI, Response
import uvicorn
from sqlmodel import create_engine, SQLModel, Session, select
#from shot_repository import select_all_barbers
######
from models import Calendar, Barber, Client, ShowCase, rename_


app = FastAPI()
#hfjjt
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


@app.post("/create-barber")
def create_barber(received: Response):
  data = received.json()
  with Session(engine) as session:
    barber = Barber(
      name=data["name"],
      email=data["email"],
      phone=data["email"],
      starting_hour=data["startingHour"],
      hours_per_day=data["duration"]
    )
    session.add(barber)
    session.commit()
  return

@app.put("/update-barber")
def update_barber(received: Response):
  data = received.json()
  _id = data["id"]
  name = data.get("name", None)
  email = data.get("email", None)
  starting_hour = data.get("startingHour", None)
  hours_per_day = data.get("duration", None)

  with Session(engine) as session:
    get_barber = select(Barber).where(Barber.id==_id)
    barber = session.exec(get_barber).one()

    barber.name = name if name else barber.name
    barber.email = email if email else barber.email
    barber.starting_hour = starting_hour if starting_hour else barber.starting_hour
    barber.hours_per_day = hours_per_day if hours_per_day else barber.hours_per_day

    
    session.add(barber)
    session.commit()
    session.refresh()
  return
  
@app.put("/update-calendar")
def update_calendar(received: Response):
    data = received.json() #HEREEEEEE
    barber_id= data["id"]
    Mon = data.get["Mon"]
    Tues = data.get["Tues"]
    Wed = data.get["Wed"]
    Thur = data.get["Thur"]
    Fri = data.get["Fri"]
    Sat = data.get["Sat"]
    Sun = data.get["Sun"]


    #id:Optional[int]=Field( primary_key=True)

    with Session(engine) as session:
      calendar.Mon= Mon if Mon else calendar.Mon
      calendar.Tues= Tues if Tues else calendar.Tues
      calendar.Wed= Wed if Wed else calendar.Wed
      calendar.Thur= Thur if Thur else calendar.Thur
      calendar.Fri= Fri if Fri else calendar.Fri
      calendar.Sat= Sat if Sat else calendar.Sat
      calendar.Sun= Sun if Sun else calendar.Sun

      session.add(barber)
      session.commit()      
      session.refresh()    
    return
if __name__ == "__main__":
    uvicorn.run('main:app', host="0.0.0.0", port=8000, reload=True)
    create_db_and_tables()

