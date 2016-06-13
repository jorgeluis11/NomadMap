import React, {Component, PropTypes} from 'react'
import io from 'socket.io-client'
// import TimerMixin from 'react-timer-mixin';
// var reactMixin = require('react-mixin');

import {connect, Provider} from 'react-redux'
import { bindActionCreators } from 'redux'
import configureStore from '../store/store'
import actions from '../actions/actions'
// import Tweet from '../components/tweet'
import Compare from '../components/compare'
import Marker from '../components/marker'
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
// import Scroll from 'react-scroll';
var Menu = require('react-burger-menu').push;
// var scroll = Scroll.animateScroll;

// let socket = io(`http://localhost:3000`)
// let socket = io(`https://worldtweet.herokuapp.com/socket.io/socket.io.js`)
let store = configureStore()

// const K_MARGIN_TOP = 30;
// const K_MARGIN_RIGHT = 30;
// const K_MARGIN_BOTTOM = 30;
// const K_MARGIN_LEFT = 30;

const K_HOVER_DISTANCE = 30;

class Main extends Component {
  // mixins: [TimerMixin],

  //Default Stuff
  constructor(props) {
    super(props);
    // socket.on('call tweets',function(tweet){
    //   props.actions.addList(tweet);
    // });

    this.state = {
      center: {lat: 18.257503, lng: -66.481117},
      clickEvent:false
    };
  }

  static defaultProps = {
    center: {lat: 18.257503, lng: -66.481117},
    zoom:1,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
   }

  shouldComponentUpdate = shouldPureComponentUpdate;


  componentDidMount() {
    this.props.actions.nomadList();
  }

  _onChildClick = (key, childProps) => {
    // console.log("click");
    // const markerId = childProps.tweet.get('id');
    // const index = this.props.list.findIndex(m => m.get('id') === markerId);
    // if (this.props.onChildClick) {
    //   this.props.onChildClick(index);
    // }

  }

  _onChildMouseEnter = (key, childProps) => {
    // console.log(key);
    // let list = document.getElementById("marker-list");
      // let current = this.cumulativeOffset(list)
    // let scroll = this.cumulativeOffset(document.getElementById(`${key}`));
      // let scroll = scrollTop;
      // this.scrollUp(current,scroll.top,document.getElementById("marker-list"));
      // var doc = document.body,
    // list.scrollTop = scroll.top- 280;

    // if (scroll.top > current.top) {
    //   console.log(scroll);
    //   console.log(current);
    //   // let scrollTo = current;
    //   for (; current.top < scroll.top; current.top++) {
    //     $setTimeout(function () {
    //       list.scrollTop = current.top;
    //
    //     }, 100);
    //   }
    // }

    // document.getElementById("marker-list").scrollTop = ;
    // this.props.actions.hoverTweet(key,true);
    // console.log(childProps)
    // childProps.hover();
  }



  cumulativeOffset(element) {
      var top = 0, left = 0;
      do {
          top += element.offsetTop  || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
      } while(element);

      return {
          top: top,
          left: left
      };
  }

  scrollUp(current,top, div) {
      //  var top = current - top;

       if (top > 0) {
           div.scrollTop = top - 280;
          //  setTimeout(this.scrollUp(current,top, div), 100)
       }
   }

   onMouseEnterContainer = (key,tweet) =>{
    const place = tweet.place.bounding_box.coordinates[0];
    let lng = (place[0][0] + place[1][0] + place[2][0] + place[3][0]) / 4
    let lat = (place[1][1] + place[1][1] + place[1][1] + place[1][1]) / 4
    this.setState({clickEvent:true,center:{lat, lng}})
    this.props.actions.hoverTweet(key,true);
   }

   onMouseLeaveContainer= (key) =>{
     this.props.actions.hoverTweet(key,false);
     this.setState({ clickEvent: false })

   }

   onClickContainer= (tweet) =>{

    // this.props.actions.hoverTweet(key,true);
   }

  _onChildMouseLeave = (key, childProps) => {
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(-1);
    // }
    // childProps.hoverFunc(false);
    // this.props.actions.hoverTweet(key,false);
  }

  _onBalloonCloseClick = () => {
    if (this.props.onChildClick) {
      this.props.onChildClick(-1);
    }
  }
  //           <Menu styles={styles} customBurgerIcon={ <div><i className="glyphicon glyphicon-menu-hamburger" style={{fontSize:"2em"}}></i></div> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right  >
  //           </Menu>

  // renderMarkers(tweet){
  //   // const place = tweet.place.bounding_box.coordinates[0];
  //   // let lng = (place[0][0] + place[1][0] + place[2][0] + place[3][0]) / 4
  //   // let lat = (place[1][1] + place[1][1] + place[1][1] + place[1][1]) / 4
  //
  //   return <Marker lat={lat} lng={lng} styles={{"width":"10px","height":"10px", fontSize:"1em"}} tweet={tweet} key={tweet.uniqueID} />;
  // }


  render() {
    // let tweets = [];
    // this.props.list.map((tweet) => {
    //   // tweet.hover = false;
    //   // tweet.id=newId();
    //   tweets = [...tweets,tweet];
    // });
    //           center={this.state.center}
    //
    // if (this.state.clickEvent) {
    //   var map = ( <GoogleMap
    //       style={{width:'70%', height:'100%', position:"absolute"}}
    //       defaultCenter={this.props.center}
    //       defaultZoom={this.props.zoom}
    //       center={this.state.center}
    //       onChildClick={this._onChildClick}
    //       onChildMouseEnter={this._onChildMouseEnter}
    //       onChildMouseLeave={this._onChildMouseLeave}
    //       hoverDistance={7}>
    //       {
    //            this.props.list.map((tweet) => this.renderMarkers(tweet)  )
    //       }
    //     </GoogleMap>);
    // }else{
      var map = ( <GoogleMap

          style={{width:'60%', height:'100%', position:"absolute"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
          hoverDistance={7}
          onContextMenu={function(){console.log("testt")}}
          >
          {
               this.props.list.map((country) => <Marker lat={country.info.location.latitude} lng={country.info.location.longitude} selectedFirst={this.props.actions.selectFirst} selectedSecond={this.props.actions.selectSecond} styles={{"width":"10px","height":"10px", fontSize:"1em"}} country={country} key={country.uniqueID} />  )
          }
        </GoogleMap>)
    // }
    // {
    //   this.props.list.map((country) => <Tweet country={country} key={tweet.uniqueID} onMouseEnterContainer={this.onMouseEnterContainer} onMouseLeaveContainer={this.onMouseLeaveContainer} onClickContainer={this.onClickContainer}/>)
    // }
      // this.props.list.map((country)=>{
      //   // console.log(country.info.city.slug)
      // });
    return (
      <div className="map-container">
        <div id="outer-container">
          <div id="marker-list" style={{width:"44%", position:"absolute", right:"0px", zIndex:'2 !important', backgroundColor:"#fff",overflowY:"auto",height:"100%"}}>
            <Compare first={this.props.first} second={this.props.second}/>
          </div>
          <main id="page-wrap">
            {map}
          </main>
        </div>
      </div>
    );
  }
}

var styles = {
  bmMenuWrap:{
    width: "35%",
    backgroundColor:"white",
    overflowY:'auto'
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '10px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    // background: 'white',
    // padding: '2.5em 1.5em 0',
    paddingTop:"30px",
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    // padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

//
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

// function mergeProps(stateProps, dispatchProps, ownProps) {
//   return Object.assign({}, ownProps, {
//     store
//   })
// }
// reactMixin(Main, TimerMixin);

export default connect(state => state, mapDispatchToProps)(Main);
// export default Main;
