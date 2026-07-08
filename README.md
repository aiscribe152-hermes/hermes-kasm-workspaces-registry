# Hermes Kasm Workspaces Registry

This repository is my custom Kasm Workspaces registry for Hermes engineering workspaces.

Registry site:

```text
https://aiscribe152-hermes.github.io/hermes-kasm-workspaces-registry/
```

Current workspace entries:

- Hermes Forge
  - Image: `ghcr.io/aiscribe152-hermes/hermes-kasm-forge:1.2`
  - Tags: `1.2`, `latest`
  - Tools: OpenSCAD, FreeCAD, Blender, Bambu Studio, git, Python, curl, jq, and build tools

## Add this registry to Kasm Workspaces

1. Open the Kasm administrator UI.
2. Go to `Admin` -> `Workspaces`.
3. Select `Workspaces Registry`.
4. Select `Add new`.
5. Paste the registry URL:

   ```text
   https://aiscribe152-hermes.github.io/hermes-kasm-workspaces-registry/
   ```

6. Click `Add Registry`.
7. Use the registry filter/icon to show the Hermes registry entries.
8. Add/import the `Hermes Forge` workspace.

## GHCR access

The Forge workspace image is hosted at GitHub Container Registry:

```text
ghcr.io/aiscribe152-hermes/hermes-kasm-forge:1.2
ghcr.io/aiscribe152-hermes/hermes-kasm-forge:latest
```

If Kasm cannot pull the image anonymously, either make the GHCR package public or configure a Kasm Docker registry credential for `ghcr.io` with package read access.

## Updating workspace entries

Workspace definitions live under `workspaces/`.

Each workspace folder contains:

```text
workspace.json
icon.svg or icon.png
```

The GitHub Actions workflow builds the static registry and deploys it to the `gh-pages` branch.
