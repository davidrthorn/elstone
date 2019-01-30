import Sequence from './Sequence';

export default class Bar extends Sequence {
    constructor (Group) {
        super()
        this.Group = Group;
    }
    init = () => {
        const g = this.Group.init();
        return `${g.getString()} `.repeat(4);
    }
}