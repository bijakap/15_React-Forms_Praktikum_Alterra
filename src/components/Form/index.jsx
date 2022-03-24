import { useState } from "react"
import style from "./style.module.css"

const Form = ({data ,errorMassage, suratKesungguhan,setData,setErrorMassage}) => {
    const [active, setActive] = useState(3)

    const handleInput = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleReset = (e) => {
        e.preventDefault()
        setActive(3)
        setData({
            nama: "",
            email: "",
            noHandphone: "",
            pendidikan: "",
            kelas: "",
            harapan: ""
        })
        setErrorMassage({
            nama: "",
            email: "",
            noHandphone: "",
          } )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const regexStringOnly = /^[a-zA-Z ]*$/
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const Error = {
            nama: "",
            email: "",
            noHandphone: "",
        }
        if (!data.nama.match(regexStringOnly)){ 
            Error.nama = "Name Lengkap Harus Berupa Huruf"
        }
        if (!data.email.match(regexEmail)){
            Error.email = "Email Tidak Sesuai"
        }
        if (data.noHandphone.length <= 8 || data.noHandphone.length >= 14){
            Error.noHandphone = "No Handphone Tidak Sesuai"
        }
        
        if(Error.nama.length === 0 && Error.email.length === 0 && Error.noHandphone.length === 0){
            alert(`Data Pendaftar ${data.nama} Berhasil diterima`)
        } else {
            alert("Data Pendaftar Tidak Sesuai")
        }
        setErrorMassage(Error)
    }

    return(
        <div>
            <h1>Pendaftaran Peserta Coding Bootcamp</h1>
            <form className={style.form_wrapper} onSubmit={handleSubmit}>
                <div className={style.inputan}>
                    <label>Nama Lengkap :</label>
                    <input type="text" name="nama" value={data.nama} required onChange={(e) => {handleInput(e)}}/>
                </div>
                <div className={style.inputan}>
                    <label>Email :</label>
                    <input type="email" name="email" value={data.email} required onChange={(e) => {handleInput(e)}}/>
                </div>
                <div className={style.inputan}>
                    <label>No Handphone :</label>
                    <input type="number" name="noHandphone" value={data.noHandphone} required onChange={(e) => {handleInput(e)}}/>
                </div>
                <div className={style.inputan}>
                    <label>Latar Belakang Pendidikan:</label>
                    <div>
                        <input type="radio" value="Non IT" checked={active === 0} name="pendidikan" required onChange={(e) => {handleInput(e); setActive(0)}} />Non IT
                        <input type="radio" value="IT" checked={active === 1} name="pendidikan" required onChange={(e) => {handleInput(e); setActive(1)}} />IT
                    </div> 
                </div>
                <div className={style.inputan}>
                    <label>Kelas Coding yang Dipilih</label>
                    <select name="kelas" required onChange={(e) => {handleInput(e)}}>
                        <option value={data.kelas} disabled selected>Pilih Salah Satu Program</option>
                        <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                        <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                    </select>
                </div>
                <div className={style.inputan}>
                    <label>Foto Surat Kesungguhan:</label>
                    <input type="file" ref={suratKesungguhan} required onChange={() => {console.log(suratKesungguhan.current.files[0].name)}}/>
                </div>
                <div className={style.inputan}>
                    <label>Harapan Untuk Coding Bootcamp ini :</label>
                    <textarea value={data.harapan} name="harapan" rows={4} onChange={(e) => {handleInput(e)}}/>
                </div>
                <ul className="">
                    {errorMassage.nama.length > 0 ? <li>{errorMassage.nama}</li> : <></>}
                    {errorMassage.email.length > 0 ? <li>{errorMassage.email}</li> : <></>} 
                    {errorMassage.noHandphone.length > 0 ? <li>{errorMassage.noHandphone}</li> : <></>} 
                </ul>
                <div className={style.submit_form}>
                    <input type="submit" value="submit"/>
                    {/* <button onClick={(e) => {handleSubmit(e)}}>Submit</button> */}
                    <button onClick={(e) => {handleReset(e)}}>Reset</button>
                </div>
            </form>
        </div>   
    )
}

export default Form;