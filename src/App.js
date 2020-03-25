import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import JobItem from './components/JobListElement';
import JobCreationForm from './components/JobCreationForm';
// import Timer from "./components/Timer";
// import ResizeDemo from "./components/ResizeDemo";
import JobsApi from "./api/JobsApi";

class App extends Component {
    state = {
        jobs: [],
        isFormVisible: false,
        loading: false,
    };

    componentDidMount = async () => {
        this.setState({ loading: true });
        const jobs = await JobsApi.getJobs();
        this.setState({ jobs, loading: false });
    };

    toggleFormVisible = () => {
        this.setState({
            jobs: [],
            isFormVisible: !this.state.isFormVisible,
        })
    };

    render() {
        return (
            <div className="App">
                <h1 className="App-title">
                    Prop Drilling and State Lifting
                </h1>
                <button onClick={this.toggleFormVisible}>
                    {this.state.isFormVisible ?
                        'Hide form':
                        'Show form'
                    }
                </button>
                <div style={{display: this.state.isFormVisible ? 'block' : 'none'}}>
                    <JobCreationForm />
                </div>
                <List items={this.state.jobs} itemElement={JobItem}/>
            </div>
        );
    }
}

export default App;
