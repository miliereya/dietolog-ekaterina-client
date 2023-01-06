export interface IRecord {
    _id: string
    name: string
    phone: string
    email: string
    isApplyed: boolean
    createdAt: Date
}

export interface IRecordCreate {
    name: string
    phone: string
    email: string
}