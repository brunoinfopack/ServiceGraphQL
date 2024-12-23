import { v4 } from 'uuid';

const Mutation = {
    addCity: (_, args, context) => {
        const { newCity } = args;
        const { cities } = context;
        console.log(newCity);
        newCity.id = v4();
        newCity.atualizado = new Date().getUTCMilliseconds();
        cities.push(newCity);
        return newCity;
    },
    addPoint: (_, args, context) => {
        const { newPoint } = args;
        const { points } = context;
        newPoint.id = v4();
        points.push(newPoint);
        return newPoint;
    },
    updateCity: (_, args, context) => {
        const { city } = args;
        const { cities } = context;
        for (let i = 0; i < cities.length; i++) {
            const cidade = cities[i];
            if (cidade.id == city.id) {
                cities[i] = { ...cidade, ...city };
                return cities[i];
            }
        }
        return null
    },
    ExcluirCity: (_, args, context) => {
        const { cities } = context;
        const { id } = args;

        const cidadeIndex = cities.findIndex(cidade => cidade.id === id);
        if (cidadeIndex === -1) {
            throw new Error(`Cidade não encontrada - ${id}`);
        }

        const [removedCidade] = cities.splice(cidadeIndex, 1);

        return removedCidade;
    },
};

export default Mutation;