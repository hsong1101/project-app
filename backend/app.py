import time
import json
import pandas as pd
from flask import Flask, make_response, jsonify, request, Response
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

@app.route('/predict_rating', methods=['POST'], strict_slashes=False)
def predict_rating():
    
    time.sleep(5)
    return Response(json.dumps(request.json), status=200, mimetype='application/json')