import Card from "./components/Card";
import "./App.css";
import home from "./assets/images/home.png";
import idea from "./assets/images/idea.png";
import search from "./assets/images/search.png";
import software from "./assets/images/software.png";

function App() {
  return (
    <main className="container mx-auto text-center py-20">
      <section className="mb-14">
        <header className="text-4xl flex flex-col gap-y-2 pb-3">
          <h2 className="font-extralight">Reliable, efficient delivery</h2>

          <h1 className="font-semibold">Powered by Technology</h1>
        </header>

        <header className="text-base max-w-[540px] mx-auto opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </header>
      </section>

      <article className="flex flex-col gap-y-6 lg:flex-row justify-center items-center gap-x-6">
        <Card title="Supervisor" image={search} borderColor="border-primary-cyan" />
        <div className="flex flex-col gap-y-6">
          <Card
            title="Team Builder"
            image={home}
            borderColor="border-primary-red"
          />
          <Card
            title="Karma"
            image={idea}
            borderColor="border-primary-orange"
          />
        </div>
        <Card title="Calculator" image={software} borderColor="border-primary-blue" />
      </article>
    </main>
  );
}

export default App;
