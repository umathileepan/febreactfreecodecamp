import React from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'

//using variable
//const demoApp = <h1>Hello world</h1>

//Create component using function
/*const DemoFunctionApp = function () {
        return (
            <div>
                <h1>React</h1>
                <h3>I love React!</h3>
            </div>
        );
}*/

//Create component using class
class HelloReact extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>Create React using class</h1>
                <h3>I love to work using React</h3>
                <p>I am looking for a front end developer job. If that job include React then I will be so happy.
                   Because I love to developing React User Interface.
                </p>
                <Job />
                <Fruits />
                <Calendar />
                <ToDo />
                <ShoppingCart />
                <ResetPassword />
                <CampSite />
                <MyComponent />
                <ChangeCompName />
                <ToggleVisible />
                <Count />
                <ControlledInput />
                <MyForm />
                <MyApp />
                <MyAppCallback />
                <ActiveUserComponentDidMount />
                <MagicEightBall />
                <Maths />
            </div>
        );
    }
};

//create a child component
const Job = () => {
    return(
        <div>
            <p>I know how to create child component to complex components.</p>
        </div>
    );
};

//create a nested component
const TypeOfFruits = () => {
    return(
        <div>
            <h2>Types of Fruits</h2>
            <ul>
                <li>Banana</li>
                <li>Apple</li>
                <li>Strawbury</li>
                <li>Blueburry</li>
                <li>Blackbury</li>
                <li>Grapes</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return(
        <div>
            <TypeOfFruits />
        </div>
    );
};

const CurrentDate = (props) => {
    return(
        <div>
             <h3>The current date is: {props.date}</h3>
        </div>
    );
};

//setting default props
CurrentDate.defaultProps={date: "19/01/2021"};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h2>What date is it? </h2>
                <CurrentDate date={Date()}/>
            </div>
        );
    }
};

const List = (props) => {
    return (
        <div>
            <li>{props.tasks.join(", ")}</li>
        </div>
    );
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>ToDo Lists</h1>
                <h2>Today</h2>
                <CurrentDate />
                <List tasks={["Walk dog","Dance","Bathroom cleaning"]}/>
                <h2>Tomorrow</h2>
                <List tasks={["Abs workout","Cooking","Reception cleaning"]}/>
            </div>
        );
    }
};

//Checking propType
const Items = (props) => {
    return (
        <div>
            <h2>Items in the shopping cart: {props.quantity}</h2>
        </div>
    );
};

Items.defaultProps = {quantity: 0};
Items.propTypes = {quantity: PropTypes.number.isRequired};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={4}/>
    }
}

class ReturnTempPassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Your temprary password is: <strong>{this.props.password}</strong></p>
            </div>
        );
    }
};

class ResetPassword extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Reset Password</h2>
                <h2>We have generated a temporary new password for you.</h2>
                <h3>Please reset this password from your account settings ASAP.</h3>
                <ReturnTempPassword password={"freecodecamp123"} />
            </div>
        );
    }
};

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div><Camper /></div>
        );
    }
}

class Camper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>This is a camp: {this.props.name}</p>
        );
    }
}

Camper.defaultProps = {name: "CamperBot"};
Camper.propTypes = {name: PropTypes.string.isRequired};

//Render state in the User Interface
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "freeCodeCamp"
        }
    }
    render() {
        //you can assign name before in return then you need to call just variable name in {}
        //const name=this.state.name
        //return ({name}) 
        return(
            <h1>State Name is: {this.state.name}</h1>
        );
    }
}
class ChangeCompName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Initial State"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: "React Clicked"
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

class ToggleVisible extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visibility: false
        };
        this.toggleVisibility=this.toggleVisibility.bind(this);
    };

    toggleVisibility(){
        if(this.state.visibility===true) {
            this.setState(state => ({
                visibility: false
            }));
        } else {
            this.setState(state => ({
                visibility: true
            }))
        }
    };

    render() {
        if(this.state.visibility) {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h2>Hi, I am visible. You can see me now!</h2>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }

    }
};

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count: 0
        };
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    };

    increment() {
        this.setState(state => ({
            count: this.state.count + 1
        }));
    };

    decrement() {
        this.setState(state => ({
            count: this.state.count - 1
        }));
    };

    reset(){
        this.setState({
            count: 0
        });
    };

    render() {
        return(
            <div>
                <button className="inc" onClick={this.increment}>Increment</button>
                <button className="inc" onClick={this.decrement}>Decrement</button>
                <button className="inc" onClick={this.reset}>Reset</button>
                <h2>Count: {this.state.count}</h2>
            </div>
        );
    }
}

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange=this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return(
            <div>
                <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            input: '',
            submit: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.submitClick=this.submitClick.bind(this);
    };

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    submitClick(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
    };

    render() {
        return(
            <form onSubmit={this.submitClick}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">Submit</button>
                <h2>{this.state.submit}</h2>
            </form>
        );
    }

}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username: "Uma Thileepan"
        };
    }

    render(){
        return(
            <div>
                <Navbar username={this.state.username}/>
            </div>
        );
    };
};

class Navbar extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div>
                <h3>User is: {this.props.username}</h3>
            </div>
        );
    };
};

class MyAppCallback extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue: ''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value   
        });
    }

    render() {
        return(
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                <RenderInput input={this.state.inputValue}/>
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
               <h2>Get Input: </h2> 
               <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>{this.props.input}</h2>
            </div>
        );
    }
}

class ActiveUserComponentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activeUsers: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1237
            });
        }, 4500);
    }

    render() {
        return(
            <div>
                <h2 style={{color: "green", fontSize: 20}}>Active User: {this.state.activeUsers}</h2>
            </div>
        );
    }
}

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue: '',
            randomInexNo: ''
        };
        this.handleChange=this.handleChange.bind(this)
        this.ask=this.ask.bind(this)
    }

    handleChange(event) {
        this.setState({
             inputValue: event.target.value
        });
    }
    ask() {
        if(this.state.inputValue){
            this.setState({
                randomInexNo: Math.floor(Math.random() * 20),
                inputValue: ''
            })
        }
    }

    render(){
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
          ];

          const answer = possibleAnswers[this.state.randomInexNo];
        return(
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.ask}>Ask MagicEightBall </button>
                <h4>Answer</h4>
                <p>{answer}</p>
            </div>
        );
    }
};



ReactDOM.render(<HelloReact />,document.getElementById("root"))