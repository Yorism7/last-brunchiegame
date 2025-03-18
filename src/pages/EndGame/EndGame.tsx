import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonImg } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import MyFooter from '../../components/MyFooter/MyFooter';

const EndGame: React.FC = () => {
  const history = useHistory();

  const playAgain = async () => {
    return history.replace('/home');
  };
 
  return (
    <IonPage>
      <IonContent color='main'>
        <IonGrid>
          <IonRow>
            <IonImg className='EndGameImage' src='icon/end-text.svg' alt="เกมจบแล้ว" />
          </IonRow>
          <IonRow>
            <div className='PlayAgain' onClick={playAgain}>
                <IonImg src='icon/JoyAgain.svg' alt="เล่นครั้ง" />
            </div>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton expand='block' color="light" shape='round' fill='outline' routerLink='/home'>
                <b>ให้คะแนนแอปพเค</b>
              </IonButton>
              <IonButton expand='block' color="light" shape='round' fill='outline' href='https://www.brunchtimeshop.com/'>
                <b>เรา</b>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <MyFooter />
    </IonPage>
  );
};

export default EndGame;
