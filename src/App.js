import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('Tren Geçiş Saatleri'); //Ilk menu default selected

  const handleLogin = (username, password) => { //Test icin basit id/pw kontrol. Backend calismasi gerekir. Sonrasinda setUserRole fonksyonu user_type degiskenine gore ayarlanabilir
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setUserRole('admin');
    } else if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setUserRole('user'); 
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    setUserRole(null);
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu); 
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div style={{ display: 'flex' }}>
          <Sidebar userRole={userRole} onMenuSelect={handleMenuSelect} onLogout={handleLogout} />
          <div style={{ marginLeft: '20px', padding: '20px', color: 'black' }}>
            <h1>{selectedMenu}</h1> {/* Menu header yazdir button test icin. Icerik calismasi gerekir. */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
