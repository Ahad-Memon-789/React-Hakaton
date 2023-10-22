import { AltRoute } from "@mui/icons-material";
import { BasicSwitchesComponent, ASTable, BasicDatePiker, BasicSelect, ButtonComponent, IBComponent, InputComponent } from "./Components";
import Navbar from "../NavBar/Navbar";


export default function Call() {

    let tableData = [
        {
            name: "Ahad",
            rollnum: 689,
            class: 9,
            isActive: "yes",
            f_name: <input type="text" placeholder='Enter Your Father Name' />,
        },
        {
            name: "Ali",
            rollnum: 118,
            class: 10,
            isActive: "yes",
            f_name: <input type="text" placeholder='Enter Your Father Name' />,
        },
        {
            name: "Adil",
            rollnum: 190,
            class: 11,
            isActive: "No",
            f_name: <input type="text" placeholder='Enter Your Father Name' />,
        },

        {
            name: "Haseeb",
            rollnum: 123,
            class: 10,
            isActive: "No",
            f_name: <input type="text" placeholder='Enter Your Father Name' />,
        },
    ]
    return (<>

        <Navbar />
        <InputComponent inpLabel="Check" inpType="text" inpValue={'Boiler Plate'} inpChange={() => {
            alert("You Does Not Change This Value")
        }} />
        <ButtonComponent btnValue="Boiler Plate" btnChange={() => { alert('This Is Boiler Plate') }} />
        <IBComponent btnValue="Boiler Plate" btnChange={() => { alert('This Is Boiler Plate') }} />
        <BasicSelect />
        <BasicSwitchesComponent switchChange={() => {
            alert("you don't change boilerPlate Switch")
        }} />
        <BasicDatePiker />

        <ASTable dataSource={tableData} cols={[
            {
                heading: "name",
                key: "name"
            },
            {
                heading: "f_name",
                key: "f_name"
            },
            {
                heading: "rollnum",
                key: "rollnum"
            },
            {
                heading: "class",
                key: "class"
            },
            {
                heading: "isActive",
                key: "isActive"
            },
        ]} />

    </>)
}