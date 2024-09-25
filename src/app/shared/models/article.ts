import { User } from "./user"

export interface Article {
    id?: number,
    writer?: User
    title?: string,
    content?: string,
    date?: string,
    time?: string,
    photo?: string,
    subtitle?: string,
    comments? : Array<Comment>
}
