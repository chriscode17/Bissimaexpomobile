
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

// Empêche le splash screen natif de disparaître tout de suite
SplashScreen.preventAutoHideAsync();

// Les différentes étapes de ton animation avec leurs couleurs et textes
const SPLASH_STEPS = [
  { text: "Inspirer", color: "#D49A00" },   // Jaune / Ocre
  { text: "Former", color: "#A83818" },     // Marron / Rouge
  { text: "Accompagner", color: "#008000" } // Vert
];

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    async function runSplashSequence() {
      // Cache le splash natif d'Expo pour laisser place à notre animation personnalisée
      await SplashScreen.hideAsync();

      // Durée d'affichage pour chaque mot (ex: 800 millisecondes)
      const timer = setInterval(() => {
        setCurrentStep((prevStep) => {
          if (prevStep < SPLASH_STEPS.length - 1) {
            return prevStep + 1;
          } else {
            clearInterval(timer);
            setIsAnimationFinished(true); // L'animation est finie, on affiche l'app principale
            return prevStep;
          }
        });
      }, 900); // Change de mot toutes les 0.9 secondes

      return () => clearInterval(timer);
    }

    runSplashSequence();
  }, []);

  // 1. Pendant que l'animation tourne, on affiche l'écran coloré dynamique
  if (!isAnimationFinished) {
    const currentData = SPLASH_STEPS[currentStep];
    return (
      <View style={[styles.container, { backgroundColor: currentData.color }]}>
        <Text style={styles.splashText}>{currentData.text}</Text>
      </View>
    );
  }

  // 2. Une fois l'animation terminée, ton application normale s'affiche
  return (
    <View style={styles.mainContainer}>
        
     <Image source={require('../image2/bissima1.png')} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: "#FFFFFF", // Texte en blanc pour bien ressortir sur les couleurs vives
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2E8DA", // Ton beige chaud de fond d'app
  },
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E293B",
  },  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },


});