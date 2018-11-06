import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../sass/_loginbutton.scss';

export class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.routeTo = this.routeTo.bind(this);
    }

    routeTo(p) {
        let path = p;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="LoginButton">
                
            </div>
        );
    }
}

export default withRouter(LoginButton);