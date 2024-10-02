import '../LoginForm.css'
const LoginForm = ({ sumbitted, changed }) => {
    return (
        <div className='outer-container'>
            <div className="login-container">
                <form onSubmit={sumbitted}>
                <h1>Login</h1>
                    <input type="text" name="username" placeholder="username" onChange={changed} />
                    <input type="text" name="password" placeholder="password" onChange={changed} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm