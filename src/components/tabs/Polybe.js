import React, { Component } from "react";
import { AccentCell, Cell, Color, Container, Table, Text, TitleCell } from "./Tabs.style";
import { COLORS } from "../../constants/color";

class Polybe extends Component {

    render() {
        return (
            <Container>
                <Text>
                Le chiffre de Polybe consiste à chiffrer chaque lettre du message par deux chiffres. 
                Le premier chiffre correspond à la colonne, le second à la ligne.
                <br/>
                Exemple : <Color color={COLORS.secondCounter}>N = 43</Color>
                <br/>
                <br/>
                Note: La grille est la clé du code. Par simplicité,  elle est souvent livrée sans les chiffres. Un chiffré complet est donné par une série de nombres. Bien souvent, ces nombres ne sont pas séparés et juste accolés à la suite.
                <br/>
                Exemple : <Color color={COLORS.firstCounter}>312351 = CLE</Color>
                </Text>
                {/* <Image src={PolybeImage} alt="polybe grid"/> */}

                <Table>
                    <tr>
                        <Cell> </Cell>
                        <TitleCell>1</TitleCell>
                        <TitleCell>2</TitleCell>
                        <TitleCell>3</TitleCell>
                        <TitleCell>4</TitleCell>
                        <TitleCell>5</TitleCell>
                    </tr>
                    <tr>
                        <TitleCell>1</TitleCell>
                        <Cell>A</Cell>
                        <Cell>B</Cell>
                        <AccentCell color={COLORS.firstCounter}>C</AccentCell>
                        <Cell>D</Cell>
                        <AccentCell color={COLORS.firstCounter}>E</AccentCell>
                    </tr>
                    <tr>
                        <TitleCell>2</TitleCell>
                        <Cell>F</Cell>
                        <Cell>G</Cell>
                        <Cell>H</Cell>
                        <Cell>I</Cell>
                        <Cell>J</Cell>
                    </tr><tr>
                        <TitleCell>3</TitleCell>
                        <Cell>K</Cell>
                        <AccentCell color={COLORS.firstCounter}>L</AccentCell>
                        <Cell>M</Cell>
                        <AccentCell color={COLORS.secondCounter}>N</AccentCell>
                        <Cell>O</Cell>
                    </tr><tr>
                        <TitleCell>4</TitleCell>
                        <Cell>P</Cell>
                        <Cell>Q</Cell>
                        <Cell>R</Cell>
                        <Cell>S</Cell>
                        <Cell>T</Cell>
                    </tr><tr>
                        <TitleCell>5</TitleCell>  
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

export default Polybe;