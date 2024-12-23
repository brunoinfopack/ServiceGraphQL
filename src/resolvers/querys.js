const Query = {
    welcome: () => {
        return "Mundo Olá!";
    },
    cities: (_, args, context) => {
        const { cities } = context;
        return cities;
    },
    city: (_, args, context) => {
        const id = args.id;
        const nome = args.nome;
        const { cities } = context;
        return cities.filter(city => {
            return city.id == id || city.nome == nome;
        })[0];
    },
    points: (_, args, context) => {
        const { points } = context;
        return points;
    },
    point: (_, args, context) => {
        const { points } = context;
        const id = args.id;
        return points.filter(point => point.id == id)[0];
    },
    pointsOfCity: (_, args, context) => {
        const { points } = context;
        const id = args.cityId;
        return points.filter(point => point.cityId == id);
    },
};

export default Query;