import secrets
from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

url_database = {}

@app.post("/shorten")
def shorten_url(url:str):
    code=secrets.token_urlsafe(6)
    url_database[code] = url
    return {"short_url": f"http://localhost:8000/{code}"}

@app.get("/{code}")
def redirect_url(code:str):
    return RedirectResponse(url=url_database[code])



