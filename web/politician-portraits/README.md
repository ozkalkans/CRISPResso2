# This Politician Does Not Exist

A static demo inspired by [thispersondoesnotexist.com](https://thispersondoesnotexist.com) that pairs an AI-generated face with a fictional political profile.

## Running locally

Serve the directory with any static file server, for example:

```bash
cd web/politician-portraits
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) to generate new fictional politicians.

## Notes

- Portraits come directly from thispersondoesnotexist.com on each refresh; no model weights or assets are stored in this repository.
- Names, regions, parties, and platform planks are randomly generated on the client to keep everything synthetic.
