import React, { useState } from 'react';
import { IonContent, IonPage, IonAlert, useIonRouter } from '@ionic/react';

const Welcome: React.FC = () => {
  const [showAgeCheck, setShowAgeCheck] = useState(true);
  const router = useIonRouter();

  const handleAgeConfirmation = (isOver12: boolean) => {
    if (isOver12) {
      localStorage.setItem('ageVerified', 'true');
      router.push('/home');
    } else {
      router.push('/age-restriction');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonAlert
          isOpen={showAgeCheck}
          header="การ"
          message="ท่าน 12 ร้อย หรือไม่"
          buttons={[
            {
              text: 'ไม่ใช่',
              handler: () => handleAgeConfirmation(false)
            },
            {
              text: 'ใช่',
              handler: () => handleAgeConfirmation(true)
            }
          ]}
          backdropDismiss={false}
        />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
