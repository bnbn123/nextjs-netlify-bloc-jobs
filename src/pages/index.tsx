import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import * as AnimationRevealPage from "../helpers/AnimationRevealPage";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
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
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
