import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Contract} from '../../models/Contract';
import {ContractService} from '../../services/contract.service';
import {ContractTable} from '../../models/ContractTable';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddContractComponent} from './add-contract/add-contract.component';
import {ShowContractComponent} from './show-contract/show-contract.component';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: Contract[];
  tableContracts: ContractTable[];

  displayedColumns = ['id', 'hotelName', 'roomtypes', 'startdate', 'enddate', 'button'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {

  }

  constructor(private contractService: ContractService, public dialog: MatDialog) {
    this.getAllContracts();
  }

  getAllContracts(){
    this.contractService.getAllContracts().subscribe(
      (contracts: ContractTable[]) => {
        this.tableContracts = contracts;
        this.dataSource = new MatTableDataSource<ContractTable>(this.tableContracts);
      },
      (error) => console.log(error)
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddContractComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllContracts();
      // this.dialog.open(ShowContractComponent);
    });
  }
}




