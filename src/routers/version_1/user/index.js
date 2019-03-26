import express from 'express';
import pool from '../../../database/connector'
import { userActions } from './userActions'

var userRoute = express.Router();
const version = '1.0'

userRoute.get('/', async (req, res) => {

    res.send({
        version: version,
        message: 'user'
    })
})



userRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        var _foods = await userActions.getFoodsById(id, pool)

        res.status(200).send({
            data: _foods.result,
            error: _foods.error
        })

    } catch (error) {
        res.status(404).send({
            data: [],
            error: error.error.parent
        })
    }
})

export default userRoute;