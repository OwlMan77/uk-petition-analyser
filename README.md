# UK Petition Analyzer

## Description

A web application that allows users to analyze UK government petitions and understand where all the signatures come from. The app fetches data from the UK Parliament petitions API and provides detailed insights into signature distribution by region, constituency, and country.

## Purpose

This project helps users:
- Check UK government petitions by their ID
- Analyze signature distribution across different UK regions
- Identify valid vs invalid signatures (UK vs non-UK)
- View petition details including government responses and debate information
- Understand the geographical spread of support for petitions

## How to Run

### Prerequisites
- Node.js (version 16 or higher)
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd petition-analyser
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
# or
bun run build
```

To preview the production build:
```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

## How to Use

1. **Find a Petition ID**: Go to [https://petition.parliament.uk/](https://petition.parliament.uk/) and find a petition you want to analyze. The petition ID is in the URL (e.g., for `https://petition.parliament.uk/petitions/123456`, the ID is `123456`).

2. **Enter the ID**: In the application, enter the petition ID in the search box.

3. **View Analysis**: Click "Search" to see detailed analysis including:
   - Petition title and description
   - Total signature count
   - Signature distribution by UK regions
   - Valid vs invalid signatures (UK vs non-UK)
   - Government response details
   - Debate information (if applicable)

## Features

### Petition Search
- Input box for petition ID entry
- Real-time validation and error handling
- Direct link to the original petition page

### Signature Analysis
- **Geographical Distribution**: Shows percentage of signatures by UK regions (North East, North West, London, etc.)
- **Validity Check**: Distinguishes between valid UK signatures and invalid non-UK signatures
- **Regional Breakdown**: Detailed breakdown of support across all UK regions
- **International Signatures**: List of countries with invalid signatures

### Petition Details
- **Basic Information**: Title, description, and current state
- **Government Response**: Summary and details of official responses
- **Debate Information**: Transcripts, videos, and debate summaries (if available)
- **Department Involvement**: Which government departments are involved

### Data Sources
The application uses the official UK Parliament petitions API:
- Base URL: `https://petition.parliament.uk/petitions/{id}.json`
- Provides real-time data on petition signatures and responses

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **State Management**: Redux Toolkit with RTK Query
- **Build Tool**: Vite
- **Styling**: CSS
- **API**: UK Parliament Petitions API

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific components
├── services/       # API services and types
├── utils/          # Utility functions
└── store.ts        # Redux store configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License

Copyright (c) 2024 UK Petition Analyzer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
