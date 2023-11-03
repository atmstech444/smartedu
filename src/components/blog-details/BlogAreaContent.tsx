import Link from "next/link";
import React from "react";
import BlogSidebar from "../Blog/BlogSidebar";
import BlogCommentForm from "@/form/blog-comment-form";
import LatestComment from "./LatestComment";
import BlogRecent from "./BlogRecent";
import BlogText from "./BlogText";
import BlogSocial from "./BlogSocial";
import BlogAuthor from "./BlogAuthor";
import BlogQuoteImg from "../../../public/assets/img/blog/quote-1.png";
import Image, { StaticImageData } from "next/image";

interface Blog {
  id: number;
  image: StaticImageData;
}

const BlogAreaContent: React.FC<{ blog: Blog }> = ({ blog }: any) => {
  return (
    <section className="blog__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="blog__wrapper">
              <BlogText />
              <div className="blog__quote grey-bg mb-45 p-relative fix">
                <Image
                  className="quote"
                  src={BlogQuoteImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
                <blockquote>
                  <p>
                    After I started learning design with Quillow, I realized
                    that I had Improved to very advanced levels.
                  </p>
                  <h4>Chris Collins</h4>
                </blockquote>
              </div>
              <div className="blog__text mb-30">
                <p>
                  Horse play {`it's`} all gone to pot codswallop easy peasy mush
                  knees up down the pub jolly good nice one tosser {`it's`} your
                  round lurgy, I vagabond barmy off his nut only a quid so I
                  said is gosh Charles blow off, pardon me chip shop Richard
                  spiffing skive off bleeding get stuffed mate porkies amongst
                  the full monty. Daft burke you
                </p>
              </div>
              <div className="blog__link mb-35">
                <p>
                  The little rotter bum bag a blinding shot gosh spifing butty
                  eatonwha load of rubbish bamboozled.{" "}
                  <Link href="#"> https://educal.com/courses</Link>{" "}
                </p>
              </div>
              <div className="blog__img w-img mb-45">
                <Image
                  src={blog?.image}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="blog__text mb-40">
                <h3>Build a beautiful website with Quillow</h3>
                <p>
                  Some dodgy chav car boot blower starkers bonnet tickety-boo no
                  biggie cheesed off, Oxford bloke fantastic the wireless bevvy
                  cobblers chancer give us a bell, bleeder jolly good hanky
                  panky do one gormless matie boy. Pear shaped my good sir I
                  cobblers at public school quaint tickety-boo crikey bits and
                  bobs, wellies bugger all mate golly gosh brolly matie boy
                  fanny around chimney pot cracking goal my lady, bodge so I
                  said spiffing posh the full monty {`don't`} get shirty with me
                  no biggie.
                </p>
                <p>
                  Brolly grub blimey victoria sponge blag nancy boy {`don't`}{" "}
                  get shirty with me skive off bobby burke in my flat
                  bog-standard, easy peasy golly gosh up the duff show off show
                  off pick your nose and blow off gosh a brilliant that what a
                  load of rubbish.
                </p>
              </div>
              <div className="blog__line"></div>
              <BlogSocial />
              <BlogAuthor />
              <BlogRecent />
              <LatestComment />
              <div className="blog__comment">
                <h3>Write a Review</h3>
                <BlogCommentForm />
              </div>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogAreaContent;
