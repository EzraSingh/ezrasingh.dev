import {
  Header,
  AboutMe,
  Experience,
  Footer,
  MyProjects,
} from "@/app/partials";
import { SplitLayout } from "@/app/components";

// @ts-ignore
import content from "@/app/content/home.yml";

export default function Home() {
  return (
    <SplitLayout>
      <Header />
      <main className="pt-12 lg:pt-24 lg:w-1/2 lg:py-24">
        <AboutMe />
        <Experience content={content.experience} />
        <MyProjects content={content.projects} />
        <Footer />
      </main>
    </SplitLayout>
  );
}
