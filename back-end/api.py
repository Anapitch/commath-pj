from fastapi import FastAPI
from pydantic import BaseModel
from nameko.rpc import rpc
from nameko.standalone.rpc import ClusterRpcProxy
from typing import Optional

class Student(BaseModel):
    firstname:str
    lastname:str
    email:str

app = FastAPI()


broker_cfg = {'AMQP_URI': "amqp://guest:guest@rabbitmq"}


@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/b2i/{bit}")
async def read_item(bit):
    s = int(bit[0])
    e = int(bit[1:9], 2)
    f = [ int(x) for x in bit[9:] ]
    f = sum( [ f[i]*2**(-(i+1)) for i in range(len(f)) ] )
    x = 1 + f
    v = (-1)**s * 2**(e-127) * x
    return {"Result": v}

class Item(BaseModel):
    bitstring: str


@app.post("/b2i")
async def createbit(item: Item):
    b = item.bitstring
    s = int(b[0])
    e = int(b[1:9], 2)
    f = [ int(x) for x in b[9:] ]
    f = sum( [ f[i]*2**(-(i+1)) for i in range(len(f)) ] )
    x = 1 + f
    v = (-1)**s * 2**(e-127) * x
    return {"Result": v}
# @app.post("/register/")
# def api(student_item: Student):
#     with ClusterRpcProxy(broker_cfg) as rpc:
#         sid =rpc.student.insert(student_item.firstname, student_item.lastname, student_item.email)
#         rpc.enroll.insert.call_async(sid, student_item.firstname, student_item.lastname)
#         rpc.email.send.call_async(sid, student_item.firstname, student_item.lastname, student_item.email)

#     print(sid)
#     return {'results': 'registered'}