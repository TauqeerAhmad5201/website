"use client"
import { useState } from "react";
import Container from "../components/container";

export default function Faq() {
  return (
    <>
      <Container className="flex flex-col w-3/4">
        <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container >
    </>
  )
}


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-t border-b border-gray-200 py-4">
      <div className="flex justify-between items-center" onClick={toggleOpen}>
        <p className="font-semibold text-2xl">{question}</p>
        {isOpen ? <ChevronUp className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /> : <ChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
      </div>
      {isOpen && <p className="mt-2 mb-2">{answer}</p>}
    </div>
  );
};

const faqs = [
  {
    question: 'What is the DCA?',
    answer: 'DCA is a DeFi-focused accelerator program aiming to support startups (Builders/Developers) building on Etherlink. The DCA begins with a 2-week in-person bootcamp in Singapore. The remaining 4 weeks are completed remotely.',
  },
  {
    question: 'Why should I apply?',
    answer: 'Startups will benefit from mentoring from both the Core DeFi and VC Team of the Tezos ecosystem. As well as providing market-leading DeFi mentoring, we support founders in building a crypto network with partners and VCs, as well as connections with other top-tier builders. Admitted startups will have the opportunity to receive investments from the Tezos Foundation, as well as integration and support from Etherlink.',
  },
  {
    question: 'How can I apply?',
    answer: <a href="https://tt-tezos.typeform.com/to/EURHmEhg" style={{ textDecoration: 'underline' }}>Apply here</a>,
  },
  {
    question: 'When should I apply?',
    answer: 'The application period opens on 1st February and closes on 31st March.',
  },
  {
    question: 'When does the program start?',
    answer: 'The program runs for 6 weeks, starting on April 15, 2024. The first two weeks are in-person in Singapore, with the remaining four weeks conducted virtually.',
  },
  {
    question: 'How much does the program cost?',
    answer: 'The program is entirely free, and we will also provide stipend for teams while in Singapore. Selected teams may receive $200,000 funding from the Tezos Foundation together with its partners.',
  },
  {
    question: 'Is the program remote?',
    answer: 'The first two weeks of the program gathers the founders in person in Singapore. The rest of the program is remote.',
  },
  {
    question: 'How are applications evaluated?',
    answer: "Applications will be assessed based on market potential, competitive edge, team expertise, and alignment with the accelerator's focus segments. Shortlisted projects will be invited for discussion after which a final selection will be made.",
  },
  {
    question: 'What resources will the team recieve?',
    answer: 'Teams will get direct access to mentors covering DeFi, UX/UI, Marketing/Presentation and Security. In Singapore, teams will have access to co-working facilities in addition to workshops covering research, technical aspects, security, legal, market making, UX, and fundraising. There will also be networking opportunities with investors and other ecosystem participants.',
  }
];

const ChevronDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

const ChevronUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}

