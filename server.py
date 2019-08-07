from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(os.path.realpath(__file__)), "build/static"), template_folder=os.path.join(os.path.dirname(os.path.realpath(__file__)), "build"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resume", methods=['GET'])
def download():
    return send_from_directory(directory="./uploads/", filename="resume-cristian-osorio-bretti.pdf",as_attachment=True), 200

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(directory="./build/", filename='favicon.ico',mimetype='image/vnd.microsoft.icon')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
