import { IRecord } from "../models/IRecords"

export const calculatePagginationArray = (step: number, length: number) => {
    let pages = length / step
    let paggArr: number[] = []

    if (pages !== Math.floor(pages)) {
        pages = Math.floor(pages) + 1
    }

    let i = 1
    while (i <= pages) {
        paggArr.push(i)
        i++
    }
    return paggArr
}

export const calculateShowingResults = (choosenPage: number, step: number, length: number) => {
    let i = 1
    let result: number = i
    while (i < choosenPage) {
        result += step
        i++
    }
    let secondNum = result + step - 1

    if (secondNum > length) {
        while (secondNum > length) {
            secondNum--
        }
    }

    return `${result}-${secondNum}`
}

export const filterRecordsByApplied = (arr: IRecord[]): IRecord[] => {
    let filteredArr: IRecord[] = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].isApplyed) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}