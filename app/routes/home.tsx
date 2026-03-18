import { ThemeProvider } from "@rescui/ui-contexts";
import hljs from "highlight.js";
import kotlin from "highlight.js/lib/languages/kotlin";

import { HeaderSection } from "../components/sections/HeaderSection";
import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { UsageSection } from "../components/sections/UsageSection";
import { LatestFromKotlinSection } from "../components/sections/LatestSection";
import { StartSection } from "../components/sections/StartSection";

import "../styles/grid.scss";
import "../styles/images.scss";

hljs.registerLanguage("kotlin", kotlin);

function PageContent() {
    return (
        <div className="overview-page">
          <HeaderSection/>
          <LatestFromKotlinSection/>
          <WhyKotlinSection/>
          <UsageSection/>
          <StartSection/>
        </div>
    );
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <PageContent/>
    </ThemeProvider>
  );
}
