import React from 'react';
import './Sidebar.css';
import logo from './assets/logo.jpg';

function Sidebar({ userRole, onMenuSelect, onLogout }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button onClick={() => onMenuSelect('Tren Geçiş Saatleri')}>Tren Geçiş Saatleri</button>
      <button onClick={() => onMenuSelect('Alarm Sayıları')}>Alarm Sayıları</button>
      <button onClick={() => onMenuSelect('İşçi Sayıları')}>İşçi Sayıları</button>
      <button onClick={() => onMenuSelect('Cihaz Sayısı')}>Cihaz Sayısı</button>

      {userRole === 'admin' && (
        <button onClick={() => onMenuSelect('Admin Panel')}>Admin Panel</button>
      )}
      
      <button onClick={onLogout}>Çıkış</button>
    </div>
  );
}

export default Sidebar;
