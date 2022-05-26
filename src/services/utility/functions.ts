import * as fs from 'fs';
import jwt from 'jsonwebtoken';
import { ConfigService } from './configService';
import dotenv from "dotenv";
dotenv.config()


const config = ConfigService.getInstance().getConfig();


export const invoiceImage = (req: any, res: any, next: any) => {
  let imagePath = req.body.imagePath;
  const imageName = req.body.imgName;

  delete req.body.imagePath;
  delete req.body.imagePath;

  if (req.files.imageName) {
    const image = req.files.imageName[0];
    imagePath = `/invoice/${new Date()
      .getTime()
      .toString()}_${image.originalname.replace(
      /(?:\.(?![^.]+$)|[^\w.])+/g,
      '-'
    )}`;

    const fileContents = Buffer.from(image.buffer, 'base64');
    fs.writeFile(`uploaded-image/${imagePath}`, fileContents, (err) => {
      if (err) return console.error(err.message);
    });
    const newData = { ...req.body, imagePath, imageName: image.originalname };
    req.body = newData;
  }
  else{
    const newData = {...req.body, imagePath, imageName};
    req.body = newData
  }

  next();
};


const scrtToken = process.env.ACCESSS_TOKEN_SECRET;


// Issue Token
export const generateToken = async(user:any): Promise<string> => {
  const tokenSecret: string = scrtToken;
  const tokenMaxAge: string = config.token.expired_time;
  return new Promise<string>((resolve, reject) => {

    jwt.sign({
      userEmail: user._json.email,
      expiresIn: tokenMaxAge,
    }, tokenSecret, { algorithm: 'HS256'}, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
}


// Check for validation of jwt token
export const checkValidation = (req:any, res:any, next:any) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, scrtToken, (err:any, user:any) => {
    if (err) {
      return res.send({ msg: 'JsonWebTokenError: invalid signature' });
    } else {
      req.user = user;
      req.body.userEmail = user.userEmail;
      next();
    }
  });
};