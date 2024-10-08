export interface LoginState {
    username: null | string
    password: null | string
}
 
export type LoginFormProps = {
    sumbitted: React.FormEventHandler<HTMLFormElement> | undefined
    changed: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export type Data = {
    id:number
    img: string
    author:string
    date: string
    title: string
    content: string
    popularity:number
}

