import { type } from "os";
import Button from "@mui/material/Button/Button";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from "@mui/material"

// _______________ Input Component _______________ //

type inPutType = {
    inpValue: any,
    inpType: string,
    inpChange: any,
    inpLabel: string,
}
function InputComponent(props: inPutType) {
    return (
        <>
            <div className="text-center">
                <input className="my-3 w-50 rounded p-1 border bg-info-subtle" placeholder={props.inpLabel} type={props.inpType} value={props.inpValue} onChange={props.inpChange} />
            </div>
        </>
    )
}

// _______________ Button Component _______________ //

type typeButton = {
    btnValue: string,
    btnChange: any,
}

function ButtonComponent(props: typeButton) {
    return (
        <>
            <div className="text-center">
                <button className="btn btn btn-outline-info btn-lg w-50 my-3" onClick={props.btnChange}>
                    {props.btnValue}
                </button>
            </div>
        </>
    )
}

// _______________ Icon Button Component _______________ //

type typeIBC = {
    btnValue: string,
    btnChange: any,
}

function IBComponent(props: typeIBC) {
    return (
        <>
            <div className="text-center">
                <Button sx={{ width: "50%", marginY: "30px", padding: 1, borderRadius: "10px" }} variant="outlined" color="info" onClick={props.btnChange} endIcon={<KeyboardTabIcon />}>{props.btnValue}</Button>
            </div>
        </>
    )
}

// _______________ Switch Component _______________ //

const label = { inputProps: { 'aria-label': 'Switch demo' } };

type BSC_type = {
    switchChange: any
}

function BasicSwitchesComponent(props: BSC_type) {
    return (
        <div className="text-center">
            <Switch {...label} defaultChecked onChange={props.switchChange} />
        </div>
    );
}

// _______________ Table Component _______________ //

type tableType = {
    dataSource: any[],
    cols: any[],
}

function ASTable(props: tableType) {
    const { dataSource, cols } = props
    return (
        <>
            <table className="table my-4 table-striped table-dark text-white" border={1}>
                <thead>
                    <tr>
                        {cols.map((x, i) => {
                            return (
                                <>
                                    <th key={i}>{x.heading}</th>
                                </>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((row, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    {cols.map((col, i) => {
                                        return (
                                            <>
                                                <td key={i}>{row[col.key]}</td>
                                            </>
                                        )
                                    })}
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

// _______________ Select Component ______________//

function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ m: 1, width: 300, marginX: "auto", marginY: 3 }}>
            <FormControl fullWidth variant="filled" className="text-center">
                <InputLabel id="demo-simple-select-label">Select Mobile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"Iphone"}>Iphone</MenuItem>
                    <MenuItem value={"Redmi"}>Redmi</MenuItem>
                    <MenuItem value={"Vivo"}>Vivo</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

// _______________ DatePicker Component ______________//
function BasicDatePiker() {
    return (<>
        <TextField type="date" id="filled-basic"className="mb-3" variant="outlined" />

    </>)

}


// ______________________ Export All Components Below ______________________ //

export { BasicSwitchesComponent,InputComponent, ButtonComponent, IBComponent, BasicDatePiker, ASTable, BasicSelect }