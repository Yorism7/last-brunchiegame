import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { bag, home, logOutSharp, openSharp, people } from 'ionicons/icons';
import '../MyFooter/MyFooter.css';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert';

const MyFooter: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    history.push('/login');
  };

  const handleAccount = () => {
    const userSession = localStorage.getItem('userSession');
    const username = userSession ? JSON.parse(userSession).username : 'Guest';
    
    swal({
      title: `ข้อมูลการใช้`,
      text: `Username: ${username}`,
      icon: 'success',
    });
  }

  return (
    <>
      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton onClick={() => history.replace('/home')} tab="home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton href="https://www.brunchtimeshop.com/products" tab="contacts">
          <IonIcon icon={bag} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton href="https://www.brunchtimeshop.com" tab="settings">
          <IonIcon icon={openSharp} />
          <IonLabel>Website</IonLabel>
        </IonTabButton>
        <IonTabButton onClick={handleAccount} tab="account">
          <IonIcon icon={people} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
        <IonTabButton onClick={handleLogout} tab="logout">
          <IonIcon icon={logOutSharp} />
          <IonLabel>Logout</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );
};

export default MyFooter;
