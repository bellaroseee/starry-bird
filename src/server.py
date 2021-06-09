import base64
import io

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_ngrok import run_with_ngrok
from nst import *

# Initialize the Flask application
app = Flask(__name__)
# apply CORS filter
CORS(app)
run_with_ngrok(app)

# route http posts to this method
@app.route('/api/upload', methods=['POST'])
def upload_file():
    # get the uploaded file from the client (instance of Werkzeug FileStorage). It should be under the 'file' tag
    uploaded_file = request.files['file']

    # it's the hackiest way possible, basically saves the picture and then we'll reflect it back to the client
    if uploaded_file.filename != '':
        uploaded_file.save(os.path.join('tmp', uploaded_file.filename))

    return "Files Received!", 200


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

    img = None

    if len(path_to_style_images) == 1:
        img = get_styled_picture(content=path_to_base_image, style=path_to_style_images[0])
    else:
        img = get_multiple_styled_picture(content=path_to_base_image, styles=path_to_style_images)

    # clean up all temporary files
    for f in os.listdir('tmp'):
        os.remove(os.path.join('tmp', f))

    # img = Image.open(os.path.join('tmp', uploaded_file.filename))
    raw_bytes = io.BytesIO()
    img.save(raw_bytes, "JPEG")
    raw_bytes.seek(0)
    img_base64 = base64.b64encode(raw_bytes.read())

    return jsonify({'image': str(img_base64)}), 200


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
    app.run()
