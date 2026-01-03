# Bonsai … 🌳

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://bonsaidotdot.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> *Pause. Reflect. Continue…*

A clean, minimalist portfolio website showcasing mobile apps by Bonsai …
Live at **[bonsaidotdot.com](https://bonsaidotdot.com)**

## 📖 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Live Pages](#live-pages)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [Contact](#contact)
- [License](#license)

## About

Bonsai … is a portfolio website highlighting mobile applications developed with a focus on mindfulness, creativity, and user experience. The site features:

- **WordPath** - A word ladder puzzle game designed to challenge your mind
- **SonicBloom** - A beautifully crafted soundboard app for creative audio expression

The website serves as a central hub for app information, support resources, and legal documentation.

## Tech Stack

This is a **static website** built with:

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, animations, and responsive design
- **Vanilla JavaScript** - Dynamic navigation loading and mobile menu interactions
- **GitHub Pages** - Hosting and deployment

No frameworks, no build process—just clean, simple web fundamentals.

## Features

✨ **Key Features:**

- **Responsive Navigation** - Dropdown menus for Apps and Legal sections
  - Desktop: Hover to reveal submenus
  - Mobile: Tap to toggle, fixed positioning for better UX
- **Modular Components** - Reusable nav component loaded dynamically across all pages
- **Mobile-First Design** - Optimized for all screen sizes with horizontal scrolling nav on mobile
- **App Showcases** - Dedicated pages for WordPath and SonicBloom with screenshots and download links
- **Legal Pages** - Privacy policy, terms of service, and support information
- **Ko-fi Integration** - Optional donation support via floating widget
- **Pulsing Tagline** - Animated motto on homepage for brand identity
- **Clean Code** - Well-structured, commented, and maintainable

## Project Structure

```
bonsaidotdot.com/
├── index.html                      # Homepage
├── README.md                       # This file
├── CHANGELOG.md                    # Version history and changes
├── LICENSE                         # MIT License
├── .nojekyll                       # Disables Jekyll processing
├── CNAME                           # Custom domain configuration
├── favicon.ico                     # Site favicon
├── favicon.png                     # High-res favicon for mobile
├── logo.png                        # Bonsai logo
├── app-ads.txt                     # Google AdMob configuration
├── footer.html                     # Shared footer component (deprecated)
│
├── components/
│   └── nav.html                    # Reusable navigation component
│
├── apps/
│   ├── wordpath/
│   │   ├── about.html              # WordPath app page
│   │   ├── WordPath_logo.png       # App logo
│   │   ├── WordPath_GamePlay_0.jpg # Screenshot
│   │   ├── WordPath_LevelSelect_0.jpg
│   │   ├── WordPath_MainScreen_0.jpg
│   │   └── GetItOnGooglePlay_Badge_Web_color_English.png
│   │
│   └── sonicbloom/
│       ├── about.html              # SonicBloom app page
│       ├── SonicBloom_Logo.png     # App logo
│       └── GetItOnGooglePlay_Badge_Web_color_English.png
│
└── legal/
    ├── support.html                # Support contact page
    ├── privacy.html                # Privacy policy
    └── terms.html                  # Terms of service
```

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local web server for development

### Running Locally

**Option 1: Direct File Access** (simplest)
```bash
# Clone the repository
git clone https://github.com/BonsaiDotDotDot/bonsaidotdot.com.git
cd bonsaidotdot.com

# Open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Option 2: Local Web Server** (recommended for testing)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Visit http://localhost:8000
```

Using Node.js:
```bash
# Install live-server globally
npm install -g live-server

# Run from project root
live-server
```

Using VS Code:
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Deployment

This site is automatically deployed via **GitHub Pages**.

### How it works:
1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Site is live at [bonsaidotdot.com](https://bonsaidotdot.com)

### Configuration:
- Custom domain configured via `CNAME` file
- `.nojekyll` file disables Jekyll processing
- Deploys from the root of the `main` branch

### Manual Deployment:
No build process needed—just push to `main` and changes go live automatically.

## Browser Support

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| Chrome  | 90+            | ✅ Fully Supported |
| Firefox | 88+            | ✅ Fully Supported |
| Safari  | 14+            | ✅ Fully Supported |
| Edge    | 90+            | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Android 5+ | ✅ Fully Supported |

**Key Features Used:**
- CSS Flexbox
- CSS Animations (`@keyframes`)
- Fetch API for component loading
- Media queries (`@media (hover: hover)`)
- Modern JavaScript (arrow functions, template literals, `querySelector`)

## Live Pages

- 🏠 [Home](https://bonsaidotdot.com/)
- 🎮 [WordPath](https://bonsaidotdot.com/apps/wordpath/about.html)
- 🎵 [SonicBloom](https://bonsaidotdot.com/apps/sonicbloom/about.html)
- 📧 [Support](https://bonsaidotdot.com/legal/support.html)
- 🔒 [Privacy Policy](https://bonsaidotdot.com/legal/privacy.html)
- 📜 [Terms of Service](https://bonsaidotdot.com/legal/terms.html)

## Contributing

Contributions are welcome! To contribute:

1. **Fork** this repository
2. Create a **feature branch** (`git checkout -b feature/amazing-feature`)
3. Make your changes following the existing code style
4. **Test** your changes locally
5. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. Open a **Pull Request**

### Guidelines:
- Keep navigation links, branding, and the pulsing motto consistent across all pages
- Maintain the modular component structure for nav
- Test on both desktop and mobile devices
- Ensure all pages load the nav component using the same pattern
- Follow the existing CSS naming conventions

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes, releases, and version updates.

**Latest Version:** 1.0.0 (2026-01-03)
- Comprehensive documentation
- Mobile-responsive navigation
- App showcase pages
- Legal documentation

## Contact

- **Email:** [bonsai@bonsaidotdot.com](mailto:bonsai@bonsaidotdot.com)
- **Support:** [support@bonsaidotdot.com](mailto:support@bonsaidotdot.com)
- **Website:** [bonsaidotdot.com](https://bonsaidotdot.com)
- **Ko-fi:** [Support on Ko-fi](https://ko-fi.com/bonsaidotdotdot)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🌳 Pause. Reflect. Continue… 🌳**

Made with 💚 by Bonsai …

[![Ko-fi](https://storage.ko-fi.com/cdn/kofi2.png?v=3)](https://ko-fi.com/bonsaidotdotdot)

</div>
