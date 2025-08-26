import IntroSection from "./IntroSection";
import { Accordion } from 'react-bootstrap';
import { useMemo } from "react";

export default function FAQSection() {
  const faqItems = useMemo(() => [
    {
      id: "1",
      question: "What does it take excellent author?",
      answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: "2",
      question: "Who will view my content?",
      answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: "3",
      question: "What does it take become an author?",
      answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: "4",
      question: "How to Change my Password easily?",
      answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: "5",
      question: "How does it create content?",
      answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
  ], []); 

  return (
    <>
      <IntroSection
        introText="Frequently Asked Question"
        headingText="General"
        highlightText="Questions"
      />
      
      <section className="container pb-5 fade-in">
        <div className="row justify-content-center align-items-center">
        
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Accordion defaultActiveKey={0} >
              {faqItems.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.id} className="mb-3 rounded-3 shadow-sm border-0">
                  <Accordion.Header className="bg-white">
                    <h5 className="mb-0 fw-bold" style={{ color: '#1B2E63' }}>{item.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body className="text-secondary">
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

         
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <img 
                src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/faq.png" 
                alt="FAQ illustration" 
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
