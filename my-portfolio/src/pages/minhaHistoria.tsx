import Footer from "@/components/commons/Footer/Footer.";
import Head from "next/head";
import Video from "@/components/meuVideo/Video";

function minhaHistoria() {
    return (
    <div className="container mx-auto p-4 ">
        <Head>
            <title>Minha história | Hipólito</title>
        </Head>
        <Video />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque quaerat quo laudantium voluptas nisi nam non libero ipsum voluptates alias, maxime vitae cupiditate exercitationem. Fugiat voluptates tempore vero molestias.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam reprehenderit voluptatibus ipsam cupiditate consequuntur tempora et saepe adipisci ut? Iure reiciendis labore ipsam dolor expedita ullam non quibusdam tempore?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi vitae, sint exercitationem dolor aliquid expedita voluptas repellat voluptatum quidem cumque nulla, ipsum dolorum amet provident animi culpa sit omnis corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, perferendis? Sunt quas beatae deleniti at aspernatur reiciendis cumque quod pariatur fugiat necessitatibus cum, nam sapiente, fugit, modi ab vero porro?
        </p>
      <Footer /> 
    </div>
    )
}

export default minhaHistoria;
