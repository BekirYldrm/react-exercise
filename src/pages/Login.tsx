
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from '../components/LoginForm'
import { LoginState } from "../utils/type-and-interfaces"

const Login:React.FC = () => {
    const nagivate = useNavigate()
    const [user, setUser] = useState<LoginState>({ username: null, password: null })
    localStorage.setItem("username", "bekir123")
    localStorage.setItem("password", "123456789")

    const changed = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const sumbitted = (event: React.FormEvent<HTMLFormElement>): void => {
        if (user.username == localStorage.getItem("username") && user.password == localStorage.getItem("password")) {
            alert("giris basarili sayfaya yönlendirliyor")
            nagivate("/profile")
        }
        else {
            alert("Hatali bilgi girdiniz!!")
        }
        event.preventDefault()
    }

    return (
        <>
            <LoginForm sumbitted={sumbitted} changed={changed} />
        </>
    )
}

export default Login