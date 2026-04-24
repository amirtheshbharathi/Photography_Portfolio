export const handler = async (event) => {
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

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email and message are required.' }) };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email address.' }) };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const OWNER_EMAIL   = process.env.OWNER_EMAIL || 'amirtheshbharathi29@gmail.com';

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error.' }) };
  }

  const emailSubject = subject
    ? `[Portfolio] ${subject}`
    : `[Portfolio] New message from ${name}`;

  const html = `
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
        Sent from your Lens &amp; Light portfolio contact form.<br/>
        Reply to this email to respond to ${name}.
      </p>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [OWNER_EMAIL],
        reply_to: email,
        subject: emailSubject,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', JSON.stringify(data));
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message. Please try again.' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Fetch error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send message. Please try again.' }) };
  }
};
