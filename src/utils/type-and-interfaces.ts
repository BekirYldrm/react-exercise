export interface LoginState {
    username: null | string
    password: null | string
}
 
export type LoginFormProps = {
    sumbitted: React.FormEventHandler<HTMLFormElement> | undefined
    changed: React.ChangeEventHandler<HTMLInputElement> | undefined
}
export type CardProps = {
    title: string
    img: string
    subheading: string
    description: string
}

export interface Data {
    id: number;
    img: string;
    title: string;
    subheading: string;
    description: string;
}