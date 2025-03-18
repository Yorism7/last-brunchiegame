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
        
        <h3>ข้อมูล: เราเก็บ</h3>
        <ul>
          <li>ข้อมูลฐาน: ชื่อใช้ LINE</li>
          <li>ข้อมูลการใช้งาน: การเล่น คะแนน</li>
        </ul>

        <h3>เก็บและการใช้ข้อมูล</h3>
        <ul>
          <li>เราเก็บข้อมูลไว้ในระบบ</li>
          <li>เราใช้ข้อมูลเพื่อประสบการณ์การเล่นเกมเท่าที่</li>
          <li>เราไม่แบ่งปันข้อมูล</li>
        </ul>

        <h3>ของใช้งาน</h3>
        <ul>
          <li>ในการเข้าข้อมูลของตนเอง</li>
          <li>ในการแก้ไขข้อมูล</li>
          <li>ในการลบข้อมูล</li>
          <li>ในการถอนความยอม</li>
        </ul>

        <h3>การลบข้อมูล</h3>
        <p>้ใช้สามารถขอลบข้อมูลได้โดย:</p>
        <ol>
          <li>เข้าไปที่ตั้งค่า</li>
          <li> "ลบข้อมูลของตนเอง"</li>
          <li>การลบข้อมูล</li>
        </ol>

        <h3>การต่อ</h3>
        <p>หากข้อสงสัยเกี่ยวกับความเป็นส่วน, สามารถต่อเราได้:</p>
        <p>: support@breaktheicequiz.com</p>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicy;


