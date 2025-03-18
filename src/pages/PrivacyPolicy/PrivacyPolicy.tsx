import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle>นโยบายความเป็นส่วน</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>นโยบายความเป็นส่วน Break the ice quiz</h2>
        <p>แอปพเคจำเป็นต้องเก็บข้อมูลต่อไป:</p>
        <ul>
          <li>ข้อมูล LINE (ชื่อ, โปรไฟล์)</li>
          <li>ข้อมูลอื่น (ใช้ตนเท่า้น)</li>
        </ul>
        <h3>ประสงค์ในการเก็บข้อมูล</h3>
        <ul>
          <li>เพื่อสร้างและใช้</li>
          <li>เพื่อประสบการณ์การใช้งานแอปพเค</li>
          <li>เพื่อการต่อสื่อ, ใช้</li>
        </ul>
        <h3>ความปลอดภัยของข้อมูล</h3>
        <p>เราให้ความสำคัญกับข้อมูลส่วนตัวของผู้ใช้และมาตรการป้องกันที่เหมาะสมเพื่อป้องกันการเข้าถึง, การเปลี่ยนแปลง, หรือการทำลายข้อมูลโดยไม่ได้รับอนุญาต</p>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicy;
