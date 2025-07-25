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
          this.createVehicle('ciaz', 'Maruti Ciaz', 'Premium sedan with great comfort.', '5 Passengers', '3 Medium Bags', '₹14/km', baseSpecs.cars,"https://www.mahindrafirstchoice.com/_next/image?url=https%3A%2F%2Fvw-prod.s3.ap-south-1.amazonaws.com%2Fdms-stock-images%2F618171%2F2%2F1654838049TN49BE1131%20(5).jpeg&w=1200&q=75"),
          this.createVehicle('brezza', 'Vitara Brezza', 'Compact SUV with modern features.', '5 Passengers', '3 Medium Bags', '₹16/km', baseSpecs.cars,"https://media.spinny.com/sp-file-system/public/2025-01-03/20b6a820c5924fb6814d3be76eddd486/file.JPG"),
          this.createVehicle('baleno', 'Maruti Baleno', 'Hatchback with spacious interiors.', '5 Passengers', '2 Medium Bags', '₹11/km', baseSpecs.cars,"https://media.spinny.com/sp-file-system/public/2025-01-23/3b62ab60233c40e388fc7b6f996c84b2/file.JPG"),
          this.createVehicle('amaze', 'Honda Amaze', 'Reliable sedan for city rides.', '5 Passengers', '2 Medium Bags', '₹13/km', baseSpecs.cars,"https://www.hondacarindia.com/_next/image?url=https%3A%2F%2Fwww.hondacarindia.com%2Fweb-data%2Fmodels%2Fexterior%2Famaze%2Flunar_silver_mettalic_14April.png&w=3840&q=75"),
          this.createVehicle('venue', 'Hyundai Venue', 'Compact SUV with tech features.', '5 Passengers', '3 Medium Bags', '₹17/km', baseSpecs.cars,"https://imgd.aeplcdn.com/370x208/n/nuie9sa_1463560.jpg?q=80"),
          this.createVehicle('santro', 'Hyundai Santro', 'Economical hatchback for short trips.', '5 Passengers', '2 Medium Bags', '₹10/km', baseSpecs.cars,"https://imgd.aeplcdn.com/664x374/n/cw/ec/32940/santro-exterior-left-side-view.jpeg?q=80"),
          this.createVehicle('wagonr', 'Maruti WagonR', 'Tall boy design with good space.', '5 Passengers', '2 Medium Bags', '₹9/km', baseSpecs.cars,"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/34467/wagonr-exterior-left-side-view.jpeg?q=80")
        ],
        luxury: [
          this.createVehicle('fortuner', 'Toyota Fortuner', 'Premium SUV with powerful engine.', '7 Passengers', '4 Large Bags', '₹25/km', baseSpecs.luxury,"https://media.spinny.com/sp-file-system/public/2025-02-07/537653a497c44189b319ee79840913b2/file.JPG"),
          this.createVehicle('crysta', 'Innova Crysta', 'Upgraded Innova with luxury interiors.', '7 Passengers', '4 Medium Bags', '₹22/km', baseSpecs.luxury,"https://live.staticflickr.com/1707/26419758730_18e44df725_b.jpg"),
          this.createVehicle('mercedes', 'Mercedes E-Class', 'Luxury sedan with premium features.', '5 Passengers', '3 Large Bags', '₹45/km', baseSpecs.luxury,"https://www.mercedes-benz.co.in/content/dam/india/passengercars/models/E-Class/e-class-w214/OneWeb_Media%20Slider_Exterior_3302x1858_V1R0.jpg/1740065409232.jpg?im=Crop,rect=(0,0,3302,1857);Resize=(1280,720)"),
          this.createVehicle('audi-a6', 'Audi A6', 'Executive sedan with advanced tech.', '5 Passengers', '3 Large Bags', '₹48/km', baseSpecs.luxury,"https://www.vipcarrental.ae/wp-content/uploads/2024/03/side-1-optimized.webp"),
          this.createVehicle('bmw-5', 'BMW 5 Series', 'Sporty luxury sedan for business travel.', '5 Passengers', '3 Large Bags', '₹50/km', baseSpecs.luxury,"https://images.hgmsites.net/med/2016-bmw-5-series-4-door-sedan-activehybrid-5-rwd-side-exterior-view_100575787_m.jpg"),
          this.createVehicle('range-rover', 'Range Rover Vogue', 'Ultimate luxury SUV experience.', '5 Passengers', '4 Large Bags', '₹65/km', baseSpecs.luxury,"https://car-images.bauersecure.com/wp-images/5158/rangerover2010photo_03.jpg"),
          this.createVehicle('volvo-xc90', 'Volvo XC90', 'Premium 7-seater luxury SUV.', '7 Passengers', '5 Large Bags', '₹55/km', baseSpecs.luxury,"https://imgd.aeplcdn.com/664x374/ec/45/72/18626/img/ol/Volvo-XC90-Left-Side-View-51435.jpg?v=201711021421&q=80"),
          this.createVehicle('jaguar-xf', 'Jaguar XF', 'Luxury sedan with sporty performance.', '5 Passengers', '3 Large Bags', '₹52/km', baseSpecs.luxury,"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/19826/xf-exterior-left-side-view.jpeg?q=80&q=80"),
          this.createVehicle('lexus-es', 'Lexus ES 300h', 'Hybrid luxury sedan with comfort.', '5 Passengers', '3 Large Bags', '₹58/km', baseSpecs.luxury,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoCiwhEW9LS4PSauL4RFDVf17HUG5CCrHwg&s"),
          this.createVehicle('land-cruiser', 'Toyota Land Cruiser', 'Legendary off-road luxury SUV.', '8 Passengers', '6 Large Bags', '₹70/km', baseSpecs.luxury,"https://di-shared-assets.dealerinspire.com/legacy/rackspace/Toyota/2018%20Land%20Cruiser/Blizzard-Pearl-2018LandCruiser.png")
        ],
        tempo: [
          this.createVehicle('tempo-12', 'Tempo Traveller (12 Seater)', 'Perfect for medium groups.', '12 Passengers', '12 Medium Bags', '₹28/km', baseSpecs.tempo,"https://5.imimg.com/data5/SELLER/Default/2024/2/382333830/FY/LC/SJ/211423081/12-seater-tempo-traveller-rental-services.jpg"),
          this.createVehicle('tempo-16', 'Tempo Traveller (16 Seater)', 'Ideal for large groups.', '16 Passengers', '16 Medium Bags', '₹32/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-9', 'Tempo Traveller (9 Seater)', 'Compact tempo for small tours.', '9 Passengers', '9 Medium Bags', '₹25/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-14', 'Tempo Traveller (14 Seater)', 'Balanced capacity for groups.', '14 Passengers', '14 Medium Bags', '₹30/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-ac', 'AC Tempo (12 Seater)', 'Premium AC tempo for comfort.', '12 Passengers', '12 Medium Bags', '₹35/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-deluxe', 'Deluxe Tempo (14 Seater)', 'Luxury tempo with extra space.', '14 Passengers', '14 Medium Bags', '₹38/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-sleeper', 'Sleeper Tempo (10 Seater)', 'For overnight journeys.', '10 Passengers', '10 Medium Bags', '₹40/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-executive', 'Executive Tempo (12 Seater)', 'Business class tempo.', '12 Passengers', '12 Medium Bags', '₹42/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-hi-tech', 'Hi-Tech Tempo (16 Seater)', 'Modern amenities tempo.', '16 Passengers', '16 Medium Bags', '₹45/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg"),
          this.createVehicle('tempo-premium', 'Premium Tempo (14 Seater)', 'Top-end luxury tempo.', '14 Passengers', '14 Medium Bags', '₹48/km', baseSpecs.tempo,"https://carbike360-ae.s3.me-central-1.amazonaws.com/medium_force_traveller_2024_left_side_front_view_8e06902175.jpg")
        ],
        bus: [
          this.createVehicle('mini-bus', 'Mini Bus (27 Seater)', 'For large groups and tours.', '27 Passengers', '27 Medium Bags', '₹45/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('bus', 'Bus (45 Seater)', 'Full-sized bus for big groups.', '45 Passengers', '45 Medium Bags', '₹65/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('bus-35', 'Bus (35 Seater)', 'Mid-sized bus for school trips.', '35 Passengers', '35 Medium Bags', '₹55/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('sleeper-bus', 'Sleeper Bus (30 Beds)', 'For overnight long journeys.', '30 Beds', '30 Small Bags', '₹75/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('volvo-ac', 'Volvo AC Bus (40 Seater)', 'Premium AC bus service.', '40 Passengers', '40 Medium Bags', '₹85/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('school-bus', 'School Bus (30 Seater)', 'Safe transport for students.', '30 Passengers', '30 Small Bags', '₹50/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('party-bus', 'Party Bus (25 Seater)', 'With music and LED lights.', '25 Passengers', '25 Small Bags', '₹90/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('executive-bus', 'Executive Bus (32 Seater)', 'Business class bus service.', '32 Passengers', '32 Medium Bags', '₹70/km', baseSpecs.bus,"https://www.asparkholidays.com/uploads/51946_Bus%20Tour.jpg"),
          this.createVehicle('double-decker', 'Double Decker Bus (50 Seater)', 'Iconic two-level bus.', '50 Passengers', '50 Small Bags', '₹95/km', baseSpecs.bus,"https://c8.alamy.com/comp/C7C5FM/white-clean-unmarked-double-decker-coach-bus-with-passengers-no-markings-C7C5FM.jpg"),
          this.createVehicle('eco-bus', 'Eco-Friendly Bus (40 Seater)', 'Electric bus for green travel.', '40 Passengers', '40 Small Bags', '₹60/km', baseSpecs.bus,"https://i.ytimg.com/vi/jJqtYxliNMw/maxresdefault.jpg")
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