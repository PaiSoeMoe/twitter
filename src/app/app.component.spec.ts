import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { from } from 'rxjs';


describe('AppComponent', () => {
  let component: AppComponent;
  let service: HttpService;
  beforeEach(() => {
    service = new HttpService(null);
    component = new AppComponent(service);
  });

  it('should set data property with the items returned from the server', () => {
    spyOn(service, 'getTweet').and.callFake(() => {
      return from([[1, 2, 3]]);
    });

    component.ngOnInit();

    expect(component.data).toEqual([1, 2, 3]);

  });



});
