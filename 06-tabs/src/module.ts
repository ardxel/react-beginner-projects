export type TList = {
    company: string,
    dates: string,
    duties: string[],
    id: string,
    order: 3,
    title: string
}

export interface IListProps {
    list: TList[]
}

export interface IArticleProps {
    jobInfo: TList
}