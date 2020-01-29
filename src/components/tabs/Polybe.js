import React, { Component } from "react";
import { Color, Container, Image, Text } from "./Tabs.style";
import PolybeImage from '../../images/polybe.png';

class Polybe extends Component {

    render() {
        return (
            <Container>
                <Text>
                Le chiffre de Polybe consiste à chiffrer chaque lettre du message par deux chiffres. 
                Le premier chiffre correspond à la colonne, le second à la ligne.
                <br/>
                Exemple : <Color color="red">N = 43</Color>
                <br/>
                <br/>
                Note: La grille est la clé du code. Par simplicité,  elle est souvent livrée sans les chiffres. Un chiffré complet est donné par une série de nombres. Bien souvent, ces nombres ne sont pas séparés et juste accolés à la suite.
                <br/>
                Exemple : <Color color="green">312351 = CLE</Color>
                </Text>
                <Image src={PolybeImage} alt="polybe grid"/>
            </Container>
        )
    }
}

export default Polybe;