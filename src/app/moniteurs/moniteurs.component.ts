import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import * as tableData from '../shared/data/smart-data-table';
import {MoniteurService} from './moniteur.service';
import {data} from '../shared/data/smart-data-table';


@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class MoniteursComponent implements OnInit {

  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource: LocalDataSource;

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      nom: {
        title: 'First Name',
        filter: false,
      },
      prenom: {
        title: 'Last Name',
        filter: false,
      },
      telephone: {
        title: 'Num Telephone',
        filter: false,
      },
      adresse: {
        title: 'Adresse',
        filter: false,
      },
      type: {
        title: 'Type',
        filter: false,
      }
    },
    attr: {
      class: "table table-responsive"
    },
    edit:{
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete:{
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    }
  };
  filtersettings = tableData.filtersettings;
  alertsettings = tableData.alertsettings;
  listMoniteurs: any;


  ngOnInit() {
    this.retrieveMoniteurs();
  }

  constructor(private moniteurService: MoniteurService) {
    this.filterSource = new LocalDataSource(tableData.filerdata); // create the source
    this.alertSource = new LocalDataSource(tableData.alertdata); // create the source
  }

  retrieveMoniteurs():void {
    this.moniteurService.getAll()
      .subscribe(
        data => {
          this.listMoniteurs = data;
          this.source = new LocalDataSource(this.listMoniteurs.body);
          console.log(data);
        },
        error => {
          console.log(error)
        }
      )
  }


  // And the listener code which asks the DataSource to filter the data:
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to inclue in the search
      {
        field: 'cin',
        search: query,
      },
      {
        field: 'nom',
        search: query,
      },
      {
        field: 'prenom',
        search: query,
      },
      {
        field: 'telephone',
        search: query,
      },
      {
        field: 'adresse',
        search: query,
      },
      {
        field: 'type',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  //  For confirm action On Delete
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //  For confirm action On Save
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  //  For confirm action On Create
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
