import nodemailer from 'nodemailer';

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { name, email, subject, message } = body;

  // Validation
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Name, email and message are required.' }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email address.' }) };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: email,
    subject: subject
      ? `[Portfolio] ${subject}`
      : `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#e5e5e5;border:1px solid #222;">
        <h2 style="color:#C9A96E;font-size:22px;margin-bottom:24px;font-weight:400;">
          New message from your portfolio
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:100px;">Name</td>
            <td style="padding:10px 0;color:#fff;font-size:15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td>
            <td style="padding:10px 0;color:#fff;font-size:15px;">
              <a href="mailto:${email}" style="color:#C9A96E;">${email}</a>
            </td>
          </tr>
          ${subject ? `
          <tr>
            <td style="padding:10px 0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Subject</td>
            <td style="padding:10px 0;color:#fff;font-size:15px;">${subject}</td>
          </tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #222;margin:24px 0;" />
        <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Message</p>
        <p style="color:#e5e5e5;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
        <hr style="border:none;border-top:1px solid #222;margin:24px 0;" />
        <p style="color:#555;font-size:12px;">
          Sent from your Lens &amp; Light portfolio.<br/>
          Reply to this email to respond to ${name}.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Message sent successfully.' }),
    };
  } catch (err) {
    console.error('Mail error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message. Please try again.' }),
    };
  }
};
