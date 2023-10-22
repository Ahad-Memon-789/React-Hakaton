import { Box, Button, Input, Paper, TextField, Typography } from "@mui/material"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbSignUp } from "../config/firebasemethod";
import { InputComponent } from "./component/Components";

export default function SignUp() {
    const [model, setModel] = useState<any>({});
    const [open, setOpen] = useState<boolean>(false)

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const navigate = useNavigate();
    let signUpUser = () => {
        // console.log(model);
        model.role = "User"
        setOpen(true)
        fbSignUp(model)
            .then((res) => {
                if (model.role == "User") {
                    navigate(`/UserQuiz`)
                } else {
                    navigate(`/adminpanel`)
                }
                setOpen(false)
            })
            .catch((err) => {
                alert('Please enter valid email or password');
                setOpen(false)
            });
    };
    let loginRout = () => {
        navigate(`/login`)
    }
    return (<>
        <Box className="d-flex align-items-center justify-content-center">
            <Paper sx={{ textAlign: 'center' }} className="col-md-4 shadow rounded border my-5 py-5 px-5 ">
                <h2 className="mt-0 mb-5">SignUp</h2>

                <InputComponent inpValue={model.UserName}
                    inpChange={(e: any) => fillModel("User Name", e.target.value)}
                    inpType="text"
                    inpLabel="User Name"
                />
                <InputComponent inpValue={model.UserEmail}
                    inpChange={(e: any) => fillModel("email", e.target.value)}
                    inpType="email"
                    inpLabel="User Email"
                />
                <InputComponent inpValue={model.EmailPassword}
                    inpChange={(e: any) => fillModel("password", e.target.value)}
                    inpType="password"
                    inpLabel="Email Password"
                />
                <Typography className="chat-notification-message cursor-pointer">Already have an account please go<span className="chat-notification-message" >:</span> <span className="text-indigo-800" onClick={() => loginRout()}>Log in</span><span className="chat-notification-message">?</span></Typography>
                <Button variant="outlined" onClick={signUpUser} className="mt-5" color="inherit">SignUp</Button>

            </Paper>
        </Box>
    </>)
}