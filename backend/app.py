from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="../frontend", static_url_path="/")
CORS(app)

correct_answers = {
    "q1": "4",
    "q2": "Paris",
    "q3": "Programming Language"
}

@app.route("/")
def serve_html():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    score = 0
    for key in correct_answers:
        if data.get(key) == correct_answers[key]:
            score += 1
    return jsonify({"score": score})

if __name__ == "__main__":
    app.run(debug=True)
