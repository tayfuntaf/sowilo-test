import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { ScrollParallax } from "react-just-parallax";

// import images
import image1 from "@/assets/images/other/image-2-1.jpg";
import storyImage1 from "@/assets/images/other/image-2-2.jpg";
import storyImage2 from "@/assets/images/other/image-2-3.jpg";
import worldMap from "@/assets/images/other/world-map.png";

// import data
import { menus, footerMenus, portfolio, services, posts } from "@/common/data";

// import components
import {
  Header,
  Footer,
  Section,
  Overlay,
  Container,
  Row,
  Col,
  Heading,
  Portfolio,
  Button,
  Badge,
  InfoBox,
  Testimonial,
  Post,
  Scroller,
} from "@/components";

export default function Demos() {
  const { t } = useTranslation();

  const Info = () => {
    return (
      <Section className="h-screen overflow-hidden relative">
        <div className="absolute w-full h-full scale-110">
          <ScrollParallax strength="0.06">
            <Overlay
              src={image1}
              srcprops={{
                width: "100%",
                height: "100%",
                src: { image1 },
                alt: "Overlay",
                priority: true,
                className: "absolute w-full h-full object-top object-cover",
              }}
            />
          </ScrollParallax>
        </div>
        <Overlay className="top-0 left-0 absolute w-full h-full bg-stone-900 opacity-20" />
        <div className="relative z-10 bg-gradient-to-r via-transparent from-pink-600">
          <Container>
            <Row className="items-center pt-10">
              <Col lg={7}>
                <div>
                  <div className="min-h-screen flex align-items-center">
                    <div>
                      <Fade cascade direction="up" triggerOnce>
                        <Heading className="mb-10">
                          <h1 className="text-white font-bold font-2 mb-10">
                            {t("We Design and Build Modern Websites")}
                          </h1>
                          <p className="text-white">
                            {t(
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                            )}
                          </p>
                        </Heading>
                        <Button
                          custom={true ? 1 : 0}
                          size="md"
                          color="outline-white"
                        >
                          {t("Get In Touch")}
                        </Button>
                      </Fade>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Scroller
          className="right-10 bottom-16 absolute z-10"
          model="model-1"
          color="white"
        />
      </Section>
    );
  };

  const Services = (props) => {
    const { data = [] } = props;
    const services = data;

    if (!services.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-8 lg:pt-16 pb-8 lg:pb-16">
        <Container>
          <Fade triggerOnce>
            <div>
              <Row size="md">
                {services.slice(0, 3).map((service, serviceIndex) => (
                  <Col md={12} lg={4} key={`services-item-${serviceIndex}`}>
                    <InfoBox
                      custom={true ? 1 : 0}
                      className="pt-20 px-12 pb-12 bg-gradient-to-t from-orange-50"
                      color="primary"
                      icon={service.icon}
                      title={t(service.title)}
                      text={t(service.text)}
                      iconprops={{
                        className:
                          "w-16 h-16 text-white font-bold flex items-center justify-center rounded-full mb-12 bg-primary",
                      }}
                      titleprops={{
                        className: "text-3xl font-2 font-bold mb-4",
                      }}
                      style={{ borderRadius: 18 }}
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

  const Story1 = () => {
    return (
      <Section className="overflow-hidden pt-20 pb-8 lg:pb-16">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="lg:pr-12 mb-10 md:mb-0">
              <div className="relative">
                <ScrollParallax strength="0.03">
                  <Image
                    src={storyImage1}
                    alt="Story"
                    className="rounded-xl xs:w-full sm:w-full"
                  />
                </ScrollParallax>
              </div>
            </Col>
            <Col md={6} className="md:pl-6 lg:pl-12">
              <Fade cascade direction="up" triggerOnce>
                <Badge
                  custom={true ? 1 : 0}
                  className="mb-8"
                  model="model-1"
                  title={t("About Us")}
                />
                <Heading className="max-w-lg mb-12">
                  <h2 className="text-4xl lg:text-6xl font-2 font-bold mb-8">
                    {t("Essential strategic solutions for your business")}
                  </h2>
                  <p className="mb-8">
                    {t(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    )}
                  </p>
                  <Row>
                    <Col>
                      <InfoBox
                        custom={true ? 1 : 0}
                        className="pl-8 border-l rounded-none"
                        color="primary"
                        type="a"
                        icon=""
                        title={"10+"}
                        text={t("Years Experience")}
                        titleprops={{
                          className: "text-3xl text-primary font-bold mb-2",
                        }}
                        textprops={{ className: "text-gray-600" }}
                      />
                    </Col>
                    <Col>
                      <InfoBox
                        custom={true ? 1 : 0}
                        className="pl-8 border-l rounded-none"
                        color="primary"
                        type="a"
                        icon=""
                        title={"144+"}
                        text={t("Happy Customer")}
                        titleprops={{
                          className: "text-3xl text-primary font-bold mb-2",
                        }}
                        textprops={{ className: "text-gray-600" }}
                      />
                    </Col>
                  </Row>
                </Heading>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  };

  const Story2 = () => {
    return (
      <Section className="overflow-hidden pt-8 lg:pt-16 pb-16">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="lg:pl-12 mb-10 md:mb-0 md:order-2">
              <div className="realtive">
                <ScrollParallax strength="-0.03">
                  <Image
                    src={storyImage2}
                    alt="Story"
                    className="rounded-xl xs:w-full sm:w-full"
                  />
                </ScrollParallax>
              </div>
            </Col>
            <Col md={6} className="md:pr-6 lg:pr-12 md:order-1 relative">
              <Fade cascade direction="up" triggerOnce>
                <Badge
                  custom={true ? 1 : 0}
                  className="mb-8"
                  model="model-1"
                  title={t("What We Do")}
                />
                <Heading className="max-w-lg mb-12">
                  <h2 className="text-4xl lg:text-6xl font-2 font-bold mb-8">
                    {t("We focus on creating modern interfaces")}
                  </h2>
                  <p className="mb-8">
                    {t(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    )}
                  </p>
                </Heading>
                <Button custom={true ? 1 : 0} size="md" color="dark">
                  {t("Learn More")}
                </Button>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  };

  const Portfolios = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-16 pb-16">
        <Container>
          <div className="relative mb-12">
            <Overlay
              src={worldMap}
              srcprops={{
                width: "750",
                height: "100%",
                className:
                  "absolute -top-8 left-0 right-0 w-9/12 mx-auto object-top object-cover opacity-10",
              }}
            />
            <Row className="relative align-items-end">
              <Col lg={6}>
                <Badge
                  custom={true ? 1 : 0}
                  className="text-md mb-8"
                  model="model-1"
                  title={t("Portfolio")}
                />
                <Fade cascade triggerOnce>
                  <Heading className="max-w-md mb-10 lg:mb-20 lg:mb-0 lg:pr-8">
                    <h2 className="font-2 font-bold mb-4">
                      {t("I always feel excited to showcase my work to others")}
                    </h2>
                  </Heading>
                </Fade>
              </Col>
            </Row>
          </div>
          <div>
            <Fade triggerOnce>
              <div className="-mb-16">
                <Row size="lg">
                  <Col sm={12} md={4}>
                    <Row size="lg">
                      {data.slice(0, 3).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group"
                            custom={true ? 1 : 0}
                            model="model-2"
                            imageprops={{
                              className:
                                "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 object-fit object-cover",
                              width: 600,
                              height: 600,
                            }}
                            titleprops={{
                              className: "text-3xl font-2 font-bold mb-1",
                            }}
                            categoryprops={{
                              className:
                                "flex items-center list-none text-xs text-uppercase tracking-widest mt-6",
                            }}
                            coverprops={{
                              className:
                                "radius-none bg-black overflow-hidden relative pt-[100%] mb-6",
                            }}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col sm={12} md={4} className="relative lg:-top-20">
                    <Row size="lg">
                      {data.slice(3, 6).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group"
                            custom={true ? 1 : 0}
                            model="model-2"
                            imageprops={{
                              className:
                                "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 object-fit object-cover",
                              width: 600,
                              height: 600,
                            }}
                            titleprops={{
                              className: "text-3xl font-2 font-bold mb-1",
                            }}
                            categoryprops={{
                              className:
                                "flex items-center list-none text-xs text-uppercase tracking-widest mt-6",
                            }}
                            coverprops={{
                              className:
                                "radius-none bg-black overflow-hidden relative pt-[100%] mb-6",
                            }}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col sm={12} md={4}>
                    <Row size="lg" className="relative lg:-top-40">
                      {data.slice(6, 9).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group"
                            custom={true ? 1 : 0}
                            model="model-2"
                            imageprops={{
                              className:
                                "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110 object-fit object-cover",
                              width: 600,
                              height: 600,
                            }}
                            titleprops={{
                              className: "text-3xl font-2 font-bold mb-1",
                            }}
                            categoryprops={{
                              className:
                                "flex items-center list-none text-xs text-uppercase tracking-widest mt-6",
                            }}
                            coverprops={{
                              className:
                                "radius-none bg-black overflow-hidden relative pt-[100%] mb-6",
                            }}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </div>
            </Fade>
          </div>
        </Container>
      </Section>
    );
  };

  const Blog = (props) => {
    const { data = [] } = props;
    const posts = data;

    if (!posts.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-32 pb-16 lg:pb-32">
        <Container>
          <Fade triggerOnce>
            <div className="relative mb-10 lg:mb-20">
              <Row className="relative align-items-end justify-between">
                <Col lg={6}>
                  <Heading className="max-w-md">
                    <h2 className="text-4xl lg:text-6xl font-2 font-bold">
                      {t("Our most Popular Articles")}
                    </h2>
                  </Heading>
                </Col>
                <Col lg={6} className="lg:text-right pt-8 lg:pt-0">
                  <Badge
                    custom={true ? 1 : 0}
                    model="model-1"
                    title={t("Read More")}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row size="md">
                {posts.slice(0, 4).map((post, postIndex) => (
                  <Col md={6} lg={3} key={`post-item-${postIndex}`}>
                    <Post
                      {...post}
                      className="mb-12 lg:mb-0"
                      imageprops={{
                        className:
                          "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out group-hover:opacity-30 group-hover:scale-110 object-fit object-cover",
                        width: 600,
                        height: 600,
                      }}
                      titleprops={{
                        className: "text-3xl font-2 font-bold mb-8",
                      }}
                      categoryprops={{
                        className:
                          "flex items-center list-none text-xs text-uppercase tracking-widest mt-8 mb-6",
                      }}
                      coverprops={{
                        className:
                          "radius-none bg-black overflow-hidden relative pt-[100%]",
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
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50 text-white"
        color="white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <Info />
      <Services data={services} />
      <Story1 />
      <Story2 />
      <Portfolios data={portfolio} />
      <Blog data={posts} />
      <Footer menus={footerMenus} className="h-24 flex items-center text-sm" />
    </>
  );
}
