import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "./component/Components";
import { FbLogin } from "../config/firebasemethod";

export default function Login() {
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };
    let navigate = useNavigate()
    let LoginUser = () => {
        console.log(model);
        FbLogin(model)
            .then((res) => {
                if (res.role == "admin") {
                    navigate(`/adminpanel`)
                } else {
                    navigate(`/UserQuiz`)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    let loginRout = () => {
        navigate(`/signup`)
    }
    return (<>
        <Box className="d-flex align-items-center justify-content-center" >
            <Paper sx={{ textAlign: 'center', width: '35%' }} className="col-md-4 shadow rounded border my-5 py-5 px-5">
                <h2 className="mt-0 mb-5">LOGIN</h2>

                <InputComponent inpValue={model.UserEmail}
                    inpChange={(e: any) => fillModel("email", e.target.value)}
                    inpLabel="User Email"
                    inpType="email"
                />
                <InputComponent inpValue={model.EmailPassword}
                    inpChange={(e: any) => fillModel("password", e.target.value)}
                    inpLabel="Email Password"
                    inpType="password"
                />


                <br />
                <Typography className="chat-notification-message" style={{ cursor: 'pointer' }}>Already don't have an account please go <span className="chat-notification-message" >:</span> <span style={{ color: 'lightsteelblue' }} onClick={() => loginRout()}>Sign Up</span><span className="chat-notification-message">?</span></Typography>
                <Button variant="outlined" className="mt-5" onClick={LoginUser} color="inherit">LOGIN</Button>

            </Paper>
        </Box>
    </>)
}