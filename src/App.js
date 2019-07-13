import React, { Component } from 'react';
import { Map } from './Map';
import './app.css';

const infoboxTemplate = (options) => {
  return (
    <div class="customInfobox">
      <div class="title">{options.title}</div>
      {options.descriptions && options.descriptions.map(item => {
        return <div>{item}</div>
      })}
      {options.description}
      {options.image && <img src={options.image} />}
    </div>);
}

const lemonPushPins = [
  {
    location: [-33.8844642, 151.2078435],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Alan's Lovely lemons", 
        descriptions: ['Contact Alan', '(+61 465 876 2345)','for some lemons'],
        image: 'lemons.jpg'
      })
     },
    pushPinOption: { title: "Alan's Lovely lemons", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8584776, 151.208703],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Zoe's zesty lemons", 
        descriptions: ['Contact Zoe', '(+61 465 876 2346)', 'for some lemons'], 
        image: 'lemons.jpg'
        })
       },
    pushPinOption: { title: "Zoe's zesty lemons", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8748755, 151.1987113],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: ["Ben's super sour lemons"], 
        descriptions: ['Contact Ben', '(+61 465 876 2347)', 'for some lemons'],
        image: 'lemons.jpg'
      }) 
    },
    pushPinOption: { title: "Ben's lemons", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8282967, 151.2311086],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
      title: "Zyrah's lemonlicious lemons", 
      descriptions: ['Contact Zyrah', '(+61 465 876 2348)', 'for some lemons'],
      image: 'lemons.jpg' 
    }) 
  },
    pushPinOption: { title: "Zyrah's lemonlicious lemons", description: 'Pushpin', icon: "icon.svg" },
  }
];
const herbPushPins = [
  {
    location: [-33.8832331, 151.1983055],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Fred's fresh mint leaves", 
        descriptions: ['Contact Fred', '(+61 465 876 2349)', 'for some mint'],
        image: 'herbs.jpg'
      }) 
    },
    pushPinOption: { title: "Fred's fresh mint leaves", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8571441, 151.1902714],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Jane's fresh basil leaves", 
        descriptions: ['Contact Jane', '(+61 465 876 2349)', 'for some basil'],
        image: 'herbs.jpg' 
      }) 
    },
    pushPinOption: { title: "Jane's fresh basil leaves", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8658159, 151.2046359],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Kelly's fresh rosemary leaves", 
        descriptions: ['Contact Kelly', '(+61 465 876 2311)', 'for some rosemary'],
        image: 'herbs.jpg' 
      }) 
    },
    pushPinOption: { title: "Kelly's fresh rosemary leaves", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8658114, 151.2046359],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Sam's fresh peppermint leaves", 
        descriptions: ['Contact Sam', '(+61 465 876 2311)', 'for some peppermint'], 
        image: 'herbs.jpg' 
      }) 
    },
    pushPinOption: { title: "Sam's fresh peppermint leaves", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8929838, 151.2458842],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Josie's fresh coriander leaves", 
        descriptions: ['Contact Josie', '(+61 465 876 2317)', 'for some coriander'], 
        image: 'herbs.jpg'  
      }) 
    },
    pushPinOption: { title: "Josie's fresh coriander leaves", description: 'Pushpin', icon: "icon.svg" },
  }
];
const flowerPushPins = [
  {
    location: [-33.7957454, 151.1723844],
    addHandler: "mouseover",
    infoboxOption: { 
      htmlContent: infoboxTemplate({ 
        title: "Ruby's bright red roses", 
        descriptions: ['Contact Ruby', '(+61 465 876 2312)', 'for some red roses'], 
        image: 'roses.jpg'  
      }) 
    },
    pushPinOption: { title: "Ruby's bright red roses", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8366073, 151.2052079],
    addHandler: "mouseover",
    infoboxOption: { htmlContent: infoboxTemplate({ 
      title: "Danny's sweet sunflowers", 
      descriptions: ['Contact Danny', '(+61 465 876 2313)', 'for some sunflowers'], 
      image: 'sunflowers.jpg'   
    }) 
  },
    pushPinOption: { title: "Danny's sweet sunflowers", description: 'Pushpin', icon: "icon.svg" },
  }
];
const figPushPins = [
  {
    location: [-33.8402663, 151.1944232],
    addHandler: "mouseover",
    infoboxOption: { htmlContent: infoboxTemplate({ 
      title: "Poppy's sweet, juicy figs", 
      descriptions: ['Contact Poppy', '(+61 465 876 2314)', 'for some sunflowers'], 
      image: 'figs.jpg' 
    }) 
  },
    pushPinOption: { title: "Poppy's sweet, juicy figs", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8471022, 151.2093551],
    addHandler: "mouseover",
    infoboxOption: { htmlContent: infoboxTemplate({ 
      title: "Karen's delicious figs", 
      descriptions: ['Contact Karen', '(+61 465 876 2315)', 'for some sunflowers'], 
      image: 'figs.jpg'  
    }) 
  },
    pushPinOption: { title: "Karen's delicious figs", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8587523, 151.2058246],
    addHandler: "mouseover",
    infoboxOption: { htmlContent: infoboxTemplate({ 
      title: "Chris' nice figs", 
      descriptions: ['Contact Chris', '(+61 465 876 2316)', 'for some sunflowers'], 
      image: 'figs.jpg' 
    }) 
  },
    pushPinOption: { title: "Chris' nice figs", description: 'Pushpin', icon: "icon.svg" },
  }
];

const pushPins = {
  lemonPushPins,
  herbPushPins,
  flowerPushPins,
  figPushPins
}

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      position: {},
      pushPins: lemonPushPins
    };
    this.setLocation = this.setLocation.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    navigator.geolocation.getCurrentPosition(this.setLocation);
  }

  setLocation(position) {
    this.setState({
      position: position
    });
  }

  selectCategory(e) {
    this.setState({
      pushPins: pushPins[e.target.value]
    });
  }

  render() {
    return (
      <>
      <div style={ {height: "500px", width: "500px"}}>
        <Map pushPins = { this.state.pushPins }
          center={[this.state.position.latitude, this.state.position.longitude]}
        />
      </div>
      <select onChange={this.selectCategory}>
        <option value="lemonPushPins">Lemons</option>
        <option value="herbPushPins">Herbs</option>
        <option value="flowerPushPins">Flowers</option>
        <option value="figPushPins">Figs</option>
      </select>
      </>
    );
  }
}

export default MapContainer;