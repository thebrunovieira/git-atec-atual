export interface NewsitemModel {
    id: number

    title: string
    text: string
    tag?: string
    postDate: {
        day: number,
        month: number,
        year: number,
        minute: number,
        hour: number
    }
    
    author?: string
    cover?: {
        image: string
        position: number
    }
}