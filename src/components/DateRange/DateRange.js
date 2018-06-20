import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import { changeDates } from '../actions/index'

class DateRange extends Component {

    handleDayClick = (day) => {
        // this.setState(DateUtils.addDayToRange(day, this.state));
        this.props.changeDates(DateUtils.addDayToRange(day, this.props.range));
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div>
                <DayPicker 
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) } 
                    onDayClick={ this.handleDayClick } 
                />
                { selectedRange }
            </div>

        )
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDates })(DateRange);