import React from "react";
import OpenGraphMeta from "components/meta/OpenGraphMeta";
import TwitterCardMeta from "components/meta/TwitterCardMeta";
import BasicMeta from "components/meta/BasicMeta";
import Layout from "components/Layout";
import ContactForm from "components/ContactForm";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/about"} />
      <OpenGraphMeta url={"/about"} />
      <TwitterCardMeta url={"/about"} />
      <div className="about-container flex flex-col max-w-3xl mx-auto items-center py-0 px-6">
        <section className="section__hero">
          <h1>
            More about Us.
            <span className="fancy">.</span>
            <span className="fancy-1">.</span>
          </h1>
          <span className="handle">@bloc-jobs @fitnessschool</span>
          <h2>
            Find work <strong>or</strong> Find the right person for work{" "}
          </h2>
        </section>
        <section className=""></section>
        <article>
          You know what? It is beets. I've crashed into a beet truck. Do you
          have any idea how long it takes those cups to decompose. Is this my
          espresso machine? Wh-what is-h-how did you get my espresso machine?
          Checkmate... You really think you can fly that thing? Yeah, but John,
          if The Pirates of the Caribbean breaks down, the pirates don’t eat the
          tourists. Just my luck, no ice. This thing comes fully loaded. AM/FM
          radio, reclining bucket seats, and... power windows. Hey, take a look
          at the earthlings. Goodbye! Must go faster... go, go, go, go, go!
          Checkmate... You're a very talented young man, with your own clever
          thoughts and ideas. Do you need a manager? You really think you can
          fly that thing? Just my luck, no ice. You know what? It is beets. I've
          crashed into a beet truck. You really think you can fly that thing?
          You're a very talented young man, with your own clever thoughts and
          ideas. Do you need a manager? Jaguar shark! So tell me - does it
          really exist? I was part of something special. Do you have any idea
          how long it takes those cups to decompose. Must go faster. Hey, take a
          look at the earthlings. Goodbye! Forget the fat lady! You're obsessed
          with the fat lady! Drive us out of here! Hey, take a look at the
          earthlings. Goodbye! They're using our own satellites against us. And
          the clock is ticking.
        </article>
        <div className="buttons-container flex justify-evenly align-middle items-center my-6">
          <label htmlFor="my-modal-4" className="btn btn-secondary btn-wide">
            Get In Touch
          </label>
        </div>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label
          htmlFor="my-modal-4"
          className="modal cursor-pointer modal-bottom sm:modal-middle"
        >
          <div className="modal-box relative">
            <ContactForm />
          </div>
        </label>
      </div>
    </Layout>
  );
}
