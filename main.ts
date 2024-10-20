import { Hono } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import { serve } from "https://deno.land/std@0.171.0/http/server.ts"; // Import Deno's serve function

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello, Hono with Deno!');
});

app.get('/greet/:name', (c) => {
  const name = c.req.param('name');
  return c.text(`Hello, ${name}!`);
});

// Serve the app using Deno's serve function
serve(app.fetch);  // Use app.fetch for compatibility
