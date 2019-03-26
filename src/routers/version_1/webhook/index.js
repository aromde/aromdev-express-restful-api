import express from 'express';
import pool from '../../../database/connector'
import { PATH_FILES } from '../../../settings'
import path from 'path';

import request from 'request'
var webhook = express.Router();

webhook.get('/', async (req, res) => {

    res.send('webhook service')
})

webhook.get('/message', async (req, res) => {

    try {

        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        console.log('start webhook')
        var postData = {
            text: "Message from slack bot!!",
        };

        request.post({ url: 'hook url', form: JSON.stringify(postData) }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        });

        res.status(200).send({
            data: [],
            message: 'success',
            error: null
        })


    } catch (error) {
        res.status(404).send({
            data: [],
            message: 'webhook error !',
            error: error
        })
    }
})





export default webhook;