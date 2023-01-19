export type TMenu = {
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string
}

export interface ICategoriesProps {
    categories: string[];
    filterCategory: (category: string)  => void
}

export interface IMenuProps {
    menu: TMenu[];
}