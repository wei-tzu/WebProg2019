import React from 'react'

class Card extends React.Component{
    render(){
        const{cardData} = this.props
        const contents = cardData.data.map(singleD=>{
            if(singleD.tag === "img")
                return(<img src = {singleD.content} alt = ""/>)
            else if(singleD.tag === "h2"){
                return(<h2>{singleD.content}</h2>)
            }
            else if(singleD.tag === "h5"){
                return(<h5>{singleD.content}</h5>)
            }
            else{
                return(<p>{singleD.content}</p>)
            }
        })
        return(<div className="card">{contents}</div>)
    }
}
export default Card