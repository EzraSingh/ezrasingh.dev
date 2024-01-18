import {
  Header,
  Contact,
  About,
  Experience,
  ProjectsList,
  Articles,
  Footer,
} from "@/app/partials";
import { SplitLayout } from "@/app/components";

// @ts-ignore
import content from "@/app/content/home.yml";

export default function Home() {
  return (
    <SplitLayout>
      <Header social={content.social} />
      <main className="pt-12 lg:pt-24 lg:w-1/2 lg:py-24">
        <Contact />
        <About />
        <Experience content={content.experience} />
        <ProjectsList content={content.projects} />
        <Articles content={content.articles} />
        <Footer />
      </main>
    </SplitLayout>
  );
}
