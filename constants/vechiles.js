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
          this.createVehicle('swift', 'Swift Dzire', 'Compact sedan perfect for city travel.', '4 Passengers', '2 Medium Bags', '₹12/km', baseSpecs.cars,"https://i.ytimg.com/vi/l3bnj6kgk5o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCkQ0Pl4-MR1CSVm73jhopYmd0RbQ"),
          this.createVehicle('innova', 'Toyota Innova', 'Spacious SUV ideal for family trips.', '7 Passengers', '4 Medium Bags', '₹18/km', baseSpecs.cars,"https://i.pinimg.com/736x/fd/3d/ba/fd3dba95ae478237575f5d9ed39c8e99.jpg"),
          this.createVehicle('ertiga', 'Maruti Ertiga', 'Versatile MPV with good mileage.', '7 Passengers', '3 Medium Bags', '₹15/km', baseSpecs.cars,"https://www.team-bhp.com/forum/attachments/test-drives-initial-ownership-reports/1831965d1688269531t-review-my-2018-maruti-suzuki-ertiga-zxi-3.-side-view.jpg"),
          this.createVehicle('brezza', 'Vitara Brezza', 'Compact SUV with modern features.', '5 Passengers', '3 Medium Bags', '₹16/km', baseSpecs.cars,"https://media.spinny.com/sp-file-system/public/2025-01-03/20b6a820c5924fb6814d3be76eddd486/file.JPG"),
        ],
        luxury: [
          this.createVehicle('fortuner', 'Toyota Fortuner', 'Premium SUV with powerful engine.', '7 Passengers', '4 Large Bags', '₹25/km', baseSpecs.luxury,"https://media.spinny.com/sp-file-system/public/2025-02-07/537653a497c44189b319ee79840913b2/file.JPG"),
          this.createVehicle('crysta', 'Innova Crysta', 'Upgraded Innova with luxury interiors.', '7 Passengers', '4 Medium Bags', '₹22/km', baseSpecs.luxury,"https://live.staticflickr.com/1707/26419758730_18e44df725_b.jpg"),
        ],
        tempo: [
          this.createVehicle('tempo-12', 'Tempo Traveller (12 Seater)', 'Perfect for medium groups.', '12 Passengers', '12 Medium Bags', '₹28/km', baseSpecs.tempo,"https://5.imimg.com/data5/SELLER/Default/2024/2/382333830/FY/LC/SJ/211423081/12-seater-tempo-traveller-rental-services.jpg"),
          this.createVehicle('tempo-16', 'Tempo Traveller (16 Seater)', 'Ideal for large groups.', '16 Passengers', '16 Medium Bags', '₹32/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-9', 'Tempo Traveller (9 Seater)', 'Compact tempo for small tours.', '9 Passengers', '9 Medium Bags', '₹25/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-14', 'Tempo Traveller (14 Seater)', 'Balanced capacity for groups.', '14 Passengers', '14 Medium Bags', '₹30/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-sleeper', 'Sleeper Tempo (10 Seater)', 'For overnight journeys.', '10 Passengers', '10 Medium Bags', '₹40/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-executive', 'Executive Tempo (12 Seater)', 'Business class tempo.', '12 Passengers', '12 Medium Bags', '₹42/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
        ],
        bus: [
          this.createVehicle('mini-bus', 'Mini Bus (25 Seater)', 'For large groups and tours.', '25 Passengers', '25 Medium Bags', '₹45/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('bus-35', 'Bus (35 Seater)', 'Mid-sized bus for school trips.', '35 Passengers', '35 Medium Bags', '₹55/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('bus', 'Bus (45 Seater)', 'Full-sized bus for big groups.', '45 Passengers', '45 Medium Bags', '₹65/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
        ]
      };
  
      // Combine all vehicles into 'all' array
      data.all = [...data.cars, ...data.luxury, ...data.tempo, ...data.bus];
      return data;
    },
    createVehicle(id, name, description, capacity, luggage, rate, base,image) {
      return {
        id,
        name,
        image: image,
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