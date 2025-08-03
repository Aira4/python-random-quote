# TechCorp - Modern Business Website

A modern, interactive, and responsive five-page business website built with HTML, CSS, and JavaScript. This website showcases a technology consulting company with a focus on innovation, user experience, and modern design principles.

## 🌟 Features

### Modern Design
- **Gradient backgrounds** and contemporary color scheme
- **Glassmorphism effects** for floating cards and navigation
- **Smooth animations** and transitions throughout
- **Professional typography** with carefully selected font hierarchy
- **Clean, minimalist layout** with strategic use of whitespace

### Interactive Elements
- **Animated counters** in the statistics section
- **Portfolio filtering** with smooth transitions
- **Project modals** with detailed information
- **Testimonial slider** with automatic rotation
- **FAQ accordion** with smooth expand/collapse
- **Contact form** with real-time validation
- **Pricing toggle** between monthly/annual plans
- **Service filtering** by category
- **Parallax scrolling** effects

### Responsive Design
- **Mobile-first approach** with breakpoints at 480px, 768px, and 1024px
- **Adaptive navigation** with hamburger menu for mobile
- **Flexible grid layouts** that work on all screen sizes
- **Touch-friendly** buttons and interactive elements
- **Optimized typography** scaling for different devices

### Performance Optimizations
- **CSS custom properties** for consistent theming
- **Optimized animations** using CSS transforms
- **Lazy loading** support for images
- **Minimal dependencies** - only Font Awesome for icons
- **Clean, semantic HTML** structure
- **Efficient CSS** with minimal redundancy

## 📁 Project Structure

```
/
├── index.html          # Home page with hero section
├── about.html          # About page with team and timeline
├── services.html       # Services with pricing and process
├── portfolio.html      # Portfolio gallery with project modals
├── contact.html        # Contact form with validation
├── styles.css          # Main stylesheet with all styling
├── script.js           # JavaScript for all interactions
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Used for primary actions and accents
- **Primary Dark**: `#1d4ed8` - Hover states and emphasis
- **Secondary Gray**: `#64748b` - Secondary text and elements
- **Accent Orange**: `#f59e0b` - Highlights and call-to-action elements
- **Text Primary**: `#1e293b` - Main text content
- **Background Light**: `#f8fafc` - Section backgrounds
- **Background Dark**: `#0f172a` - Footer and dark sections

### Typography
- **Font Family**: Inter, system fonts fallback
- **Heading Scale**: 3rem, 2.5rem, 2rem, 1.5rem, 1.25rem, 1rem
- **Body Text**: 1.1rem with 1.6 line-height
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Spacing System
- **Sections**: 80px vertical padding
- **Containers**: 1200px max-width with 1rem horizontal padding
- **Grid Gaps**: 2rem for most grids, 4rem for major sections
- **Border Radius**: 0.5rem (buttons), 1rem (cards), 50% (circles)

## 🚀 Pages Overview

### 1. Home Page (`index.html`)
- **Hero Section**: Animated gradient background with floating cards
- **Features Grid**: Three-column layout showcasing key benefits
- **Statistics**: Animated counters with impressive numbers
- **Call-to-Action**: Prominent conversion section

### 2. About Page (`about.html`)
- **Company Story**: Two-column layout with features list
- **Mission & Vision**: Three-card layout with icons
- **Team Section**: Grid of team member cards with social links
- **Timeline**: Interactive company journey with milestones

### 3. Services Page (`services.html`)
- **Service Filtering**: Category-based filtering system
- **Service Cards**: Detailed service offerings with pricing
- **Process Steps**: Four-step development process
- **Pricing Plans**: Monthly/annual toggle with feature comparison

### 4. Portfolio Page (`portfolio.html`)
- **Project Gallery**: Filterable portfolio grid
- **Project Modals**: Detailed project information popups
- **Testimonials**: Rotating client testimonials
- **Interactive Overlays**: Hover effects revealing project details

### 5. Contact Page (`contact.html`)
- **Contact Form**: Comprehensive form with validation
- **Contact Methods**: Multiple ways to get in touch
- **FAQ Section**: Collapsible frequently asked questions
- **Map Section**: Placeholder for location information

## 🛠️ Technical Implementation

### HTML Features
- **Semantic structure** with proper heading hierarchy
- **Accessibility attributes** including ARIA labels
- **Meta tags** for SEO and responsive design
- **Font Awesome icons** for visual elements
- **Form validation** attributes

### CSS Features
- **CSS Custom Properties** for theming
- **Flexbox and Grid** layouts
- **CSS animations** and keyframes
- **Media queries** for responsive design
- **Modern selectors** and pseudo-elements
- **CSS gradients** and shadows

### JavaScript Features
- **ES6+ syntax** with arrow functions and const/let
- **Intersection Observer API** for scroll animations
- **Event delegation** for efficient event handling
- **Form validation** with custom error messages
- **Modal management** with focus trapping
- **Smooth scrolling** and parallax effects
- **Performance optimizations** and error handling

## 🎯 Interactive Features

### Navigation
- Fixed header with backdrop blur effect
- Mobile hamburger menu with smooth transitions
- Active page highlighting
- Smooth scroll to sections

### Animations
- Scroll-triggered animations using Intersection Observer
- Floating card animations in hero section
- Hover effects on cards and buttons
- Loading states for form submission

### Form Handling
- Real-time form validation
- Custom error messages
- Success modal confirmation
- Loading states with spinner

### Portfolio
- Category filtering with smooth transitions
- Project detail modals
- Image galleries with placeholders
- Responsive grid layout

### User Experience
- Back-to-top button
- Keyboard navigation support
- Focus management in modals
- Skip-to-content link for accessibility

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 481px to 768px
- **Desktop**: 769px to 1024px
- **Large Desktop**: 1025px and above

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** between pages using the navigation menu
4. **Test features** like form submission, filtering, and modals

## 📈 Performance Considerations

- **Optimized images** with appropriate formats
- **Minimal HTTP requests** 
- **Efficient CSS** with no unused styles
- **JavaScript optimization** with event delegation
- **Smooth animations** using CSS transforms
- **Lazy loading** preparation for images

## 🎨 Customization

### Changing Colors
Update the CSS custom properties in `:root` to change the color scheme:

```css
:root {
    --primary-color: #your-color;
    --accent-color: #your-accent;
    /* ... other variables */
}
```

### Adding Content
- Replace placeholder text with your actual content
- Update team member information in `about.html`
- Modify service offerings in `services.html`
- Add real project data in `portfolio.html`

### Branding
- Replace "TechCorp" with your company name
- Update contact information throughout
- Modify the color scheme to match your brand
- Replace placeholder icons with your logo

## 🔮 Future Enhancements

- **Content Management System** integration
- **Blog section** with article listings
- **Multi-language support**
- **Dark mode toggle**
- **Advanced animations** with libraries like GSAP
- **Progressive Web App** features
- **Backend integration** for form handling
- **Analytics integration**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Built with ❤️ using modern web technologies**
