import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Download, Smartphone, Zap, ArrowRight, Edit, Archive, BookOpen, Filter } from 'lucide-react';
import CoursePage from './page/course.tsx';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/">
          <img 
        src="../publique/image/swift-logo.png" 
        alt="Logo" 
        className="w-64 h-24 object-contain"
          />
        </Link>
        <div className="flex gap-4">
          <button className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
        Télécharger
          </button>
          <Link to="/course" className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
        Cours CV
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simplifiez votre quotidien avec notre application
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Une interface élégante et intuitive pour une expérience utilisateur exceptionnelle.
          </p>
          <div className="flex gap-4">
            <button className="bg-amber-500 text-white px-8 py-3 rounded-full hover:bg-amber-600 transition-colors flex items-center gap-2">
              <Download size={20} />
              Télécharger
            </button>
            <button className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors flex items-center gap-2">
              En savoir plus <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Zone pour l'aperçu de l'application */}
          <div className="w-72 h-[600px] bg-white rounded-3xl shadow-2xl p-4 relative">
            <div className="w-full h-full bg-amber-100 rounded-2xl overflow-hidden">
              <img 
                src="../publique/image/screen-connexion.png" 
                alt="App preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Caractéristiques principales</h2>
          <div className="flex overflow-x-auto space-x-12">
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expérience candidat optimisée</h3>
              <p className="text-gray-600">Mise en place d’un portail interactif pour permettre aux candidats de suivre l’avancement de leur candidature : notifications automatiques quotidiennes.</p>
            </div>
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automatisation</h3>
              <p className="text-gray-600">Automatise l’envoi de candidature pour les postes correspondant au CV du candidat.</p>
            </div>
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rédaction de lettres de motivation</h3>
              <p className="text-gray-600">Rédaction automatique de lettres de motivation en fonction du CV du candidat et de l’offre d’emploi pour les membres premium.</p>
            </div>
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Archive className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Historique des candidatures</h3>
              <p className="text-gray-600">Premium: permet de gérer ses candidatures (accepté, refusé, en attente) qui sont supprimées après 1 mois.</p>
            </div>
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tutoriels de rédaction de CV</h3>
              <p className="text-gray-600">Option free.</p>
            </div>
            <div className="text-center min-w-[250px]">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="text-amber-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pré-tri des CV pour les entreprises</h3>
              <p className="text-gray-600">Définition de critères personnalisables pour associer les profils des candidats aux exigences spécifiques des postes : réduit le temps de recherche de profils pertinents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Captures d'écran</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="../publique/image/screen1.png" 
                alt="Page d'accueil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="../publique/image/screen2.png" 
                alt="Profile utilisateurs" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="../publique/image/screen3.png" 
                alt="Carte interactive" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-amber-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à commencer ?</h2>
          <p className="text-xl mb-12">Téléchargez l'application maintenant et découvrez une nouvelle façon de travailler</p>
          <button className="bg-white text-amber-500 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Télécharger l'application
          </button>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <img 
                                src="../publique/image/swift-logo.png" 
                                alt="Logo" 
                                className="w-64 h-24 object-contain"
                            />
                            <p className="text-gray-400">Simplifiez votre quotidien avec notre application innovante.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Liens rapides</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <button className="hover:text-amber-500 transition-colors">
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-amber-500 transition-colors">
                                        Fonctionnalités
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-amber-500 transition-colors">
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Légal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Conditions d'utilisation</li>
                                <li>Politique de confidentialité</li>
                                <li>Mentions légales</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>support@swiftrecruit.com</li>
                                <li>+33 1 23 45 67 89</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Swift Recruit. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
    </main>
  );
}

export default App;