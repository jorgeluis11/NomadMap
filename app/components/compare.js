import React,{Component} from 'react';
import LazyLoad from 'react-lazy-load';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Compare extends Component{
  constructor(props){
    super(props)
    // props.tweet.hover = false;
  }
  componentWillUpdate (nextProps, nextState) {
      // console.log('----');
      // console.log(this.state.tweet);
  }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  onMouseEnterContainerTweet = () => {
    this.props.onMouseEnterContainer(this.props.tweet.uniqueID, this.props.tweet);
  }
  onMouseLeaveContainerTweet = () => {
    this.props.onMouseLeaveContainer(this.props.tweet.uniqueID);
  }
  onClickContainerTweet = () => {
    this.props.onClickContainer(this.props.tweet);
  }

  comparePrice(first,second){
    //       //
    if (first > second)
      var color = "expensive glyphicon glyphicon-triangle-top";
    else
      var color = "less glyphicon glyphicon-triangle-bottom";

    return (
      <div>
        <span className={color}>{first}</span>
      </div>
    )
  }

  renderCompare(first, second, firstOne){
    if (firstOne)
      return (
        <div style={{textAlign:"center"}}>
              <div className="img-responsive" style={{color:"white",backgroundSize:"cover",background:`url(https://nomadlist.com/${first.media.image["250"]})`}}>
                <div style={{backgroundColor:"rgba(0,0,0,0.5)",
                zIndex:"999",
                position: 'relative',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'}}>

                  {first.info.country.name}
                  <br/>
                  {first.info.city.name}
                </div>
              </div>

          ${first.cost.nomad.USD}

        </div>
      );
    return (
      <div style={{textAlign:"center"}}>
            <div className="img-responsive" style={{color:"white",backgroundSize:"cover",background:`url(https://nomadlist.com/${first.media.image["250"]})`}}>
              <div style={{backgroundColor:"rgba(0,0,0,0.5)",
              zIndex:"999",
              position: 'relative',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%'}}>

                {first.info.country.name}
                <br/>
                {first.info.city.name}
              </div>
            </div>

        ${this.comparePrice(first.cost.nomad.USD, second.cost.nomad.USD)}

      </div>
    );
  }

  render(){
    // var first = this.props.tweet;
    // var second = this.props.tweet;
    // var border = "solid 1px rgba(0,0,0,.080)";
    //
    // if (tweet.hover)
    // {
    //   // var font = "3em"
    //   var background = "rgba(0,0,0,0.07)";
    //   // var color = "#000";
    // }
    // else{
    //   // var text ="";
    //   // var font = "1.4em"
    //   var background = "#fff";
    //
    // }
    // console.log(this.props.onMouseEnterContainer)

    // console.log(this.props)
    // var image =
    var content = <div></div>;
    var first = ""
    var second = "";
    if (this.props.first)
      first = this.renderCompare(this.props.first, this.props.second, true);
    if (this.props.second)
      second = this.renderCompare(this.props.second, this.props.first, false);

    return(
      <div className="row">
        <div className="col-sm-5">
          {first}
        </div>
        <div className="col-sm-2">
          <br/>
          <br/>
           NomadCost™
        </div>
        <div className="col-sm-5">
          {second}
        </div>
      </div>
    );
  }
}


// <div  onMouseEnter={this.onMouseEnterContainerTweet}  onMouseLeave={this.onMouseLeaveContainerTweet} onClick={this.onClickContainerTweet}>
//   <LazyLoad  height={140} offset={300} once >
//
//     <div className="row" style={{borderBottom:border, paddingBottom:"10px !important", paddingTop:"25px !important", backgroundColor:background, height:"140px"}} >
//       <div className="col-sm-3" style={{paddingRight:"0 !important", overflow:"hidden", height:"100"}}>
//
//           <img className="profile-picture " src={`https://twitter.com/${tweet.user.screen_name}/profile_image?size=original`}></img>
//
//     </div>
//
//       <div className="col-sm-9"  style={{"textAlign":"left", paddingLeft:"10px"}}>
//         <div style={{fontSize:".9em", 'wordWrap': 'break-word', color:'#222'}}><b>{tweet.user.screen_name}</b></div>
//         <span style={{color:'#444'}}>{tweet.text}</span>
//       </div>
//     </div>
//   </LazyLoad>
// </div>

// <center style={{width:"500px", margin:"0 auto"}}>
//   <div className="row" style={{"padding":"10px", "border":"1px solid rgba(0,0,0,0.1)", "margin": "10px !important", "borderRadius": "5px"}} >
//     <div className="col-sm-2">
//       <img src={tweet.user.profile_image_url}></img>
//       <br/>
//       {tweet.user.name}
//     </div>
//     <div className="col-sm-8" style={{"textAlign":"left"}}>
//       {tweet.text}
//     </div>
//   </div>
// </center>

export default Compare;
