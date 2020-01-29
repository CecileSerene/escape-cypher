import React, { Component } from "react";
import { Container, Timer, Button } from "./Countdown.style";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 1000*60*60,
        timerTime: 1000*60*60
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
            }
        }, 10);
    };


    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };



    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        if (timerTime === 3600000) {
            minutes = 60
        }
        return (
            <Container>
                <div></div>
                <Timer>
                    {minutes} : {seconds}
                </Timer>
                {
                    timerOn === false &&
                    (timerStart === 0 || timerTime === timerStart) && (
                        <Button onClick={this.startTimer}>START</Button>
                    )
                }
                {
                    timerOn === true && timerTime >= 1000 && (
                        <Button onClick={this.stopTimer}>DONE</Button>
                    )
                }

                {
                    (timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <Button onClick={this.resetTimer}>RESET</Button>
                    )
                }
            </Container>);
    }
}
export default Countdown;