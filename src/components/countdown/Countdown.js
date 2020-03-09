import React, { Component } from "react";
import { Container, Timer, Button } from "./Countdown.style";
import WinningMusic from '../../sounds/winning.mp3';
import LosingMusic from '../../sounds/losing.mp3';
import Music1 from '../../sounds/CookiesChef_part1.mp3';
import Music2 from '../../sounds/CookiesChef_part2_28_25.mp3';
import Music3 from '../../sounds/CookiesChef_part3_50_05.mp3';
import Music4 from '../../sounds/CookiesChef_part4_81_37.mp3';

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 60*90,
        timerDate: null,
        stupid: 0
    };

    playMusic = (i) => {
        document.getElementById("music".concat(i)).play()
    }

    stopMusic = (i) => {
        document.getElementById("music".concat(i)).pause()
        document.getElementById("music".concat(i)).load()
    }

    playWinner = () => {
        document.getElementById("winning").play()
    }

    playLoser = () => {
        document.getElementById("losing").play()
    }

    stopLoser = () => {
        document.getElementById("losing").pause()
        document.getElementById("losing").load()
    }

    startTimer = () => {
        this.playMusic(1);
        this.setState({
            timerOn: true,
            timerDate: new Date()
        });
        this.timer = setInterval(() => {
            const stupid = 1 - this.state.stupid;
                this.setState({
                    stupid: stupid
                });
        }, 50);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        this.stopMusic(1);
        this.stopMusic(2);
        this.stopMusic(3);
        this.stopMusic(4);
        this.playWinner();
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerDate: null

            });
            this.playMusic(1);
            this.playMusic(2);
            this.playMusic(3);
            this.playMusic(4);
            this.playLoser();
            this.stopMusic(1);
            this.stopMusic(2);
            this.stopMusic(3);
            this.stopMusic(4);
            this.stopLoser();
        }
    };

    render() {
        const { timerDate, timerStart, timerOn } = this.state;
        let curDate = new Date();
        let timerTime = timerDate ? timerStart - (curDate.getTime() - timerDate.getTime())/1000 : timerStart;
        let seconds = ("0" + Math.abs(Math.floor((timerTime) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.abs(Math.floor(Math.abs(timerTime / 60)) % 91)).slice(-2);

        if (Math.floor(timerTime) === (60*90 - 28*60 - 25)) {
            this.stopMusic(1)
            this.playMusic(2)
        }
        if (Math.floor(timerTime) === (60*90 - 50*60 - 5)) {
            this.stopMusic(2)
            this.playMusic(3)
        }
        if (Math.floor(timerTime) === (60*90 - 81*60 - 37)) {
            this.stopMusic(3)
            this.playMusic(4)
        }
        if (Math.floor(timerTime) === 0) {
            this.playLoser()
        }
        
        return (
            <Container>
                <div>
                    <audio id="music1">
                        <source src={Music1} type="audio/mpeg" preload="auto"/>
                    </audio>
                    <audio id="music2">
                        <source src={Music2} type="audio/mpeg" preload="auto"/>
                    </audio>
                    <audio id="music3">
                        <source src={Music3} type="audio/mpeg" preload="auto"/>
                    </audio>
                    <audio id="music4">
                        <source src={Music4} type="audio/mpeg" preload="auto"/>
                    </audio>
                    <audio id="winning">
                        <source src={WinningMusic} type="audio/mpeg" preload="auto"/>
                    </audio>
                    <audio id="losing">
                        <source src={LosingMusic} type="audio/mpeg" preload="auto"/>
                    </audio>
                </div>
                <Timer>
                    {timerTime <0 && "-"} {minutes} : {seconds}
                </Timer>
                {
                    timerOn === false &&
                    (timerStart === 0 || timerDate === null) && (
                        <Button onClick={this.startTimer}>START</Button>
                    )
                }
                {
                    timerOn === true && (
                        <Button onClick={this.stopTimer}>DONE</Button>
                    )
                }

                {
                    (timerOn === false) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <Button onClick={this.resetTimer}>RESET</Button>
                    )
                }
            </Container>);
    }
}
export default Countdown;