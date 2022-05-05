let weather
export default class WeatherDAO {
    static async injectDB(conn) {
        if (weather) {
            return
        }
        try {
            weather = await conn.db(process.env.WEATHERDATA_NS)
                .collection('data')
        }
        catch (e) {
            console.error(`unable to connect in WeatherDAO: ${e}`)
        }
    }

    static async getWeather({// default filter
        filters = null,
        page = 0,
        weatherPerPage = 20, // will only get 20 weather at once
    } = {}) {
        let query
        if (filters) {
            if ("callLetters" in filters) {
                query = { $text: { $search: filters['callLetters'] } }
            } else if ("type" in filters) {
                query = { "type": { $eq: filters['type'] } }
            }
        }
        let cursor
        try {
            cursor = await weather
                .find(query)
                .limit(weatherPerPage)
                .skip(weatherPerPage * page)
            const weatherList = await cursor.toArray()
            const totalNumWeather = await weather.countDocuments(query)
            return { weatherList, totalNumWeather }
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { weatherList: [], totalNumWeather: 0 }
        }
    }

}

