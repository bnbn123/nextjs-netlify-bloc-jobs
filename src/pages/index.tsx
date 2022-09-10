import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="hero-container">
        <div>
          <section className="section__hero">
            <h1>
              Hi, We're Blocjobs & we're are here for you
              <span className="fancy">.</span>
            </h1>
            <span className="handle">@bloc-jobs @fitnessschool</span>
            <h2>
              Find work <strong>or</strong> Find the right person for work{" "}
            </h2>
          </section>
          <section className="buttons-container flex justify-evenly align-middle items-center my-6">
            <button className="btn btn-primary btn-wide">Find work</button>
            <button className="btn btn-primary btn-wide">
              Find the right person
            </button>
          </section>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
