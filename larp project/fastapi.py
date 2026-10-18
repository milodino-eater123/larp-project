import secrets
url_database = {}
def shorten_url(url):
    code=secrets.token_urlsafe(6)
    url_database[code] = url
    return code

def redirect_url(code):
    return url_database.get(code, None)

code=shorten_url("https://www.example.com")

