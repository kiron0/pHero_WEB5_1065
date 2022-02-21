class Support {
    name;
    // address = 'BD';
    address;
    // designation = 'Support Web Dev';
    designation;
    constructor(name, address, designation) {
        this.name = name;
        this.address = address;
        this.designation = designation;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'gulistan', 'Support Web Dev');
const salmaan = new Support('Salman Khan', 'borobari', 'Front-end Web Dev');
const shahrukh = new Support('Shahrukh Khan', 'chotobari', 'Back-end Web Dev');
const akshay = new Support('Akshay Kumar', 'chotobari', 'Support Web Dev');
// aamir.startSession();
// salmaan.startSession();
// shahrukh.startSession();
// akshay.startSession();
console.log(aamir, salmaan, shahrukh, akshay);