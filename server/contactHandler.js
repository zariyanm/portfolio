import nodemailer from 'nodemailer';

export async function handleContactForm(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const data = JSON.parse(body || '{}');
      const { name, email, message } = data;

      // Required validation
      if (!name || typeof name !== 'string' || !name.trim()) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ success: false, message: 'Name is required.' }));
      }

      // Valid email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ success: false, message: 'Please enter a valid email address.' }));
      }

      // Message validation
      if (!message || typeof message !== 'string' || !message.trim()) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ success: false, message: 'Message is required.' }));
      }

      const targetEmail = 'muhammadzariyan0107@gmail.com';

      // Configure SMTP transport using environment variables if available
      let transporter;
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      } else {
        // Fallback jsonTransport for dev / local testing when SMTP creds are not in .env
        transporter = nodemailer.createTransport({
          jsonTransport: true,
        });
      }

      const mailOptions = {
        from: `"${name.trim()}" <${email.trim()}>`,
        to: targetEmail,
        replyTo: email.trim(),
        subject: `New Portfolio Message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; background: #070708; color: #f4f4f5;">
            <h2 style="color: #ffffff; border-b: 1px solid #27272a; padding-bottom: 10px;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <div style="margin-top: 20px; padding: 15px; background: #18181b; border: 1px solid #27272a; border-radius: 8px;">
              <p style="white-space: pre-wrap; margin: 0;">${message.trim()}</p>
            </div>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent/logged successfully:', info.messageId || info);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({
        success: true,
        message: 'Message sent successfully. I’ll get back to you soon.',
      }));
    } catch (err) {
      console.error('Contact handler error:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.',
      }));
    }
  });
}
