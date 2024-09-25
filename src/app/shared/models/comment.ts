import { Article } from "./article";
import { User } from "./user";

export interface Comment {
    id?: number,
    user?: User,
    article?: Article,
    content?: string,
    date?: string,
    time?: string
}

export default Comment
