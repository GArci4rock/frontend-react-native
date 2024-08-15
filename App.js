
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App () {
  return(
    
   <ScrollView style={styles.container}>
          <Header />
          <Main />
          <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})
