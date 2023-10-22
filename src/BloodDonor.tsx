import { Box, Paper, Typography, TextField, Button, Avatar } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { fbGet } from "./config/firebasemethod";

export default function BloodADonor() {
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true)
  const [getData, setGetData] = useState<any>([])
  const getDatafromDb = () => {
    fbGet('users')
      .then(res => {
        console.log(res)
        setGetData([...res])
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
        setLoader(false)
      })
  }
  useEffect(() => {
    getDatafromDb()
  }, [])
  return (

    <div>
      {loader ? (<div>
        <Backdrop
          sx={{ color: '', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
        >
          <CircularProgress color="error" />
        </Backdrop>
      </div>) : (
        <>
          <div className="bg-gradient-to-r from-red-500 via-red-700 to-red-500   h-screen ">
            <div className="bg-black h-20 text-red-700 text-center flex justify-center text-bolder"><h1>Welcome To Blood Bank Application</h1></div>
            <div className="grid md:grid-cols-4 grid-cols-1">
              {


                getData.filter((blood: any) => blood.role == 'Donor').map((x: any, i: any) => {
                 
                    return (
                      <div className="bg-black m-3 transition-border ease-in-out p-5 border-y-4 border-white text-center  rounded-md hover:border-t-0 hover:duration-100 hover:border-y-0 hover:border-x-4 hover:transition-all flex flex-col items-center">
                        <Avatar className="bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-2" src="/broken-image.jpg" />
                        <h6 className="my-2"><span className="text-danger underline">User Name</span><span className="text-white ">:</span><span className="text-white underline">{x.UserName}</span></h6>
                        <h6 className="my-2"><span className="text-danger underline">Blood Group</span><span className="text-white ">:</span><span className="text-white underline">{x.blood}</span></h6>
                        <h6 className="my-2"><span className="text-danger underline">Blood Role</span><span className="text-white ">:</span><span className="text-white underline">{x.role}</span></h6>
                        <h6 className="my-2"><span className="text-danger underline">Contact</span><span className="text-white ">:</span><span className="text-white underline">{x.contactNo}</span></h6>
                      </div >
                    )
                })
              }

            </div>

          </div>

        </>)}

    </div>
  )
}