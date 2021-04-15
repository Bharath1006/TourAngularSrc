import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TourService {


url:string='http://localhost:8080/Tour/';

constructor(private http:HttpClient) { }

getAllGuides()
{
  return this.http.get(this.url);
}

findGuideById(guideId:string)
{
  return this.http.get(this.url+guideId);
}

addGuide(tour:any)
{
  console.log(tour);
  return this.http.post(this.url,tour);
}

modifyGuide(tour:any)
{
  return this.http.put(this.url,tour);
}

deleteGuide(guideId:string)
{
  return this.http.delete(this.url+guideId);
}

}
