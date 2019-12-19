import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobService} from "../job.service";

@Component({
  selector: 'app-admin-job-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss']
})
export class AdminJobItemPage {
  id = this.route.snapshot.params.id;
  form;

  constructor(private route: ActivatedRoute,
              private jobSvc: JobService) {
  }

}
