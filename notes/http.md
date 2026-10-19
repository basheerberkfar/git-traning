# Exercise 3 — HTTP Exploration Report

**Public API:** JSONPlaceholder (`https://jsonplaceholder.typicode.com`).  
**Tool:** `curl.exe -i` — show response status, headers and body.

## 1. GET /posts/1 — 200 OK

```bash
curl.exe -i https://jsonplaceholder.typicode.com/posts/1
```

- Method: `GET` requests a resource without modifying it.
- URL: `https` encrypted transport to host `jsonplaceholder.typicode.com`, path `/posts/1` selects a post.
- status: `200 OK` — resource retrieved successfully.
- `Content-Type`: `application/json;` (actual formatting may vary), which tells the client the body contains JSON text.
- Example JSON body:

```json
{ "userId": 1, "id": 1, "title": "...", "body": "..." }
```

## 2. GET /posts/999999 — 404 Not Found

```bash
curl.exe -i https://jsonplaceholder.typicode.com/posts/999999
```

- Method/URL: `GET`, same host and transport, path of a nonexistent resource.
- status: `404 Not Found` — no matching resource exists.
- Content-Type: read it from your output; a JSON response is possible, but an error body should not be assumed to have a specific format.
- JSONPlaceholder has historically used `{}` for a missing post; confirm the actual body.

## 3. POST invalid JSON — expected 400 or another 4xx

```bash
curl.exe -i "https://httpbingo.org/status/400"
```

- Method/URL: `GET` submits a request body to `/status`.
- Request `Content-Type`: `text/plain; charset=utf-8`.
- error: `400 Bad Request`.

**Tip:** In Windows PowerShell, i'm used `curl.exe` to ensure you run actual cURL.
