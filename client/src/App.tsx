import React, { useState } from 'react';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
import { HomePage } from './pages/home/HomePage';
import { ProjectsPage } from './pages/projects/ProjectsPage';
import { ContactPage } from './pages/contact/ContactPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container" style={{ flex: 1, padding: '3rem 1.5rem' }}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
