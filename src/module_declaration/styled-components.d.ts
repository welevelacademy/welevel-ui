import { Theme } from "@material-ui/core";

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  // works only with interface and not with type
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
