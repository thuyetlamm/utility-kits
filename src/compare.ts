import checkTypes from "./checkTypes"

const gte = (value: number, other: number) => {
    const convertValue = Number(value)
    const convertOther = Number(other)
    if (checkTypes.isNaN(convertOther + convertValue)) throw "Value is NaN"
    return convertValue >= convertOther
}

const gt = (value: number, other: number) => {
    const convertValue = Number(value)
    const convertOther = Number(other)
    if (checkTypes.isNaN(convertOther + convertValue)) throw "Value is NaN"
    return convertValue > convertOther
}
const lte = (value: number, other: number) => {
    const convertValue = Number(value)
    const convertOther = Number(other)
    if (checkTypes.isNaN(convertOther + convertValue)) throw "Value is NaN"
    return convertValue <= convertOther
}
const lt = (value: number, other: number) => {
    const convertValue = Number(value)
    const convertOther = Number(other)
    if (checkTypes.isNaN(convertOther + convertValue)) throw "Value is NaN"
    return convertValue < convertOther
}

const compareInstance = {
    gte,
    lt,
    lte,
    gt,
}

export default compareInstance
