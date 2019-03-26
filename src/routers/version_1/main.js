import express from 'express';
var v1 = express.Router();

import user from './user/index'
import webhook from './webhook/index'

const version = '1.0'

v1.get('/', async (req, res) => {
    res.send(`api middleware version ${version}`)
})

v1.use('/user', user)
v1.use('/webhook', webhook)
export default v1;