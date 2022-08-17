import React from 'react'
import {useState} from 'react'
import QRCode from 'qrcode'


const QrCodeGenarade = () => {
    const [url, setUrl] = useState('')
    const [qrCode, setQrCode] = useState('')

    const generateQr = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 1, 
            color: {
                dark: '#19983EF',
                light: '#EEEEEEFF'
            }
        },  (err,url) => {
            if(err) return console.log(err);

            setQrCode(url)
        })
    }


  return (
    <div>
         <h1>QR code generator</h1>
         <div>
             <input value={url} onChange={e=> setUrl(e.target.value)} placeholder='Enter an URL' />
             <button onClick={generateQr}>Genarate</button>
         </div>
         <img src={qrCode} className='imgQrCode' /> 
    </div>
  )
}

export default QrCodeGenarade