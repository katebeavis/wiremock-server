import express from 'express';
import proxy from 'express-http-proxy';

const router = express.Router();

const singleRoutes = ['/api'];

router.use(
  singleRoutes,
  proxy('http://localhost:8083', {
    proxyReqPathResolver: (req) => req.originalUrl,
  })
);

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'Wiremock is running!' });
});

export default router;
