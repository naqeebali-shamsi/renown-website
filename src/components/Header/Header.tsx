import Link from 'next/link';
import Image from "next/legacy/image";
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Renown Watch Services Logo" 
            width={40} 
            height={40} 
          />
          <span className="text-amber-400 font-bold text-lg sm:text-xl">Renown Watch Services</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-amber-400 transition-colors duration-200">Home</Link>
          <Link href="/#services" className="text-white hover:text-amber-400 transition-colors duration-200">Services</Link>
          <Link href="/about" className="text-white hover:text-amber-400 transition-colors duration-200">About</Link>
          <Link href="/contact" className="text-white hover:text-amber-400 transition-colors duration-200">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none transition-transform duration-200 ease-in-out"
          onClick={toggleMobileMenu}
        >
          <svg 
            className={`h-6 w-6 transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="py-2">
          <Link href="/" className="block text-white hover:text-amber-400 px-4 py-2 transition-colors duration-200">Home</Link>
          <Link href="/services" className="block text-white hover:text-amber-400 px-4 py-2 transition-colors duration-200">Services</Link>
          <Link href="/about" className="block text-white hover:text-amber-400 px-4 py-2 transition-colors duration-200">About</Link>
          <Link href="/contact" className="block text-white hover:text-amber-400 px-4 py-2 transition-colors duration-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;