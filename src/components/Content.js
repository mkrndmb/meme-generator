import React from 'react'



export class Content extends React.Component{
    
    constructor(){
        
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:'http://i.imgflip.com/1bij.jpg',
            imgMeme:[],
            x:20,
            y:15,
            z:20,
            w:15
        }
    }
    handleChange=(e)=>{
        const {name,value} =e.target
        this.setState({
            [name]:value
        })
    }
    async componentDidMount(){
        const res= await fetch('https://api.imgflip.com/get_memes')
        const resJson= await res.json()
        const {memes}=resJson.data
        //console.log(memes);
        this.setState({
            imgMeme:memes
        })
    }
    handleClick = () =>{
        const randomNo=Math.floor(Math.random() * this.state.imgMeme.length)
        this.setState({
            randomImage:this.state.imgMeme[randomNo].url
        })

    }
    handleMoveUp = () =>{
        const bottomTmove =document.querySelector('.bottomT')
        // bottomTmove.classList.add('bot') 
        bottomTmove.style.marginBottom=this.state.x+'px'
        this.setState({
            x:this.state.x+20
        })
        // console.log("dd000",this.state.x)
    }
    handleMoveDown = () =>{
        const bottomTmove =document.querySelector('.topT')
        // bottomTmove.classList.add('bot') 
        bottomTmove.style.marginTop=this.state.z+'px'
        this.setState({
            z:this.state.z+20
        })
    }
    handleMoveRight = () =>{
        
        const bottomTmove =document.querySelector('.bottomT')
        
        bottomTmove.style.marginLeft=this.state.y+'px'
        
        this.setState({
            y:this.state.y+15
        })
    }
    handleMoveLeft = () =>{
        const bottomTmove =document.querySelector('.bottomT')
       
        bottomTmove.style.marginLeft=this.state.y-30+'px'
        
        this.setState({
            y:this.state.y-15
        })
    }
    handleUpMoveRight = () =>{
        
        
        const TopTmove =document.querySelector('.topT')
        
        TopTmove.style.marginLeft=this.state.w+'px'
        this.setState({
            w:this.state.w+15
        })
    }
    handleUpMoveLeft = () =>{
        
        const TopTmove =document.querySelector('.topT')
       
        TopTmove.style.marginLeft=this.state.w-30+'px'
        this.setState({
            w:this.state.w-15
        })
    }
    render(){
        return (
            <div className='content'>
                <div className='content-input'>  
                    <input type='text' name='topText' onChange={this.handleChange} value={this.state.topText} placeholder='Top text'  />
                    <input type='text' name='bottomText' onChange={this.handleChange} value={this.state.bottomText} placeholder='Bottom text'/>
                    <button style={{marginTop:90,padding:8,backgroundColor:'#5aa469',color:'white',border: 'none',borderRadius:'2'}} onClick={this.handleClick}>Next Meme</button>
                    <div>
                    <button style={{marginTop:0}} onClick={this.handleMoveDown}>TopMoveDown</button>
                    <button style={{marginTop:0}} onClick={this.handleUpMoveLeft}>TopMoveLeft</button>
                    <button style={{marginTop:0}} onClick={this.handleUpMoveRight}>TopMoveRight</button>
                    <button style={{marginTop:0}} onClick={this.handleMoveLeft}>BottomMoveLeft</button>
                    <button style={{marginTop:0}} onClick={this.handleMoveRight}>BottomMoveRight</button>
                    <button style={{marginTop:0}} onClick={this.handleMoveUp}>BottomMoveUp</button>
                    </div>
                    <br/>
                </div>
                <div className='br'>
                <img className='memeImage' src={this.state.randomImage} alt='fuck'/>
                 <h1 className='topT' style={{color:'white'}}>{this.state.topText}</h1>
                {this.state.topText ? <h1 className='bottomT' style={{marginTop:'14%',color:'white'}} >{this.state.bottomText}</h1> : <h1 className='bottomT' style={{marginTop:'17%',color:'white'}} >{this.state.bottomText}</h1> }
                </div>
                {/* http://i.imgflip.com/1bij.jpg */}
                <br/>
                          
            </div>   
        )}
}