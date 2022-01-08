class Taxi {
  driver_id: string;
  location: {
    latitude: number;
    longitude: number;
  }

  constructor(driver_id: string, location: {latitude: number, longitude: number}) {
    this.driver_id = driver_id;
    this.location = location;
  }
}

export default Taxi;