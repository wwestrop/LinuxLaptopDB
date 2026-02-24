import { Router } from 'express';

const router = Router();

const allModels = [
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTDW",
    model: "Dell XPS 15 9520 (2022)",
    rating: 5,
    badge: "Gold",
    knownIssues: "Suspend, Hybrid GPU Switching, Webcam IR",
    popularDistros: "Ubuntu 24.04, Fedora 40, Arch",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTEX",
    model: "ThinkPad X1 Carbon Gen 10",
    rating: 4,
    badge: "Silver",
    knownIssues: "Fingerprint Reader, Microphone Mute Button",
    popularDistros: "Ubuntu, Fedora, Arch",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTFY",
    model: "Framework Laptop 13 (Intel 13th Gen)",
    rating: 5,
    badge: "Gold",
    knownIssues: "None (Minor battery drain in suspend)",
    popularDistros: "Fedora, Ubuntu, Arch, NixOS",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTGZ",
    model: "System76 Pangolin (pang12)",
    rating: 5,
    badge: "Gold",
    knownIssues: "None",
    popularDistros: "Pop!_OS, Ubuntu",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTH0",
    model: "ASUS Zephyrus G14 (2022)",
    rating: 3,
    badge: "Bronze",
    knownIssues: "Wi-Fi card (MediaTek), Asusctl required for RGB/Fans",
    popularDistros: "Fedora (asus-linux), Arch",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTI1",
    model: "HP Dev One",
    rating: 5,
    badge: "Gold",
    knownIssues: "None",
    popularDistros: "Pop!_OS, Ubuntu",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTJ2",
    model: "Lenovo IdeaPad Slim 3",
    rating: 2,
    badge: "Bronze",
    knownIssues: "Touchpad occasionally unresponsive, Webcam quality",
    popularDistros: "Mint, Ubuntu",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTK3",
    model: "Apple MacBook Air (M1, 2020)",
    rating: 2,
    badge: "In Progress",
    knownIssues: "GPU Acceleration (Asahi Linux), Sound, Webcam",
    popularDistros: "Asahi Linux (Fedora)",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTL4",
    model: "Razer Blade 15 (2021)",
    rating: 4,
    badge: "Silver",
    knownIssues: "Chroma RGB (OpenRazer needed), High Power Consumption",
    popularDistros: "Arch, Ubuntu, Fedora",
  },
  {
    id: "01KJ0TMA6B4NRE8DT6HYAVWTM5",
    model: "Microsoft Surface Pro 9",
    rating: 1,
    badge: "Broken",
    knownIssues: "Touchscreen, Wi-Fi, Cameras, Suspend (Requires Surface Kernel)",
    popularDistros: "Ubuntu (linux-surface)",
  }
] as const;

router.get('/', async (req, res) => {
  const query = req.query.q as string;
  
  // Simulate a database delay
  await new Promise(resolve => setTimeout(resolve, 1800));

  // Hardcoded search results
  const results = allModels;

  // For now, just return all if there is a query, or an empty list if not.
  // In a real app, we'd filter by the query string.
  res.json(query ? results : []);
});

export default router;
