import express from 'express';
import { userContributions } from '../controllers/github.controller.js';

export const githubRounter = express.Router();

githubRounter.get('contributions/:username', userContributions);
