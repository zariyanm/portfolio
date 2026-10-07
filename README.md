# Muhammad Zariyan Javaid ... Portfolio

Personal portfolio website for **Muhammad Zariyan Javaid**, focused on AI, cybersecurity, automation, and practical software development.

## Tech Stack

* React
* Vite
* Tailwind CSS
* GSAP
* Lenis
* Node.js
* Express
* Nodemailer
* Gmail SMTP

## Features

* Editorial portfolio design
* Responsive desktop and mobile layout
* GSAP animations and ScrollTrigger
* Lenis smooth scrolling
* AI, Automation, and Cybersecurity sections
* Project showcase
* Experience, education, and skills
* Contact form with validation
* Secure server-side email delivery using SMTP
* Custom favicon and SEO metadata

## Projects

### FortressSEC

AI-powered Attack Surface Management platform combining reconnaissance, scanning, security assessment, and intelligent analysis.

### PhishShield

Machine-learning based phishing email detection system using classification, confidence scores, and suspicious-pattern explanations.

### Neural Network From Scratch

A from-scratch implementation exploring the core learning process behind neural networks.

## Local Development

Clone the repository:

```bash
git clone https://github.com/zariyanm/portfolio.git
cd https://github.com/zariyanm/portfolio
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Then configure the SMTP variables in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
```

Start the development server:

```bash
npm run dev
```

## Contact Form

The contact form uses a server-side API endpoint:

```text
POST /api/contact
```

Nodemailer handles SMTP delivery.

SMTP credentials are stored in environment variables and are never included in the frontend or repository.

## Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment Variables

| Variable    | Description          |
| ----------- | -------------------- |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP server port     |
| `SMTP_USER` | SMTP account email   |
| `SMTP_PASS` | SMTP app password    |

Never commit `.env` or real SMTP credentials to GitHub.

## Author

**Muhammad Zariyan Javaid**

AI • Cybersecurity • Automation

GitHub: https://github.com/zariyanm

LinkedIn: https://www.linkedin.com/in/muhammad-zaryan/
