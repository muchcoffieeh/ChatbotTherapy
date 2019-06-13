import React from 'react'
import TherapistMessage from './TherapistMessage'

class Rant extends React.Component {
    constructor(){
        super()
        this.state = {
            rant1: false,
            rantInput: "",
            ranted: false,
            therapist: false,
            responseId: 0,
            numResponses: 0,
            resolution: "placeholder advice"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            rantInput: value,
            rant1: true,
            ranted: false        
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        //const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState({
            therapist: true
        })
        setTimeout(() => {
            this.setState({
                rantInput: "",
                ranted: true
            })
        }, 1000);
        this.setState(oldState => {
            return {
                numResponses: oldState.numResponses + 1
            }
        })
        console.log(this.state.numResponses)
    }

    render(){
        const greetingShow = {visibility: "visible"}
        const greetingHide = {visibility: "hidden"}

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else {
            timeOfDay = "night"
        }

        return(
            <div className="rantApp">
                <p>{this.state.start}</p>
                <p className="greeting" style={this.state.rant1 ? greetingHide : greetingShow}>Good {timeOfDay}! How are you feeling today?</p>
                <form onSubmit={this.handleSubmit}>
                    {/*save the input from here to a json? */}
                    <textarea name="rantArea" type="text" placeholder="Tell me everything...." value={this.state.rantInput} onChange={this.handleChange}></textarea>
                    <p></p>
                    <button>Enter</button>
                </form>
                <p></p>
                {/*make this pause for a while before loading */}
                <h3><i>{this.state.therapist ? "Your patient therapist says" : ""}</i></h3>
                <p></p>
                <p>
                {this.state.ranted ? <TherapistMessage count={this.state.numResponses}/> : ""}
                </p>
            </div>
        )
    }
}

export default Rant