const vehicles = {
    categories: ['cars', 'luxury', 'tempo', 'bus'],
    all: [],
    getVehicleData() {
      const baseSpecs = {
        cars: {
          imageSize: { height: 300, width: 500 },
          color: 'white',
          ac: true,
          minHire: "300 km per day"
        },
        luxury: {
          imageSize: { height: 300, width: 500 },
          color: 'black',
          ac: true,
          minHire: "300 km per day"
        },
        tempo: {
          imageSize: { height: 300, width: 500 },
          color: 'white',
          ac: true,
          minHire: "300 km per day"
        },
        bus: {
          imageSize: { height: 300, width: 500 },
          color: 'white',
          ac: true,
          minHire: "300 km per day"
        }
      };
  
      const data = {
        cars: [
          this.createVehicle('swift', 'Swift Dzire', 'Compact sedan perfect for city travel.', '4 Passengers', '2 Medium Bags', '₹12/km', baseSpecs.cars),
          this.createVehicle('innova', 'Toyota Innova', 'Spacious SUV ideal for family trips.', '7 Passengers', '4 Medium Bags', '₹18/km', baseSpecs.cars),
          this.createVehicle('ertiga', 'Maruti Ertiga', 'Versatile MPV with good mileage.', '7 Passengers', '3 Medium Bags', '₹15/km', baseSpecs.cars),
          this.createVehicle('ciaz', 'Maruti Ciaz', 'Premium sedan with great comfort.', '5 Passengers', '3 Medium Bags', '₹14/km', baseSpecs.cars),
          this.createVehicle('brezza', 'Vitara Brezza', 'Compact SUV with modern features.', '5 Passengers', '3 Medium Bags', '₹16/km', baseSpecs.cars),
          this.createVehicle('baleno', 'Maruti Baleno', 'Hatchback with spacious interiors.', '5 Passengers', '2 Medium Bags', '₹11/km', baseSpecs.cars),
          this.createVehicle('amaze', 'Honda Amaze', 'Reliable sedan for city rides.', '5 Passengers', '2 Medium Bags', '₹13/km', baseSpecs.cars),
          this.createVehicle('venue', 'Hyundai Venue', 'Compact SUV with tech features.', '5 Passengers', '3 Medium Bags', '₹17/km', baseSpecs.cars),
          this.createVehicle('santro', 'Hyundai Santro', 'Economical hatchback for short trips.', '5 Passengers', '2 Medium Bags', '₹10/km', baseSpecs.cars),
          this.createVehicle('wagonr', 'Maruti WagonR', 'Tall boy design with good space.', '5 Passengers', '2 Medium Bags', '₹9/km', baseSpecs.cars)
        ],
        luxury: [
          this.createVehicle('fortuner', 'Toyota Fortuner', 'Premium SUV with powerful engine.', '7 Passengers', '4 Large Bags', '₹25/km', baseSpecs.luxury),
          this.createVehicle('crysta', 'Innova Crysta', 'Upgraded Innova with luxury interiors.', '7 Passengers', '4 Medium Bags', '₹22/km', baseSpecs.luxury),
          this.createVehicle('mercedes', 'Mercedes E-Class', 'Luxury sedan with premium features.', '5 Passengers', '3 Large Bags', '₹45/km', baseSpecs.luxury),
          this.createVehicle('audi-a6', 'Audi A6', 'Executive sedan with advanced tech.', '5 Passengers', '3 Large Bags', '₹48/km', baseSpecs.luxury),
          this.createVehicle('bmw-5', 'BMW 5 Series', 'Sporty luxury sedan for business travel.', '5 Passengers', '3 Large Bags', '₹50/km', baseSpecs.luxury),
          this.createVehicle('range-rover', 'Range Rover Vogue', 'Ultimate luxury SUV experience.', '5 Passengers', '4 Large Bags', '₹65/km', baseSpecs.luxury),
          this.createVehicle('volvo-xc90', 'Volvo XC90', 'Premium 7-seater luxury SUV.', '7 Passengers', '5 Large Bags', '₹55/km', baseSpecs.luxury),
          this.createVehicle('jaguar-xf', 'Jaguar XF', 'Luxury sedan with sporty performance.', '5 Passengers', '3 Large Bags', '₹52/km', baseSpecs.luxury),
          this.createVehicle('lexus-es', 'Lexus ES 300h', 'Hybrid luxury sedan with comfort.', '5 Passengers', '3 Large Bags', '₹58/km', baseSpecs.luxury),
          this.createVehicle('land-cruiser', 'Toyota Land Cruiser', 'Legendary off-road luxury SUV.', '8 Passengers', '6 Large Bags', '₹70/km', baseSpecs.luxury)
        ],
        tempo: [
          this.createVehicle('tempo-12', 'Tempo Traveller (12 Seater)', 'Perfect for medium groups.', '12 Passengers', '12 Medium Bags', '₹28/km', baseSpecs.tempo),
          this.createVehicle('tempo-16', 'Tempo Traveller (16 Seater)', 'Ideal for large groups.', '16 Passengers', '16 Medium Bags', '₹32/km', baseSpecs.tempo),
          this.createVehicle('tempo-9', 'Tempo Traveller (9 Seater)', 'Compact tempo for small tours.', '9 Passengers', '9 Medium Bags', '₹25/km', baseSpecs.tempo),
          this.createVehicle('tempo-14', 'Tempo Traveller (14 Seater)', 'Balanced capacity for groups.', '14 Passengers', '14 Medium Bags', '₹30/km', baseSpecs.tempo),
          this.createVehicle('tempo-ac', 'AC Tempo (12 Seater)', 'Premium AC tempo for comfort.', '12 Passengers', '12 Medium Bags', '₹35/km', baseSpecs.tempo),
          this.createVehicle('tempo-deluxe', 'Deluxe Tempo (14 Seater)', 'Luxury tempo with extra space.', '14 Passengers', '14 Medium Bags', '₹38/km', baseSpecs.tempo),
          this.createVehicle('tempo-sleeper', 'Sleeper Tempo (10 Seater)', 'For overnight journeys.', '10 Passengers', '10 Medium Bags', '₹40/km', baseSpecs.tempo),
          this.createVehicle('tempo-executive', 'Executive Tempo (12 Seater)', 'Business class tempo.', '12 Passengers', '12 Medium Bags', '₹42/km', baseSpecs.tempo),
          this.createVehicle('tempo-hi-tech', 'Hi-Tech Tempo (16 Seater)', 'Modern amenities tempo.', '16 Passengers', '16 Medium Bags', '₹45/km', baseSpecs.tempo),
          this.createVehicle('tempo-premium', 'Premium Tempo (14 Seater)', 'Top-end luxury tempo.', '14 Passengers', '14 Medium Bags', '₹48/km', baseSpecs.tempo)
        ],
        bus: [
          this.createVehicle('mini-bus', 'Mini Bus (27 Seater)', 'For large groups and tours.', '27 Passengers', '27 Medium Bags', '₹45/km', baseSpecs.bus),
          this.createVehicle('bus', 'Bus (45 Seater)', 'Full-sized bus for big groups.', '45 Passengers', '45 Medium Bags', '₹65/km', baseSpecs.bus),
          this.createVehicle('bus-35', 'Bus (35 Seater)', 'Mid-sized bus for school trips.', '35 Passengers', '35 Medium Bags', '₹55/km', baseSpecs.bus),
          this.createVehicle('sleeper-bus', 'Sleeper Bus (30 Beds)', 'For overnight long journeys.', '30 Beds', '30 Small Bags', '₹75/km', baseSpecs.bus),
          this.createVehicle('volvo-ac', 'Volvo AC Bus (40 Seater)', 'Premium AC bus service.', '40 Passengers', '40 Medium Bags', '₹85/km', baseSpecs.bus),
          this.createVehicle('school-bus', 'School Bus (30 Seater)', 'Safe transport for students.', '30 Passengers', '30 Small Bags', '₹50/km', baseSpecs.bus),
          this.createVehicle('party-bus', 'Party Bus (25 Seater)', 'With music and LED lights.', '25 Passengers', '25 Small Bags', '₹90/km', baseSpecs.bus),
          this.createVehicle('executive-bus', 'Executive Bus (32 Seater)', 'Business class bus service.', '32 Passengers', '32 Medium Bags', '₹70/km', baseSpecs.bus),
          this.createVehicle('double-decker', 'Double Decker Bus (50 Seater)', 'Iconic two-level bus.', '50 Passengers', '50 Small Bags', '₹95/km', baseSpecs.bus),
          this.createVehicle('eco-bus', 'Eco-Friendly Bus (40 Seater)', 'Electric bus for green travel.', '40 Passengers', '40 Small Bags', '₹60/km', baseSpecs.bus)
        ]
      };
  
      // Combine all vehicles into 'all' array
      data.all = [...data.cars, ...data.luxury, ...data.tempo, ...data.bus];
      return data;
    },
    createVehicle(id, name, description, capacity, luggage, rate, base) {
      return {
        id,
        name,
        image: `/placeholder.svg?height=${base.imageSize.height}&width=${base.imageSize.width}&query=${name.toLowerCase()} ${base.color}`,
        description,
        capacity,
        luggage,
        ac: base.ac,
        rate,
        minHire: base.minHire
      };
    }
  };
  
  // Initialize and export the data
  export const vehicleData = vehicles.getVehicleData();