print("dis the server")
print('gnome bacon')


from http import server
from flask import Flask
server = Flask(__name__)

@server.route("/")
def home():
    return "Hello, Flask!"

#flask --app server run (this ran the flask environment)

