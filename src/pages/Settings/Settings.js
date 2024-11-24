import React, { useState } from 'react';
import { FaClock, FaCalendarAlt, FaGlobe, FaCogs, FaBell, FaUserShield } from 'react-icons/fa';
import './SettingPage.css';

const SettingPage = () => {
  // State hooks for managing different settings
  const [timeFormat, setTimeFormat] = useState('24-hour');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [timezone, setTimezone] = useState('GMT');
  const [language, setLanguage] = useState('English');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <div className="settings-container">
      <h1>Settings</h1>

      <section className="settings-section">
        <h2><FaClock /> Time Settings</h2>
        <div className="settings-item">
          <label>Time Format</label>
          <select value={timeFormat} onChange={e => setTimeFormat(e.target.value)}>
            <option value="24-hour">24-Hour</option>
            <option value="12-hour">12-Hour</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Date Format</label>
          <select value={dateFormat} onChange={e => setDateFormat(e.target.value)}>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY/MM/DD">YYYY/MM/DD</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Time Zone</label>
          <select value={timezone} onChange={e => setTimezone(e.target.value)}>
            <option value="GMT">GMT</option>
            <option value="EST">EST (Eastern Standard Time)</option>
            <option value="PST">PST (Pacific Standard Time)</option>
            {/* Add more timezones as necessary */}
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h2><FaGlobe /> Regional Settings</h2>
        <div className="settings-item">
          <label>Language</label>
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as necessary */}
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h2><FaCogs /> System Preferences</h2>
        <div className="settings-item">
          <label>Enable Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </div>
        <div className="settings-item">
          <label>Privacy Mode</label>
          <input
            type="checkbox"
            checked={privacyMode}
            onChange={() => setPrivacyMode(!privacyMode)}
          />
        </div>
      </section>

      <section className="settings-section">
        <h2><FaBell /> Notification Settings</h2>
        <div className="settings-item">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </div>
        <div className="settings-item">
          <label>SMS Notifications</label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </div>
      </section>

      <section className="settings-section">
        <h2><FaUserShield /> Privacy Settings</h2>
        <div className="settings-item">
          <label>Two-Factor Authentication</label>
          <input
            type="checkbox"
            checked={privacyMode}
            onChange={() => setPrivacyMode(!privacyMode)}
          />
        </div>
        <div className="settings-item">
          <label>Data Sharing with Third Parties</label>
          <input
            type="checkbox"
            checked={privacyMode}
            onChange={() => setPrivacyMode(!privacyMode)}
          />
        </div>
      </section>

      <button className="save-btn">Save Settings</button>
    </div>
  );
};

export default SettingPage;
