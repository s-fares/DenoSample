import { Hono } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import { serve } from "https://deno.land/std@0.171.0/http/server.ts";

const app = new Hono();

// Serve the index page
app.get('/', async (c) => {
    try {
        const html = await Deno.readTextFile('./web/index.html');
        return c.html(html);
    } catch (error) {
        console.error("Error reading index.html:", error);
        return c.text("Internal Server Error", 500);
    }
});

// Serve the login page
app.get('/login', async (c) => {
    try {
        const html = await Deno.readTextFile('./web/login.html');
        return c.html(html);
    } catch (error) {
        console.error("Error reading login.html:", error);
        return c.text("Internal Server Error", 500);
    }
});

// Start listening on port 8000
serve(app.fetch, { port: 8000 });
console.log('Server running at http://localhost:8000');
