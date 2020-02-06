import React, { Component } from "react";
import { AccentCell, Cell, Color, Container, Table, Text } from "./Tabs.style";
import { COLORS } from "../../constants/color";

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
                            Exemple : <Color color={COLORS.firstCounter}>MK = MO</Color>
                        </li>
                        <li>
                            si x et y sont identiques, alors z=x et t=y
                        </li>
                        <li>
                            sinon, x et y forment un rectangle. Alors z et t sont les deux lettres fermant le rectangle, avec z sur la même ligne que x et t sur la même ligne que y. 
                            <br/>
                            Exemple : <Color color={COLORS.secondCounter}>GT = JQ</Color>, <Color color={COLORS.secondCounter}>QJ = TG</Color>.
                        </li>
                        <li>
                            une lettre seule reste identique (mots de taille impair)
                        </li>
                    </ul>
                </Text>
                
                <Table>
                    <tr>
                        <Cell>A</Cell>
                        <Cell>B</Cell>
                        <Cell>C</Cell>
                        <Cell>D</Cell>
                        <Cell>E</Cell>
                    </tr>
                    <tr>
                        <Cell>F</Cell>
                        <AccentCell color={COLORS.secondCounter}>G</AccentCell>
                        <Cell>H</Cell>
                        <Cell>I</Cell>
                        <AccentCell color={COLORS.secondCounter}>J</AccentCell>
                    </tr><tr>
                        <AccentCell color={COLORS.firstCounter}>K</AccentCell>
                        <Cell>L</Cell>
                        <AccentCell color={COLORS.firstCounter}>M</AccentCell>
                        <Cell>N</Cell>
                        <AccentCell color={COLORS.firstCounter}>O</AccentCell>
                    </tr><tr>
                        <Cell>P</Cell>
                        <AccentCell color={COLORS.secondCounter}>Q</AccentCell>
                        <Cell>R</Cell>
                        <Cell>S</Cell>
                        <AccentCell color={COLORS.secondCounter}>T</AccentCell>
                    </tr><tr>
                        <Cell>U</Cell>
                        <Cell>V</Cell>
                        <Cell>X</Cell>
                        <Cell>Y</Cell>
                        <Cell>Z</Cell>
                    </tr>
                </Table>
            </Container>
        )
    }
}

export default Playfair;