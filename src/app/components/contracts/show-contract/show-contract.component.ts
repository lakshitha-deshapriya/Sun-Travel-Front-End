import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../services/contract.service';

@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css']
})
export class ShowContractComponent implements OnInit {

  responseMsg: String;

  constructor(private contractService: ContractService) {
    this.responseMsg = this.contractService.responseMsg;
  }

  ngOnInit() {
  }



}
