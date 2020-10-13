type CloneDeep = <T>(value: T) => T;
const cloneDeep: CloneDeep = obj => JSON.parse(JSON.stringify(obj));

export default cloneDeep;
