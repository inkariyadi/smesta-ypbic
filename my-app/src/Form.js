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
            <input type="email" id="email"  name="email" placeholder='' required/>
        </div>  
        <div className="input-style-radio">
            <div className="flex1">
                <p>Mengetahui Informasi Pendaftaran Sekolah Melalui</p>
            </div>
            <div className="flex2">
                <div>
                    <label className="container" htmlFor="kerabat">Kerabat
                        <input type="radio" id="kerabat" name="lead_info" value="Kerabat" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="instagram">Instagram
                        <input type="radio" id="instagram" name="lead_info" value="Instagram" />
                        <span className="checkmark"></span>
                    </label> 
                </div>
                <div>
                    <label className="container" htmlFor="website">Website
                        <input type="radio" id="website" name="lead_info" value="Website" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="sekolah_asal">Sekolah Asal
                        <input type="radio" id="sekolah_asal" name="lead_info" value="Sekolah Asal" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="other">Other
                        <input type="radio" id="other" name="lead_info" value="Other" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <div className="input-style-radio">
            <div className="flex1">
                <p>Pendaftaran Tingkat</p>
            </div>
            <div className="flex3">
                <div>
                    <label className="container" htmlFor="toddler">Toddler - KB - TK - Alazhar 45
                        <input type="radio" id="toddler" name="school" value="Toddler - KB - TK - Alazhar 45" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="elementary">SD Islam Alazhar 46
                        <input type="radio" id="elementary" name="school" value="SD Islam Alazhar 46" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="juniorhs">SMP Budi Cendekia Islamic School
                        <input type="radio" id="juniorhs" name="school" value="SMP Budi Cendekia Islamic School" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="container" htmlFor="seniorhs">SMA Budi Cendekia Islamic School
                        <input type="radio" id="seniorhs" name="school" value="SMA Budi Cendekia Islamic School" />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <div className="input-style">
            <label htmlFor='name'>Nama Siswa</label>
            <input type="text" name="name" placeholder='' required />
        </div>
        <div className="input-style">
            <label htmlFor='previous_school'>Sekolah Asal</label>
            <input type="text" name="previous_school" placeholder=''  required/>
        </div>
        <div className="input-style">
            <label htmlFor='address'>Alamat Tinggal</label>
            <input type="text" name="address" placeholder='' required />
        </div>
        <div className="input-style">
            <label htmlFor='guardian'>Nama Ayah/Ibu/Wali</label>
            <input type="text" name="guardian" placeholder='' required />
        </div>
        <div className="input-style">
            <label htmlFor='phone'>No. HP Ayah/Ibu/Wali</label>
            <input type="tel" name="phone" placeholder='' pattern="[0-9]{8,12}" required/>
        </div>
        <div className="input-style-2">

            <input type="submit" value={loading ? "Loading..." : "Submit Pendaftaran"} />
        </div> 
        </form>
        </div>
    </FormStyle>  
  )
}

export default Form;

const FormStyle = styled.div`
    padding-left: 100px; 
    display: flex;
    justify-content: center;
    .container{
        margin: 0;
        
        width: 50vw;
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
            padding: 1em 0;
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
                margin-left: 20px;
                box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
                @media(max-width: 610px){
                    flex: 50%;
                }
            }
        }
        
        .input-style-2{
            padding-top: 0.8em;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            text-align: left;
            padding: 1em 0;
            gap: 0.8em;
            
            input[type=submit]{
                width: 100px%;
                background-color: #5295F1;
                color: #FFFFFFFF;
                outline: none;
                border: none;
                border-radius: 2em;
                padding: 0.8em;
            }
        }
        
        .input-style-radio{
            display: flex;
            text-align: left;
            align-items: center;
            padding: 1em 0;
            .flex1 {
                flex: 30%;
                @media(max-width: 610px){
                    flex: 40%;
                }
            }
            
            .flex3 {
                flex: 70%;
            }
            
            .flex2 {
                flex: 70%;
                display: inline;
                margin-left: 10px;
                margin-bottom: 5px;
                @media(max-width: 610px){
                    flex: 60%;
                }
                
                div {
                    margin-bottom: 10px;
                }
                
                .container {
                    display: inline;
                    position: relative;
                    padding-left: 35px;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;  
                }
                .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                  }
                  
                  /* Create a custom radio button */
                  .checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 15px;
                    width: 15px;
                    background-color: white;
                    border: 2px solid #5295F1;
                    border-radius: 50%;
                  }
                  
                  /* On mouse-over, add a grey background color */
                  .container:hover input ~ .checkmark {
                    background-color: #ccc;
                  }
                  
                  /* When the radio button is checked, add a blue background */
                  .container input:checked ~ .checkmark {
                    background-color: #5295F1;
                    box-shadow: 0px 3px 15px rgba(0,0,0,0.15);
                  }
            }
        }

    }
`
