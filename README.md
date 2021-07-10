# Starry Bird
## Background
Starry Bird is the final project for the CSE 455: Computer Vision course taught by Joe Redmon in the University of Washington

## Prerequisites
To run the demo of this program you will need to have `Tensorflow 2` installed, with Python 3.
<br/>
If you plan on running the server locally, you will also want to have GPU support since it will take long without.
<br/>
You will also need to have NodeJS installed for the website to work if you plan on running it locally via `npm`.

## Website
To view the website, either visit the [link directly here](https://bellaroseee.github.io/starry-bird/) or by
first going into the `site` directory (`cd site`) and then running the Node Package Manager (`npm install` and then `npm start`). Then visit
the URL `localhost:3000`

## Demo
The website also has a demo functionality to see the NST in action. There are 2 ways of making the demo work, Locally or through a Server Proxy.
To run the demo, the server has to be set up first. See the section below on how to do that. 
Running the demo is simple, click on the Demo tab on the navigation bar on the website. 
Just drag and drop or select a picture for the content image on the left hand site and select up to 4 style images on the right hand side.
If you want to change the image, use the clear image button before selecting the new images.
Then when you're done, click on the NSTify button to perform the Neural Style Transfer. It might take up to a minute for the results to be processed if it's run
on a GPU system, and up to 15 minutes if run on modern CPU-only systems.

## Server setup
There are 2 ways of starting the server: Locally or through a Server Proxy.

#### Running Locally
To run the server locally, you have to have Python 3 installed as well as the `flask`, `flask_cors` and `flask_ngrok` modules.
Open the root `src` directory (not the one in `site`) and then install the modules and run the `server.py` file.
You can install the modules with `pip`:
- `pip3 install flask`
- `pip3 install flask_cors`
- `pip3 install flask_ngrok`
Then you can run the server by calling `python3 server.py`.

#### Running through Server Proxy (Google Colab)
If your computer does not GPU support and you wish to demo still, you can head on to [Google Colab](http://colab.research.google.com/)
and create a new notebook with the contents in `server.py` and the `nst.py`. You will still have to install `flask`, `flask_cors` and `flask_ngrok` in the notebook.
Alternatively, you can also download the provided `gpuServerProxy.ipynb` file and run that on Colab.
Make sure to enable GPU acceleration by going into Runtime > Change Runtime Type and change the Hardware Acceleration to GPU.
<br/><br/>
Once that is done, run the cell with the `server.py` code. The output of the server should produce an `ngrok` link that looks like `http://<random>.ngrok.io`. Copy this link
into the textbox provided in the demo page before calling NSTify to hook the website into the notebook.
