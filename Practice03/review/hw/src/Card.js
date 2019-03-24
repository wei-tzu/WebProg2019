import React from 'react'
import logo from './logo.svg'

class Card extends React.Component{
    render(){
        const cardData = this.props
        const contents = cardData.data.map((singleCard,index)=>{
            const cardDataBind = singleCard.map(singleD=>{
                if(singleD.tag === "img")
                    return(<img src = {logo} alt = ""/>)
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
            return(<div className="card" key={index}>{cardDataBind}</div>)
        })
        return(<div>{contents}</div>)
    }
}
export default Card
