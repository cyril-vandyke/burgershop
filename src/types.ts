export interface OpalMenu{
    meta: MenuInfo
    menu: MenuItem[]
}

export interface MenuInfo{
    version: number,
    date: string
}

export interface MenuItem{
    item:string,
    options:ItemOption[]
}

export interface OrderItem{
    item:string,
    size:string,
    price:number
}

export interface ItemOption {
    size:string,
    price:number
}