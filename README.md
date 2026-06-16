# AI Interview Platform

An intelligent mock interview platform powered by AI that helps users prepare for technical and non-technical interviews through realistic AI-driven conversations and feedback.

## 🌐 Live Demo

**[AI Interview Platform](https://ai-interview-tau-amber.vercel.app)**

## ✨ Features

- **AI-Powered Interviews**: Interactive mock interviews conducted by advanced AI models (Google Generative AI)
- **Voice Support**: Real-time voice interaction using Vapi AI for natural conversational interviews
- **User Authentication**: Secure login with Firebase authentication
- **Interview History**: Track and review your past interview sessions
- **Real-time Feedback**: Get immediate insights and performance metrics after each interview
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Theme toggle for comfortable viewing in any lighting condition
- **Form Validation**: Robust client-side validation using React Hook Form and Zod

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 15 (with Turbopack)
- **Language**: TypeScript (83.8%) | CSS (15.4%) | JavaScript (0.8%)
- **Styling**: Tailwind CSS, Radix UI components
- **AI/ML**: 
  - Google Generative AI (@ai-sdk/google)
  - Google Cloud AI Platform
  - Vercel AI SDK
  - Vapi AI (Voice)
- **Backend**: Next.js API routes, Firebase Admin SDK
- **Authentication**: Firebase
- **Database**: Firebase
- **Form Management**: React Hook Form with Zod validation
- **Utilities**: Dayjs (date handling), Lucide React (icons), Sonner (toast notifications)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project setup
- Google Cloud API credentials
- Vapi AI API key

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/rushi-desai/-AI_Interview.git
cd -AI_Interview

# Install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Google AI
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Vapi AI
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

# Firebase Admin
FIREBASE_ADMIN_SDK_KEY=your_firebase_admin_key
```

### Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files.

### Build & Deploy

```bash
# Build the project
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utility functions and helpers
├── styles/           # Global CSS styles
└── ...
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or log in using Firebase authentication
2. **Start Interview**: Select an interview type (Technical, Behavioral, etc.)
3. **Conduct Interview**: 
   - Use text input for written responses
   - Enable voice for natural conversation with the AI
4. **Review Results**: Get detailed feedback on your performance
5. **Track Progress**: Access your interview history and improvement metrics

## 🔌 API Integration

### Google Generative AI
The platform uses Google's Generative AI through the Vercel AI SDK for intelligent question generation and evaluation.

### Vapi AI
Voice conversations are powered by Vapi AI, providing natural language processing and speech recognition.

### Firebase
Handles user authentication, data storage, and real-time database operations.

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Accessible component primitives for consistent UI
- **Custom CSS**: Additional styling in CSS files (15.4% of codebase)

## 🔐 Security

- Environment variables for sensitive data (never committed to version control)
- Firebase security rules for database access
- Input validation with Zod schema validation

## 📦 Dependencies

Key dependencies include:
- `next`: Full-stack React framework
- `react-hook-form`: Efficient form state management
- `zod`: TypeScript-first schema validation
- `firebase`: Backend services
- `@ai-sdk/google`: AI integration
- `@vapi-ai/web`: Voice AI integration
- `tailwindcss`: Utility CSS framework
- `lucide-react`: Icon library

## 🚢 Deployment

The project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with a single click

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue on the GitHub repository or reach out to the maintainer.

---

**Repository**: [rushi-desai/-AI_Interview](https://github.com/rushi-desai/-AI_Interview)
