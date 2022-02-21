class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
        // this.designation = designation;
    }
}


class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}


class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine', student);
    }
}


class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}


const aamir = new Support('Aamir Khan', 'gulistan', 11);
const salmaan = new Support('Salman Khan', 'borobari', 'Front-end Web Dev', 9);
const shahrukh = new Support('Shahrukh Khan', 'chotobari', 'Back-end Web Dev', 11);
const akshay = new Support('Akshay Kumar', 'chotobari', 'Support Web Dev', 7);
// console.log(aamir, salmaan, shahrukh, akshay);

const alia = new StudentCare('Alia Bhaat', 'Student', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'VS Code');
ash.releaseApp('1.4.5');
// console.log(ash);