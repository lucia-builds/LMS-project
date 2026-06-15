import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── SHARED STYLE TOKENS (matches Home.jsx & LMS design system) ── */
const S = {
  gradText: {
    background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  glass: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '20px',
    backdropFilter: 'blur(12px)',
  },
  label: {
    color: '#60a5fa',
    fontSize: '11px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'block',
    marginBottom: '14px',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '12px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '700',
    boxShadow: '0 8px 28px rgba(29,78,216,0.35)',
    transition: 'all 0.25s ease',
  },
  btnGhost: {
    background: 'transparent',
    color: '#94a3b8',
    border: '1px solid rgba(148,163,184,0.25)',
    padding: '12px 28px',
    borderRadius: '12px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.25s ease',
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  },
  inputLabel: {
    color: '#94a3b8',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block',
  },
};

/* ── TAB CONFIG ── */
const TABS = [
  { id: 'profile',   label: 'Profile Info',    icon: '👤' },
  { id: 'password',  label: 'Change Password',  icon: '🔒' },
  { id: 'avatar',    label: 'Profile Picture',  icon: '🖼️' },
  { id: 'settings',  label: 'Preferences',      icon: '⚙️' },
];

/* ── TOAST COMPONENT ── */
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999,
      background: type === 'success'
        ? 'linear-gradient(135deg, rgba(16,185,129,0.95), rgba(5,150,105,0.95))'
        : 'linear-gradient(135deg, rgba(239,68,68,0.95), rgba(185,28,28,0.95))',
      color: 'white', padding: '14px 22px', borderRadius: '14px',
      fontSize: '14px', fontWeight: '600',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      border: type === 'success'
        ? '1px solid rgba(52,211,153,0.3)'
        : '1px solid rgba(252,165,165,0.3)',
      display: 'flex', alignItems: 'center', gap: '10px',
      animation: 'fadeInUp 0.3s ease',
      maxWidth: '340px',
    }}>
      <span style={{ fontSize: '18px' }}>{type === 'success' ? '✅' : '❌'}</span>
      {message}
    </div>
  );
};

/* ── INPUT FIELD ── */
const Field = ({ label, type = 'text', value, onChange, placeholder, hint }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={S.inputLabel}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...S.input,
          borderColor: focused ? 'rgba(56,189,248,0.5)' : 'rgba(255,255,255,0.10)',
          boxShadow: focused ? '0 0 0 3px rgba(56,189,248,0.08)' : 'none',
        }}
      />
      {hint && <p style={{ color: '#475569', fontSize: '12px', marginTop: '6px' }}>{hint}</p>}
    </div>
  );
};

/* ════════════════════════════════════════ */
const StudentProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  /* ── Load persisted user data ── */
  const [activeTab, setActiveTab] = useState('profile');
  const [toast, setToast] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  /* ── Profile state ── */
  const [profile, setProfile] = useState({
    name: storedUser.name || '',
    email: storedUser.email || '',
    phone: storedUser.phone || '',
    bio: storedUser.bio || '',
    location: storedUser.location || '',
    website: storedUser.website || '',
    github: storedUser.github || '',
    linkedin: storedUser.linkedin || '',
  });

  /* ── Password state ── */
  const [pwd, setPwd] = useState({ current: '', next: '', confirm: '' });
  const [showPwd, setShowPwd] = useState({ current: false, next: false, confirm: false });

  /* ── Avatar state ── */
  const [avatar, setAvatar] = useState(storedUser.avatar || null);
  const [avatarPreview, setAvatarPreview] = useState(storedUser.avatar || null);
  const [dragOver, setDragOver] = useState(false);

  /* ── Preferences state ── */
  const [prefs, setPrefs] = useState({
    emailNotifications: storedUser.prefs?.emailNotifications ?? true,
    courseReminders: storedUser.prefs?.courseReminders ?? true,
    weeklyDigest: storedUser.prefs?.weeklyDigest ?? false,
    publicProfile: storedUser.prefs?.publicProfile ?? true,
    twoFactor: storedUser.prefs?.twoFactor ?? false,
    darkMode: storedUser.prefs?.darkMode ?? true,
    language: storedUser.prefs?.language || 'English',
    timezone: storedUser.prefs?.timezone || 'Asia/Kolkata',
  });

  const showToast = (message, type = 'success') => setToast({ message, type });

  /* ── Handlers ── */
  const handleProfileSave = (e) => {
    e.preventDefault();
    const updated = { ...storedUser, ...profile };
    localStorage.setItem('user', JSON.stringify(updated));
    showToast('Profile updated successfully!');
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    if (!pwd.current) return showToast('Please enter your current password.', 'error');
    if (pwd.next.length < 8) return showToast('New password must be at least 8 characters.', 'error');
    if (pwd.next !== pwd.confirm) return showToast('New passwords do not match.', 'error');
    setPwd({ current: '', next: '', confirm: '' });
    showToast('Password changed successfully!');
  };

  const handleAvatarFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return showToast('Please upload a valid image file.', 'error');
    if (file.size > 5 * 1024 * 1024) return showToast('Image must be under 5 MB.', 'error');
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      setAvatarPreview(dataUrl);
      setAvatar(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarSave = () => {
    const updated = { ...storedUser, avatar };
    localStorage.setItem('user', JSON.stringify(updated));
    showToast('Profile picture updated!');
  };

  const handleAvatarRemove = () => {
    setAvatar(null);
    setAvatarPreview(null);
  };

  const handlePrefsSave = () => {
    const updated = { ...storedUser, prefs };
    localStorage.setItem('user', JSON.stringify(updated));
    showToast('Preferences saved!');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleAvatarFile(file);
  };

  /* ── Derived initials ── */
  const initials = profile.name
    ? profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
    : '?';

  /* ── Tab panel renderers ── */
  const renderProfile = () => (
    <div>
      <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>
        Personal Information
      </h3>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '28px' }}>
        Keep your profile up to date so mentors and peers can find you.
      </p>

      <form onSubmit={handleProfileSave}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 24px' }}>
          <Field label="Full Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} placeholder="Your full name" />
          <Field label="Email Address" type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} placeholder="you@example.com" />
          <Field label="Phone Number" type="tel" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} placeholder="+91 98765 43210" />
          <Field label="Location" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} placeholder="City, Country" />
          <Field label="Website / Portfolio" value={profile.website} onChange={(e) => setProfile({ ...profile, website: e.target.value })} placeholder="https://yourportfolio.com" />
          <Field label="GitHub Username" value={profile.github} onChange={(e) => setProfile({ ...profile, github: e.target.value })} placeholder="github-username" />
          <Field label="LinkedIn URL" value={profile.linkedin} onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })} placeholder="linkedin.com/in/yourname" />
        </div>

        {/* Bio — full width */}
        <div style={{ marginBottom: '28px' }}>
          <label style={S.inputLabel}>Bio</label>
          <textarea
            rows={4}
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            placeholder="Tell mentors and peers a bit about yourself…"
            maxLength={300}
            style={{
              ...S.input,
              resize: 'vertical',
              minHeight: '100px',
              lineHeight: '1.7',
            }}
          />
          <p style={{ color: '#334155', fontSize: '12px', marginTop: '6px', textAlign: 'right' }}>
            {profile.bio.length}/300
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button type="submit" style={S.btnPrimary}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Save Changes
          </button>
          <button type="button" style={S.btnGhost}
            onClick={() => setProfile({ name: '', email: '', phone: '', bio: '', location: '', website: '', github: '', linkedin: '' })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );

  const renderPassword = () => (
    <div>
      <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>
        Change Password
      </h3>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '28px' }}>
        Use a strong, unique password to keep your account safe.
      </p>

      {/* Security tip banner */}
      <div style={{
        background: 'rgba(56,189,248,0.07)',
        border: '1px solid rgba(56,189,248,0.18)',
        borderRadius: '14px',
        padding: '14px 18px',
        marginBottom: '28px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '20px', flexShrink: 0 }}>💡</span>
        <p style={{ color: '#7dd3fc', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
          A strong password has at least 8 characters with a mix of uppercase letters, numbers, and symbols.
        </p>
      </div>

      <form onSubmit={handlePasswordSave} style={{ maxWidth: '480px' }}>
        {['current', 'next', 'confirm'].map((key) => {
          const labels = { current: 'Current Password', next: 'New Password', confirm: 'Confirm New Password' };
          const hints = { next: 'Minimum 8 characters.' };
          return (
            <div key={key} style={{ marginBottom: '20px' }}>
              <label style={S.inputLabel}>{labels[key]}</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPwd[key] ? 'text' : 'password'}
                  value={pwd[key]}
                  onChange={(e) => setPwd({ ...pwd, [key]: e.target.value })}
                  placeholder="••••••••"
                  style={{ ...S.input, paddingRight: '48px' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd({ ...showPwd, [key]: !showPwd[key] })}
                  style={{
                    position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#475569', fontSize: '16px',
                    padding: 0, lineHeight: 1,
                  }}
                >
                  {showPwd[key] ? '🙈' : '👁️'}
                </button>
              </div>
              {hints[key] && <p style={{ color: '#475569', fontSize: '12px', marginTop: '6px' }}>{hints[key]}</p>}
            </div>
          );
        })}

        {/* Password strength bar */}
        {pwd.next.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: '#64748b', fontSize: '12px' }}>Password strength</span>
              <span style={{
                fontSize: '12px', fontWeight: '700',
                color: pwd.next.length < 6 ? '#ef4444' : pwd.next.length < 10 ? '#f59e0b' : '#10b981',
              }}>
                {pwd.next.length < 6 ? 'Weak' : pwd.next.length < 10 ? 'Medium' : 'Strong'}
              </span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: pwd.next.length < 6 ? '25%' : pwd.next.length < 10 ? '60%' : '100%',
                background: pwd.next.length < 6
                  ? 'linear-gradient(90deg, #ef4444, #b91c1c)'
                  : pwd.next.length < 10
                  ? 'linear-gradient(90deg, #f59e0b, #d97706)'
                  : 'linear-gradient(90deg, #10b981, #059669)',
                borderRadius: '100px',
                transition: 'all 0.3s ease',
              }} />
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="submit" style={S.btnPrimary}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Update Password
          </button>
          <button type="button" style={S.btnGhost} onClick={() => setPwd({ current: '', next: '', confirm: '' })}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderAvatar = () => (
    <div>
      <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>
        Profile Picture
      </h3>
      <p style={{ color: '#475569', fontSize: '14px', marginBottom: '28px' }}>
        Upload a photo so your mentors and classmates can recognise you.
      </p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <div style={{
            width: '140px', height: '140px', borderRadius: '50%',
            background: avatarPreview ? 'none' : 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
            border: '3px solid rgba(56,189,248,0.35)',
            boxShadow: '0 0 0 6px rgba(56,189,248,0.07)',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            {avatarPreview
              ? <img src={avatarPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <span style={{ color: 'white', fontSize: '44px', fontWeight: '800' }}>{initials}</span>
            }
          </div>
          <span style={{ color: '#475569', fontSize: '12px' }}>Current photo</span>
        </div>

        {/* Upload zone */}
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${dragOver ? 'rgba(56,189,248,0.6)' : 'rgba(255,255,255,0.12)'}`,
              borderRadius: '16px',
              padding: '40px 24px',
              textAlign: 'center',
              cursor: 'pointer',
              background: dragOver ? 'rgba(56,189,248,0.05)' : 'rgba(255,255,255,0.02)',
              transition: 'all 0.2s ease',
              marginBottom: '16px',
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'; e.currentTarget.style.background = 'rgba(56,189,248,0.04)'; }}
            onMouseOut={(e) => { if (!dragOver) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; } }}
          >
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📸</div>
            <p style={{ color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
              Click to upload or drag & drop
            </p>
            <p style={{ color: '#475569', fontSize: '13px', margin: 0 }}>
              PNG, JPG, WEBP — max 5 MB
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => { if (e.target.files[0]) handleAvatarFile(e.target.files[0]); }}
          />

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              style={S.btnPrimary}
              onClick={handleAvatarSave}
              disabled={!avatar}
              onMouseOver={(e) => { if (avatar) e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Save Picture
            </button>
            {avatarPreview && (
              <button style={{ ...S.btnGhost, color: '#f87171', borderColor: 'rgba(248,113,113,0.25)' }} onClick={handleAvatarRemove}>
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => {
    const Toggle = ({ label, desc, checked, onChange }) => (
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          <p style={{ color: 'white', fontWeight: '600', fontSize: '14px', margin: '0 0 3px' }}>{label}</p>
          <p style={{ color: '#475569', fontSize: '12px', margin: 0 }}>{desc}</p>
        </div>
        <button
          onClick={() => onChange(!checked)}
          style={{
            width: '48px', height: '26px',
            borderRadius: '100px',
            background: checked
              ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)'
              : 'rgba(255,255,255,0.08)',
            border: 'none', cursor: 'pointer',
            position: 'relative', flexShrink: 0,
            transition: 'background 0.25s ease',
          }}
        >
          <span style={{
            position: 'absolute',
            top: '3px', left: checked ? '25px' : '3px',
            width: '20px', height: '20px',
            borderRadius: '50%',
            background: 'white',
            transition: 'left 0.25s ease',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }} />
        </button>
      </div>
    );

    const Select = ({ label, value, onChange, options }) => (
      <div style={{ marginBottom: '20px' }}>
        <label style={S.inputLabel}>{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            ...S.input,
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2394a3b8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            paddingRight: '40px',
          }}
        >
          {options.map((o) => <option key={o} value={o} style={{ background: '#0f172a' }}>{o}</option>)}
        </select>
      </div>
    );

    return (
      <div>
        <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>
          Preferences
        </h3>
        <p style={{ color: '#475569', fontSize: '14px', marginBottom: '28px' }}>
          Customise your notifications, privacy and account settings.
        </p>

        {/* Notifications */}
        <div style={{ ...S.glass, padding: '24px', marginBottom: '20px' }}>
          <h4 style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px' }}>
            🔔 Notifications
          </h4>
          <Toggle label="Email Notifications" desc="Receive updates and alerts via email" checked={prefs.emailNotifications} onChange={(v) => setPrefs({ ...prefs, emailNotifications: v })} />
          <Toggle label="Course Reminders" desc="Get reminded about lessons you haven't completed" checked={prefs.courseReminders} onChange={(v) => setPrefs({ ...prefs, courseReminders: v })} />
          <Toggle label="Weekly Digest" desc="A weekly summary of your learning activity" checked={prefs.weeklyDigest} onChange={(v) => setPrefs({ ...prefs, weeklyDigest: v })} />
        </div>

        {/* Privacy */}
        <div style={{ ...S.glass, padding: '24px', marginBottom: '20px' }}>
          <h4 style={{ color: '#818cf8', fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px' }}>
            🔏 Privacy & Security
          </h4>
          <Toggle label="Public Profile" desc="Let other students discover your profile" checked={prefs.publicProfile} onChange={(v) => setPrefs({ ...prefs, publicProfile: v })} />
          <Toggle label="Two-Factor Authentication" desc="Add an extra layer of security to your account" checked={prefs.twoFactor} onChange={(v) => setPrefs({ ...prefs, twoFactor: v })} />
        </div>

        {/* Appearance & locale */}
        <div style={{ ...S.glass, padding: '24px', marginBottom: '28px' }}>
          <h4 style={{ color: '#34d399', fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
            🌐 Appearance & Locale
          </h4>
          <Toggle label="Dark Mode" desc="Use dark theme across the platform" checked={prefs.darkMode} onChange={(v) => setPrefs({ ...prefs, darkMode: v })} />
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 24px' }}>
            <Select label="Language" value={prefs.language} onChange={(v) => setPrefs({ ...prefs, language: v })} options={['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Bengali']} />
            <Select label="Timezone" value={prefs.timezone} onChange={(v) => setPrefs({ ...prefs, timezone: v })} options={['Asia/Kolkata', 'Asia/Dubai', 'UTC', 'America/New_York', 'Europe/London']} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={S.btnPrimary} onClick={handlePrefsSave}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Save Preferences
          </button>

          {/* Danger zone */}
          <button
            style={{ ...S.btnGhost, color: '#f87171', borderColor: 'rgba(248,113,113,0.25)', marginLeft: 'auto' }}
            onClick={() => {
              if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
                localStorage.clear();
                navigate('/register');
              }
            }}
          >
            🗑️ Delete Account
          </button>
        </div>
      </div>
    );
  };

  const panelMap = {
    profile: renderProfile,
    password: renderPassword,
    avatar: renderAvatar,
    settings: renderSettings,
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* ── Ambient background glows (matches Home.jsx) ── */}
      <div style={{ position: 'fixed', top: '-200px', left: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '-200px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* ── PAGE HEADER ── */}
        <div style={{ marginBottom: '36px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ ...S.btnGhost, padding: '8px 18px', fontSize: '13px', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            ← Back
          </button>
          <span style={S.label}>✦ Account Management ✦</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-0.5px', marginBottom: '10px' }}>
            Profile &amp; <span style={S.gradText}>Settings</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px' }}>
            Manage your account, update your details and control your preferences.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* ── SIDEBAR ── */}
          <aside style={{ width: '240px', flexShrink: 0 }}>
            {/* Avatar summary card */}
            <div style={{ ...S.glass, padding: '24px', textAlign: 'center', marginBottom: '16px' }}>
              <div style={{
                width: '88px', height: '88px', borderRadius: '50%', margin: '0 auto 14px',
                background: avatarPreview ? 'none' : 'linear-gradient(135deg, #1d4ed8, #7c3aed)',
                border: '2px solid rgba(56,189,248,0.3)',
                boxShadow: '0 0 0 5px rgba(56,189,248,0.07)',
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {avatarPreview
                  ? <img src={avatarPreview} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <span style={{ color: 'white', fontSize: '28px', fontWeight: '800' }}>{initials}</span>
                }
              </div>
              <p style={{ color: 'white', fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>
                {profile.name || 'Student'}
              </p>
              <p style={{ color: '#475569', fontSize: '12px', marginBottom: '14px' }}>
                {profile.email || 'No email set'}
              </p>
              <span style={{
                background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)',
                color: '#38bdf8', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '700',
              }}>
                🎓 Student
              </span>
            </div>

            {/* Nav tabs */}
            <nav style={{ ...S.glass, padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                    background: activeTab === tab.id
                      ? 'linear-gradient(135deg, rgba(29,78,216,0.35), rgba(124,58,237,0.25))'
                      : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#64748b',
                    fontSize: '14px', fontWeight: activeTab === tab.id ? '700' : '500',
                    borderLeft: activeTab === tab.id ? '3px solid #38bdf8' : '3px solid transparent',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    width: '100%',
                  }}
                  onMouseOver={(e) => { if (activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#94a3b8'; } }}
                  onMouseOut={(e) => { if (activeTab !== tab.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64748b'; } }}
                >
                  <span style={{ fontSize: '16px', flexShrink: 0 }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* ── MAIN PANEL ── */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ ...S.glass, padding: '36px' }}>
              {panelMap[activeTab]?.()}
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Fade-in keyframe */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default StudentProfile;