import React, {useState, useRef} from 'react'
import styled from 'styled-components'

const Form = () => {
    const FormRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbytsB5osDVt3Vzc8QHd1_zaa0fGLr0gY1EBQdcLs3n6n2YmRzp4z_HTUh111uHBYMxJ7Q/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(FormRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            console.log(new FormData(FormRef.current))
        })
        .catch(err => console.log(err))
    }

  return (
    <FormStyle>
        <div className="container">
        <form  ref={FormRef} onSubmit={handleSubmit} name="google-sheet">
        <div className="input-style">
            <label htmlFor='email'>
                Alamat Email
            </label>
            <input type="email" id="email"  name="email" placeholder='' />
        </div>  
        <div className="input-style-radio">
            <p>Mengetahui InhtmlFormasi Pendaftaran Sekolah Melalui</p>
            <div>
                <div>
                    <input type="radio" id="kerabat" name="lead_info" value="Kerabat" />
                    <label htmlFor="kerabat">Kerabat</label>
                </div>
                <div>
                    <input type="radio" id="instagram" name="lead_info" value="Instagram" />
                    <label htmlFor="instagram">Instagram</label> 
                </div>
                <div>
                    <input type="radio" id="website" name="lead_info" value="Website" />
                    <label htmlFor="website">Website</label>
                </div>
                <div>
                    <input type="radio" id="sekolah_asal" name="lead_info" value="Sekolah Asal" />
                    <label htmlFor="sekolah_asal">Sekolah Asal</label>
                </div>
                <div>
                    <input type="radio" id="other" name="lead_info" value="Other" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
        </div>
        <div className="input-style-radio">
            <p>Pendaftaran Tingkat</p>
            <div>
                <div>
                    <input type="radio" id="toddler" name="school" value="Toddler - KB - TK - Alazhar 45" />
                    <label htmlFor="toddler">Toddler - KB - TK - Alazhar 45</label>
                </div>
                <div>
                    <input type="radio" id="elementary" name="school" value="SD Islam Alazhar 46" />
                    <label htmlFor="elementary">SD Islam Alazhar 46</label>
                </div>
                <div>
                    <input type="radio" id="juniorhs" name="school" value="SMP Budi Cendekia Islamic School" />
                    <label htmlFor="juniorhs">SMP Budi Cendekia Islamic School</label>
                </div>
                <div>
                    <input type="radio" id="seniorhs" name="school" value="SMA Budi Cendekia Islamic School" />
                    <label htmlFor="seniorhs">SMA Budi Cendekia Islamic School</label>
                </div>
            </div>
        </div>
        <div className="input-style">
            <label htmlFor='name'>Nama Siswa</label>
            <input type="text" name="name" placeholder='' />
        </div>
        <div className="input-style">
            <label htmlFor='previous_school'>Sekolah Asal</label>
            <input type="text" name="previous_school" placeholder='' />
        </div>
        <div className="input-style">
            <label htmlFor='address'>Alamat Tinggal</label>
            <input type="text" name="address" placeholder='' />
        </div>
        <div className="input-style">
            <label htmlFor='guardian'>Nama Ayah/Ibu/Wali</label>
            <input type="text" name="guardian" placeholder='' />
        </div>
        <div className="input-style">
            <label htmlFor='phone'>No. HP Ayah/Ibu/Wali</label>
            <input type="tel" name="phone" placeholder='' pattern="[0-9]{8,12}"/>
        </div>
        <div className="input-style">

            <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
        </div> 
        </form>
        </div>
    </FormStyle>  
  )
}

export default Form;

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        background-color: #F9CFF2;
        margin-top: 10%;
        padding: 10rem 10rem 10rem 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 610px){
            padding: 4rem 4rem 4rem 4rem;
        }

        .input-style{
            padding-top: 0.8em;
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: left;
            gap: 0.8em;

            label{
                font-family: 'Poppins', sans-serif;
                flex: 30%;
                @media(max-width: 610px){
                    flex: 50%;
                }
            }

            input{
                flex: 70%;
                outline: none;
                border: none;
                padding: 0.8em;
                border-radius: 2em;
                @media(max-width: 610px){
                    flex: 50%;
                }
            }
            input[type=submit]{
                background-color: #52154E;
                color: #FFFFFFFF;
                font-weight: bold;


            }
        }
        
        .input-style-radio{
            display: flex;
            text-align: left;
            align-items: center;
            p {
                flex: 30%;
                @media(max-width: 610px){
                    flex: 40%;
                }
            }
            
            div {
                flex: 70%;
                display: block;
                @media(max-width: 610px){
                    flex: 60%;
                }
            }
        }

    }
`
