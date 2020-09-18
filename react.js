export default class ReactWidget extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Kyle',
        };
    }
    
    render() {
        return(<h1>Hello {this.state.name}</h1>)
    }
}