import { NewsitemModel } from './../models/newsitem.model';
export class Newsitem {

    private id: number;

    private title: string;
    private text: string;
    private author?: string;
    private tag?: string
    private postDate: Date;

    private image?: string
    private position?: number
    

    constructor( newsitem: NewsitemModel ) {
        this.id = newsitem.id;
        this.title = newsitem.title;
        this.text = newsitem.text;
        this.author = newsitem.author;
        this.tag = newsitem.tag;

        this.postDate = new Date(
            newsitem.postDate.year,
            newsitem.postDate.month,
            newsitem.postDate.day,
            newsitem.postDate.hour,
            newsitem.postDate.minute
        );

        this.image = newsitem.cover?.image;
        this.position = newsitem.cover?.position;
    }

    getID() { return this.id }

    getTitle() { return this.title; }
    setTitle(title: string) { this.title = title; }

    getText() { return this.text; }
    setText(text: string) { this.text = text; }

    getAuthor() { return this.author; }
    setAuthor(author: string) { this.author = author; }

    getTag() { return this.tag; }
    setTag(tag: string) { this.tag = tag; }
    verifyTag(tag: string) {
        if (tag == this.getTag()) return true;
        return false;
    }

    getCover() {
        if (this.image) return { image: this.image, position: this.position ? this.position : 50 };
        return undefined;
    }
    setCover(image: string, position?: number) {
        this.image = image,
        this.position = position ? position : 50;
    }

    getStringPostDate() {
        const months =  ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
        
        const date = {
            day: this.postDate.getDay(),
            month: months[this.postDate.getDay() - 1],
            hour: this.postDate.getDay(),
            minute: this.postDate.getDay(),
        }

        return `${date.day} de ${date.month}, ${date.hour}:${date.minute > 9 ? date.minute : `0${date.minute}`}`;
    }
    getPostdate() { return this.postDate }
}