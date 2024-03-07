import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex h-screen overflow-y-hidden bg-white">
          <Sidebar />
          <div className="flex flex-col flex-1 h-full overflow-hidden">
            <Navbar />
            <MainContent />
          </div>
        </div>
      </SidebarProvider>
    </QueryClientProvider>
  )
}

export default App
