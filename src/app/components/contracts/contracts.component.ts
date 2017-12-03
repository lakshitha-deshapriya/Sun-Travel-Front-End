import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Contract} from '../../models/Contract';
import {ContractService} from '../../services/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  signupForm: FormGroup;
  getdata = false;
  check= false;
  contracts: Contract[];
  hotel = null;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'hotelName': new FormControl(null)
    });
  }

  constructor(private contractService: ContractService) {
  }

  onSubmit(){
    this.hotel = JSON.stringify(this.signupForm.value.valueOf('hotelName'));
    this.contractService.getContractData(this.hotel).subscribe(
      (contracts: Contract[]) => {
        this.contracts = contracts;
        console.log(contracts);
      },
      (error) => console.log(error)
    );
    this.getdata = true;
  }

}
