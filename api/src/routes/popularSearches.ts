import { Router, Request, Response } from 'express';

const router = Router();

const popularSearches = [
  "ThinkPad T480",
  "Dell XPS 13",
  "System76 Pangolin",
  "MacBook Pro 2021",
  "Framework Laptop"
];

router.get('/', (req: Request, res: Response) => {
  res.json(popularSearches);
});

export default router;
