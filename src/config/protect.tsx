import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fbAuth } from "../config/firebasemethod"
import Loader from '../Authentication/img/31.webp'

export default function Protect(props: any) {
    const { Screen }: any = props
    const [loader, setloader] = useState<any>()

    const navigate = useNavigate()
    let cheakAuth = () => {
        setloader(true)

        fbAuth()
            .then((res) => {
                setloader(false)
            })
            .catch((err) => {
                setloader(false)
                navigate(`/login`)
            })
    }
    useEffect(() => {
        cheakAuth()
    }, [])

    return loader ? (<>
        <h2 className="bg-[rgba(255,255,255,.2)] w-screen flex justify-center items-center"><img src={Loader} alt=""/></h2>
    </>) : (<>
        <Screen />
    </>)
}