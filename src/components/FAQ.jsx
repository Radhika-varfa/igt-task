import React from "react";
import "../styles/global.css";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const faqData = [
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact rider support through the apps emergency contact feature, available 24/7 . Alternatively, reach out via email at support@riders.com or call our hotline at +2309482309.",
    },
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact rider support through the apps emergency contact feature, available 24/7 . Alternatively, reach out via email at support@riders.com or call our hotline at +2309482309.",
    },
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact rider support through the apps emergency contact feature, available 24/7 . Alternatively, reach out via email at support@riders.com or call our hotline at +2309482309.",
    },
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact rider support through the apps emergency contact feature, available 24/7 . Alternatively, reach out via email at support@riders.com or call our hotline at +2309482309.",
    },
    {
      question: "How to contact with riders emergency?",
      answer:
        "You can contact rider support through the apps emergency contact feature, available 24/7 . Alternatively, reach out via email at support@riders.com or call our hotline at +2309482309.",
    },
  ];
  return (
    <section className="faq">
      <p className="section-subtitle">FREQUENT QUESTION</p>
      <h2 className="section-title">Do you have any question</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <Disclosure key={index} as="div" className="faq-item">
            {({ open }) => (
              <>
                <Disclosure.Button className="faq-question">
                  <span>{faq.question}</span>
                  {open ? (
                    <MinusIcon className="faq-icon" />
                  ) : (
                    <PlusIcon className="faq-icon" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="faq-answer">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
