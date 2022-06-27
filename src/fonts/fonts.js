import { createGlobalStyle } from "styled-components";

import LeagueSpartanBold from "./LeagueSpartan-Bold.ttf"
import LeagueSpartanLight from "./LeagueSpartan-Light.ttf"
import LeagueSpartanRegular from "./LeagueSpartan-Regular.ttf"
import LeagueSpartanSemiBold from "./LeagueSpartan-SemiBold.ttf"
import LeagueSpartanThin from "./LeagueSpartan-Thin.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "LeagueSpartanBold";
        src: url(${LeagueSpartanBold});
    }
    @font-face {
        font-family: "LeagueSpartanLight";
        src: url(${LeagueSpartanLight});
    }
    @font-face {
        font-family: "LeagueSpartanRegular";
        src: url(${LeagueSpartanRegular});
    }
    @font-face {
        font-family: "LeagueSpartanSemiBold";
        src: url(${LeagueSpartanSemiBold});
    }
    @font-face {
        font-family: "LeagueSpartanThin";
        src: url(${LeagueSpartanThin});
    }
`