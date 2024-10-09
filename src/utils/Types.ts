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

export type BlogType = {
    id: number
    authorFirstName: string
    authorLastName: string
    date: string
    img: string
    title: string
    content: string
    popularity: number
}

export type CommentType = {
    id: number
    blogId: number
    username: string
    rating: number
    comment: string
}

export type SavedAndLiked = {
    id: number
    blogId: number
    userId: number
}