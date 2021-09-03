import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    //Method called when the "submit" event is triggered on the form. Triggers the ngSubmit emitter to emit the "submit" event as its payload. onSubmit($event: Event): boolean
    this.router.navigate(['search', form.value.search]);
  }
}
