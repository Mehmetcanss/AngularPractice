import { Component, Input, OnInit } from '@angular/core'
import {EventService} from '../shared/event.service'

@Component({
   templateUrl:'/app/events/event-details/event-details.component.html'
})

export class EventDetailsComponent implements OnInit {
    event: any

    constructor(private eventService: EventService) {

    }

    ngOnInit() { 
       this.event = this.eventService.getEvent(1)
    }
}