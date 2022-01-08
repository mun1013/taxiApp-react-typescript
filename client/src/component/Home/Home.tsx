import classes from './Home.module.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { Fragment, useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { TaxiesContext } from '../../store/taxies-context';

const Home: React.FC = () => {
  const [location, setLocation] = useState<number[]>([0, 0]);
  const [count, setCount] = useState<string>();
  const sliderRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<any>();
  const taxiesCtx = useContext(TaxiesContext);
  const taxies = taxiesCtx.taxies;

  useEffect(() => {
    goToCurrentLocation();
    setCount(() => { return sliderRef.current?.value });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getTaxi();
    }, 500);

    const interval = setInterval(() => {
      getTaxi();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [count, location]);

  const getTaxi = () => {
    axios
      .get('/taxi/' + location[0] + '/' + location[1] + '/' + count)
      .then(res => taxiesCtx.addTaxi(res.data))
      .catch (error => {
        console.log(error);
      });
  };

  const goToCurrentLocation = () => {
    const { current } = mapRef;
    const { leafletElement: map } = current;
    map.locate({setView: true})
    map.on('locationfound', function(event:any) {
      setLocation(() => { return [event.latlng.lat, event.latlng.lng]} );
    });
  };

  const onChangeRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event',event.target.value)

    const value = event.target.value;
    if (value === 'sg') {
      setLocation(() => { return [91.285194, 103.8522982]} );
    }
    else if (value === 'london') {
      setLocation(() => { return [51.5049375, -0.0964509]} );
    }
    else if (value === 'current') {
      goToCurrentLocation();
    }
  };

  const onChangeSliderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(() => { return sliderRef.current?.value });
  };

  return (
    <Fragment>
      <Map id="mapid" ref={mapRef} center={[location[0], location[1]]} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {taxies.map(taxi => <Marker key={taxi.driver_id} position={[taxi.location.latitude, taxi.location.longitude]}>
          <Popup key={taxi.driver_id}>
              <p>Driver Id: {taxi.driver_id}</p>
              <p>Location: [{taxi.location.latitude}, {taxi.location.longitude}]</p>
          </Popup>
        </Marker>)}
      </Map>
      <div className={classes.radio}>
        <p>Location:</p>
        <label htmlFor='sg'>
          <input type='radio' name='place' value='sg' id='sg' onChange={onChangeRadioHandler}></input>
          Singapore
        </label>
        <label htmlFor='london'>
          <input type='radio' name='place' value='london' id='london' onChange={onChangeRadioHandler}></input>
          London
        </label>
        <label htmlFor='current'>
          <input type='radio' name='place' value='current' id='current' onChange={onChangeRadioHandler} defaultChecked></input>
          Current
        </label>
      </div>
      <div className={classes.slidecontainer}>
        <p>Number of taxi: {count}</p>
        <input type="range" min="1" max="20" defaultValue="1" ref={sliderRef} className={classes.slider} id="myRange" onChange={onChangeSliderHandler}></input>
      </div>
    </Fragment>
  );
};

export default Home;