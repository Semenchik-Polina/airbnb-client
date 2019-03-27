const devideArray = (array, size) => {
    const devidedArray = [];
    for (let i = 0; i < Math.ceil(array.length / size); i += 1) {
        devidedArray[i] = array.slice(i * size, i * size + size);
    }

    return devidedArray;
};

export default devideArray;
