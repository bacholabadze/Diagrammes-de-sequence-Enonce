class Bike {
    constructor(bikeType) {
        this.bikeType = bikeType;
        this.mileage = 0;
        this.needsService = false;
    }

    ride(distance) {
        this.mileage += distance;
        console.log(`${this.bikeType} bike ridden for ${distance} km.`);
        if (this.mileage >= 1000) {
            this.needsService = true;
            console.log(`${this.bikeType} bike needs service after ${this.mileage} km.`);
        }
    }

    service() {
        if (this.needsService) {
            this.needsService = false;
            this.mileage = 0;  // Reset mileage after service
            console.log(`${this.bikeType} bike has been serviced.`);
        } else {
            console.log(`${this.bikeType} bike does not need servicing.`);
        }
    }
}

class Rental {
    constructor(bike) {
        this.bike = bike;
        this.days = 0;
    }

    rent(days) {
        this.days = days;
        console.log(`Bike rented for ${this.days} days.`);
    }

    returnBike() {
        console.log(`Bike returned after ${this.days} days.`);
        this.bike.service();
    }
}

// Example of using the classes
const simpleBike = new Bike("Simple");
const tandemBike = new Bike("Tandem");

// Rent the simple bike
const rental = new Rental(simpleBike);
rental.rent(5);

// Simulate a long ride that makes the bike need service
simpleBike.ride(1200); // Riding 1200 km, should trigger servicing
rental.returnBike();    // Return the bike and service it
