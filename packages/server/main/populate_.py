import random
import string
from sqlmodel import Session
from main_ import engine
from mono_package.mono_models import Calendar, Barber,Client,ShowCase,rename_
from datetime import datetime,time
import os

color_grades = string.ascii_uppercase[3:9]
array=[]
array=rename_()

names=['glen','tom','lois','petra']

n=0
def create_barber():
    name=names[random.randint(0,3)]
    email=name+'@gmail.com'
    hours_per_day=random.randint(5,10)
    try:
        starting_hour=time(random.randint(7,20),random.randint(0,59))
        shot_ = Barber(name=name,email=email,starting_hour=starting_hour,hours_per_day=hours_per_day)
    except TypeError:
        print("TypeError")  
    
    return shot_

def create_client():
    name=names[random.randint(0,3)]
    email=name+'@gmail.com'
    #Gem(price=1000, gem_properties_id=gem_p)

    shot = Client(name=name,email=email)
    return shot

def create_calendar(shot_):
    #available=random.randint(0,1)
    days=random.randint(1,7)
    #appointment_date=datetime(2022,7,random.randint(1,30),random.randint(7,20),random.randint(0,59))

    shot_ca=Calendar(barber_id=shot_)

    return shot_ca

def create_ShowCase(shot_):
    price=(random.randint(1,20))*1000
    image=array[random.randint(0,len(array)-1)]
    shot_sh=ShowCase(price=price,image=image,barber_id=shot_)
    return shot_sh



################################################################################

def create_shot_db():
    shot_ = create_barber()
    
    print(shot_)
    # print(shot)
    # print(shot_ca)
    # print(shot_sh)

    with Session(engine) as session:
        session.add(shot_)
        session.commit()
        a=create_client()
        b=create_calendar(shot_.id)
        c=create_ShowCase(shot_.id)
        session.add(a)
        session.commit()
        session.add(b)
        session.commit()
        session.add(c)
        session.commit()


create_shot_db()
