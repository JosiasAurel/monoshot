from sqlmodel import SQLModel, Field, UniqueConstraint
from enum import Enum, IntEnum
from typing import Optional
from datetime import date, time, datetime
import os
###################################################################################


def rename_():
    array = []
    parent = "./mono_package"
    folder = "cutz"
    path = os.path.join(parent, folder)
    if not (os.path.exists(path)):
        os.mkdir(path)
        print("directory '% s' created" % folder)
    if (os.path.exists(path+"/.DS_Store")):
        os.remove(path+"/.DS_Store")

    array = os.listdir(path)
    array.sort()

    for count, filename in enumerate(array):
        dst = f"cutz{str(count)}.png"
        src = f"{folder}/{filename}"
        dst = f"{folder}/{dst}"
        #print(f"src:{src} dst:{dst}")
        try:
            os.rename(src, dst)
        except FileNotFoundError:
            pass
            # print("FileNotFoundError")
        # finally:
        #     pass
    ##############array################
    # print(array)
    return array


class Calendar(SQLModel, table=True):
    barber_id: Optional[int] = Field(
        primary_key=True, default=None, foreign_key='barber.id')
    #id:Optional[int]=Field( primary_key=True)

    Mon: Optional[str] = 'F'
    Tues: Optional[str] = 'F'
    Wed: Optional[str] = 'F'
    Thur: Optional[str] = 'F'
    Fri: Optional[str] = 'F'
    Sat: Optional[str] = 'F'
    Sun: Optional[str] = 'F'


class Barber(SQLModel, table=True):
    __table_args__ = (UniqueConstraint("email"),)
    id: Optional[int] = Field(primary_key=True)
    name: str
    phone: Optional[int] = None
    email: str
    starting_hour: time = Field(default_factory=time, nullable=False)
    hours_per_day: Optional[int] = None
    average_rating: Optional[str] = Field(default=None)


class Client(SQLModel, table=True):
    __table_args__ = (UniqueConstraint("email"),)
    id: Optional[int] = Field(primary_key=True)
    name: str
    phone: Optional[int] = None
    showcase_description: Optional[str] = Field(
        default=None, foreign_key='showcase.description')
    rating: Optional[str] = Field(default=None)
    email: str


class ShowCase(SQLModel, table=True):
    #id:Optional[int]=Field( primary_key=True)
    price: int
    image: str
    description: Optional[str] = Field(default=None)
    barber_id: Optional[int] = Field(
        primary_key=True, default=None, foreign_key='barber.id')


rename_()
