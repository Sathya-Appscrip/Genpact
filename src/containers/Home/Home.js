import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import EmpCard from '../../component/ui/employeeBox'


class Home extends Component {

    state = {
        open: false,
        departments: [
            { id: 1, name: 'HR', empIds: [1, 2, 3, 4, 5] },
            { id: 2, name: 'ENGINEERING', empIds: [6, 7, 8, 9, 10] }
        ],
        selectedDept: [],
        selectedEmp: '',
        showEmp: false
    };

    componentDidMount() {
        this.props.getUserList(1)
    }

    departmentHandler = (event) => {
        let index = this.state.departments.findIndex((item) => item.id == event.target.value);
        let selectedArray = this.state.departments[index];
        this.setState({ selectedDept: selectedArray })
    }

    employeeHandler = (event) => {
        this.setState({ selectedEmp: event.target.value })
    }

    getEmpInfo = () => {
        this.setState({ showEmp: true })
        this.props.getUserList(this.state.selectedEmp)
    }

    clearAll = () => {
        this.setState({
            showEmp: false,
            selectedEmp: '',
            selectedDept: []
        })
    }

    render() {


        return (
            <div className="container">

                <div className="row marginTop30">
                    <div className="col-md-3">
                        <select className="custom-Dropdown" onChange={this.departmentHandler} value={this.state.value}>
                            <option value=''> none </option>
                            {this.state.departments.map((department) =>
                                <option value={department.id}>{department.name}</option>
                            )}

                        </select>
                    </div>

                    <div className="col-md-3">
                        <select className="custom-Dropdown" onChange={this.employeeHandler} value={this.state.value}>
                            <option value=''> none </option>
                            {this.state.selectedDept.empIds && this.state.selectedDept.empIds.length > 0 ?
                                this.state.selectedDept.empIds.map((emp) =>
                                    <option value={emp}>{emp}</option>
                                ) :
                                ''
                            }
                        </select>
                    </div>

                    <div className="col-md-2 text-center">
                        <PrimaryButton onClick={this.getEmpInfo} disabled={!this.state.selectedEmp}>  Get Details </PrimaryButton>
                    </div>

                    <div className="col-md-1">
                        <DefaultButton onClick={this.clearAll}> Clear </DefaultButton>
                    </div>
                </div>


                <div className="row text-center marginTop30">
                    {this.state.showEmp && this.props.userList ?
                        <EmpCard data={this.props.userList} />
                        : ''}
                </div>

            </div >
        )
    }

}


const mapStateToProps = state => {
    return {
        userList: state.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserList: (userID) => dispatch(actions.getUsers(userID)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
