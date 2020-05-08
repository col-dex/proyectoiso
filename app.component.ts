import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "destiny tour";
  items = [{ title: "Profile" }, { title: "Log out" }];

  menuItems: NbMenuItem[] = [
    {
      title: "Home",
      icon: "home-outline",
      children: [
        {
          title: "Servicios",
        },
        {
          title: "Informacion ",
        },
        {
          title: " ",
        },
        {
          title: "chat",
        },
      ],
    },
    {
      title: "About",
    },
  ];
}
