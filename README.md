#  Landing Page

##  Components

- **Hero Section** - Eye-catching introduction with animated background
- **Feature Section** - Interactive feature cards with hover effects
- **Testimonials** - User testimonials section
- **Footer** - Responsive footer with navigation links


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aurora-demo.git
   cd aurora-demo/landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Project Structure

```
src/
├── app/               # Main application entry
├── components/        # Reusable UI components
├── widgets/           # Feature components
│   ├── Featuresection/
│   ├── Footer/
│   ├── Herosection/
│   └── Testimonials/
├── index.css          # Global styles
└── App.tsx            # Root component
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
