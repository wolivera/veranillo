import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Tile } from 'react-native-elements';

export default class About extends React.Component {

  render() {
    return (
      <Image
        style={styles.backdrop}
        blurRadius={0.5}
        source={require('../../assets/the-sun.jpg')}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Veranillo App</Text>
          <Text style={styles.headline}>
            Corría el pleno invierno del año 2008 en las inmediaciones de Bvar Artigas
            y Gral Flores. Tras la ventana de un Liceo, se podía observar un grupo de
            jóvenes transpirados y sofocados de calor a pesar de los 2 grados bajo cero
            que marcaba el termómetro. Parecían estar inmersos en un Veranillo.{"\n\n"}

            Fútbol en la plaza, bailes en Red, hamburguesadas, el Topo, frases inéditas,
            son sólo algunas de las cosas que marcaban la historia del Veranillo.{"\n\n"}

            Así como las mejores bandas de rock, los miembros fueron cambiando. No olvidamos
            a un Agus Rivera con más cantidad de bullying al topo que puntos en los exámenes.
            O un Fede Jorcín que al darse cuenta que lo mejor que podía conseguir juntándose
            con el Veranillo era el acoso de la hermana de la Chucala.{"\n\n"}

            Tampoco olvidemos que algunos de los miembros actuales supieron ser parte de "otro
            grupito de amigos". Por ejemplo Jenni que luego de ser integrante exclusiva del
            lado derecho del salón, tambien conocido como el Inviernillo o "Los Popu", supo
            ver lo que era bueno en uno de los miembros del Veranillo, un macho latino irresistible.
            También teníamos a Danilo y el Zalo tirando más hacia el medio del salón que luego
            de algunos meses y hamburguesadas de por medio formalizaron su integración.{"\n\n"}

            Ya en el 2009 el Veranillo corrió riesgo de separación de otro de sus miembros.
            En plena definición del listado de integrantes del nuevo año, la corrupción tuvo
            su lugar: viajes a Portugal, arreglos con la Policía, Directores de la Educación, favores,
            mafia, drogas, lavado de dinero e intercambio de órganos fueron sólo algunas de las
            cosas que dejaron a Willi en el turno de la tarde.{"\n\n"}

            Todo parecía acabarse para el susodicho, incluso se buscaron reemplazos tales como
            el Magurno y se editaron fotos viejas con su cara para alivianar la pérdida. Pero
            nunca dió con la talla, sobre todo las de las mangas de los brazos las cuales no pudo rellenar.
            Todo volvió a como era antes.{"\n\n"}

            El fanatismo por el Veranillo se hizo grande, uno de los miembros, Martín llegó a obsesionarse
            con la felicidad que le provocaba el entorno del Veranillo. Tal es así que se mantuvo en el Liceo
            los siguientes 4 años para no dejar ir los buenos tiempos.{"\n\n"}

            Los años pasaron, los 36 trabajos del Lucho también (aaa no zi no, ni 345 mil billones de trabajos .. por día).
            Hoy el Veranillo sigue en pie, con varias viejas costumbres intactas. Como los solteros que siguen
            sin agarrar una mina, las salidas que cuesta más armarlas que una bomba nuclear y esperando que
            Danilo convenza a Martín de ir al "Eje". Pero bueno, al menos tenemos una App!{"\n\n"}
          </Text>
        </ScrollView>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    marginBottom: '20%',
    marginTop: '50%',
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headline: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});
