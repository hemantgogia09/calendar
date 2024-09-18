import Calendar from '../../core';
import DayGrid from '../../day-grid';
import List from '../../list';
import TimeGrid from '../../time-grid';
import ResourceTimeGrid from '../../resource-time-grid';
import ResourceTimeline from '../../resource-timeline';
import Interaction from '../../interaction';
import '../../core/index.css';

export default class extends Calendar {
    constructor(el, options) {
        super({
            target: el,
            props: {
                plugins: [DayGrid, List, TimeGrid, ResourceTimeGrid, ResourceTimeline, Interaction],
                options
            }
        });
    }

    get view() {
        return this.getView();
    }
}
