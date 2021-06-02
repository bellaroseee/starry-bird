from flask import Flask, request, redirect, Response, send_file, jsonify
from flask_cors import CORS
from PIL import Image
import jsonpickle
import os
import io
import numpy as np
import base64

# Initialize the Flask application
app = Flask(__name__)
CORS(app)

# route http posts to this method
@app.route('/api/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        uploaded_file.save(os.path.join('tmp', uploaded_file.filename))

    img = Image.open(os.path.join('tmp', uploaded_file.filename))
    width, height = img.size
    # build a response dict to send back to client
    response = {'message': 'image received. size={}x{}'.format(width, height)
                }
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)
    rawBytes = io.BytesIO()
    img.save(rawBytes, "JPEG")
    rawBytes.seek(0)
    img_base64 = base64.b64encode(rawBytes.read())
    return jsonify({'image':str(img_base64)})

# start flask app
if __name__ == "__main__":
    app.run(host="localhost", port=5000)