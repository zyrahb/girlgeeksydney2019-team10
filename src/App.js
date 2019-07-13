import React, { Component } from 'react';
import { Map } from './Map';

const lemonPushPins = [
  {
    location: [-33.8844642, 151.2078435],
    addHandler: "mouseover",
    infoboxOption: { title: "Alan's Lovely lemons", description: 'Contact Alan (+61 465 876 2345) for some lemons' },
    pushPinOption: { title: "Alan's Lovely lemons", description: 'Pushpin' },
  },
  {
    location: [-33.8584776, 151.208703],
    addHandler: "mouseover",
    infoboxOption: { title: "Zoe's zesty lemons", description: 'Contact Zoe (+61 465 876 2346) for some lemons' },
    pushPinOption: { title: "Zoe's zesty lemons", description: 'Pushpin' },
  },
  {
    location: [-33.8748755, 151.1987113],
    addHandler: "mouseover",
    infoboxOption: { title: "Ben's lemons", description: 'Contact Ben (+61 465 876 2347) for some lemons' },
    pushPinOption: { title: "Ben's lemons", description: 'Pushpin' },
  },
  {
    location: [-33.8282967, 151.2311086],
    addHandler: "mouseover",
    infoboxOption: { title: "Zyrah's lemonlicious lemons", description: 'Contact Zyrah (+61 465 876 2348) for some lemons' },
    pushPinOption: { title: "Zyrah's lemonlicious lemons", description: 'Pushpin' },
  }
];
const herbPushPins = [
  {
    location: [-33.8832331, 151.1983055],
    addHandler: "mouseover",
    infoboxOption: { title: 'Fred\'s fresh mint leaves', description: 'Contact Fred (+61 465 876 2349) for some mint' },
    pushPinOption: { title: 'Fred\'s fresh mint leaves', description: 'Pushpin' },
  },
  {
    location: [-33.8571441, 151.1902714],
    addHandler: "mouseover",
    infoboxOption: { title: 'Jane\'s fresh basil leaves', description: 'Contact Jane (+61 465 876 2349) for some basil' },
    pushPinOption: { title: 'Jane\'s fresh basil leaves', description: 'Pushpin' },
  },
  {
    location: [-33.8658159, 151.2046359],
    addHandler: "mouseover",
    infoboxOption: { title: 'Kelly\'s fresh rosemary leaves', description: 'Contact Kelly (+61 465 876 2311) for some rosemary' },
    pushPinOption: { title: 'Kelly\'s fresh rosemary leaves', description: 'Pushpin' },
  },
  {
    location: [-33.8658114, 151.2046359],
    addHandler: "mouseover",
    infoboxOption: { title: 'Sam\'s fresh peppermint leaves', description: 'Contact Sam (+61 465 876 2311) for some rosemary' },
    pushPinOption: { title: 'Sam\'s fresh peppermint leaves', description: 'Pushpin' },
  },
  {
    location: [-33.8929838, 151.2458842],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
  }
];
const flowerPushPins = [
  {
    location: [-33.7957454, 151.1723844],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
  },
  {
    location: [-33.8366073, 151.2052079],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
  }
];
const figPushPins = [
  {
    location: [-33.8402663, 151.1944232],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
  },
  {
    location: [-33.8471022, 151.2093551],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
  },
  {
    location: [-33.8587523, 151.2058246],
    addHandler: "mouseover",
    infoboxOption: { title: 'Infobox Title', description: 'Infobox' },
    pushPinOption: { title: 'PushPin Title', description: 'Pushpin' },
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