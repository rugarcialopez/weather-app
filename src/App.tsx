import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SidebarProvider } from './context/SidebarContext';

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-full overflow-y-hidden bg-white">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Navbar />
          <main className="flex flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
            Main Content
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
