import base64
import io
import os
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize the Flask application
app = Flask(__name__)
# apply CORS filter
CORS(app)


# route http posts to this method
@app.route('/api/upload', methods=['POST'])
def upload_file():
    # get the uploaded file from the client (instance of Werkzeug FileStorage). It should be under the 'file' tag
    uploaded_file = request.files['file']

    # it's the hackiest way possible, basically saves the picture and then we'll reflect it back to the client
    if uploaded_file.filename != '':
        uploaded_file.save(os.path.join('tmp', uploaded_file.filename))

    # reflect the image back to the client
    img = Image.open(os.path.join('tmp', uploaded_file.filename))
    rawBytes = io.BytesIO()
    img.save(rawBytes, "JPEG")
    rawBytes.seek(0)
    img_base64 = base64.b64encode(rawBytes.read())

    return jsonify({'image': str(img_base64)})


def create_tmp_if_not_exists():
    if not os.path.exists('tmp'):
        os.makedirs('tmp')
        return True
    return False


# start flask app
if __name__ == "__main__":
    if (create_tmp_if_not_exists()):
        print("Created tmp folder...")
    print("Starting server")
    app.run(host="localhost", port=5000)
