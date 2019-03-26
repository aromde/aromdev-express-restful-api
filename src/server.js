import "@babel/polyfill";
import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import moment from 'moment'
import v1 from './routers/version_1/main'
import { API_SETTINGS } from './settings'

var title = `API Port:${API_SETTINGS.PORT} , Build:${API_SETTINGS.API_BUILD_CODE} ${API_SETTINGS.API_BUILD_VERSION} ,  TimeZone:${moment()}`
//database init
const op = Sequelize.Op;

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send(title)
})

app.use('/v1', v1)


app.listen(API_SETTINGS.PORT, () => {
    console.log(title)
})