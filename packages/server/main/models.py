from sqlmodel import SQLModel, Field, UniqueConstraint
from enum import Enum, IntEnum
from typing import Optional
from datetime import date, time, datetime
import os


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

