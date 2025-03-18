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

        <h3>การใช้งาน</h3>
        <ul>
          <li>ใช้ต้อง 12 ปีขึ้นไป</li>
          <li>ใช้ต้อง LINE ต้อง</li>
          <li>ห้ามใช้งานในทางกฎหมายละเมิดอื่น</li>
        </ul>

        <h3>การใช้งานไม่เหมาะสม</h3>
        <ul>
          <li>การใช้ภาษาไม่ภาพ</li>
          <li>การละเมิดส่วน</li>
          <li>การแชร์ข้อมูลไม่เหมาะสม</li>
        </ul>

        <h3>การระงับ</h3>
        <p>เราขอสงวนสิทธิในการระงับละเมิดข้อกำหนด</p>

        <h3>การเสธความ</h3>
        <p>เราไม่ต่อ:</p>
        <ul>
          <li>ความหาย: ่จากการใช้งาน</li>
          <li>การญหายของข้อมูล</li>
          <li>ทาง</li>
        </ul>

        <h3>การปเดต</h3>
        <p>เราอาจข้อกำหนดโดยจะแจ้งให้ทราบล่วงหน้า</p>
      </IonContent>
    </IonPage>
  );
};

export default TermsOfService;


