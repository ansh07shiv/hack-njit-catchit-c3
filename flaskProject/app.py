import redis
from flask import Flask, request
import json
from flask_cors import CORS, cross_origin

redis_cache = redis.StrictRedis(host='redis-11354.c284.us-east1-2.gce.cloud.redislabs.com',
                                port=11354, db=0,
                                password="wxkcsbI9pHAcJykt2W3m4xzSAJXQ9FS4")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def json_data():
    keys = redis_cache.keys('*')
    print(keys)
    return "Printed all the keys in Console!"


@app.route('/login', methods=['POST'])
def is_user_exist():
    try:
        request_data = request.get_json()
        print("Request")
        print(request_data)
        email = request_data['email']
        password = request_data['password']

        data_dict = redis_cache.json().get(email)
        print("DB Value")
        print(data_dict)
        if password == data_dict['password']:
            return "success"
        else:
            return "failure"
    except:
        return "failure"


app.run("127.0.0.1", port=9111, debug=True)
