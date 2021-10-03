import { connect } from "react-redux";
import Clock from "../../components/clock/Clock";
import { updateTime } from "../actions";

const mapStateToProps = state => {
    return { time : state.clock.time };
};
const mapDispatchToProps = dispatch => {
    return { updateTime : () => dispatch( updateTime() ) }
};

const ClockContainer = connect( mapStateToProps, mapDispatchToProps )( Clock );
export default ClockContainer;