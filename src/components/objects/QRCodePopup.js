// filepath: c:\Websites\UA-MERN\frontend\src\components\objects\QRCodePopup.js
import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QRCodePopup = () => {
    const appUrl = "http://192.168.1.119:3000"; 

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3>Scan the QR Code to Open the App</h3>
            <QRCodeSVG value={appUrl} size={200} />
        </div>
    );
};

export default QRCodePopup;