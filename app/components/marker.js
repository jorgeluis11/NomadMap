import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Marker extends Component{
  constructor(props){
    super(props)
    this.state = {
      hover: false,
    }
    // this.changeHover = changeHover.bind(this);

  }



  // changeHover(){
  //   this.state.hover
  // }
  //
  // static defaultProps = { hover: ()=>{console.log(changeHover)} }


  componentWillReceiveProps(newProps) {
    // you don't have to do this check first, but some times it helps prevent against an unneeded render.
    if (newProps.hover != this.state.hover) {
      this.setState({startTime: newProps.startTime});
    }
  }



  // static defaultProps = {
  //   tweet.hover:true
  //
  // }

  // componentWillUpdate (nextProps, nextState) {
  //     return
  // }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  // shouldComponentUpdate(nextProps) {
  //   // console.log(this.props.country.hover !== nextProps.country.hover);
  //   // console.log(nextProps.country.hover);
  //   return this.props.country.hover === true;
  // }




  render(){
    // var tweet = this.props.tweet;
    // console.log(this.props.tweet.place.full_name)
    // var country = this.props.country;
    // var color = "#55acee";
    // console.log("List");

    if (this.props.$hover)
    {
      // var font = "1.1em"
      var text = this.props.country.text;
      // var color = "#000";

      var textContainer = (
        <div style={{position:"absolute", top:"-60px", overflowY:"auto", height:"60px", left:"-15%", zIndex:"999", backgroundColor:"white",
        padding:"10px"}}>
          {text}
        </div>
      )
      var textContainer = (
        <div>

          <div style={{position:"absolute", top:"-120px", width:"400px",overflowY:"auto", left:"-100px", zIndex:"999", backgroundColor:"white",
          padding:"10px", borderRadius:"5px"}}>

            <div className="row" style={{height:"auto",  borderRadius:"10"}} >
              <div className="col-sm-4" style={{paddingLeft:"5px",paddingRight:"0 !important", overflow:"hidden", height:"90", borderRadius:"10"}}>
                  <img className="profile-picture" src={`https://nomadlist.com/${this.props.country.media.image["250"]}`}></img>
              </div>
              <div className="col-sm-8"  style={{"textAlign":"left", paddingLeft:"10px"}}>
                <div style={{fontSize:".9em", 'wordWrap': 'break-word', color:'#222'}}><b>{this.props.country.info.city.name}</b></div>
                <span style={{color:'#444'}}>{this.props.country.text}</span>
              </div>
            </div>
          </div>
          <div className="arrow-down"></div>

        </div>
      )
    }

    let flag = `flag-icon flag-icon-${this.props.country.info.country.slug} flag-icon-${this.props.country.info.city.slug}`
    return(
      <div style={{position:"relative", top:"-7px", left:"-5px",cursor:"pointer"}}>
        {textContainer}
        <span className={flag}></span>
    </div>

    );
  }
}

// <FontAwesome
// name="twitter"
// size="1x"
// style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)',color:color,fontSize:font }}
// />

export default Marker;
