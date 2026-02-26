const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/stkpush", async (req, res) => {

  const phone = req.body.phone;
  const amount = req.body.amount;

  const response = await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest",
    {    
   "Initiator":"API_Usename",
   "SecurityCredential":"FKXl/KPzT8hFOnozI+unz7mXDgTRbrlrZ+C1Vblxpbz7jliLAFa0E/…../uO4gzUkABQuCxAeq+0Hd0A==",
   "Command ID": "BusinessBuyGoods",
   "SenderIdentifierType": "4",
   "RecieverIdentifierType":"4",
   "Amount":"239",
   "PartyA":"123456",
   "PartyB":"000000",
   "AccountReference":"353353",
   "Requester":"254700000000",
   "Remarks":"OK",
   "QueueTimeOutURL":"https://mydomain.com/b2b/businessbuygoods/queue/",
   "ResultURL":"https://mydomain.com/b2b/businessbuygoods/result/",
},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  res.json(response.data);
});


