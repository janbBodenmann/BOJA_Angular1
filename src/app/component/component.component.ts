import { Component } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

@Component({
    selector: 'app-component',
    standalone: true,
    templateUrl: './component.component.html',
    styleUrl: './component.component.scss',
    imports: [SharedModule]
})
export class ComponentComponent {

}
