import { createRoot } from 'react-dom/client'

import App from './components/App'

import './styles/tailwind.css'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<App />)
