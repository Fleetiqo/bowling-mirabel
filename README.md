# 🎳 Bowling Mirabel - Modern Website

A stunning, modern redesign of the Bowling Mirabel website featuring an interactive bowling game, smooth animations, and a sleek dark theme.

## 🌟 Features

- **Interactive Bowling Game**: Play a mini bowling game right in the hero section
- **Modern Design**: Dark theme with vibrant orange/teal gradients
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: AOS animations, particle effects, and interactive elements
- **Real Content**: All pricing, packages, and contact information from the original site
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL will be here]

## 📋 Content

### Contact Information
- **Address**: 244 Rue Scott, Saint-Jérôme, QC J7Z 1H1
- **Phone**: 450-432-1757
- **Emails**: info@bowlingmirabel.ca, linda@bowlingmirabel.ca, diana@bowlingmirabel.ca

### Services
- 24 bowling lanes
- Cosmic Bowling (Friday 6pm-midnight, Saturday 1pm-midnight)
- Bar & Video Poker (18+)
- Snack bar
- Pro Shop
- Party packages
- Tournaments
- Group events (30+ people)

### Party Packages
- **Kids Packages**: $22.00 - $28.00
- **Adult Packages**: $24.50 - $30.50
- All packages include 2 games, shoes, food/drink, and cake room

## 🛠️ Technologies

- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: No framework dependencies
- **CSS3**: Modern CSS with custom properties and animations
- **HTML5**: Semantic markup

## 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Important: Configure Base Path

The `vite.config.js` is already configured with `base: '/bowling-mirabel/'`. 

**If your repository name is different**, update the base path in `vite.config.js`:

```js
export default defineConfig({
  base: '/YOUR-REPO-NAME/',  // Change this to match your repo name
  // ...
})
```

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions"
4. The site will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Install gh-pages
npm install -D gh-pages

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
bowling-mirabel/
├── css/
│   ├── sections/
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── pricing.css
│   │   ├── packages.css
│   │   ├── gallery.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── enhancements.css
│   └── style.css
├── src/
│   └── main.js
├── public/
│   └── bowling-icon.svg
├── index.html
└── package.json
```

## ✨ Key Features

### Interactive Bowling Game
- 10 realistic bowling pins
- Animated bowling ball with physics
- Score tracking
- Strike detection
- Auto-reset functionality

### Animations
- Particle background system
- Scroll-triggered animations
- 3D card effects
- Smooth transitions
- Parallax scrolling

### Design Elements
- Custom scrollbar
- Scroll progress bar
- Back-to-top button
- Lightbox gallery
- Mobile-optimized menu
- Glowing effects

## 📱 Responsive Design

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🎨 Color Scheme

- Primary: Orange gradient (#FF6B35 → #F7931E)
- Secondary: Teal (#4ECDC4)
- Accent: Yellow (#FFE66D)
- Background: Dark (#0A0E27)

## 📄 License

All content belongs to Bowling Mirabel. This is a redesign project.

## 🙏 Credits

- Original content: bowlingmirabel.ca
- Design & Development: Created with Kiro AI
- Fonts: Google Fonts (Bebas Neue, Inter)
- Images: Unsplash & PNG sources

---

**Built with ❤️ for Bowling Mirabel**
