# Spikerz - Security Dashboard

A modern Angular 20+ application featuring a comprehensive security dashboard with asset management, risk visualization, and interactive graphs.

## 🔗 Links

- **Live Site**: [https://spikerz-git-master-stellavins-projects.vercel.app/](https://spikerz-git-master-stellavins-projects.vercel.app/)
- **GitHub Repository**: [https://github.com/stellavin/spartz](https://github.com/stellavin/spartz)

## Features

- **Angular 20+** with standalone components and modern architecture
- **PrimeNG UI Components** for professional interface design
- **Interactive Graphs** using Chart.js and ngx-graph for data visualization
- **Responsive Design** with mobile-first approach
- **Security Dashboard** with asset management and risk assessment
- **Real-time Data Visualization** with interactive charts and graphs
- **Modern SCSS Styling** with custom variables and theming

## Tech Stack

- **Frontend Framework**: Angular 20+
- **UI Library**: PrimeNG 18.0.0
- **Charts**: Chart.js 4.5.0
- **Graph Visualization**: @swimlane/ngx-graph 11.0.0
- **Styling**: SCSS with custom variables
- **Icons**: PrimeIcons 7.0.0
- **TypeScript**: 5.4.0

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── constants/          # Navigation and app constants
│   │   ├── guards/             # Route guards
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── models/             # TypeScript interfaces
│   │   ├── services/           # Core services
│   │   ├── state/              # State management
│   │   ├── styles/             # SCSS variables and mixins
│   │   └── utils/              # Utility functions
│   ├── features/
│   │   └── dashboard/          # Main dashboard feature
│   │       ├── sections/       # Dashboard sections
│   │       │   ├── left-section/     # Left panel components
│   │       │   └── right-section/    # Right panel components
│   │       │       ├── assets-and-risk-section/
│   │       │       ├── assets-table/
│   │       │       ├── contextual-risk-summary/
│   │       │       └── graph-panel/
│   │       └── models/         # Dashboard-specific models
│   ├── integrations/
│   │   └── react-flow/         # React Flow integration
│   ├── layout/
│   │   ├── shell/              # Main shell component
│   │   └── side-nav-bar/       # Navigation sidebar
│   ├── shared/
│   │   ├── components/         # Reusable UI components
│   │   ├── directives/         # Custom directives
│   │   └── pipes/              # Custom pipes
│   ├── app.component.ts        # Root component
│   └── app.config.ts           # App configuration
├── assets/                     # Static assets (icons, images)
├── theme/                      # PrimeNG theme customization
├── styles.scss                 # Global styles
└── index.html                  # HTML entry point
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spikerz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## Dashboard Features

### Left Section
- Navigation and overview components
- Quick access to key metrics

### Right Section
- **Graph Panel**: Interactive data visualization
- **Assets Table**: Comprehensive asset management
- **Risk Summary**: Contextual risk assessment
- **Assets & Risk Section**: Detailed risk analysis

## Styling & Theming

The application uses a custom SCSS architecture with:
- **Variables**: Centralized color palette, spacing, and typography
- **Component-specific styles**: Modular SCSS files
- **PrimeNG theming**: Custom theme overrides
- **Responsive design**: Mobile-first approach

## Development

### Code Structure
- **Standalone Components**: Modern Angular architecture
- **TypeScript**: Strict type checking enabled
- **SCSS Modules**: Component-scoped styling
- **Service Architecture**: Centralized business logic

### Key Components
- **Dashboard**: Main application view
- **Shell**: Layout wrapper with navigation
- **Graph Panel**: Interactive data visualization
- **Asset Management**: Comprehensive asset tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.

---

**Note**: This is a security-focused dashboard application designed for asset management and risk visualization. The UI is built with modern Angular practices and professional design patterns.