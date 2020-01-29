import React, { Component } from "react";
import { Color, Container, Image, Text } from "./Tabs.style";
import PlayfairImage from '../../images/playfair.png';

class Playfair extends Component {

    render() {
        return (
            <Container>
                <Text>
                    Le chiffre de Playfair symmétrique consiste à chiffrer des digrammes (paires de lettres). 
                    Chaque digramme xy est chiffré en un autre digramme zt à l’aide d’une grille de la manière suivante :
                    <br/>
                    <ul>
                        <li>
                            si x et y sont sur la même ligne ou la même colonne, alors z=x et t est le symétrique de y par rapport à x dans la grille. 
                            <br/>
                            Exemple : <Color color="red">MK = MO</Color>
                        </li>
                        <li>
                            si x et y sont identiques, alors z=x et t=y
                        </li>
                        <li>
                            sinon, x et y forment un rectangle. Alors z et t sont les deux lettres fermant le rectangle, avec z sur la même ligne que x et t sur la même ligne que y. 
                            <br/>
                            Exemple : <Color color="green">GT = JQ</Color>, <Color color="green">QJ = TG</Color>.
                        </li>
                        <li>
                            une lettre seule reste identique (mots de taille impair)
                        </li>
                    </ul>
                </Text>
                <Image src={PlayfairImage} alt="polybe grid"/>
            </Container>
        )
    }
}

export default Playfair;