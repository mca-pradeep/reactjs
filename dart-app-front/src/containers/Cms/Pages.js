import React, {Component} from 'react';
import { connect } from "react-redux";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column'
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import * as actions from "../../store/actions";
import { NavLink } from 'react-router-dom'

export class Pages extends Component {

    constructor() {
        super();
        this.state = {
            layout: 'list',
            sortOptions: [
                {label: 'Newest First', value: '!year'},
                {label: 'Oldest First', value: 'year'},
                {label: 'Brand', value: 'brand'}
            ],
        };
    }

    componentDidMount() {
		if(this.props.dataTableValue.length==0) this.props.onRequestPageLoad();
    }
  
    
	updatepage = (rowData, column) => {
		console.log('ROWS', rowData._id, column)
			return <NavLink to={"update-page/" + rowData.slug} activeClassName="selected">
		Update
		</NavLink>
	}

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0)
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        else
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
    }

    render() {
        const scheduleHeader = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };

       

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Content Management System</h1>
                        <DataTable value={this.props.dataTableValue} paginatorPosition="both" selectionMode="single" header="" paginator={true} rows={10}
                            responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.data})}>
                            <Column field="title" header="Title" sortable={true}/>
							<Column field="slug" header="Slug" sortable={true}/>
                            <Column className="description" field="description" header="Description" sortable={true}/>
							<Column field="createdDate" body={this.updatepage} header="Action" />
                           
                        </DataTable>
                    </div>
                </div>

                
</div>
        );
    }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    dataTableValue: state.contentManagementReducer.pagesList
    //store:
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestPageLoad: () => dispatch(actions.contentManagement())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pages);
