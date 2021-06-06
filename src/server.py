import os

from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from flask_ngrok import run_with_ngrok
from nst import *

# Initialize the Flask application
app = Flask(__name__)
# apply CORS filter
CORS(app)
# run_with_ngrok(app)


# route http posts to this method
@app.route('/api/upload', methods=['POST'])
def upload_file():
    # get the uploaded file from the client (instance of Werkzeug FileStorage). It should be under the 'file' tag
    uploaded_file = request.files['file']

    # it's the hackiest way possible, basically saves the picture and then we'll reflect it back to the client
    if uploaded_file.filename != '':
        uploaded_file.save(os.path.join('tmp', uploaded_file.filename))

    # reflect the image back to the client
    # img = Image.open(os.path.join('tmp', uploaded_file.filename))
    # rawBytes = io.BytesIO()
    # img.save(rawBytes, "JPEG")
    # rawBytes.seek(0)
    # img_base64 = base64.b64encode(rawBytes.read())
    #
    # return jsonify({'image': str(img_base64)})

    return "Files Received!"


@app.route('/api/nst', methods=['POST'])
def perform_nst():
    data = request.json
    base_image = data['base_image']
    style_images = data['style_images']

    path_to_base_image = os.path.join('tmp', base_image)
    path_to_style_images = []

    if not os.path.exists(path_to_base_image):
        return "Invalid Request", 400

    for img_name in style_images:
        path_res = os.path.join('tmp', img_name)
        if not os.path.exists(path_res):
            return "Invalid Request", 400
        path_to_style_images.append(path_res)

    # clean up all temporary files
    for f in os.listdir('tmp'):
        os.remove(os.path.join('tmp', f))
    return "lol"


def create_tmp_if_not_exists():
    if not os.path.exists('tmp'):
        os.makedirs('tmp')
        return True
    return False


# start flask app
if __name__ == "__main__":
    if create_tmp_if_not_exists():
        print("Created tmp folder...")
    print("Starting server")
    # get_styled_picture(os.path.join('tmp', '48872.jpg'), os.path.join('tmp', '48872.jpg'), 0.5)
    app.run()
