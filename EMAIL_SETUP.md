# Email Setup for Contact Form

The contact form sends email notifications to your email address when someone submits the form.

## Quick Setup (Gmail)

1. **Create a `.env` file** in the root directory of your project:

```env
# Your email where you want to receive notifications
CONTACT_EMAIL=kevinbhadani2121@gmail.com

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=kevin.patel.2605@gmail.com
SMTP_PASS=xtft zwym aomy eian
```

2. **Generate a Gmail App Password**:

   - Go to your [Google Account](https://myaccount.google.com/)
   - Click **Security** → **2-Step Verification** (enable it if not already)
   - Scroll down to **App passwords**
   - Create a new app password for "Mail"
   - Copy the 16-character password and use it as `SMTP_PASS`

3. **Install dependencies** (if you haven't already):

```bash
npm install
```

4. **Restart your development server**:

```bash
npm run dev
```

## Alternative Email Services

### SendGrid (Recommended for Production)

- Free tier: 100 emails/day
- More reliable than Gmail SMTP
- Better for production deployments

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_EMAIL=kevinbhadani2121@gmail.com
```

### Mailgun

- Free tier: 5,000 emails/month
- Good for production

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
CONTACT_EMAIL=kevinbhadani2121@gmail.com
```

### Resend (Modern Option)

- Modern email API
- Easy to integrate
- Good developer experience

## Testing

After setting up, test the contact form:

1. Fill out the form on your website
2. Click "Send Message"
3. Check your email inbox (and spam folder) for the notification

## Troubleshooting

- **"Failed to send message"**: Check your SMTP credentials and ensure your App Password is correct
- **Emails going to spam**: Add SPF/DKIM records if using your own domain
- **Connection timeout**: Check firewall settings and SMTP port (587 for TLS, 465 for SSL)

## Security Notes

- Never commit your `.env` file to git (it's already in `.gitignore`)
- Use App Passwords, not your regular Gmail password
- For production, consider using a dedicated email service (SendGrid, Mailgun, etc.)
