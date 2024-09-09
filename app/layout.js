// app/layout.js
import './globals.css';

export const metadata = {
  title: 'AI Research Tool Waitlist',
  description: 'Join the waitlist for the AI Research Tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
