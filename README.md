# YouTube UI Clone

A simple YouTube-inspired user interface built with React. The application recreates the basic YouTube layout with a navigation bar, sidebar, category filters, and a responsive video grid displaying sample video content. The selected category dynamically filters videos on the page. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

## Features

- YouTube-style layout
- Responsive navigation bar
- Sidebar navigation menu
- Category-based video filtering
- Video cards with thumbnails and metadata
- React component-based architecture

---

## Tech Stack

### Frontend
- React
- JavaScript
- CSS

---

## Screenshot

### Home Page

![YouTube UI Clone](public/home.png)

---

## Project Structure

```text
youtube/
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   ├── App.js
│   ├── App.css
│   ├── Categories.js
│   ├── Navbar.js
│   ├── Sidebar.js
│   ├── Videocards.js
│   ├── Videogrid.js
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

---

## Components

### Navbar
- Search bar
- Create button
- Notifications icon
- User profile section

### Sidebar
- Home
- Shorts
- Subscriptions
- You

### Categories
- Dynamic category filter buttons

### Video Grid
- Displays video cards
- Filters videos based on selected category

---

## Application Workflow

1. The application loads all available videos.
2. Users select a category from the category bar.
3. Videos are filtered based on the selected category.
4. Matching videos are displayed in the video grid.

---

## Installation

```bash
git clone <repository-url>

cd youtube

npm install

npm start
```

Open:

```text
http://localhost:3000
```

---

## Author

### Atmika Nayak

GitHub: https://github.com/AtmikaNayak
