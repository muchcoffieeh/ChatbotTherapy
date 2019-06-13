import React from 'react'
import cannedResponses from './cannedResponses'
import resources from './resources'

class TherapistMessage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            responseData: cannedResponses,
            resourceData: resources
        }
    }

    render() {
        const count = Math.floor(Math.random() * this.state.responseData.length)

        let resCt1 = Math.floor(Math.random() * this.state.resourceData.length)

        let therapistSays
        let showSources = false
        if (this.props.count < 4){
            therapistSays = this.state.responseData[count].text
        } else {
            therapistSays = "You should look at these sources:"
            showSources = true
        }

        const sourcesShow = {visibility: "visible"}
        const sourcesHide = {visibility: "hidden"}

        return(
            <div>{therapistSays}
                <div style={showSources ? sourcesShow : sourcesHide}>
                    <p><a href={this.state.resourceData[resCt1].url}>{this.state.resourceData[resCt1].text}</a></p>
                    <div className="hidden">{resCt1 = Math.floor(Math.random() * this.state.resourceData.length)}</div>
                    <p><a href={this.state.resourceData[resCt1].url}>{this.state.resourceData[resCt1].text}</a></p>
                    <div className="hidden">{resCt1 = Math.floor(Math.random() * this.state.resourceData.length)}</div>
                    <p><a href={this.state.resourceData[resCt1].url}>{this.state.resourceData[resCt1].text}</a></p>
                </div>
            </div>
        )
    }
}

export default TherapistMessage