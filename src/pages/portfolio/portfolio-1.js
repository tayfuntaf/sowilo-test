import { Fade } from "react-awesome-reveal";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// import images
import worldMap from "../../../public/assets/images/other/world-map.png";

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
  InfoBox,
  Post,
  Scroller,
} from "@/components";

export default () => {
  const { t } = useTranslation();

  const PageTitle = () => {
    return (
      <Section className="pt-48 ">
        <Container>
          <div>
            <Heading
              className="max-w-xl mb-10"
              titleprops={{ className: "font-bold mb-4" }}
            >
              <h1 className="font-1 text-3xl font-bold">
                {t("Sizler İçin Özenle Sunduğumuz Hizmetlerimiz")}
              </h1>
            </Heading>
            {/* <Badge
              custom={true ? 1 : 0}
              model="model-1"
              title={t("My Portfolio")}
            /> */}
          </div>
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
      <Section className="overflow-hidden pb-8 md:pb-16 lg:pb-32 bg-gradient-to-r via-transparent from-pink-50">
        <Container>
          <div>
            <Fade triggerOnce>
              <div className="-mb-16">
                <Row size="lg">
                  <Col sm={12} md={4}>
                    <Row size="lg">
                      {data.slice(0, 2).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group rounded-lg drop-shadow-xl"
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
                      {data.slice(3, 5).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group rounded-lg drop-shadow-xl"
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
                      {data.slice(6, 8).map((item, index) => (
                        <Col sm={12} key={`portfolio-item-${index}`}>
                          <Portfolio
                            {...item}
                            className="group rounded-lg drop-shadow-xl"
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
      <Section className="pt-8 lg:pt-16 pb-32">
        <Container fluid={true}>
          <div className="text-center">
            <Badge
              custom={true ? 1 : 0}
              className="mb-8"
              model="model-1"
              title={t("Testimonial")}
            />
            <Heading
              className="max-w-lg mb-10 lg:mb-20 mx-auto"
              titleprops={{ className: "font-2 font-bold mb-4" }}
              title={t("Special Quotes from Our customer about us")}
            />
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
                  slidesPerView: 2.5,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={`testimonial-carousel-slide-${index}`}>
                  <Testimonial
                    custom={true ? 1 : 0}
                    className="afc-testimonial rounded-2xl p-6 lg:p-12"
                    title={item.title}
                    text={t(item.text)}
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
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50 bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <PageTitle />
      <Portfolios data={portfolio} />
      <Testimonials data={testimonials} />
      <Footer
        menus={footerMenus}
        className="h-24 flex items-center text-sm border-gray-900 bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
      />
    </>
  );
};
