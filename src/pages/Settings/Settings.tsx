import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import MyFooter from '../../components/MyFooter/MyFooter';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>การตั้งค่า</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/privacy-policy">
            <IonLabel>นโยบายความเป็นส่วนตัว</IonLabel>
          </IonItem>
          <IonItem routerLink="/terms-of-service">
            <IonLabel>ข้อกำหนดการใช้งาน</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default Settings;
