export interface MenuOptionModel {
    name: string
    ico?: string
    routerLink?: string
    link?: string
    sub?: MenuOptionModel[]
}