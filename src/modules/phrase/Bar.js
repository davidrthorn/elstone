import Sequence from './Sequence';

export default class Bar extends Sequence {
    constructor(Group, groups=4) {
        super()
        this.Group = Group;
        this.groups = groups;
    }
    init = () => {
        this.clear()
        for (let i = 0; i < this.groups; i++) {
            this.Group.init();
            this.noteString += this.Group.getString() + ' ';
        }
    }
}