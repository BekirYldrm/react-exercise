
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from '../components/LoginForm'

const Login = () => {
    const nagivate = useNavigate()
    const [user, setUser] = useState({ username: null, password: null })
    localStorage.setItem("username", "bekir123")
    localStorage.setItem("password", "123456789")

    const changed = (e) => {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const sumbitted = (e) => {
        if (user.username == localStorage.getItem("username") && user.password == localStorage.getItem("password")) {
            alert("giris basarili sayfaya yönlendirliyor")
            nagivate("/profile")
        }
        else {
            alert("Hatali bilgi girdiniz!!")
        }
        e.preventDefault()
    }

    return (
        <>
            <LoginForm sumbitted={sumbitted} changed={changed} />
        </>
    )
}

export default Login