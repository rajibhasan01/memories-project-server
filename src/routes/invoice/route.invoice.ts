import { invoiceImage } from './../../services/utility/functions';
import { fileUpload } from './../../services/utility/file-upload';
import { InvoiceService } from './../../services/invoice/service.invoice';
import express from 'express';
const invoiceRoute = express.Router();
const invoiceService = InvoiceService.getInstance();

invoiceRoute.get('/', (req, res) => {
  // invoiceService
  //   .GetAllInvoice()
  //   .then((result) => {
  //     if (result) {
  //       res.render('pages/invoice-list.ejs', { invoiceData: result });
  //     } else {
  //       res.render('pages/invoice-list.ejs');
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(`Can't get the data: ${err}`);
  //   });
  res.send({"msg": "Welcome to home page"})
});


export = invoiceRoute;
