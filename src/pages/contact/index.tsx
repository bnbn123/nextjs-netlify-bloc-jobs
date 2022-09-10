import React from "react";
import OpenGraphMeta from "components/meta/OpenGraphMeta";
import TwitterCardMeta from "components/meta/TwitterCardMeta";
import BasicMeta from "components/meta/BasicMeta";
import { SocialList } from "components/SocialList";
import Layout from "components/Layout";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/contact"} />
      <OpenGraphMeta url={"/contact"} />
      <TwitterCardMeta url={"/contact"} />
      <div className="hero-container">
        <section className="section__hero w-5/6">
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
        <section className="-description w-full">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            vulputate quam. Nam et dolor id dolor maximus commodo. Cras mollis
            dolor vel purus feugiat egestas. Nulla suscipit mauris ultricies
            consequat ornare. Curabitur hendrerit semper enim, eu vulputate erat
            rutrum vitae. In at aliquam ex, non malesuada sapien. Nam et ex eu
            felis accumsan finibus. Pellentesque consectetur lectus molestie
            velit egestas cursus. Fusce venenatis quis lorem vel pharetra.
            Curabitur ac posuere justo. Donec a massa ipsum. Vestibulum rutrum
            sapien et sem dignissim, eleifend vestibulum dolor mollis. Phasellus
            quis semper dolor. Fusce eget auctor est, ac imperdiet metus. Fusce
            non luctus velit, non consequat nulla. Vivamus tempus sem vitae
            magna vulputate commodo. Vivamus vehicula, dui nec convallis
            feugiat, purus ligula consequat dolor, at varius felis dui eget
            ipsum. Suspendisse convallis vulputate dui, eu consectetur erat.
            Donec viverra non est condimentum volutpat. In orci arcu, ultricies
            at felis id, tincidunt varius magna. Praesent cursus enim volutpat
            magna semper elementum. Suspendisse ut metus neque. Nullam non metus
            tincidunt, dapibus lectus convallis, euismod lorem. Integer varius
            libero id est rhoncus malesuada. Aenean non nisi eu justo rhoncus
            vulputate. Maecenas bibendum justo sed enim elementum interdum.
            Vestibulum vel lorem quis augue suscipit lobortis vitae vitae magna.
            Sed commodo mauris lectus, at ultrices sem rhoncus eu. Nulla gravida
            lectus et augue elementum rhoncus sed sit amet leo. Fusce ac varius
            felis. Cras id odio at orci imperdiet mollis sed eget quam. Sed id
            mauris a quam ultrices finibus. Vestibulum et felis aliquet,
            fermentum eros sed, placerat enim. Curabitur dictum luctus elit sed
            tempus. Nulla aliquet magna ante, quis sollicitudin justo faucibus
            vel. Nullam tempor dui eu odio dignissim, iaculis ornare dui
            maximus. Mauris facilisis ligula in ante gravida, at consectetur
            urna malesuada. Cras dignissim pulvinar consequat. Etiam volutpat,
            dui at viverra maximus, felis ante rhoncus mi, nec scelerisque nisl
            mi non urna.
          </p>
        </section>
        <section className="buttons-container flex justify-evenly align-middle items-center my-6">
          <button className="btn btn-secondary btn-wide">Get In Touch</button>
        </section>
      </div>
    </Layout>
  );
}
