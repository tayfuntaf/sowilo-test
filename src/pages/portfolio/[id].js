import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

// data
import { portfolio, menus, footerMenus, testimonials } from "@/common/data";

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
  Carousel,
  CarouselDots,
  Row,
  Col,
  Heading,
  Post,
  Breadcrumbs,
  Pagination,
  MetaCategories,
  Testimonial,
} from "@/components";

// import styles
import styles from "../../../public/assets/scss/components/SinglePortfolio.module.scss"
import logoo from "../../../public/assets/images/avatars/sowilo.png";

// images
import worldMap from "../../../public/assets/images/other/world-map.png";

export default (props) => {
  const prefix = "afc-single-portfolio";
  const router = useRouter();
  const { t } = useTranslation();
  const { id } = router.query;

  const Testimonials = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="pt-8 lg:pt-16 pb-32">
        <Container fluid={true}>
          <div className="text-center">
            {/* <Badge
              custom={true ? 1 : 0}
              className="mb-8"
              model="model-1"
              title={t("Testimonial")}
            /> */}
            <Heading
              className="max-w-lg mb-10 lg:mb-20 mx-auto "
              titleprops={{ className: "font-1 font-bold mb-4 text-3xl" }}
              title={t("Müşterimizden Bizimle İlgili Özel Sözler")}
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
                    className="afc-testimonial rounded-2xl p-6 lg:p-12 "
                    title={item.title}
                    text={t(item.text)}
                    titleprops={{ className: "font-bold mt-9 mb-4" }}
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

  const Portfolios = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-8 lg:pt-16 pb-32">
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
                  className="mb-4"
                  model="model-1"
                  title={t("Hight Quality")}
                />
                <Fade cascade triggerOnce>
                  <Heading
                    className="max-w-lg mb-16 lg:mb-0"
                    titleprops={{ className: "font-2 font-bold mb-4" }}
                    colorwordposition={4}
                    title={t("Completed 1200+ Projects Successfully")}
                    text={t(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    )}
                  />
                </Fade>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col>
                    <Fade cascade delay={25} direction="up" triggerOnce>
                      <InfoBox
                        custom={true ? 1 : 0}
                        className="text-center text-sm lg:text-lg"
                        color="primary"
                        type="a"
                        icon=""
                        title={"12k"}
                        text={t("Happy Customer")}
                        titleprops={{ className: "text-3xl font-bold mb-2" }}
                        textprops={{ className: "text-gray-600" }}
                      />
                    </Fade>
                  </Col>
                  <Col>
                    <Fade cascade delay={50} direction="up" triggerOnce>
                      <InfoBox
                        custom={true ? 1 : 0}
                        className="text-center text-sm lg:text-lg"
                        color="primary"
                        type="a"
                        icon=""
                        title={"600+"}
                        text={t("Finished Project")}
                        titleprops={{ className: "text-3xl font-bold mb-2" }}
                        textprops={{ className: "text-gray-600" }}
                      />
                    </Fade>
                  </Col>
                  <Col>
                    <Fade cascade delay={75} direction="up" triggerOnce>
                      <InfoBox
                        custom={true ? 1 : 0}
                        className="text-center text-sm lg:text-lg"
                        color="primary"
                        type="a"
                        icon=""
                        title={"99%"}
                        text={t("Client Satification")}
                        titleprops={{ className: "text-3xl font-bold mb-2" }}
                        textprops={{ className: "text-gray-600" }}
                      />
                    </Fade>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row size="md">
              {data.map((item, index) => (
                <Col sm={6} md={4} lg={3} key={`portfolio-item-${index}`}>
                  <Portfolio
                    {...item}
                    className="group bg-black"
                    custom={true ? 1 : 0}
                    model="model-1"
                    imageprops={{
                      className:
                        "transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-50",
                      width: 444,
                    }}
                    titleprops={{ className: "text-xl font-bold mb-3" }}
                    categoryprops={{
                      className:
                        "flex items-center justify-center list-none text-xs text-uppercase tracking-widest mt-6 mb-4",
                      color: "white",
                    }}
                    contentprops={{
                      className:
                        "top-0 left-0 w-full h-full text-white text-center absolute flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500",
                    }}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-lg font-normal absolute z-50 bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      {portfolio.map((item, index) => {
        if (item.slug !== id) {
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
              <Row className="flex justify-center items-center">
                <Col xl={5}>
                  {item.image && (
                    <Image
                      src={item.image}
                      width="992"
                      className="mx-auto mb-16 shadow-xl rounded-lg"
                      alt={item.title || ""}
                    />
                  )}
                </Col>
                <Col xl={7}>
                  {/* {item.categories && (
                    <MetaCategories
                      data={item.categories}
                      className="flex text-md mb-8"
                    />
                  )} */}
                  {item.title && (
                    <Heading
                      titleprops={{
                        className: "font-1 font-sm  text-4xl",
                      }}
                      title={t(item.title)}
                    />
                  )}
                  <div className="flex items-center text-md mb-12 font-semibold">
                    <div>
                      {item.avatar && (
                        <Image
                          className="rounded-full mr-4"
                          width="45"
                          height="45"
                          src={item.avatar}
                          alt="Author avatar"
                        />
                      )}
                    </div>
                    {/* <div>
                      {item.author && (
                        <span className="block">
                          {t("By")} {item.author}
                        </span>
                      )}
                      {item.date && <span>{item.date}</span>}
                    </div> */}
                  </div>
                  {item.body && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.body }}
                      className="font-1 mb-16"
                    />
                  )}
                </Col>
                <div className="md:w-full xl:flex items-center">
                  <Col xl={7}>
                    {item.subtitle && (
                      <div className="">
                        <Heading
                          titleprops={{
                            className: "font-1 font-sm mb-8 text-3xl",
                          }}
                          title={t(item.subtitle)}
                        />
                        {item.subbody && (
                          <div
                            dangerouslySetInnerHTML={{ __html: item.subbody }}
                            className="font-1"
                          />
                        )}
                      </div>
                    )}
                  </Col>

                  <Col xl={5}>
                    {item.subimage && (
                      <Image
                        src={item.subimage}
                        width="500"
                        className=" mb-16 shadow-2xl rounded-lg ml-4 mt-3 items-center"
                        alt={item.title || ""}
                      />
                    )}
                  </Col>
                </div>
              </Row>
            </Container>
          </Section>
        );
      })}
      <Testimonials data={testimonials} />
      {/* <Portfolios data={portfolio} /> */}
      <Footer
        menus={footerMenus}
        className="h-24 flex items-center text-sm mt-[120px] bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
      />
    </>
  );
};
