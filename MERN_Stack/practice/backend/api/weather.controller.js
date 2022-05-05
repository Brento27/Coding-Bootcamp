import WeatherDAO from '../dao/weatherDAO.js'
export default class WeatherController {
    static async apiGetWeather(req, res, next) {
        const weatherPerPage = req.query.weatherPerPage ?
            parseInt(req.query.weatherPerPage) : 20
        const page = req.query.page ? parseInt(req.query.page) : 0
        let filters = {}
        if (req.query.type) {
            filters.type = req.query.type
        }
        else if (req.query.callLetters) {
            filters.callLetters = req.query.callLetters
        }
        const { weatherList, totalNumWeather } = await
            WeatherDAO.getWeather({ filters, page, weatherPerPage })
        let response = {
            weather: weatherList,
            page: page,
            filters: filters,
            entries_per_page: weatherPerPage,
            total_results: totalNumWeather,
        }
        res.json(response)
    }
}