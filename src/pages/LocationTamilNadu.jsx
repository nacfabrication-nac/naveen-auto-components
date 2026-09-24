import React from 'react';
import { Container, Row, Col, Card, Badge, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { InlineQuoteForm } from '../components/InlineQuoteForm';
import { companyData } from '../data/companyData';

export const LocationTamilNadu = () => {
  const tamilNaduSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "name": "Naveen Auto Components - Storage Tank Manufacturer Tamil Nadu",
    "description": "ISO 9001:2015 certified industrial storage tank manufacturer supplying Chennai, SIPCOT Cuddalore, Ambattur, Ennore, Trichy, Hosur, and Tamil Nadu process industries. IS 2825 & ASME VIII compliant.",
    "url": "https://www.naveenautocomponents.com/storage-tank-manufacturer-tamil-nadu",
    "telephone": "+91-75502-77799",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai & Cuddalore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title="Storage Tank Manufacturer in Tamil Nadu | MS & SS Vessels | NAC"
        description="ISO 9001:2015 storage tank manufacturer supplying Tamil Nadu industries — Chennai, Cuddalore, SIPCOT, Hosur, Trichy. MS & SS storage tanks, condensate vessels, flash tanks to IS 2825 / ASME Sec VIII."
        keywords="storage tank manufacturer Tamil Nadu, pressure vessel fabrication Tamil Nadu, MS storage tank Chennai, SS 316 storage tank Cuddalore, IS 2825 storage tank manufacturer, industrial flash tank Tamil Nadu"
        canonical="/storage-tank-manufacturer-tamil-nadu"
        schema={tamilNaduSchema}
      />

      <PageBanner 
        title="Storage Tank Manufacturer in Tamil Nadu" 
        subtitle="Custom MS & SS Storage Vessels, Condensate Tanks, Flash Tanks & Pressure Vessels across Tamil Nadu"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Storage Tank Manufacturer Tamil Nadu', url: '/storage-tank-manufacturer-tamil-nadu' }
        ]}
        image="/images/hd/projects/storage-tank-fabrication.jpeg"
      />

      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5">
            <Col lg={8}>
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
                ISO 9001:2015 Certified Tank Manufacturing
              </Badge>
              <h1 className="display-6 fw-bold text-navy mb-4">
                Industrial Storage Tank &amp; Pressure Vessel Manufacturer in Tamil Nadu
              </h1>

              <p className="lead text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                Process plants, thermal power units, chemical refineries, and textile dyehouses across <strong>Tamil Nadu</strong> — including <strong>SIPCOT Cuddalore, Ennore, Ambattur, Thirumullaivoyal, Manali, Trichy, Coimbatore, and Hosur</strong> — rely on <strong>Naveen Auto Components (NAC)</strong> for precision storage tank fabrication.
              </p>

              <p className="text-secondary mb-4" style={{ lineHeight: '1.75' }}>
                Operating dual manufacturing units in <strong>Chennai (SIDCO Industrial Park)</strong> and <strong>Cuddalore (2.5 Acres on NH-32)</strong>, NAC manufactures custom Mild Steel (MS) and Stainless Steel (SS 304 / SS 316) storage vessels engineered to withstand thermal cycles, chemical corrosion, and high internal operating pressures.
              </p>

              <Card className="border-0 shadow-sm bg-light p-4 rounded-4 mb-5 border-start border-warning border-4">
                <Card.Body className="p-0">
                  <h2 className="h5 fw-bold text-navy mb-3">
                    <i className="bi bi-shield-check text-warning me-2" style={{ color: '#f57c00' }}></i> Technical Compliance &amp; Testing Standards
                  </h2>
                  <ul className="list-unstyled mb-0 small text-secondary">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> <strong>IS 2825 Compliance:</strong> Code for unfired pressure vessels with complete design calculations.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> <strong>ASME Section VIII:</strong> Fabrication readiness for Division 1 pressure vessel guidelines.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> <strong>16mm Heavy Rolling:</strong> Cylindrical shell rolling up to 16mm plate thickness and 2500mm width.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> <strong>Hydrostatic Testing:</strong> 100% water leak pressure testing witnessed prior to dispatch.</li>
                    <li className="mb-0"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> <strong>NDT Quality Audits:</strong> Radiographic (RT) and Dye-Penetrant (DP) weld seam testing.</li>
                  </ul>
                </Card.Body>
              </Card>

              {/* Types of Tanks Manufactured */}
              <h2 className="h4 fw-bold text-navy mb-3">Types of Storage Tanks Supplied Across Tamil Nadu</h2>
              <Row className="g-3 mb-5">
                {[
                  { title: "Water & Condensate Storage Tanks", desc: "Heavy MS/SS cylindrical water storage tanks for power plant cooling towers and boiler feed loops." },
                  { title: "Flash Tanks for Steam Loops", desc: "Heavy gauge condensate flash tanks designed for extreme thermal shock resistance." },
                  { title: "Chemical Consent-State Vessels", desc: "SS 304 / SS 316 corrosion-resistant tanks with custom nozzle fit-ups for SIPCOT plant units." },
                  { title: "Air Receivers & Pressure Vessels", desc: "High-pressure compressed air receivers engineered to IS 2825 pressure vessel standards." }
                ].map((item, idx) => (
                  <Col md={6} key={idx}>
                    <Card className="h-100 border-0 shadow-sm p-3 bg-white">
                      <Card.Body className="p-0">
                        <h3 className="h6 fw-bold text-navy mb-2"><i className="bi bi-gear-fill text-warning me-2" style={{ color: '#f57c00' }}></i>{item.title}</h3>
                        <p className="small text-secondary mb-0">{item.desc}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Highway Logistics Banner */}
              <div className="p-4 rounded-4 bg-navy text-white mb-5" style={{ backgroundColor: '#0b1e36' }}>
                <h3 className="h5 fw-bold text-warning mb-2"><i className="bi bi-truck-flatbed me-2"></i> 10 MT Crane &amp; Highway Flatbed Dispatch Across Tamil Nadu</h3>
                <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                  Our <strong>10 MT overhead EOT crane</strong> and <strong>1 Lakh sq.ft total open yard space</strong> across Chennai &amp; Cuddalore allows us to safely load multi-ton storage tanks onto flatbed trailers and transport them directly to plant sites across Tamil Nadu.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <InlineQuoteForm currentServiceSlug="storage-tanks" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
