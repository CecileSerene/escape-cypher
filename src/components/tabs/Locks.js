import React, { Component } from "react";
import { Container, LockImage, Text, Subcontainer } from "./Tabs.style";
import Lock1Image from '../../images/lock1.png';
import Lock2Image from '../../images/lock2.png';

class Locks extends Component {

    render() {
        return (
            <Container>
                <Subcontainer>
                <LockImage src={Lock1Image} alt="lock 1"/>
                <Text>
                Pour ouvrir ce cadenas directionnel, commencer par appuyer deux fois sur l'anneau, 
                puis entrer la combinaison composée de direction dans l'ordre.
                <br/>
                La combinaison peut être de n'importe quelle longueur.
                </Text>
                

                </Subcontainer>
                <Subcontainer>
                <LockImage src={Lock2Image} alt="lock 2"/>
                <Text>
                Pour ouvrir ce cadenas, commencer par appuyer deux fois sur l'anneau, 
                puis rentrer la combinaison composée de trois lettres ou chiffres 
                en tournant dans le sens horaire, puis anti-horaire 
                puis horaire.
                </Text>
                    
                </Subcontainer>
            </Container>
        )
    }
}

export default Locks;