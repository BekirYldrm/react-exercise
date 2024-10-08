export interface LoginState {
    username: null | string
    password: null | string
}

export type LoginFormProps = {
    sumbitted: React.FormEventHandler<HTMLFormElement> | undefined
    changed: React.ChangeEventHandler<HTMLInputElement> | undefined
}
export type CommentFormProps = {
    sumbitted: React.FormEventHandler<HTMLFormElement> | undefined
}

export type BlogData = {
    id: number
    img: string
    author: string
    date: string
    title: string
    content: string
    popularity: number
}

export type CommentData = {
    id: number
    username: string
    rating:number | null
    comment: string
}

export type BlogSectionData = BlogData & { comments: Array<CommentData> }

