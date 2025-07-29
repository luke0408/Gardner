import express from 'express';
import { tempTest } from '../controllers/temp.controller.js';

export const tempRounter = express.Router();

tempRounter.get('/test', tempTest);