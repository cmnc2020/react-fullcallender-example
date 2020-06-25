import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class DemoApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleEventClick = this.handleEventClick.bind(this);
    }

    handleEventClick(info) {
        const title = info.event.title;
        const date = this.formatString(info.event.start)
        alert(title + ": " + date);
    }

    formatString(date) {
        const y = date.getFullYear();
        const m = ("00" + (date.getMonth() + 1)).slice(-2);
        const d = ("00" + date.getDate()).slice(-2);
        return y + "-" + m + "-" + d;
    }

    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'AAA', date: '2020-06-01' },
                    { title: 'BBB', date: '2020-06-02' }
                ]}
                eventClick={e => this.handleEventClick(e)}
            />
        )
    }
}