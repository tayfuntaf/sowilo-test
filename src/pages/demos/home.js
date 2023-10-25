import { Fade } from "react-awesome-reveal";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// import images
import image1 from "@/assets/images/other/image-1.jpg";
import worldMap from "@/assets/images/other/world-map.png";

// import data
import { menus, footerMenus, portfolio, testimonials } from "@/common/data";

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
  Carousel,
  CarouselDots,
  Button,
  Badge,
  Testimonial,
  Portfolio,
  Scroller,
} from "@/components";

export default function Demos() {
  const { t } = useTranslation();

  const Info = () => {
    return (
      <Section className="min-h-screen overflow-hidden bg-gradient-to-t from-yellow-100">
        <Row>
          <Col lg={5} className="relative z-10">
            <div className="relative overflow-hidden h-96 md:min-h-full">
              <Overlay
                className=""
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
            </div>
          </Col>
          <Col lg={7}>
            <div>
              <div className="lg:min-h-screen flex align-items-center">
                <div className="px-4 py-24 xl:pl-24">
                  <Fade cascade direction="up" triggerOnce>
                    <Badge
                      custom={true ? 1 : 0}
                      className="text-md lg:mt-14 mb-8"
                      model="model-1"
                      title={t("Hello")}
                    />
                    <Heading className="mb-12">
                      <h1 className="font-bold font-2">
                        {t("I am Freelance Creative UI/UX Designer.")}
                      </h1>
                    </Heading>
                    <Button custom={true ? 1 : 0} size="md" color="primary">
                      {t("Download CV")}
                    </Button>
                  </Fade>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Scroller
          className="d-none lg:block right-10 bottom-11 absolute z-10"
          model="model-1"
        />
      </Section>
    );
  };

  const Portfolios = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-16 lg:pt-32 pb-16 lg:pb-32">
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

  const Testimonials = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="overflow-hidden bg-black text-white pt-16 lg:pt-32 pb-32">
        <Container fluid>
          <div className="text-center mb-12 ">
            <Fade cascade triggerOnce>
              <Badge
                custom={true ? 1 : 0}
                className="mb-8"
                color="white"
                model="model-1"
                title={t("Testimonial")}
              />
              <Heading
                className="max-w-lg mx-auto"
                titleprops={{ className: "font-2 font-bold mb-10 lg:mb-20" }}
                title={t("Special Quotes from my Customers about Me")}
              />
            </Fade>
          </div>
          <div className="relative">
            <Carousel
              loop={true}
              autoplay={true}
              centeredSlides={true}
              spaceBetween={3}
              slidesPerView="auto"
              pagination={{
                el: "#afc-swiper-dots--testimonial",
                clickable: true,
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={`testimonial-carousel-slide-${index}`}>
                  <Testimonial
                    custom={true ? 1 : 0}
                    className="afc-testimonial rounded-2xl p-6 lg:p-12"
                    title={item.title}
                    subtitle={t(item.subtitle)}
                    text={t(item.text)}
                    avatar={item.avatar}
                    titleprops={{ className: "font-bold mt-9 mb-2" }}
                    avatarprops={{
                      width: 75,
                      height: 75,
                      className: "rounded-full mb-9",
                      placeholder: "blur",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
            <CarouselDots
              id="afc-swiper-dots--testimonial"
              className="afc-swiper-dots afc-swiper-dots--classic text-center absolute -bottom-16 pt-10"
            />
          </div>
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <Info />
      <Portfolios data={portfolio} />
      <Testimonials data={testimonials} />
      <Footer
        menus={footerMenus}
        className="h-24 flex bg-black items-center text-sm text-white"
      />
    </>
  );
}
