import React, { Component } from "react";
import { Timer } from "./Countdown.style";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 10000000,
        timerTime: 100000000
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
        let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
        return (
            <div>
                <Timer>
                    {hours} : {minutes} : {seconds}
                </Timer>
                {
                    timerOn === false &&
                    (timerStart === 0 || timerTime === timerStart) && (
                        <button onClick={this.startTimer}>Start</button>
                    )
                }
                {
                    timerOn === true && timerTime >= 1000 && (
                        <button onClick={this.stopTimer}>Stop</button>
                    )
                }
                {
                    timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                        <button onClick={this.startTimer}>Resume</button>
                    )
                }
                {
                    (timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <button onClick={this.resetTimer}>Reset</button>
                    )
                }
            </div>);
    }
}
export default Countdown;