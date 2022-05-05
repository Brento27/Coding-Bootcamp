import express from 'express'
import WeatherController from './weather.controller.js'

const router = express.Router() // get access to express router
router.route('/').get(WeatherController.apiGetWeather)
export default router