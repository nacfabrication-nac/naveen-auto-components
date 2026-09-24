import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { InlineQuoteForm } from '../components/InlineQuoteForm';
import { companyData } from '../data/companyData';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export const HyperlocalChennai = () => {
  const [lightbox, setLightbox] = useState({ show: false, src: '', alt: '' });

  const hyperlocalSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ManufacturingFacility"],
    "name": "Naveen Auto Components - Heavy Fabrication Chennai (Thirumullaivoyal Unit)",
    "description": "ISO 9001:2015 certified heavy engineering fabrication facility in SIDCO Women's Industrial Park, Thirumullaivoyal, Chennai. Equipped with 10 MT EOT crane, 6kW CNC Fiber Laser Cutter, and 16mm plate rolling.",
    "url": "https://www.naveenautocomponents.com/heavy-fabrication-thirumullaivoyal-chennai",
    "telephone": "+91-75502-77799",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. T93, SIDCO Women Industrial Park, Kattur, Thirumullaivoyal",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600062",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title="Heavy Engineering Fabrication in Thirumullaivoyal, Chennai | NAC"
        description="ISO 9001:2015 heavy engineering fabrication unit in SIDCO Women's Industrial Park, Thirumullaivoyal, Chennai. 10 MT EOT crane, 6kW laser cutting, 16mm plate rolling & MS/SS vessel fabrication."
        keywords="heavy fabrication Thirumullaivoyal Chennai, SIDCO Women Industrial Park fabrication, metal plate rolling Thirumullaivoyal, structural steel fabrication Ambattur Chennai, pressure vessel manufacturer Chennai"
        canonical="/heavy-fabrication-thirumullaivoyal-chennai"
        schema={hyperlocalSchema}
      />

      <PageBanner 
        title="Heavy Engineering Fabrication in Thirumullaivoyal, Chennai" 
        subtitle="SIDCO Women's Industrial Park, Kattur — ISO 9001:2015 Certified Manufacturing Facility"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Chennai Fabrication Unit', url: '/heavy-fabrication-thirumullaivoyal-chennai' }
        ]}
        image="/images/hd/factories/unit1_thirumullaivoyal.jpg"
      />

      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5">
            <Col lg={8}>
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
                SIDCO Women's Industrial Park • Unit 1
              </Badge>
              <h1 className="display-6 fw-bold text-navy mb-4">
                Heavy Engineering &amp; Metal Fabrication Facility — Thirumullaivoyal, Chennai
              </h1>

              <p className="lead text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                Located at <strong>No. T93, SIDCO Women's Industrial Park, Kattur, Thirumullaivoyal, Chennai - 600062</strong>, 
                Naveen Auto Components (Fabrication Unit-1) is our primary precision heavy fabrication plant serving industrial clients across Ambattur, Thirumullaivoyal, Avadi, Red Hills, Ennore, and the wider Chennai industrial corridor.
              </p>

              <Card className="border-0 shadow-sm bg-light p-4 rounded-4 mb-5 border-start border-warning border-4">
                <Card.Body className="p-0">
                  <h2 className="h5 fw-bold text-navy mb-3">
                    <i className="bi bi-cpu-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Key Machinery &amp; Infrastructure — Chennai Plant
                  </h2>
                  <Table responsive borderless className="align-middle mb-0">
                    <tbody className="small">
                      <tr>
                        <td className="fw-bold text-navy"><i className="bi bi-box-seam me-2 text-warning"></i> 10 MT EOT Overhead Crane</td>
                        <td className="text-secondary">IS 807 / IS 3177 compliant, ~3,000 Sq.Ft closed factory shed span</td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-navy"><i className="bi bi-slash-square me-2 text-warning"></i> 6kW CNC Fiber Laser Cutter</td>
                        <td className="text-secondary">2.5m x 6.5m bed size, zero thermal distortion cutting up to 25mm steel</td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-navy"><i className="bi bi-distribute-vertical me-2 text-warning"></i> 16mm Plate Rolling Machine</td>
                        <td className="text-secondary">2500mm length capacity for heavy MS &amp; SS storage tank shell rolling</td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-navy"><i className="bi bi-layout-sidebar-reverse me-2 text-warning"></i> CNC Hydraulic Press Brake</td>
                        <td className="text-secondary">8m x 3.2m folding line for long structural channels and coach panels</td>
                      </tr>
                      <tr>
                        <td className="fw-bold text-navy"><i className="bi bi-pie-chart me-2 text-warning"></i> Welding Infrastructure</td>
                        <td className="text-secondary">Automated MIG, Pulsed-TIG, and SAW (Submerged Arc Welding) lines</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>

              {/* Local Industrial Specialization */}
              <h2 className="h4 fw-bold text-navy mb-3">Thirumullaivoyal &amp; Ambattur Industrial Specializations</h2>
              <p className="text-secondary mb-4" style={{ lineHeight: '1.75' }}>
                Our Thirumullaivoyal facility directly supports prime contractors and process OEMs located in Chennai's manufacturing hubs:
              </p>
              
              <Row className="g-3 mb-5">
                {[
                  { title: "Storage Tanks & Pressure Vessels", desc: "Water tanks, condensate vessels, flash tanks to IS 2825 & ASME VIII standards." },
                  { title: "Steam Distribution Ducts", desc: "Header pipelines, bracing stands, and high-temp ducting for thermal power plants." },
                  { title: "PEB Structural Steelwork", desc: "Submerged arc-welded H-beams, safety handrails, and cooling fan guards." },
                  { title: "Rail & Bus Coach Parts", desc: "Folded sheet metal channels and chassis sub-assemblies for Indian Railways." }
                ].map((item, idx) => (
                  <Col md={6} key={idx}>
                    <Card className="h-100 border-0 shadow-sm p-3 bg-white">
                      <Card.Body className="p-0">
                        <h3 className="h6 fw-bold text-navy mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i>{item.title}</h3>
                        <p className="small text-secondary mb-0">{item.desc}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Map Embed */}
              <div className="mb-5">
                <h2 className="h4 fw-bold text-navy mb-3">Facility Map &amp; Direct Directions — SIDCO Thirumullaivoyal</h2>
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
                  <iframe 
                    title="Unit 1 Thirumullaivoyal Chennai Map" 
                    src={companyData.locations.unit1.mapEmbed}
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                  ></iframe>
                </div>
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

      <ImageLightboxModal 
        show={lightbox.show}
        onHide={() => setLightbox({ show: false, src: '', alt: '' })}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
      />
    </>
  );
};
