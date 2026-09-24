import React, { useState } from 'react';
import { Form, Button, Alert, Card, Badge } from 'react-bootstrap';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

export const InlineQuoteForm = ({ currentServiceSlug }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    serviceSlug: currentServiceSlug || 'storage-tanks',
    quantitySpecs: '',
    contactInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedService = servicesData.find((s) => s.slug === formData.serviceSlug);
  const mailtoSubject = encodeURIComponent(`RFQ Quote Request from ${formData.name || 'Website Visitor'} [${formData.company || 'Company'}]`);
  const mailtoBody = encodeURIComponent(
    `Hi Naveen Auto Components Team,\n\n` +
    `I would like to request an RFQ quote for:\n` +
    `• Service: ${selectedService ? selectedService.title : formData.serviceSlug}\n` +
    `• Name: ${formData.name}\n` +
    `• Company: ${formData.company}\n` +
    `• Quantity & Specs: ${formData.quantitySpecs}\n` +
    `• Contact (Mobile/Email): ${formData.contactInfo}\n\n` +
    `Please respond with pricing and lead time.\n`
  );

  return (
    <Card className="border-0 shadow-lg bg-navy text-white p-4 rounded-4" style={{ backgroundColor: '#0b1e36' }}>
      <Card.Body className="p-0">
        <div className="d-flex align-items-center mb-3">
          <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase me-2" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
            Instant RFQ
          </Badge>
          <span className="small text-white-50 font-monospace">ISO 9001:2015</span>
        </div>
        <h3 className="h5 fw-bold text-white mb-2">Get an Inline RFQ Quote</h3>
        <p className="small text-white-50 mb-4" style={{ lineHeight: '1.6' }}>
          Fill in your specification details below for direct engineering evaluation & pricing within 24 hours.
        </p>

        {submitted ? (
          <Alert variant="success" className="bg-dark text-white border-warning rounded-3 p-3">
            <h4 className="h6 fw-bold text-warning mb-2"><i className="bi bi-check-circle-fill me-2"></i> Request Received!</h4>
            <p className="small text-white-50 mb-3">
              Thank you, <strong>{formData.name}</strong>. Our engineering desk in Chennai is reviewing your specs.
            </p>
            <a 
              href={`mailto:${companyData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="btn btn-warning btn-sm w-100 fw-bold py-2 text-navy"
              style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}
            >
              <i className="bi bi-envelope-fill me-1"></i> Send Drawings via Email
            </a>
            <Button 
              variant="link" 
              size="sm" 
              className="text-white-50 text-decoration-none w-100 mt-2 p-0 small"
              onClick={() => setSubmitted(false)}
            >
              ← Edit details
            </Button>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="inlineQuoteName">
              <Form.Label className="small fw-semibold text-white-50 mb-1">Your Full Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Baskar Ramalingam"
                required
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ backgroundColor: '#071322' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inlineQuoteCompany">
              <Form.Label className="small fw-semibold text-white-50 mb-1">Company / Organization *</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. ENEXIO Power / Enviro Engg"
                required
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ backgroundColor: '#071322' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inlineQuoteService">
              <Form.Label className="small fw-semibold text-white-50 mb-1">Fabrication Service *</Form.Label>
              <Form.Select
                name="serviceSlug"
                value={formData.serviceSlug}
                onChange={handleChange}
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ backgroundColor: '#071322' }}
              >
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.slug} style={{ backgroundColor: '#071322', color: '#fff' }}>
                    {s.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="inlineQuoteSpecs">
              <Form.Label className="small fw-semibold text-white-50 mb-1">Quantity & Specs (Thickness / Material) *</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="quantitySpecs"
                value={formData.quantitySpecs}
                onChange={handleChange}
                placeholder="e.g. 2 Units, 12mm MS Plate Rolling, IS 2825 compliant"
                required
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ backgroundColor: '#071322' }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="inlineQuoteContact">
              <Form.Label className="small fw-semibold text-white-50 mb-1">Mobile No. / Email *</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210 / buyer@company.com"
                required
                size="sm"
                className="bg-dark text-white border-secondary"
                style={{ backgroundColor: '#071322' }}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="warning"
              size="lg"
              className="w-100 fw-bold py-3 text-navy shadow-sm d-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}
            >
              <i className="bi bi-file-earmark-check-fill"></i>
              <span>Submit RFQ Quote Request</span>
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};
