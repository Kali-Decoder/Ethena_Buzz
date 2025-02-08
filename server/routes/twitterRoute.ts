import { Router } from 'express';
import { createMain, getMain } from '../controllers/twitterController';

const router = Router();

// GET request handler for the main route
router.get('/', getMain);

// POST request handler for creating a new resource
router.post('/', createMain);

export default router;
