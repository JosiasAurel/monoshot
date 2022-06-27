from sqlmodel import Session,select,create_engine
from main_ import engine
from mono_package.mono_models import Calendar, Barber,Client,ShowCase,rename_

def select_all_barbers():
	with Session(engine) as session:
		statement=select(Barber)
		result= session.exec(statement)

		print()
		print(result.all())
		print()
		return result.all()

#select_all_barbers()