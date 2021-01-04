import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then(m => m.RecipesModule)
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        m => m.ShoppingListModule
      )
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// { path: "recipes", loadChildren: './recipes/recipes.module#RecipesModule' } // older syntax
// { path: "shopping-list", loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' } // older syntax
// { path: "auth", loadChildren: './auth/auth.module#AuthModule' } // older syntax
// {preloadingStrategy: NoPreloading} // default value (no import needed)