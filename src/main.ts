import * as moment from 'moment-timezone';
import { TLSSocket } from 'tls';


// Presentation helper
function addItem(val:any) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

class SomeService {
    GetAZtimeZoneCurrentDate(): Date {
        //return moment(new Date())
        //  .tz('America/Phoenix')
        //  .format('MM/DD/YYYY');

        //const now: Date = new Date();
        //const nowMoment: moment.Moment = moment(now);
        //const tzMoment: moment.Moment = nowMoment.tz('America/Phoenix');
        //const tzString: string = tzMoment.format('MM/DD/YYYY');
        //addItem(tzString);

        return new Date(
            moment(new Date())
                .tz('America/Phoeniz')
                .format('MM/DD/YYYY')
        );
    }
}


const service: SomeService = new SomeService();
const theDate: Date = service.GetAZtimeZoneCurrentDate();
const dateValue: string = theDate.toString();
const message: string = 'Answer: ' + dateValue;

addItem(message);

