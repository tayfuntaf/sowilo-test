import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

// data
import { posts, menus, footerMenus } from "@/common/data";

// import components
import {
  Header,
  Footer,
  InfoBox,
  Portfolio,
  Section,
  Badge,
  Overlay,
  Container,
  Row,
  Col,
  Heading,
  Post,
  Breadcrumbs,
  Pagination,
  MetaCategories,
} from "@/components";

// import styles
import styles from "../../../public/assets/scss/components/SinglePost.module.scss";

export default (props) => {
  const prefix = "afc-single-post";
  const router = useRouter();
  const { t } = useTranslation();
  const { id } = router.query;

  const Blog = (props) => {
    const { data = [] } = props;
    const posts = data;

    if (!posts.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-8 lg:pt-16 pb-32">
        <Container>
          <Fade triggerOnce>
            <div className="relative mb-12">
              <Row className="relative align-items-end">
                <Col>
                  <Heading
                    className="max-w-md"
                    titleprops={{ className: "font-1 font-bold mb-4" }}
                    title={t("Bakım Önerileri")}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row size="md">
                {posts.slice(0, 3).map((post, postIndex) => (
                  <Col
                    md={postIndex === 2 ? 6 : 6}
                    lg={4}
                    key={`post-item-${postIndex}`}
                  >
                    <Post
                      {...post}
                      className="mb-12 lg:mb-0"
                      imageprops={{
                        className:
                          "hover:scale-110 transition-transform duration-500 ease-in-out",
                        width: 540,
                        style: { width: "100%" },
                      }}
                      titleprops={{ className: "text-2xl font-bold mb-5" }}
                      categoryprops={{
                        className:
                          "flex items-center list-none text-xs text-uppercase tracking-widest mt-6 mb-4",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Fade>
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50  bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      {posts.map((post, index) => {
        if (post.slug !== id) {
          return;
        }

        return (
          <Section
            key={index}
            className={classNames(
              styles[prefix],
              "pt-48 pb-8 lg:pb-16 bg-gradient-to-r via-transparent from-pink-50"
            )}
          >
            <Container>
              <Row className="justify-center">
                <Col xl={5}>
                  <Fade triggerOnce>
                    {post.image && (
                      <Image
                        src={post.image}
                        width="392"
                        className="mx-auto mb-16 shadow-2xl rounded-lg"
                        alt={post.title || ""}
                      />
                    )}
                  </Fade>
                </Col>
                <Col xl={7}>
                  {post.categories && (
                    <MetaCategories
                      data={post.categories}
                      className="flex text-md mb-8"
                    />
                  )}
                  {post.title && (
                    <Heading
                      titleprops={{ className: "font-1 font-bold mb-8" }}
                      title={t(post.title)}
                    />
                  )}
                  <div className="flex items-center text-md mb-16">
                    {/* <div>{post.avatar && <Image className="rounded-full mr-4" width="45" height="45" src={post.avatar} alt="Author avatar" />}</div> */}
                    <div>
                      {post.author && (
                        <span className="block">{post.author}</span>
                      )}
                      {post.date && <span>{post.date}</span>}
                    </div>
                  </div>
                  {post.body && (
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                  )}
                </Col>
              </Row>
            </Container>
          </Section>
        );
      })}
      <Blog data={posts} />
      <Footer
        menus={footerMenus}
        className="h-24 flex items-center text-sm bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
      />
    </>
  );
};
