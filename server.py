from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(os.path.realpath(__file__)), "build/static"), template_folder=os.path.join(os.path.dirname(os.path.realpath(__file__)), "build"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resume", methods=['GET'])
def download():
    return send_from_directory(directory="./uploads/", filename="resume.pdf"), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')