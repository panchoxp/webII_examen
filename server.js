const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

// Create a server
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Ruta a tu archivo db.json
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Set up auth middleware
const rules = auth.rewriter({
    // Define roles and permissions here
    'users': 600,
    'libros': 640,
});

server.use(rules);
server.use(auth);

// Use default router
server.use(router);

// Start server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
