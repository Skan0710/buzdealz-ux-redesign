import React, { useState } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccessLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      onSuccessLogin();
      onClose();
      setIsSubmitted(false);
    }, 900);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '440px',
          padding: '36px 32px',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border)',
        }}
        className="animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--muted-foreground)',
            padding: '4px',
            borderRadius: '50%',
          }}
        >
          <X size={20} />
        </button>

        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #d6336c 0%, #8b1e47 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 900,
              fontSize: '18px',
            }}
          >
            B
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground-heading)' }}>
            Buz<span style={{ color: 'var(--primary)' }}>Dealz</span>
          </span>
        </div>

        {/* Modal Titles */}
        <h3
          style={{
            fontSize: '1.45rem',
            fontWeight: 800,
            color: 'var(--foreground-heading)',
            marginBottom: '8px',
          }}
        >
          Welcome to BuzDealz
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--muted-foreground)',
            marginBottom: '24px',
            lineHeight: 1.5,
          }}
        >
          Login or sign up to unlock member pricing and exclusive deals.
        </p>

        {/* Google SSO Button */}
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(true);
            setTimeout(() => {
              onSuccessLogin();
              onClose();
              setIsSubmitted(false);
            }, 600);
          }}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
            color: 'var(--foreground)',
            fontWeight: 600,
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
            transition: 'background-color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--muted)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface)')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
            color: 'var(--muted-foreground)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Mail size={12} /> email OTP
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label
              htmlFor="login-email-input"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '6px',
              }}
            >
              Email Address
            </label>
            <input
              id="login-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1.5px solid var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--foreground)',
                fontSize: '0.95rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              padding: '13px',
              fontSize: '0.95rem',
              borderRadius: '12px',
              marginTop: '6px',
            }}
          >
            {isSubmitted ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} /> Verifying...
              </span>
            ) : (
              'Get OTP'
            )}
          </button>
        </form>

        {/* Footer Terms Note */}
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--muted-foreground)',
            textAlign: 'center',
            marginTop: '20px',
            lineHeight: 1.4,
          }}
        >
          By continuing, you agree to our <span style={{ textDecoration: 'underline' }}>Terms</span> &{' '}
          <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};
