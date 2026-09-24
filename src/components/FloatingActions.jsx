import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/companyData';

export const FloatingActions = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    checkScrollTop();
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const digits = companyData.contact?.mobile ? companyData.contact.mobile.replace(/[^0-9]/g, '') : '917550277799';
  const rawPhone = digits.length === 10 ? `91${digits}` : digits;
  const displayPhone = companyData.contact?.mobile || '+91 75502 77799';
  const whatsappMsg = encodeURIComponent("Hi NAC, I need a quote for heavy engineering fabrication.");

  return (
    <>
      <style>
        {`
          .floating-actions-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 1050;
            pointer-events: none;
          }
          .floating-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            pointer-events: auto;
            transition: all 0.3s ease;
            font-size: 1.5rem;
            border: none;
            cursor: pointer;
          }
          .floating-btn:hover {
            transform: translateY(-5px);
            color: #fff;
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          }
          .btn-google {
            background-color: #ea4335;
          }
          .btn-google:hover {
            background-color: #d93025;
          }
          .btn-whatsapp {
            background-color: #25d366;
          }
          .btn-whatsapp:hover {
            background-color: #128c7e;
          }
          .btn-phone {
            background-color: #0d6efd;
          }
          .btn-phone:hover {
            background-color: #0b5ed7;
          }
          .btn-scroll-top {
            background-color: #f57c00;
            opacity: 0;
            transform: scale(0.8);
            visibility: hidden;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .btn-scroll-top.visible {
            opacity: 1;
            transform: scale(1);
            visibility: visible;
            pointer-events: auto;
          }
          .btn-scroll-top:hover {
            background-color: #e67300;
            transform: translateY(-5px);
          }

          /* Mobile Sticky Bottom CTA Bar */
          .mobile-sticky-cta-bar {
            display: none;
          }
          
          @media (max-width: 768px) {
            .floating-actions-container {
              bottom: 75px;
              right: 15px;
              gap: 10px;
            }
            .floating-btn {
              width: 45px;
              height: 45px;
              font-size: 1.2rem;
            }

            .mobile-sticky-cta-bar {
              display: flex;
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 60px;
              background-color: #0b1e36;
              z-index: 1060;
              box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
              border-top: 2px solid #f57c00;
            }
            .mobile-cta-item {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              color: #ffffff;
              text-decoration: none;
              font-weight: 700;
              font-size: 0.85rem;
              border-right: 1px solid rgba(255,255,255,0.1);
              transition: background-color 0.2s ease;
            }
            .mobile-cta-item:last-child {
              border-right: none;
              background-color: #f57c00;
              color: #ffffff;
            }
            .mobile-cta-item:active {
              opacity: 0.85;
            }
          }
        `}
      </style>

      {/* Floating Action Icons (Desktop & Mobile) */}
      <div className="floating-actions-container">
        {/* Google Business Profile Button */}
        <a href={companyData.googleShareLink || 'https://share.google/U57zAGwxO9ujDK0uy'} target="_blank" rel="noopener noreferrer" className="floating-btn btn-google" title="Google Business Profile & Reviews" aria-label="Google Business Profile & Reviews">
          <i className="bi bi-google"></i>
        </a>

        {/* Telephone Button */}
        <a href={`tel:${displayPhone}`} className="floating-btn btn-phone" title="Call Us" aria-label="Call Us">
          <i className="bi bi-telephone-fill"></i>
        </a>
        
        {/* WhatsApp Button with Pre-filled Message */}
        <a href={`https://wa.me/${rawPhone}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="floating-btn btn-whatsapp" title="WhatsApp Us" aria-label="WhatsApp Us">
          <i className="bi bi-whatsapp"></i>
        </a>
        
        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop} 
          className={`floating-btn btn-scroll-top ${showTopBtn ? 'visible' : ''}`} 
          title="Scroll to Top" 
          aria-label="Scroll to Top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>

      {/* Sticky Bottom Bar for Mobile Screen Devices */}
      <div className="mobile-sticky-cta-bar">
        <a href={`tel:${displayPhone}`} className="mobile-cta-item">
          <i className="bi bi-telephone-fill text-warning fs-6"></i>
          <span>Call</span>
        </a>
        <a href={`https://wa.me/${rawPhone}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="mobile-cta-item">
          <i className="bi bi-whatsapp text-success fs-6"></i>
          <span>WhatsApp</span>
        </a>
        <Link to="/contact" className="mobile-cta-item">
          <i className="bi bi-file-earmark-text-fill fs-6"></i>
          <span>Get Quote</span>
        </Link>
      </div>
    </>
  );
};