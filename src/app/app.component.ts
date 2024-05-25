import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import only RouterModule here

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule]  // Correctly import RouterModule without .forRoot()
})
export class AppComponent {
  title = 'idkfrontend2';
}
