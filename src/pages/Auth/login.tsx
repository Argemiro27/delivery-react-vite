
import SContainerAuth from "./components/SContainerAuth"
import { SCardAuth, SCardBodyAuth, SCardHeadAuth } from "./components/SCardAuth"
import { useState } from "react";
import { Button } from "@mui/material";



function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (email === 'miro@gmail.com' && password === '88701233') {
            window.location.href = "/dashboard";
        }
    };
    return (
        <SContainerAuth>
            <SCardAuth>
                <SCardHeadAuth>
                    <h3>LOGIN</h3></SCardHeadAuth>
                <SCardBodyAuth>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                id="senha"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input m-1"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label m-1" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <Button variant="outlined" size="small" type="submit">
                                LOGIN
                            </Button>
                        </div>
                        <p className="forgot-password d-flex justify-content-end">
                            Esqueci minha senha
                        </p>
                    </form>
                </SCardBodyAuth>
            </SCardAuth>
        </SContainerAuth>
    )
}

export default LoginPage