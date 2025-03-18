import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from '@ionic/react';

const TermsOfService: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle>ข้อกำหนดการใช้งาน</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>ข้อกำหนดการใช้งาน Break the ice quiz</h2>
        <p>การใช้งานแอปพเค้ ใช้จำเป็นต้องเงื่อนไขต่อไป</p>
        <h3>การใช้งาน</h3>
        <ul>
          <li>ใช้ต้อง 12 ปีขึ้นไป</li>
          <li>ใช้ต้องนโยบายความเป็นส่วนของแอปพเค้</li>
          <li>ใช้ต้องไม่ใช้งานแอปพเค้ในทางกฎหมาย</li>
        </ul>
        <h3>ข้อความ</h3>
        <ul>
          <li>แอปพเค้เป็นเครื่องสร้างความสนานและกระชับความสุข</li>
          <li>ไม่ต่อความหายอาจเกิดจากการใช้งานแอปพเค้</li>
          <li>ใช้ต้องใช้จารณญาณในการตอบคำถามและแบ่งปันข้อมูลส่วนตัว</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default TermsOfService;
