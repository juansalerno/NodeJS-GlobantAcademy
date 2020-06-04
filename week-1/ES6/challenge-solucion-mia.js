/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Town {
    constructor(parks = [], streets = []) {
        this.parks = parks;
        this.streets = streets;
    }

    averageAgeParks() {
        let sumAges = 0
        this.parks.forEach(park => {
            sumAges += park.getAge()
        })
        console.log(`Our ${this.parks.length} have an avergae age of ${sumAges / this.parks.length} years.`)
    }

    parksNameMore1000Tress() {
        this.parks.forEach(park => {
            if(park.getNumTrees() > 1000) {
                console.log(`${park.getName()} has more than 1000 trees`)
            }
        } )
    }

    showDensityEachPark() {
        this.parks.forEach(park => {
            console.log(`${park.getName()} has a tree density of ${park.getDensity()} trees per square km`)
        })
    }

    totalAndAvgStreetsLength() {
        let totalLength = 0;
        this.streets.forEach(street => {
            totalLength += street.getLength()
        })
        console.log(`Our ${this.streets.length} streets have a total length of ${totalLength} km, with an average of ${totalLength / this.streets.length} km.`)
    }

    showStreetsClasification() {
        this.streets.forEach(street => {
            console.log(`${street.getName()}, build in ${street.getBuildYear()}, is a ${street.getSize()} street`)
        })
    }

}

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
    getName() {
        return this.name
    }
    getBuildYear() {
        return this.buildYear;
    }
}


class Park extends TownElement{
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    getAge() {
        return new Date().getFullYear() - this.buildYear
    }

    getDensity() {
        return this.numTrees / this.area;
    }

    getNumTrees() {
        return this.numTrees
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    getLength() {
        return this.length
    }

    getSize() {
        return this.size
    }

}

// Parks instantiation:
const parks = [];

const park1 = new Park('park1', 1990, 1000, 120);
const park2 = new Park('park2', 1890, 1500, 1200);
const park3 = new Park('park3', 1830, 9000, 190);

parks.push(park1, park2, park3);


// Streets instantiation:

const streets = [];
const street1 = new Street('San Martin', 1800, 50000, 'big');
const street2 = new Street('Belgrano', 1990, 90000);
const street3 = new Street('Moreno', 1980, 30000, 'small');
const street4 = new Street('4 de abril', 2000, 5000, 'tiny');

streets.push(street1, street2, street3, street4);


// Town instantiation:

const town = new Town(parks, streets); 


// Report:
console.log('--------PARKS REPORT---------------');
town.averageAgeParks();
town.showDensityEachPark();
town.parksNameMore1000Tress();

console.log('--------STREETS REPORT--------------');
town.totalAndAvgStreetsLength();
town.showStreetsClasification();