import { Request, Response } from 'express';

// Controller for handling GET requests
export const getMain = (req: Request, res: Response): void => {
  res.json({ message: 'GET request successful' });
};

// Controller for handling POST requests
export const createMain = (req: Request, res: Response): void => {
  const data = req.body;
  res.json({ message: 'POST request successful', data });
};
